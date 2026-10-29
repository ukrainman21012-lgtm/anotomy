(() => {
  const accountOpen = document.querySelector("#account-open");
  const accountOpenLabel = document.querySelector("#account-open-label");
  const dialog = document.querySelector("#account-dialog");
  const closeButton = document.querySelector("#account-close");
  const guestPanel = document.querySelector("#account-guest");
  const userPanel = document.querySelector("#account-user");
  const form = document.querySelector("#account-form");
  const nicknameInput = document.querySelector("#account-nickname");
  const passwordInput = document.querySelector("#account-password");
  const submitButton = document.querySelector("#account-submit");
  const continueButton = document.querySelector("#account-continue");
  const status = document.querySelector("#account-status");
  const syncStatus = document.querySelector("#account-sync-status");
  const userNickname = document.querySelector("#account-user-nickname");
  const heroGreeting = document.querySelector("#hero-greeting");
  const signOutButton = document.querySelector("#account-signout");
  const passkeyLoginButton = document.querySelector("#account-passkey-login");
  const passkeyRegisterButton = document.querySelector("#account-passkey-register");
  const passkeyNote = document.querySelector("#account-passkey-note");
  const passkeyUserNote = document.querySelector("#account-passkey-user-note");
  const modeButtons = [...document.querySelectorAll("[data-auth-mode]")];
  if (!accountOpen || !accountOpenLabel || !dialog || !closeButton || !guestPanel || !userPanel || !form ||
      !nicknameInput || !passwordInput || !submitButton || !continueButton || !status || !syncStatus ||
      !heroGreeting || !userNickname || !signOutButton || !passkeyLoginButton ||
      !passkeyRegisterButton || !passkeyNote || !passkeyUserNote || modeButtons.length !== 2) {
    throw new Error("Не удалось инициализировать аккаунт Flora.");
  }

  const syncedKeys = new Set([
    "flora-favorites",
    "flora-collection",
    "flora-plant-notes",
    "flora-watering-dates",
    "flora-season-observations",
    "flora-theme",
    "flora-palette",
    "flora-nickname",
  ]);
  const isSyncedKey = (key) => syncedKeys.has(key) ||
    key.startsWith("flora-ai-chat-history:") ||
    key.startsWith("flora-ai-chat-draft:") ||
    key.startsWith("flora-ai-chat-scroll:");
  const guestSessionKey = "flora-guest-session";
  const passkeyEndpoint = new URL("/api/passkeys", window.FLORA_AI_ENDPOINT).href;
  const passkeySupported = Boolean(
    window.isSecureContext &&
    window.location.origin !== "null" &&
    window.PublicKeyCredential &&
    navigator.credentials?.create &&
    navigator.credentials?.get
  );
  const config = window.FLORA_SUPABASE_CONFIG;
  const configured = typeof config?.url === "string" && /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(config.url) &&
    typeof config.publishableKey === "string" && config.publishableKey.trim().length > 20;
  let supabaseClient = null;
  let currentUser = null;
  let mode = "signup";
  let syncTimer = 0;
  let syncQueue = Promise.resolve();
  let hydration = null;

  const setStatus = (message, isError = false) => {
    status.textContent = message;
    status.dataset.state = isError ? "error" : "info";
  };
  const setSyncStatus = (message, isError = false) => {
    syncStatus.textContent = message;
    syncStatus.dataset.state = isError ? "error" : "info";
  };
  const base64UrlToBytes = (value) => {
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64.padEnd(Math.ceil(base64.length / 4) * 4, "="));
    return Uint8Array.from(binary, (character) => character.charCodeAt(0));
  };
  const bytesToBase64Url = (value) => {
    let binary = "";
    new Uint8Array(value).forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  };
  const credentialToJSON = (credential) => {
    const response = {
      clientDataJSON: bytesToBase64Url(credential.response.clientDataJSON),
    };
    if (credential.response.attestationObject) {
      response.attestationObject = bytesToBase64Url(credential.response.attestationObject);
      response.transports = credential.response.getTransports?.() || [];
    } else {
      response.authenticatorData = bytesToBase64Url(credential.response.authenticatorData);
      response.signature = bytesToBase64Url(credential.response.signature);
      response.userHandle = credential.response.userHandle
        ? bytesToBase64Url(credential.response.userHandle)
        : null;
    }
    return {
      id: credential.id,
      rawId: bytesToBase64Url(credential.rawId),
      type: credential.type,
      authenticatorAttachment: credential.authenticatorAttachment,
      response,
      clientExtensionResults: credential.getClientExtensionResults(),
    };
  };
  const requestPasskeyAPI = async (path, body, authenticated = false) => {
    const headers = { "Content-Type": "application/json" };
    if (authenticated) {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error) throw error;
      if (!data.session?.access_token) throw new Error("Войдите в аккаунт Flora и повторите попытку.");
      headers.Authorization = `Bearer ${data.session.access_token}`;
    }
    const response = await fetch(`${passkeyEndpoint}/${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body || {}),
      signal: AbortSignal.timeout(20000),
    });
    let result;
    try {
      result = await response.json();
    } catch (error) {
      throw new Error("Сервер входа по passkey вернул некорректный ответ.");
    }
    if (!response.ok) throw new Error(result?.error || "Не удалось выполнить операцию passkey.");
    return result;
  };
  const browserCreationOptions = (options) => ({
    ...options,
    challenge: base64UrlToBytes(options.challenge),
    user: { ...options.user, id: base64UrlToBytes(options.user.id) },
    excludeCredentials: (options.excludeCredentials || []).map((credential) => ({
      ...credential,
      id: base64UrlToBytes(credential.id),
    })),
  });
  const browserRequestOptions = (options) => ({
    ...options,
    challenge: base64UrlToBytes(options.challenge),
    ...(options.allowCredentials?.length
      ? { allowCredentials: options.allowCredentials.map((credential) => ({
        ...credential,
        id: base64UrlToBytes(credential.id),
      })) }
      : {}),
  });
  const describePasskeyError = (error) => {
    if (error?.name === "NotAllowedError") return "Вход отменён или устройство не нашло passkey для этого сайта.";
    if (error?.name === "InvalidStateError") return "Этот passkey уже добавлен в аккаунт.";
    if (error?.name === "SecurityError") return "Для входа по passkey откройте сайт через HTTPS.";
    return error?.message || "Не удалось выполнить операцию passkey.";
  };
  const normalizeNickname = (value) => value.normalize("NFKC").trim();
  const nicknameToEmail = async (nickname) => {
    const identityBytes = new TextEncoder().encode(normalizeNickname(nickname).toLocaleLowerCase("ru-RU"));
    const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", identityBytes));
    const identity = [...digest.slice(0, 16)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return `flora-${identity}@login.flora-anotomy.invalid`;
  };

  const updateAccountView = () => {
    const authenticated = Boolean(currentUser);
    const nickname = currentUser?.user_metadata?.nickname || localStorage.getItem("flora-nickname") || "Садовод";
    guestPanel.hidden = authenticated;
    userPanel.hidden = !authenticated;
    accountOpen.setAttribute("aria-label", authenticated
      ? `Аккаунт Flora · ${currentUser.user_metadata?.nickname || "Профиль"}`
      : "Создать аккаунт или войти");
    accountOpen.title = authenticated
      ? `Аккаунт · ${currentUser.user_metadata?.nickname || "Профиль"}`
      : "Создать аккаунт или войти";
    accountOpenLabel.textContent = authenticated ? "Мой аккаунт" : "Создать аккаунт";
    if (authenticated) {
      userNickname.textContent = nickname;
      heroGreeting.textContent = `Рады видеть, ${nickname}!`;
    } else {
      heroGreeting.textContent = "Интерактивный ботанический атлас";
    }
    passkeyLoginButton.disabled = !passkeySupported || !supabaseClient;
    passkeyRegisterButton.disabled = !passkeySupported || !supabaseClient;
    passkeyNote.hidden = passkeySupported;
    passkeyUserNote.hidden = passkeySupported;
  };

  const setMode = (nextMode) => {
    mode = nextMode;
    modeButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.authMode === mode));
    });
    submitButton.textContent = mode === "signup" ? "Создать аккаунт" : "Войти";
    passwordInput.autocomplete = mode === "signup" ? "new-password" : "current-password";
    setStatus(configured ? "" : "Чтобы включить аккаунты, сначала создайте проект Supabase и добавьте его URL и публичный ключ в supabase-config.js.");
  };

  const readLocalData = () => {
    const data = {};
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key && isSyncedKey(key)) {
        const value = localStorage.getItem(key);
        if (value !== null) data[key] = value;
      }
    }
    return data;
  };
  const getLocalSyncKeys = () => {
    const keys = [];
    for (let index = 0; index < localStorage.length; index += 1) {
      const key = localStorage.key(index);
      if (key && isSyncedKey(key)) keys.push(key);
    }
    return keys;
  };
  const applyLocalData = (data) => {
    let changed = false;
    const keys = new Set([...getLocalSyncKeys(), ...Object.keys(data)]);
    keys.forEach((key) => {
      if (!isSyncedKey(key)) return;
      const value = typeof data[key] === "string" ? data[key] : null;
      if (localStorage.getItem(key) === value) return;
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
      changed = true;
    });
    return changed;
  };

  const parseStored = (value, fallback) => {
    if (typeof value !== "string") return fallback;
    try {
      return JSON.parse(value);
    } catch (error) {
      console.warn("Не удалось объединить повреждённые локальные данные с аккаунтом Flora.", error);
      return fallback;
    }
  };

  const mergeDataValue = (key, cloudValue, localValue) => {
    if (cloudValue === undefined) return localValue;
    if (localValue === undefined) return cloudValue;
    if (key === "flora-theme" || key === "flora-palette" || key === "flora-nickname") return cloudValue;

    const cloud = parseStored(cloudValue, null);
    const local = parseStored(localValue, null);
    if (key === "flora-favorites" || key === "flora-collection") {
      if (!Array.isArray(cloud) || !Array.isArray(local)) return localValue;
      return JSON.stringify([...new Set([...cloud, ...local].filter((id) => typeof id === "string"))]);
    }
    if (key === "flora-ai-chat-history" || key.startsWith("flora-ai-chat-history:")) {
      if (!Array.isArray(cloud) || !Array.isArray(local)) return localValue;
      const messages = [...cloud, ...local].filter((message) =>
        message && ["assistant", "user"].includes(message.role) && typeof message.content === "string"
      );
      let overlap = Math.min(cloud.length, local.length);
      while (overlap > 0) {
        const cloudTail = cloud.slice(-overlap);
        const localHead = local.slice(0, overlap);
        if (cloudTail.every((message, index) =>
          message?.role === localHead[index]?.role && message?.content === localHead[index]?.content
        )) break;
        overlap -= 1;
      }
      return JSON.stringify([...cloud, ...local.slice(overlap)].slice(-12));
    }
    if (!cloud || typeof cloud !== "object" || Array.isArray(cloud) ||
        !local || typeof local !== "object" || Array.isArray(local)) return localValue;

    if (key === "flora-season-observations") {
      const observations = { ...cloud };
      Object.entries(local).forEach(([plantId, periods]) => {
        if (Array.isArray(periods)) {
          observations[plantId] = [...new Set([
            ...(Array.isArray(observations[plantId]) ? observations[plantId] : []),
            ...periods,
          ])];
        }
      });
      return JSON.stringify(observations);
    }
    if (key === "flora-watering-dates") {
      const dates = { ...cloud };
      Object.entries(local).forEach(([plantId, date]) => {
        if (typeof date === "string" && (!dates[plantId] || date > dates[plantId])) dates[plantId] = date;
      });
      return JSON.stringify(dates);
    }
    return JSON.stringify({ ...cloud, ...local });
  };

  const saveCloudData = (userId, data) => {
    syncQueue = syncQueue.catch(() => undefined).then(async () => {
      await window.floraWithRetry(() => supabaseClient
        .from("user_data")
        .upsert({ user_id: userId, data, updated_at: new Date().toISOString() }, { onConflict: "user_id" }), {
        label: "Данные аккаунта",
      });
    });
    return syncQueue;
  };

  const syncCurrentData = (user) => saveCloudData(user.id, readLocalData());

  const hydrateAccount = async (user) => {
    if (hydration?.userId === user.id) return hydration.promise;
    const promise = (async () => {
      setSyncStatus("Синхронизируем ваши данные…");
      const { data: row } = await window.floraWithRetry(() => supabaseClient
        .from("user_data")
        .select("data")
        .eq("user_id", user.id)
        .maybeSingle(), { label: "Данные аккаунта" });

      const previousOwner = localStorage.getItem("flora-data-owner");
      const canImportLocalData = !previousOwner || previousOwner === user.id;
      const localData = canImportLocalData ? readLocalData() : {};
      if (!row) {
        const accountData = { ...localData };
        const accountNickname = user.user_metadata?.nickname;
        if (typeof accountNickname === "string" && accountNickname) accountData["flora-nickname"] = accountNickname;
        await saveCloudData(user.id, accountData);
        const localChanged = applyLocalData(accountData);
        localStorage.setItem("flora-data-owner", user.id);
        if (localChanged) window.location.reload();
        setSyncStatus("Аккаунт готов. Данные этого устройства сохранены.");
        return;
      }
      if (!row.data || typeof row.data !== "object" || Array.isArray(row.data)) {
        throw new TypeError("В облаке найден некорректный формат данных аккаунта.");
      }

      const merged = {};
      const allKeys = new Set([...Object.keys(row.data), ...Object.keys(localData)]);
      allKeys.forEach((key) => {
        if (isSyncedKey(key)) merged[key] = mergeDataValue(key, row.data[key], localData[key]);
      });
      const accountNickname = user.user_metadata?.nickname;
      if (typeof accountNickname === "string" && accountNickname) merged["flora-nickname"] = accountNickname;

      const cloudChanged = JSON.stringify(merged) !== JSON.stringify(row.data);
      if (cloudChanged) await saveCloudData(user.id, merged);
      const localChanged = applyLocalData(merged);
      localStorage.setItem("flora-data-owner", user.id);
      if (localChanged) {
        setSyncStatus("Данные объединены. Обновляем страницу…");
        window.location.reload();
        return;
      }
      setSyncStatus("Ваши данные синхронизированы.");
    })();
    hydration = { userId: user.id, promise };
    try {
      await promise;
    } finally {
      if (hydration?.userId === user.id) hydration = null;
    }
  };

  const initializeSupabase = async () => {
    if (!configured) {
      setStatus("Сначала подключите проект Supabase: добавьте Project URL и публичный ключ в supabase-config.js.");
      return;
    }
    try {
      const sdkUrl = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      await window.floraWithRetry(() => new Promise((resolve, reject) => {
        const retryScript = document.createElement("script");
        retryScript.src = sdkUrl;
        retryScript.async = true;
        retryScript.addEventListener("load", resolve, { once: true });
        retryScript.addEventListener("error", () => {
          retryScript.remove();
          reject(new TypeError("Не удалось загрузить библиотеку Supabase."));
        }, { once: true });
        document.head.append(retryScript);
      }), { label: "Библиотека аккаунтов Supabase" });
      if (!window.supabase?.createClient) throw new Error("Библиотека Supabase загрузилась некорректно.");
      supabaseClient = window.supabase.createClient(config.url, config.publishableKey);
      const { data } = await window.floraWithRetry(async () => {
        const result = await supabaseClient.auth.getSession();
        if (result.error) throw result.error;
        return result;
      }, { label: "Сессия аккаунта" });
      currentUser = data.session?.user || null;
      if (currentUser) sessionStorage.removeItem(guestSessionKey);
      updateAccountView();
      if (currentUser) void hydrateAccount(currentUser).catch((error) => {
        console.error("Не удалось синхронизировать данные аккаунта Flora.", error);
        setSyncStatus(`Не удалось синхронизировать данные: ${error.message}`, true);
      });
      supabaseClient.auth.onAuthStateChange((event, session) => {
        currentUser = session?.user || null;
        updateAccountView();
        if (event === "SIGNED_IN" && currentUser) {
          const nickname = currentUser.user_metadata?.nickname;
          if (typeof nickname === "string" && nickname) {
            localStorage.setItem("flora-nickname", nickname);
            window.dispatchEvent(new CustomEvent("flora:nickname-change", { detail: { nickname } }));
          }
          window.setTimeout(() => {
            if (currentUser) void hydrateAccount(currentUser).catch((error) => {
              console.error("Не удалось синхронизировать данные аккаунта Flora.", error);
              setSyncStatus(`Не удалось синхронизировать данные: ${error.message}`, true);
            });
          }, 0);
        }
      });
      setStatus("");
      if (!currentUser && sessionStorage.getItem(guestSessionKey) !== "continue") openAccount();
    } catch (error) {
      console.error("Не удалось подключить Supabase.", error);
      setStatus(`${error.message} Проверьте конфигурацию проекта и повторите попытку.`, true);
      if (sessionStorage.getItem(guestSessionKey) !== "continue") openAccount();
    }
  };

  const openAccount = () => {
    if (dialog.open) return;
    updateAccountView();
    dialog.showModal();
    if (!currentUser) nicknameInput.focus();
  };

  accountOpen.addEventListener("click", openAccount);
  closeButton.addEventListener("click", () => dialog.close());
  passkeyLoginButton.addEventListener("click", async () => {
    if (!passkeySupported || !supabaseClient) return;
    passkeyLoginButton.disabled = true;
    setStatus("Подтвердите вход на устройстве…");
    try {
      const { options, challengeId } = await requestPasskeyAPI("login/options");
      const credential = await navigator.credentials.get({ publicKey: browserRequestOptions(options) });
      if (!(credential instanceof PublicKeyCredential)) throw new Error("Устройство не вернуло passkey.");
      const { tokenHash } = await requestPasskeyAPI("login/verify", {
        challengeId,
        response: credentialToJSON(credential),
      });
      const { data, error } = await supabaseClient.auth.verifyOtp({
        token_hash: tokenHash,
        type: "magiclink",
      });
      if (error) throw error;
      if (!data.session || !data.user) throw new Error("Supabase не создал сессию для этого аккаунта.");
      currentUser = data.user;
      sessionStorage.removeItem(guestSessionKey);
      const nickname = currentUser.user_metadata?.nickname;
      if (typeof nickname === "string" && nickname) {
        localStorage.setItem("flora-nickname", nickname);
        window.dispatchEvent(new CustomEvent("flora:nickname-change", { detail: { nickname } }));
      }
      updateAccountView();
      setStatus("Вход выполнен. Синхронизируем ваши данные…");
      await hydrateAccount(currentUser);
    } catch (error) {
      console.error("Не удалось выполнить вход по passkey Flora.", error);
      setStatus(describePasskeyError(error), true);
    } finally {
      passkeyLoginButton.disabled = !passkeySupported;
    }
  });
  passkeyRegisterButton.addEventListener("click", async () => {
    if (!passkeySupported || !supabaseClient || !currentUser) return;
    passkeyRegisterButton.disabled = true;
    setSyncStatus("Настраиваем безопасный вход…");
    try {
      const { options, challengeId } = await requestPasskeyAPI("register/options", {}, true);
      const credential = await navigator.credentials.create({
        publicKey: browserCreationOptions(options),
      });
      if (!(credential instanceof PublicKeyCredential)) throw new Error("Устройство не создало passkey.");
      await requestPasskeyAPI("register/verify", {
        challengeId,
        response: credentialToJSON(credential),
      }, true);
      setSyncStatus("Passkey добавлен. Теперь можно входить без ника и пароля.");
    } catch (error) {
      console.error("Не удалось зарегистрировать passkey Flora.", error);
      setSyncStatus(describePasskeyError(error), true);
    } finally {
      passkeyRegisterButton.disabled = !passkeySupported;
    }
  });
  continueButton.addEventListener("click", () => {
    sessionStorage.setItem(guestSessionKey, "continue");
    dialog.close();
  });
  modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.authMode)));
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!configured || !supabaseClient) {
      setMode(mode);
      return;
    }
    const nickname = normalizeNickname(nicknameInput.value);
    const password = passwordInput.value;
    if (!/^[\p{L}\p{N}_.-]{3,24}$/u.test(nickname)) {
      setStatus("Используйте 3–24 буквы, цифры, точку, дефис или подчёркивание.", true);
      return;
    }
    if (password.length < 8) {
      setStatus("Пароль должен содержать не менее 8 символов.", true);
      return;
    }
    submitButton.disabled = true;
    setStatus(mode === "signup" ? "Создаём аккаунт…" : "Входим в аккаунт…");
    try {
      const email = await nicknameToEmail(nickname);
      const result = await window.floraWithRetry(async () => {
        const authResult = mode === "signup"
          ? await supabaseClient.auth.signUp({
            email,
            password,
            options: { data: { nickname } },
          })
          : await supabaseClient.auth.signInWithPassword({ email, password });
        if (authResult.error) throw authResult.error;
        return authResult;
      }, { label: mode === "signup" ? "Регистрация" : "Вход в аккаунт" });
      if (!result.data.session) {
        setStatus("Supabase ожидает подтверждение email. Отключите Confirm email в Authentication → Providers → Email и попробуйте снова.", true);
        return;
      }
      currentUser = result.data.user;
      sessionStorage.removeItem(guestSessionKey);
      localStorage.setItem("flora-nickname", nickname);
      window.dispatchEvent(new CustomEvent("flora:nickname-change", { detail: { nickname } }));
      updateAccountView();
      setStatus("Аккаунт подключён. Сохраняем ваши данные…");
      setSyncStatus("Синхронизируем данные…");
      await hydrateAccount(currentUser);
    } catch (error) {
      console.error("Не удалось выполнить вход в аккаунт Flora.", error);
      const message = error.message?.includes("Invalid login credentials")
        ? "Ник или пароль не подошёл. Проверьте данные и попробуйте снова."
        : error.message?.includes("user_data")
          ? "Не найдена таблица user_data. Выполните supabase/schema.sql в SQL Editor вашего проекта."
          : `Не удалось выполнить запрос: ${error.message}`;
      setStatus(message, true);
    } finally {
      submitButton.disabled = false;
    }
  });
  signOutButton.addEventListener("click", async () => {
    if (!supabaseClient) return;
    signOutButton.disabled = true;
    setSyncStatus("Выходим из аккаунта…");
    try {
      window.clearTimeout(syncTimer);
      if (currentUser) await syncCurrentData(currentUser);
      const { error } = await supabaseClient.auth.signOut();
      if (error) throw error;
      currentUser = null;
      updateAccountView();
      setStatus("Вы вышли. Данные браузера остались на этом устройстве.");
      setMode("signin");
    } catch (error) {
      console.error("Не удалось выйти из аккаунта Flora.", error);
      setSyncStatus(`Не удалось выйти из аккаунта: ${error.message}`, true);
    } finally {
      signOutButton.disabled = false;
    }
  });
  window.addEventListener("flora:local-data-change", (event) => {
    const key = event.detail?.key;
    if (!currentUser || !isSyncedKey(key)) return;
    setSyncStatus("Сохраняем изменения…");
    window.clearTimeout(syncTimer);
    syncTimer = window.setTimeout(() => {
      const user = currentUser;
      if (!user) return;
      void syncCurrentData(user)
        .then(() => setSyncStatus("Все изменения сохранены."))
        .catch((error) => {
          console.error("Не удалось сохранить данные аккаунта Flora.", error);
          setSyncStatus(`Не удалось сохранить данные: ${error.message}`, true);
        });
    }, 700);
  });

  setMode("signup");
  updateAccountView();
  void initializeSupabase();
})();
