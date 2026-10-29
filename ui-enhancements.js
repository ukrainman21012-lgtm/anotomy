(() => {
  const toastRegion = document.querySelector("#flora-toast-region");
  const soundToggle = document.querySelector("#sound-toggle");
  const soundKey = "flora-sounds-enabled";
  let audioContext = null;
  let toastTimer = 0;
  let lastRageTime = 0;
  const clickHistory = new WeakMap();
  const interactiveSelector = "button, a, [role='button']";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const readSoundSetting = () => {
    try {
      return localStorage.getItem(soundKey) === "true";
    } catch (error) {
      console.warn("Не удалось прочитать настройку звуков Flora.", error);
      return false;
    }
  };
  let soundEnabled = readSoundSetting();

  const updateSoundButton = () => {
    if (!soundToggle) return;
    soundToggle.setAttribute("aria-pressed", String(soundEnabled));
    soundToggle.setAttribute("aria-label", soundEnabled ? "Выключить звуки интерфейса" : "Включить звуки интерфейса");
    soundToggle.title = soundEnabled ? "Звуки интерфейса включены" : "Включить звуки интерфейса";
    soundToggle.innerHTML = soundEnabled
      ? '<svg class="ui-icon" aria-hidden="true"><use href="#icon-volume"></use></svg>'
      : '<svg class="ui-icon" aria-hidden="true"><use href="#icon-volume-off"></use></svg>';
  };

  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      audioContext ||= new AudioContext();
      if (audioContext.state === "suspended") void audioContext.resume();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = audioContext.currentTime;
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(660, start);
      oscillator.frequency.exponentialRampToValueAtTime(440, start + 0.045);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.045, start + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.065);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.07);
    } catch (error) {
      console.warn("Не удалось воспроизвести звук интерфейса.", error);
    }
  };

  soundToggle?.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    try {
      localStorage.setItem(soundKey, String(soundEnabled));
    } catch (error) {
      console.warn("Не удалось сохранить настройку звуков Flora.", error);
    }
    updateSoundButton();
    if (soundEnabled) playClickSound();
  });
  updateSoundButton();

  const showToast = ({ message, type = "info", duration = 4200, actionLabel = "", onAction = null } = {}) => {
    if (!toastRegion || typeof message !== "string" || !message.trim()) return;
    window.clearTimeout(toastTimer);
    const toast = document.createElement("div");
    toast.className = `flora-toast flora-toast-${type}`;
    toast.setAttribute("role", type === "error" ? "alert" : "status");
    const text = document.createElement("p");
    text.textContent = message;
    toast.append(text);
    if (actionLabel && typeof onAction === "function") {
      const action = document.createElement("button");
      action.className = "flora-toast-action";
      action.type = "button";
      action.textContent = actionLabel;
      action.addEventListener("click", () => {
        onAction();
        toast.remove();
      }, { once: true });
      toast.append(action);
    }
    toastRegion.replaceChildren(toast);
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    if (duration > 0) {
      toastTimer = window.setTimeout(() => {
        toast.classList.remove("is-visible");
        window.setTimeout(() => toast.remove(), prefersReducedMotion.matches ? 0 : 220);
      }, duration);
    }
  };
  window.addEventListener("flora:toast", (event) => showToast(event.detail));
  window.addEventListener("offline", () => showToast({
    message: "Связь с садом временно прервана. Проверяю подключение…",
    type: "warning",
    duration: 0,
  }));
  window.addEventListener("online", () => showToast({
    message: "Связь восстановлена.",
    type: "success",
    duration: 2600,
  }));

  window.floraWithRetry = async (operation, { label = "Данные", attempts = 4 } = {}) => {
    let lastError;
    let didRetry = false;
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        if (navigator.onLine === false) throw new TypeError("Нет подключения к интернету.");
        const result = await operation();
        if (result?.error) throw result.error;
        if (didRetry) showToast({
          message: `Связь восстановлена. ${label} загружены.`,
          type: "success",
          duration: 2600,
        });
        return result;
      } catch (error) {
        lastError = error;
        const retryable = error instanceof TypeError || error?.status >= 500 ||
          ["500", "502", "503", "504", "PGRST000"].includes(String(error?.code || ""));
        if (!retryable || attempt === attempts) break;
        didRetry = true;
        showToast({
          message: `Связь с садом временно прервана. Повторяю запрос (${attempt}/${attempts - 1})…`,
          type: "warning",
          duration: 0,
        });
        await new Promise((resolve) => window.setTimeout(resolve, 450 * (2 ** (attempt - 1))));
      }
    }
    if (didRetry) showToast({
      message: `${label} пока недоступны. Проверьте соединение и попробуйте снова.`,
      type: "error",
      duration: 6500,
    });
    throw lastError;
  };

  document.addEventListener("click", (event) => {
    const target = event.target.closest(interactiveSelector);
    if (!target || target.disabled || target === soundToggle) return;
    if (target.matches("[data-go], [data-favorite], [data-modal-favorite], .flora-ai-toggle, .flora-ai-send, .account-cta")) {
      playClickSound();
    }

    const rageTarget = target.closest("[data-go], [data-favorite], [data-details], [data-collection], [data-open], [data-season-toggle]") || target;
    if (rageTarget.matches("button:disabled, [aria-disabled='true']")) return;
    const now = performance.now();
    const times = (clickHistory.get(rageTarget) || []).filter((time) => now - time <= 1500);
    times.push(now);
    clickHistory.set(rageTarget, times);
    if (times.length >= 4 && now - lastRageTime > 20000) {
      lastRageTime = now;
      window.dispatchEvent(new CustomEvent("flora:rage-click", {
        detail: { label: (rageTarget.getAttribute("aria-label") || rageTarget.textContent || "элемент").trim().slice(0, 100) },
      }));
    }
  }, true);
})();
