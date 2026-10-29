(() => {
  const toggle = document.querySelector("#flora-ai-toggle");
  const panel = document.querySelector("#flora-ai-panel");
  const closeButton = document.querySelector("#flora-ai-close");
  const form = document.querySelector("#flora-ai-form");
  const input = document.querySelector("#flora-ai-input");
  const sendButton = document.querySelector("#flora-ai-send");
  const messagesElement = document.querySelector("#flora-ai-messages");
  const suggestions = document.querySelector("#flora-ai-suggestions");
  const presence = document.querySelector("#flora-ai-presence");
  if (!toggle || !panel || !closeButton || !form || !input || !sendButton || !messagesElement || !suggestions || !presence) {
    throw new Error("Не удалось инициализировать чат ботанического помощника.");
  }

  const nicknameStorageKey = "flora-nickname";
  const apiBase = String(window.FLORA_AI_ENDPOINT || "").replace(/\/+$/, "");
  const apiUrl = (path) => `${apiBase}/api/${path}`;
  const historyLimit = 12;
  const messageLimit = 1200;
  const conversation = [];
  const defaultSuggestions = [...suggestions.querySelectorAll(".flora-ai-suggestion")].map((button) => button.textContent);
  let busy = false;
  let activeNickname = readNickname();
  let activeProfileKey = normalizeNickname(activeNickname);
  let activeRequestController = null;
  let activeProvider = null;
  let activeScreenContext = null;
  let draftSaveTimer = 0;
  let scrollSaveTimer = 0;
  let screenContextHint = null;

  function normalizeNickname(nickname) {
    return nickname.normalize("NFKC").trim().toLocaleLowerCase("ru-RU") || "гость";
  }

  function readNickname(value = null) {
    if (value !== null) return value.trim() || "Гость";
    try {
      return localStorage.getItem(nicknameStorageKey)?.trim() || "Гость";
    } catch (error) {
      console.warn("Не удалось прочитать ник для истории чата.", error);
      return "Гость";
    }
  }

  const getHistoryKey = () => `flora-ai-chat-history:${encodeURIComponent(activeProfileKey)}`;
  const getDraftKey = () => `flora-ai-chat-draft:${encodeURIComponent(activeProfileKey)}`;
  const getScrollKey = () => `flora-ai-chat-scroll:${encodeURIComponent(activeProfileKey)}`;

  const saveSyncedValue = (key, value) => {
    try {
      localStorage.setItem(key, value);
      window.dispatchEvent(new CustomEvent("flora:local-data-change", { detail: { key, value } }));
    } catch (error) {
      console.warn("Не удалось сохранить состояние чата Flora.", error);
    }
  };

  const saveDraft = () => saveSyncedValue(getDraftKey(), input.value);
  const saveScrollPosition = () => saveSyncedValue(getScrollKey(), String(messagesElement.scrollTop));

  const setSuggestions = (items) => {
    suggestions.replaceChildren(...items.map((text) => {
      const button = document.createElement("button");
      button.className = "flora-ai-suggestion";
      button.type = "button";
      button.textContent = text;
      return button;
    }));
    suggestions.hidden = items.length === 0;
  };

  const refreshFollowUpSuggestions = () => {
    if (conversation.length < 2) {
      setSuggestions(defaultSuggestions);
      return;
    }
    const lastUserMessage = [...conversation].reverse().find((message) => message.role === "user")?.content || "";
    const context = typeof window.floraGetPlantContext === "function"
      ? window.floraGetPlantContext(lastUserMessage, activeScreenContext)
      : [];
    const plant = activeScreenContext?.name || context[0]?.name;
    const followUps = /полив|поливать|перелил|перелив|вода/i.test(lastUserMessage)
      ? ["А если его перелили?", "Как понять, что ему нужна вода?", "Какую почву выбрать?"]
      : [
        plant ? `Как поливать растение «${plant}»?` : "Как поливать растение?",
        "Какая почва ему подойдёт?",
        "Куда его лучше поставить?",
      ];
    setSuggestions(followUps);
  };

  const showScreenContext = (context) => {
    if (!context?.name || typeof context.name !== "string") return;
    activeScreenContext = {
      name: context.name.slice(0, 120),
      latin: typeof context.latin === "string" ? context.latin.slice(0, 120) : "",
      category: typeof context.category === "string" ? context.category.slice(0, 80) : "",
      description: typeof context.description === "string" ? context.description.slice(0, 500) : "",
      care: context.care && typeof context.care === "object" ? context.care : {},
    };
    const hint = document.createElement("div");
    hint.className = "flora-ai-context-hint";
    hint.textContent = `Вижу, ты смотришь карточку растения «${activeScreenContext.name}» 🌿. Могу рассказать об уходе или помочь разобраться с листьями.`;
    screenContextHint?.remove();
    messagesElement.append(hint);
    screenContextHint = hint;

    const previousContextPlant = input.dataset.contextPlant || "";
    if (!input.value.trim() || previousContextPlant) {
      input.value = `Расскажи о растении «${activeScreenContext.name}»: как часто его поливать и на что обратить внимание?`;
      input.dataset.contextPlant = activeScreenContext.name;
      input.dataset.contextDraft = input.value;
      input.style.height = "auto";
      input.style.height = `${Math.min(input.scrollHeight, 105)}px`;
      saveDraft();
    }
    refreshFollowUpSuggestions();
  };

  const inferCatalogIntent = (userText) => {
    const text = userText.normalize("NFKC").toLocaleLowerCase("ru-RU").replace(/ё/g, "е");
    if (!/(покажи|найди|подбери|посоветуй|хочу|ищу|какие|выбери|предложи|переключи|отфильтруй|фильтр)/u.test(text)) return null;
    const groups = [
      { group: "Кактусы", pattern: /кактус/u },
      { group: "Суккуленты", pattern: /суккулент|алоэ|эхевер|каланхоэ/u },
      { group: "Папоротники", pattern: /папоротник/u },
      { group: "Хвойные", pattern: /хвойн|ель|сосну|сосна|туя/u },
      { group: "Деревья и кустарники", pattern: /дерев|кустарник/u },
      { group: "Цветы", pattern: /цвет/u },
    ];
    return groups.find(({ pattern }) => pattern.test(text))?.group || null;
  };
  const isPlantCardRequest = (userText) => {
    const text = userText.normalize("NFKC").toLocaleLowerCase("ru-RU").replace(/ё/g, "е");
    return /(?:покаж|открой|найд|вывед|отобраз).{0,80}(?:карточк|профил|растени|его|ее|этого|этой|этот|эту)|(?:карточк|профил).{0,60}(?:открой|покаж|найд)/u.test(text);
  };
  const findPlantInConversation = (userText, previousMessages) => {
    if (typeof window.floraFindPlant !== "function") return null;
    const directMatch = window.floraFindPlant(userText);
    if (directMatch) return directMatch;
    const refersToPreviousPlant = /(?:его|ее|этого|этой|этот|эту|это|такой|такая|такое|он|она|него|нее|карточк|растени|полив|уход|лист|цветет)/u
      .test(userText.normalize("NFKC").toLocaleLowerCase("ru-RU").replace(/ё/g, "е"));
    if (!refersToPreviousPlant) return null;
    if (activeScreenContext) {
      const screenMatch = window.floraFindPlant(activeScreenContext.latin || activeScreenContext.name);
      if (screenMatch) return screenMatch;
    }
    for (const message of [...previousMessages].reverse()) {
      if (message.role !== "assistant" && message.role !== "user") continue;
      const contextMatch = window.floraFindPlant(message.content);
      if (contextMatch) return contextMatch;
    }
    return null;
  };
  const isPlantSearchRequest = (userText) => {
    const text = userText.normalize("NFKC").toLocaleLowerCase("ru-RU").replace(/ё/g, "е");
    return /(?:найд|поищ|ищу|поиск)/u.test(text) && !/(?:карточк|профил|страниц)/u.test(text);
  };

  const setPresence = (state, text) => {
    presence.dataset.state = state;
    presence.lastChild.textContent = ` ${text}`;
  };

  const cleanAssistantText = (text) => text
    .replace(/^\s*user\s+safety\s*:\s*safe\s*\.?\s*$/gim, "")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/\*\*(.*?)\*\*|__(.*?)__/gs, "$1$2")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)|(?<!_)_([^_\n]+)_(?!_)/g, "$1$2")
    .trim();

  const isGoogleSearchUrl = (value) => {
    if (typeof value !== "string") return false;
    try {
      const url = new URL(value);
      return url.protocol === "https:" && url.hostname === "www.google.com" &&
        url.pathname === "/search" && Boolean(url.searchParams.get("q"));
    } catch {
      return false;
    }
  };

  const cleanSources = (value) => {
    if (!Array.isArray(value)) return [];
    return value.slice(0, 3).flatMap((source) => {
      if (!source || typeof source.title !== "string" || typeof source.url !== "string") return [];
      try {
        const url = new URL(source.url);
        if (url.protocol !== "https:" || url.username || url.password) return [];
        return [{ title: source.title.trim().slice(0, 160), url: url.href }];
      } catch {
        return [];
      }
    }).filter((source) => source.title);
  };

  const separateLegacySources = (text) => {
    const marker = "\n\nИсточники:\n";
    const markerIndex = text.lastIndexOf(marker);
    if (markerIndex < 0) return { text, sources: [] };
    const sources = text.slice(markerIndex + marker.length).split(/\r?\n/).flatMap((line) => {
      const separator = line.lastIndexOf(": https://");
      if (separator < 1) return [];
      return [{ title: line.slice(0, separator), url: line.slice(separator + 2).trim() }];
    });
    const clean = cleanSources(sources);
    return clean.length ? { text: text.slice(0, markerIndex), sources: clean } : { text, sources: [] };
  };

  const actionRoutes = Object.freeze({
    home: "home",
    catalog: "catalog",
    collection: "collection",
    random: "luck",
    game: "botanist",
    picker: "picker",
    season: "season",
    guide: "guide",
  });
  const siteSections = [
    { page: "catalog", name: "Каталог растений", terms: /каталог|атлас/u, description: "В атласе можно искать растения по русскому или латинскому названию, фильтровать по группе, освещению и поливу, а также открывать подробные карточки." },
    { page: "collection", name: "Моя коллекция", terms: /коллекци|гербари/u, description: "В коллекции собраны растения, которые пользователь сохранил сердечком. В карточке можно вести заметки, а для сохранённых растений отмечать полив." },
    { page: "season", name: "Сезонный трекер", terms: /сезон|трекер|наблюдени|цветени/u, description: "Сезонный трекер помогает отмечать собственные наблюдения за цветением растений по месяцам и годам." },
    { page: "botanist", name: "Игра «Угадай растение»", terms: /угадай|викторин|игр/u, description: "В игре «Угадай растение» нужно определить растение по фотографии и выбрать правильный вариант." },
    { page: "picker", name: "Подбор по настроению", terms: /подбор|подобрат|настроени|рекомендац/u, description: "В подборе можно указать настроение, группу и семейство, чтобы получить подходящее растение из атласа." },
    { page: "luck", name: "Случайное растение", terms: /случайн/u, description: "Раздел случайного растения знакомит со случайным видом из каталога и позволяет выбрать другой." },
    { page: "guide", name: "О проекте и инструкция", terms: /о проекте|инструкци|помощь|как пользоваться/u, description: "В разделе «О проекте» рассказано о Flora-Anotomy, возможностях сайта, помощнике Flora и работе с каталогом." },
    { page: "home", name: "Главная", terms: /главн/u, description: "На главной странице находятся краткое описание Flora-Anotomy, быстрый переход в каталог и карточка Flora." },
  ];
  const siteFeatures = [
    "Каталог из 1111 растений с поиском, фильтрами и подробными карточками.",
    "Личная коллекция: сохраняйте растения, делайте заметки и отмечайте полив.",
    "Сезонный трекер для собственных наблюдений за цветением.",
    "Подбор растения по настроению и игра-викторина «Угадай растение».",
    "Flora помогает с вопросами об уходе и может открыть нужный раздел или карточку растения.",
    "Сайтом можно пользоваться без аккаунта; аккаунт Supabase позволяет синхронизировать личные данные.",
  ];
  const normalizeUserText = (value) => value.normalize("NFKC").toLocaleLowerCase("ru-RU").replace(/ё/g, "е");
  const detectSection = (text) => siteSections.find((section) => section.terms.test(text)) || null;
  const isNavigationRequest = (text) =>
    /(?:открой|перейди|покажи|зайди|переключи|перенеси|посмотр|увидеть|попасть|мне нужен|мне нужна|хочу открыть|давай в)/u.test(text);
  const getLocalSiteAnswer = (text) => {
    if (/(?:кто\s+(?:создал|автор|создател)|создател|автор(?:ство)?\s+(?:сайт|проекта)|кто\s+стоит\s+за\s+(?:сайт|проект))/u.test(text)) {
      return {
        reply: "Flora-Anotomy создал Кузьменко Матвей.",
      };
    }
    const section = detectSection(text);
    if (section && isNavigationRequest(text)) {
      return {
        reply: `Открываю раздел «${section.name}».`,
        action: section.page,
        navigate: true,
      };
    }
    if (section && /(?:что такое|что за|для чего|зачем|расскаж|объясн|как работает|что можно)/u.test(text)) {
      return {
        reply: section.description,
        actions: [[section.page, `Открыть: ${section.name}`]],
      };
    }
    if (/(?:что умеет сайт|возможност|разделы сайта|какие разделы|что есть на сайте|расскажи о сайте|про сайт|о сайте|как пользоваться|можно без аккаунта|зачем аккаунт)/u.test(text)) {
      const actions = [
        ["catalog", "Открыть каталог"],
        ["collection", "Моя коллекция"],
        ["season", "Сезонный трекер"],
        ["guide", "Инструкция"],
      ];
      return {
        reply: `Flora-Anotomy — интерактивный ботанический атлас. На сайте доступны:\n${siteFeatures.map((feature) => `• ${feature}`).join("\n")}`,
        actions,
      };
    }
    return null;
  };

  const parseActionLinks = (text) => {
    const actions = [];
    const visibleText = text.replace(/\[action:([a-z]+)\|([^\]\r\n]{1,80})\]/giu, (tag, id, label) => {
      const actionId = id.toLocaleLowerCase("en-US");
      const actionLabel = label.trim();
      if (!Object.hasOwn(actionRoutes, actionId) || !actionLabel) return tag;
      actions.push({ id: actionId, label: actionLabel });
      return "";
    }).replace(/[ \t]+\n/gu, "\n").replace(/[ \t]{2,}/gu, " ").trim();
    return { text: visibleText, actions };
  };

  const scrollMessagesToBottom = () => {
    messagesElement.scrollTop = messagesElement.scrollHeight;
  };

  const typeAssistantText = async (target, text, signal, speed = 30) => {
    if (!target || !text || signal?.aborted) return;
    target.textContent = "";
    const textNode = document.createTextNode("");
    target.append(textNode);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      textNode.data = text;
      scrollMessagesToBottom();
      return;
    }
    for (const character of text) {
      if (signal?.aborted) return;
      textNode.appendData(character);
      scrollMessagesToBottom();
      await new Promise((resolve) => window.setTimeout(resolve, speed));
    }
  };

  const revealActionLinks = (container, actions, animate = true) => {
    if (!container || !actions.length) return;
    for (const action of actions) {
      const button = document.createElement("button");
      button.className = "chat-action-btn";
      button.type = "button";
      button.dataset.action = action.id;
      button.textContent = action.label;
      container.append(button);
    }
    container.hidden = false;
    container.setAttribute("aria-hidden", "false");
    if (!animate) {
      container.classList.add("is-visible");
      return;
    }
    window.requestAnimationFrame(() => {
      container.classList.add("is-visible");
      scrollMessagesToBottom();
    });
  };

  const renderAssistantText = (container, text) => {
    const lines = cleanAssistantText(text).split(/\r?\n/);
    let paragraphLines = [];
    let list = null;
    let listKind = "";
    const flushParagraph = () => {
      if (!paragraphLines.length) return;
      const paragraph = document.createElement("p");
      paragraph.textContent = paragraphLines.join(" ").trim();
      if (paragraph.textContent) container.append(paragraph);
      paragraphLines = [];
    };
    const flushList = () => {
      if (list) container.append(list);
      list = null;
      listKind = "";
    };

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line) {
        flushParagraph();
        continue;
      }
      const bullet = line.match(/^(?:[-*•]\s+|(\d+)[.)]\s+)(.+)$/u);
      if (bullet) {
        flushParagraph();
        const nextKind = bullet[1] ? "ol" : "ul";
        if (listKind !== nextKind) {
          flushList();
          list = document.createElement(nextKind);
          listKind = nextKind;
        }
        const item = document.createElement("li");
        item.textContent = bullet[2];
        list.append(item);
        continue;
      }
      flushList();
      paragraphLines.push(line);
    }
    flushParagraph();
    flushList();
  };

  const appendMessage = (role, text, searchUrl = "", sources = [], { stream = false } = {}) => {
    let actions = [];
    if (role === "assistant") {
      const legacy = separateLegacySources(text);
      const parsed = parseActionLinks(cleanAssistantText(legacy.text));
      text = parsed.text;
      actions = parsed.actions;
      const currentSources = cleanSources(sources);
      sources = currentSources.length ? currentSources : legacy.sources;
    }
    const article = document.createElement("article");
    article.className = `flora-ai-message flora-ai-message-${role}`;
    let streamTarget = null;
    let actionContainer = null;
    if (role === "assistant") {
      const avatar = document.createElement("span");
      avatar.className = "flora-ai-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.innerHTML = '<svg class="ui-icon"><use href="#icon-leaf"></use></svg>';
      article.append(avatar);
      const content = document.createElement("div");
      content.className = "flora-ai-content";
      if (stream) {
        streamTarget = document.createElement("p");
        streamTarget.className = "flora-ai-stream-text";
        content.append(streamTarget);
      } else {
        renderAssistantText(content, text);
      }
      if (actions.length) {
        actionContainer = document.createElement("div");
        actionContainer.className = "flora-ai-actions";
        actionContainer.hidden = stream;
        actionContainer.setAttribute("aria-hidden", String(stream));
        content.append(actionContainer);
        if (!stream) revealActionLinks(actionContainer, actions, false);
      }
      article.append(content);
    } else {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      article.append(paragraph);
    }
    if (role === "assistant" && sources.length) {
      const sourceLabel = document.createElement("span");
      sourceLabel.className = "flora-ai-source-label";
      sourceLabel.textContent = "Источники";
      article.querySelector(".flora-ai-content")?.append(sourceLabel);
      const sourceList = document.createElement("ul");
      sourceList.className = "flora-ai-sources";
      for (const source of sources) {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = source.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = source.title;
        item.append(link);
        sourceList.append(item);
      }
      article.querySelector(".flora-ai-content")?.append(sourceList);
    }
    if (role === "assistant" && isGoogleSearchUrl(searchUrl)) {
      const link = document.createElement("a");
      link.className = "flora-ai-google-search-link";
      link.href = searchUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Открыть поиск Google";
      article.querySelector(".flora-ai-content")?.append(link);
    }
    messagesElement.append(article);
    scrollMessagesToBottom();
    return { article, streamTarget, actionContainer, actions, text };
  };

  messagesElement.addEventListener("click", (event) => {
    const button = event.target.closest("button.chat-action-btn");
    if (!button || !messagesElement.contains(button)) return;
    const route = actionRoutes[button.dataset.action];
    if (!route) return;
    const destination = document.querySelector(`[data-go="${route}"]`);
    if (!destination) {
      console.error(`Не найден раздел чата Flora: ${route}.`);
      return;
    }
    destination.click();
  });

  const setOpen = (open) => {
    panel.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    const label = open ? "Закрыть Flora" : "Спросить Flora";
    toggle.setAttribute("aria-label", label);
    toggle.querySelector(".flora-ai-toggle-text").textContent = label;
    if (open) {
      try {
        const draft = localStorage.getItem(getDraftKey());
        if (!input.value && draft) input.value = draft;
      } catch (error) {
        console.warn("Не удалось восстановить черновик чата Flora.", error);
      }
      input.focus();
      void checkConnection();
      refreshFollowUpSuggestions();
    } else {
      saveDraft();
      saveScrollPosition();
      toggle.focus();
    }
  };

  const checkConnection = async () => {
    try {
      const response = await window.floraWithRetry(() => fetch(apiUrl("health"), {
        headers: { Accept: "application/json" },
      }).then((result) => {
        if (!result.ok && result.status >= 500) throw Object.assign(new Error(`HTTP ${result.status}`), { status: result.status });
        return result;
      }), { label: "Подключение Flora" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      activeProvider = result.provider || "remote";
      const status = result.provider === "ollama"
        ? !result.available
          ? "Запусти Ollama"
          : result.configured
            ? "Flora работает локально"
            : `Скачай ${result.model || "локальную модель"}`
        : result.configured
          ? "Flora готова помочь"
          : "ИИ не настроен на сервере";
      setPresence(result.configured ? "ready" : "offline", status);
    } catch {
      activeProvider = null;
      setPresence("offline", "ИИ-сервер недоступен");
    }
  };

  const saveConversation = () => {
    try {
      const key = getHistoryKey();
      const value = JSON.stringify(conversation.slice(-historyLimit));
      localStorage.setItem(key, value);
      window.dispatchEvent(new CustomEvent("flora:local-data-change", { detail: { key, value } }));
    } catch (error) {
      console.warn(`Не удалось сохранить историю чата для ника «${activeNickname}».`, error);
    }
  };

  const setBusy = (value) => {
    busy = value;
    sendButton.disabled = value;
    input.disabled = value;
    form.setAttribute("aria-busy", String(value));
  };

  const renderProfileConversation = () => {
    conversation.length = 0;
    messagesElement.replaceChildren();
    screenContextHint = null;
    activeScreenContext = null;
    delete input.dataset.contextPlant;
    delete input.dataset.contextDraft;
    appendMessage("assistant", `Привет, ${activeNickname}! Я Flora. Что хотите узнать о растениях?`);
    suggestions.hidden = false;
    try {
      const stored = JSON.parse(localStorage.getItem(getHistoryKey()) || "[]");
      if (!Array.isArray(stored)) throw new TypeError("Ожидался список сообщений.");
      stored.slice(-historyLimit).forEach((message) => {
        if (!message || !["assistant", "user"].includes(message.role) || typeof message.content !== "string") return;
        let content = (message.role === "assistant" ? cleanAssistantText(message.content) : message.content.trim()).slice(0, messageLimit);
        if (!content) return;
        const searchUrl = message.role === "assistant" && isGoogleSearchUrl(message.searchUrl) ? message.searchUrl : "";
        const legacy = message.role === "assistant" ? separateLegacySources(content) : { text: content, sources: [] };
        content = legacy.text;
        const savedSources = cleanSources(message.sources);
        const sources = savedSources.length ? savedSources : legacy.sources;
        conversation.push({
          role: message.role,
          content,
          ...(searchUrl ? { searchUrl } : {}),
          ...(sources.length ? { sources } : {}),
        });
        appendMessage(message.role, content, searchUrl, sources);
      });
      refreshFollowUpSuggestions();
      try {
        input.value = localStorage.getItem(getDraftKey()) || "";
        input.style.height = "auto";
        input.style.height = input.value ? `${Math.min(input.scrollHeight, 105)}px` : "";
        const savedScroll = Number(localStorage.getItem(getScrollKey()));
        messagesElement.scrollTop = Number.isFinite(savedScroll) ? Math.max(0, savedScroll) : messagesElement.scrollHeight;
      } catch (error) {
        console.warn(`Не удалось восстановить состояние чата для ника «${activeNickname}».`, error);
      }
    } catch (error) {
      console.warn(`Не удалось восстановить историю чата для ника «${activeNickname}».`, error);
    }
  };

  const switchNickname = (nickname) => {
    const nextNickname = readNickname(nickname);
    const nextProfileKey = normalizeNickname(nextNickname);
    if (nextProfileKey === activeProfileKey) {
      activeNickname = nextNickname;
      return;
    }
    window.clearTimeout(draftSaveTimer);
    window.clearTimeout(scrollSaveTimer);
    saveDraft();
    saveScrollPosition();
    activeRequestController?.abort();
    activeRequestController = null;
    activeNickname = nextNickname;
    activeProfileKey = nextProfileKey;
    setBusy(false);
    renderProfileConversation();
  };

  const sendMessage = async (value) => {
    const content = value.trim().slice(0, messageLimit);
    if (!content || busy) return;

    const previousMessages = conversation.slice();
    const normalizedContent = normalizeUserText(content);
    const siteAnswer = getLocalSiteAnswer(normalizedContent);
    const requestedPlant = findPlantInConversation(content, previousMessages);
    const openPlantCard = isPlantCardRequest(content) && requestedPlant &&
      typeof window.floraOpenPlantByQuery === "function";
    const searchForPlant = isPlantSearchRequest(content) && requestedPlant &&
      typeof window.floraSearchCatalog === "function";
    const catalogIntent = inferCatalogIntent(content);
    const requestProfileKey = activeProfileKey;
    conversation.push({ role: "user", content });
    appendMessage("user", content);
    suggestions.hidden = true;
    input.value = "";
    input.style.height = "";
    delete input.dataset.contextPlant;
    delete input.dataset.contextDraft;
    saveDraft();
    saveConversation();
    if (siteAnswer) {
      if (siteAnswer.navigate) {
        const appliedFilter = siteAnswer.action === "catalog" && catalogIntent &&
          typeof window.floraApplyCatalogIntent === "function" &&
          window.floraApplyCatalogIntent(catalogIntent);
        const navigated = appliedFilter || (
          typeof window.floraNavigateTo === "function" && window.floraNavigateTo(siteAnswer.action)
        );
        if (navigated) {
          conversation.push({ role: "assistant", content: siteAnswer.reply });
          appendMessage("assistant", siteAnswer.reply);
          saveConversation();
          refreshFollowUpSuggestions();
          return;
        }
      } else {
        const actionMarkup = (siteAnswer.actions || [])
          .map(([action, label]) => `[action:${action}|${label}]`)
          .join("\n");
        const localReply = actionMarkup ? `${siteAnswer.reply}\n\n${actionMarkup}` : siteAnswer.reply;
        conversation.push({ role: "assistant", content: localReply });
        appendMessage("assistant", localReply);
        saveConversation();
        refreshFollowUpSuggestions();
        return;
      }
    }
    if (openPlantCard && window.floraOpenPlantByQuery(requestedPlant.latin)) {
      const localReply = `Нашла в атласе «${requestedPlant.name}» (${requestedPlant.latin}). Открываю карточку растения.`;
      conversation.push({ role: "assistant", content: localReply });
      appendMessage("assistant", localReply);
      saveConversation();
      refreshFollowUpSuggestions();
      return;
    }
    if (searchForPlant && window.floraSearchCatalog(requestedPlant.latin)) {
      const localReply = `Нашла в атласе «${requestedPlant.name}» (${requestedPlant.latin}). Показываю в каталоге.`;
      conversation.push({ role: "assistant", content: localReply });
      appendMessage("assistant", localReply);
      saveConversation();
      refreshFollowUpSuggestions();
      return;
    }
    if (catalogIntent && typeof window.floraApplyCatalogIntent === "function") {
      window.floraApplyCatalogIntent(catalogIntent);
    }
    setBusy(true);

    const typing = document.createElement("article");
    typing.className = "flora-ai-message flora-ai-message-assistant flora-ai-typing";
    typing.setAttribute("aria-label", "Загружается ответ Flora");
    typing.innerHTML = '<span class="flora-ai-avatar" aria-hidden="true"><svg class="ui-icon"><use href="#icon-leaf"></use></svg></span><div class="flora-ai-skeleton-bubble" aria-hidden="true"><span class="skeleton skeleton-line"></span><span class="skeleton skeleton-line"></span><span class="skeleton skeleton-line skeleton-line-short"></span></div>';
    messagesElement.append(typing);
    messagesElement.scrollTop = messagesElement.scrollHeight;

    const controller = new AbortController();
    activeRequestController = controller;
    const timeout = window.setTimeout(() => controller.abort(), 300000);
    try {
      const requestBody = JSON.stringify({
          plantContext: requestedPlant
            ? [requestedPlant]
            : typeof window.floraGetPlantContext === "function"
              ? window.floraGetPlantContext(content, activeScreenContext)
              : [],
          messages: conversation.slice(-historyLimit).map((message) => ({
            role: message.role,
            content: message.content.slice(0, messageLimit)
          }))
        });
      const response = await window.floraWithRetry(() => fetch(apiUrl("chat"), {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: requestBody,
        signal: controller.signal,
      }).then((result) => {
        if (!result.ok && result.status >= 500) {
          throw Object.assign(new Error(`HTTP ${result.status}`), { status: result.status });
        }
        return result;
      }), { label: "Ответ Flora", attempts: 4 });
      const result = await response.json().catch(() => ({}));
      if (requestProfileKey !== activeProfileKey) return;
      if (!response.ok) {
        const error = new Error(typeof result.error === "string" ? result.error : "Не удалось получить ответ. Попробуйте ещё раз.");
        error.status = response.status;
        throw error;
      }
      if (typeof result.reply !== "string" || !result.reply.trim()) throw new Error("Помощник вернул пустой ответ. Попробуйте задать вопрос иначе.");
      const reply = cleanAssistantText(result.reply);
      if (!reply) throw new Error("Помощник вернул пустой ответ. Попробуйте задать вопрос иначе.");
      const searchUrl = isGoogleSearchUrl(result.searchUrl) ? result.searchUrl : "";
      const sources = cleanSources(result.sources);
      conversation.push({
        role: "assistant",
        content: reply.slice(0, 5000),
        ...(searchUrl ? { searchUrl } : {}),
        ...(sources.length ? { sources } : {}),
      });
      const rendered = appendMessage("assistant", reply, searchUrl, sources, { stream: true });
      await typeAssistantText(rendered.streamTarget, rendered.text, controller.signal);
      if (requestProfileKey !== activeProfileKey || controller.signal.aborted) return;
      revealActionLinks(rendered.actionContainer, rendered.actions);
      saveConversation();
      refreshFollowUpSuggestions();
      setPresence("ready", activeProvider === "ollama" ? "Flora работает локально" : "Flora готова помочь");
    } catch (error) {
      if (requestProfileKey !== activeProfileKey) return;
      const message = error.name === "AbortError"
        ? activeProvider === "ollama"
          ? "Локальная модель отвечает дольше обычного. Попробуйте ещё раз."
          : "Облачная модель отвечает дольше обычного. Попробуйте ещё раз."
        : error instanceof TypeError
          ? activeProvider === "ollama"
            ? "Не удалось связаться с сервером. Запустите локальный сервер проекта."
            : "Не удалось связаться с облачным ИИ-сервером."
          : error.message;
      appendMessage("assistant", message);
      if (error.status === 503 || error instanceof TypeError || error.name === "AbortError") {
        const status = error.status === 503
          ? activeProvider === "ollama" ? "Проверь Ollama и модель" : "ИИ временно недоступен"
          : "Проверьте связь";
        setPresence("offline", status);
      }
    } finally {
      window.clearTimeout(timeout);
      typing.remove();
      if (requestProfileKey === activeProfileKey) {
        if (activeRequestController === controller) activeRequestController = null;
        setBusy(false);
        if (!panel.hidden) input.focus();
      }
    }
  };

  window.addEventListener("flora:nickname-change", (event) => {
    switchNickname(event.detail?.nickname);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === nicknameStorageKey) switchNickname(event.newValue || "");
  });

  toggle.addEventListener("click", () => setOpen(panel.hidden));
  document.querySelectorAll("[data-ai-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const context = typeof window.floraGetCurrentScreenContext === "function"
        ? window.floraGetCurrentScreenContext()
        : null;
      if (context) {
        showScreenContext(context);
        setOpen(true);
        scrollMessagesToBottom();
        return;
      }
      setOpen(true);
    });
  });
  window.addEventListener("flora:ai-open", (event) => {
    showScreenContext(event.detail);
    setOpen(true);
    scrollMessagesToBottom();
  });
  window.addEventListener("flora:rage-click", (event) => {
    setOpen(true);
    appendMessage(
      "assistant",
      `Похоже, элемент «${String(event.detail?.label || "страницы").slice(0, 100)}» не сработал с первого раза 🌿. Могу помочь — попробуйте открыть каталог вручную или спросите меня, что найти.\n\n[action:catalog|Открыть каталог]`
    );
  });
  closeButton.addEventListener("click", () => setOpen(false));
  panel.querySelector("#flora-ai-clear").addEventListener("click", () => {
    conversation.length = 0;
    messagesElement.replaceChildren();
    screenContextHint = null;
    appendMessage("assistant", `Привет, ${activeNickname}! Я Flora. Что хотите узнать о растениях?`);
    setSuggestions(defaultSuggestions);
    suggestions.hidden = false;
    try {
      const key = getHistoryKey();
      localStorage.removeItem(key);
      window.dispatchEvent(new CustomEvent("flora:local-data-change", { detail: { key, value: null } }));
    } catch (error) {
      console.warn(`Не удалось очистить историю чата для ника «${activeNickname}».`, error);
    }
    input.focus();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void sendMessage(input.value);
  });
  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 105)}px`;
    if (input.value !== input.dataset.contextDraft) {
      delete input.dataset.contextPlant;
      delete input.dataset.contextDraft;
    }
    window.clearTimeout(draftSaveTimer);
    draftSaveTimer = window.setTimeout(saveDraft, 250);
  });
  input.addEventListener("focus", refreshFollowUpSuggestions);
  messagesElement.addEventListener("scroll", () => {
    window.clearTimeout(scrollSaveTimer);
    scrollSaveTimer = window.setTimeout(saveScrollPosition, 800);
  }, { passive: true });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });
  suggestions.addEventListener("click", (event) => {
    const button = event.target.closest("button.flora-ai-suggestion");
    if (!button) return;
    void sendMessage(button.textContent);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) setOpen(false);
  });

  renderProfileConversation();
  void checkConnection();
})();
