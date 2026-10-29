    const featuredFlowers = [
      { id: "rose", name: "Роза", latin: "Rosa", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Нежность","Радость"], emoji: "🌹", time: "", image: "photo-1518895949257-7621c3c786d7", description: "" },
      { id: "peony", name: "Пион", latin: "Paeonia", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Радость","Мечтательность"], emoji: "🌸", time: "", image: "photo-1523438885200-e635ba2c371e", description: "" },
      { id: "chamomile", name: "Ромашка", latin: "Matricaria", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Спокойствие","Радость"], emoji: "🌼", time: "", image: "photo-1494972308805-463bc619d34e", description: "" },
      { id: "tulip", name: "Тюльпан", latin: "Tulipa", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Энергия","Радость"], emoji: "🌷", time: "", image: "photo-1520763185298-1b434c919102", description: "" },
      { id: "lavender", name: "Лаванда", latin: "Lavandula", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Спокойствие","Мечтательность"], emoji: "🪻", time: "", image: "photo-1499002238440-d264edd596ec", description: "" },
      { id: "sunflower", name: "Подсолнух", latin: "Helianthus", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Радость","Энергия"], emoji: "🌻", time: "", image: "photo-1470509037663-253afd7f0f51", description: "" },
      { id: "iris", name: "Ирис", latin: "Iris", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Мечтательность","Спокойствие"], emoji: "💠", time: "", image: "photo-1496065187959-7f07b8353c55", description: "" },
      { id: "cosmos", name: "Космея", latin: "Cosmos", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Радость","Мечтательность"], emoji: "✿", time: "", image: "photo-1490312278390-ab64016e0aa9", description: "" },
      { id: "strelitzia", name: "Стрелиция", latin: "Strelitzia", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Энергия","Мечтательность"], emoji: "🪷", time: "", image: "photo-1508610048659-a06b669e3321", description: "" },
      { id: "hydrangea", name: "Гортензия", latin: "Hydrangea", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Спокойствие","Нежность"], emoji: "💙", time: "", image: "photo-1563241527-3004b7be0ffd", description: "" },
      { id: "poppy", name: "Мак", latin: "Papaver", kind: "featured", kindLabel: "Популярный род", season: [], color: "", mood: ["Энергия","Мечтательность"], emoji: "🌺", time: "", image: "photo-1525310072745-f49212b5ac6d", description: "" },
      { id: "orchid", name: "Орхидеи", latin: "Orchidaceae", kind: "featured", kindLabel: "Популярная группа", season: [], color: "", mood: ["Нежность","Мечтательность"], emoji: "🌸", time: "", image: "photo-1468327768560-75b778cbb551", description: "" }
    ];

    const featuredTaxonomy = {
      rose: ["Rosaceae", "Magnoliopsida", "Rosales"],
      peony: ["Paeoniaceae", "Magnoliopsida", "Saxifragales"],
      chamomile: ["Asteraceae", "Magnoliopsida", "Asterales"],
      tulip: ["Liliaceae", "Liliopsida", "Liliales"],
      lavender: ["Lamiaceae", "Magnoliopsida", "Lamiales"],
      sunflower: ["Asteraceae", "Magnoliopsida", "Asterales"],
      iris: ["Iridaceae", "Liliopsida", "Asparagales"],
      cosmos: ["Asteraceae", "Magnoliopsida", "Asterales"],
      strelitzia: ["Strelitziaceae", "Liliopsida", "Zingiberales"],
      hydrangea: ["Hydrangeaceae", "Magnoliopsida", "Cornales"],
      poppy: ["Papaveraceae", "Magnoliopsida", "Ranunculales"],
      orchid: ["Orchidaceae", "Liliopsida", "Asparagales"]
    };

    const featuredPhotoData = {
      rose: ["https://inaturalist-open-data.s3.amazonaws.com/photos/128386918/medium.jpeg", "(c) lamprisdimitris, some rights reserved (CC BY-NC)", "cc-by-nc", 53438],
      peony: ["https://inaturalist-open-data.s3.amazonaws.com/photos/490633480/medium.jpeg", "(c) Axel Gosseries, some rights reserved (CC BY-NC), uploaded by Axel Gosseries", "cc-by-nc", 58228],
      chamomile: ["https://inaturalist-open-data.s3.amazonaws.com/photos/10253/medium.jpg", "(c) AnneTanne, some rights reserved (CC BY-NC-SA)", "cc-by-nc-sa", 52845],
      tulip: ["https://inaturalist-open-data.s3.amazonaws.com/photos/118436887/medium.jpeg", "(c) Вадим, some rights reserved (CC BY-NC), uploaded by Вадим", "cc-by-nc", 55800],
      lavender: ["https://inaturalist-open-data.s3.amazonaws.com/photos/116644427/medium.jpeg", "(c) Julien Renoult, some rights reserved (CC BY), uploaded by Julien Renoult", "cc-by", 61905],
      sunflower: ["https://inaturalist-open-data.s3.amazonaws.com/photos/112547785/medium.jpg", "(c) Forest and Kim Starr, some rights reserved (CC BY)", "cc-by", 56955],
      iris: ["https://inaturalist-open-data.s3.amazonaws.com/photos/58969251/medium.jpeg", "(c) vladimir_epiktetov, some rights reserved (CC BY-NC), uploaded by vladimir_epiktetov", "cc-by-nc", 47780],
      cosmos: ["https://inaturalist-open-data.s3.amazonaws.com/photos/573436682/medium.gif", "(c) Bodo Nuñez Oberg, some rights reserved (CC BY-NC)", "cc-by-nc", 68563],
      strelitzia: ["https://inaturalist-open-data.s3.amazonaws.com/photos/11320852/medium.jpg", "(c) icomei, some rights reserved (CC BY-NC-SA)", "cc-by-nc-sa", 48316],
      hydrangea: ["https://inaturalist-open-data.s3.amazonaws.com/photos/82166001/medium.jpg", "(c) mtfoliveira, some rights reserved (CC BY-NC), uploaded by mtfoliveira", "cc-by-nc", 83157],
      poppy: ["https://inaturalist-open-data.s3.amazonaws.com/photos/365662464/medium.jpeg", "(c) Sunshine, some rights reserved (CC BY-NC)", "cc-by-nc", 52504],
      orchid: ["https://inaturalist-open-data.s3.amazonaws.com/photos/108347006/medium.jpeg", "(c) Victor De la Cruz, some rights reserved (CC BY), uploaded by Victor De la Cruz", "cc-by", 47217]
    };
    featuredFlowers.forEach((flower) => {
      const [photo, credit, license, taxonId] = featuredPhotoData[flower.id];
      flower.photo = photo;
      flower.photoCredit = credit;
      flower.photoLicense = license;
      flower.photoSource = `https://www.inaturalist.org/taxa/${taxonId}`;
      flower.photoSourceName = "iNaturalist";
      flower.photoVerified = true;
      const [family, classKey, order] = featuredTaxonomy[flower.id];
      flower.family = family;
      flower.classKey = classKey;
      flower.order = order;
    });

    const familyLabels = {
      Ranunculaceae: "Лютиковые", Caryophyllaceae: "Гвоздичные", Apocynaceae: "Кутровые",
      Primulaceae: "Первоцветные", Papaveraceae: "Маковые", Onagraceae: "Кипрейные",
      Malvaceae: "Мальвовые", Iridaceae: "Ирисовые", Gentianaceae: "Горечавковые",
      Boraginaceae: "Бурачниковые", Ericaceae: "Вересковые", Verbenaceae: "Вербеновые",
      Rosaceae: "Розовые", Asteraceae: "Астровые", Campanulaceae: "Колокольчиковые",
      Hydrangeaceae: "Гортензиевые", Amaryllidaceae: "Амариллисовые", Balsaminaceae: "Бальзаминовые",
      Plumbaginaceae: "Свинчатковые", Violaceae: "Фиалковые", Orchidaceae: "Орхидные",
      Fabaceae: "Бобовые", Liliaceae: "Лилейные", Zingiberaceae: "Имбирные",
      Convolvulaceae: "Вьюнковые", Solanaceae: "Паслёновые", Paeoniaceae: "Пионовые",
      Lamiaceae: "Яснотковые", Strelitziaceae: "Стрелициевые", Passifloraceae: "Страстоцветные",
      Marantaceae: "Марантовые", Pteridaceae: "Адиантовые", Polypodiaceae: "Многоножковые",
      Dryopteridaceae: "Щитовниковые", Nephrolepidaceae: "Нефролеписовые", Urticaceae: "Крапивные"
    };
    const familyTaxonomy = {
      Ranunculaceae: { classKey: "Magnoliopsida", order: "Ranunculales" },
      Caryophyllaceae: { classKey: "Magnoliopsida", order: "Caryophyllales" },
      Apocynaceae: { classKey: "Magnoliopsida", order: "Gentianales" },
      Primulaceae: { classKey: "Magnoliopsida", order: "Ericales" },
      Papaveraceae: { classKey: "Magnoliopsida", order: "Ranunculales" },
      Onagraceae: { classKey: "Magnoliopsida", order: "Myrtales" },
      Malvaceae: { classKey: "Magnoliopsida", order: "Malvales" },
      Iridaceae: { classKey: "Liliopsida", order: "Asparagales" },
      Gentianaceae: { classKey: "Magnoliopsida", order: "Gentianales" },
      Boraginaceae: { classKey: "Magnoliopsida", order: "Boraginales" },
      Ericaceae: { classKey: "Magnoliopsida", order: "Ericales" },
      Verbenaceae: { classKey: "Magnoliopsida", order: "Lamiales" },
      Rosaceae: { classKey: "Magnoliopsida", order: "Rosales" },
      Asteraceae: { classKey: "Magnoliopsida", order: "Asterales" },
      Campanulaceae: { classKey: "Magnoliopsida", order: "Asterales" },
      Hydrangeaceae: { classKey: "Magnoliopsida", order: "Cornales" },
      Amaryllidaceae: { classKey: "Liliopsida", order: "Asparagales" },
      Balsaminaceae: { classKey: "Magnoliopsida", order: "Ericales" },
      Plumbaginaceae: { classKey: "Magnoliopsida", order: "Caryophyllales" },
      Violaceae: { classKey: "Magnoliopsida", order: "Malpighiales" },
      Orchidaceae: { classKey: "Liliopsida", order: "Asparagales" },
      Fabaceae: { classKey: "Magnoliopsida", order: "Fabales" },
      Liliaceae: { classKey: "Liliopsida", order: "Liliales" },
      Zingiberaceae: { classKey: "Liliopsida", order: "Zingiberales" },
      Convolvulaceae: { classKey: "Magnoliopsida", order: "Solanales" },
      Solanaceae: { classKey: "Magnoliopsida", order: "Solanales" },
      Paeoniaceae: { classKey: "Magnoliopsida", order: "Saxifragales" },
      Lamiaceae: { classKey: "Magnoliopsida", order: "Lamiales" },
      Strelitziaceae: { classKey: "Liliopsida", order: "Zingiberales" }
    };
    const classLabels = {
      Magnoliopsida: "Двудольные · Magnoliopsida",
      Liliopsida: "Однодольные · Liliopsida",
      Polypodiopsida: "Папоротниковидные · Polypodiopsida",
      Pinopsida: "Хвойные · Pinopsida"
    };
    if (!window.FLORA_VERIFIED_MEDIA || typeof window.FLORA_VERIFIED_MEDIA !== "object" ||
        !Array.isArray(window.FLORA_EXTRA_FLOWERS) ||
        window.FLORA_EXTRA_FLOWERS.some((item) => !item.name || !item.latin || !item.family || !item.photo || !item.credit || !item.license || !item.source) ||
        new Set(window.FLORA_EXTRA_FLOWERS.map((item) => item.latin)).size !== window.FLORA_EXTRA_FLOWERS.length) {
      throw new Error("Основной каталог должен содержать уникальные виды с подтверждёнными данными и фото.");
    }
    const additionalFlowers = window.FLORA_ADDITIONAL_FLOWERS;
    const houseplantGroups = new Set(["Цветы", "Кактусы", "Суккуленты", "Папоротники", "Хвойные", "Деревья и кустарники"]);
    const houseplants = (window.FLORA_HOUSEPLANTS || []).map((item) => {
      const genus = String(item.latin || "").split(/\s+/)[0];
      let group = "Цветы";
      if (item.classKey === "Polypodiopsida") group = "Папоротники";
      else if (item.classKey === "Pinopsida") group = "Хвойные";
      else if (item.family === "Cactaceae") group = "Кактусы";
      else if (item.family === "Crassulaceae" ||
          ["Aloe vera", "Dracaena trifasciata", "Haworthiopsis attenuata"].includes(item.latin)) group = "Суккуленты";
      else if (["Ficus", "Heptapleurum"].includes(genus) ||
          ["Dracaena fragrans", "Dracaena marginata", "Dracaena sanderiana"].includes(item.latin)) group = "Деревья и кустарники";
      return { ...item, group };
    });
    const expansionFlowers = window.FLORA_EXPANSION_FLOWERS;
    const newPackTaxonomy = {
      Araceae: { classKey: "Liliopsida", order: "Alismatales" },
      Cactaceae: { classKey: "Magnoliopsida", order: "Caryophyllales" },
      Asphodelaceae: { classKey: "Liliopsida", order: "Asparagales" },
      Moraceae: { classKey: "Magnoliopsida", order: "Rosales" },
      Urticaceae: { classKey: "Magnoliopsida", order: "Rosales" },
      Passifloraceae: { classKey: "Magnoliopsida", order: "Malpighiales" },
      Marantaceae: { classKey: "Liliopsida", order: "Zingiberales" },
      Pteridaceae: { classKey: "Polypodiopsida", order: "Polypodiales" },
      Polypodiaceae: { classKey: "Polypodiopsida", order: "Polypodiales" },
      Aspleniaceae: { classKey: "Polypodiopsida", order: "Polypodiales" },
      Nephrolepidaceae: { classKey: "Polypodiopsida", order: "Polypodiales" },
      Dryopteridaceae: { classKey: "Polypodiopsida", order: "Polypodiales" }
    };
    const newPackFlowers = Array.isArray(window.FLORA_NEW_PACK)
      ? window.FLORA_NEW_PACK.map((item) => ({
        ...item,
        ...(familyTaxonomy[item.family] || newPackTaxonomy[item.family] || {})
      }))
      : [];
    const additionalMedia = window.FLORA_ADDITIONAL_MEDIA;
    const expansionMedia = window.FLORA_EXPANSION_MEDIA;
    if (!Array.isArray(additionalFlowers) ||
        !additionalMedia || typeof additionalMedia !== "object" ||
        additionalFlowers.some((item) =>
          !item.name || !item.latin || !item.family || !item.group || !item.classKey || !item.order ||
          !additionalMedia[item.latin]?.photo || !additionalMedia[item.latin]?.photoCredit ||
          !additionalMedia[item.latin]?.photoLicense || !additionalMedia[item.latin]?.photoSource)) {
      throw new Error("У каждого дополнительного растения должны быть классификация и фото с авторством и лицензией.");
    }
    if (!Array.isArray(houseplants) ||
        houseplants.some((item) => !item.name || !item.latin || !item.family || !houseplantGroups.has(item.group) || !item.classKey || !item.order)) {
      throw new Error("В подборке растений должны иметь названия, допустимую группу и ботаническую классификацию.");
    }
    if (!Array.isArray(newPackFlowers) || newPackFlowers.some((item) =>
      !item.name || !item.latin || !item.family || !item.group || !item.category || !item.classKey || !item.order
    )) {
      throw new Error("В новой подборке растений должны быть названия, группы и ботаническая классификация.");
    }
    if (!Array.isArray(expansionFlowers) || expansionFlowers.length !== 200 ||
        expansionFlowers.some((item) => !item.name || !item.latin || !item.family || !item.group || !item.classKey || !item.order)) {
      throw new Error("В расширении каталога должны быть 200 растений с названием и классификацией.");
    }
    const catalogExpansionFlowers = window.FLORA_1000_FLOWERS;
    if (!Array.isArray(catalogExpansionFlowers) || catalogExpansionFlowers.length !== 400 ||
        catalogExpansionFlowers.some((item) =>
          !item.name || !item.latin || !item.family || !item.group || !item.category || !item.classKey || !item.order ||
          typeof item.description !== "string" || item.description.trim().length < 40 ||
          !item.care?.watering || !item.care?.lighting || !item.care?.humidity ||
          !item.photo || !item.credit || !item.license || !item.source
        )) {
      throw new Error("В новой части каталога должны быть 400 полных карточек растений с описанием, уходом и фото.");
    }
    const catalog1111Flowers = window.FLORA_1111_FLOWERS;
    if (!Array.isArray(catalog1111Flowers) || catalog1111Flowers.length !== 111 ||
        catalog1111Flowers.some((item) =>
          !item.name || !item.latin || !item.family || !item.group || !item.category || !item.classKey || !item.order ||
          typeof item.description !== "string" || item.description.trim().length < 40 ||
          !item.care?.watering || !item.care?.lighting || !item.care?.humidity ||
          !item.photo || !item.credit || !item.license || !item.source
        )) {
      throw new Error("В новой части каталога должны быть 111 полных карточек растений с описанием, уходом и фото.");
    }
    if (!expansionMedia || typeof expansionMedia !== "object") {
      throw new Error("Не загружены данные фотографий для новых растений.");
    }
    const baseCatalogItems = [...window.FLORA_EXTRA_FLOWERS, ...additionalFlowers, ...expansionFlowers];
    const canonicalLatin = (latin) => String(latin || "").trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
    const catalogItems = [...baseCatalogItems, ...houseplants, ...newPackFlowers, ...catalogExpansionFlowers, ...catalog1111Flowers, ...(window.FLORA_MORE_FLOWERS || [])]
      .map((item) => ({ ...item, latin: String(item.latin || "").trim() }))
      .filter((item, index, items) =>
        items.findIndex((candidate) => canonicalLatin(candidate.latin) === canonicalLatin(item.latin)) === index
      );
    if (new Set(catalogItems.map((item) => canonicalLatin(item.latin))).size !== catalogItems.length) {
      throw new Error("В каталоге обнаружены повторяющиеся научные названия.");
    }
    const familyAliases = {
      Cactaceae: "Кактусовые", Crassulaceae: "Толстянковые", Euphorbiaceae: "Молочайные",
      Asphodelaceae: "Асфоделовые", Asparagaceae: "Спаржевые", Nephrolepidaceae: "Нефролеписовые",
      Pteridaceae: "Адиантовые", Aspleniaceae: "Костенцовые", Dennstaedtiaceae: "Орляковые",
      Dryopteridaceae: "Щитовниковые", Polypodiaceae: "Многоножковые", Osmundaceae: "Чистоустовые",
      Onocleaceae: "Страусниковые", Pinaceae: "Сосновые", Araucariaceae: "Араукариевые",
      Taxaceae: "Тисовые", Cupressaceae: "Кипарисовые", Fagaceae: "Буковые",
      Betulaceae: "Берёзовые", Sapindaceae: "Сапиндовые", Oleaceae: "Маслиновые",
      Magnoliaceae: "Магнолиевые", Salicaceae: "Ивовые", Araceae: "Ароидные"
    };
    const plantGroupDescriptions = {
      "Цветы": "цветковое растение с разнообразием форм и сортов. Внешний вид и сезон цветения зависят от конкретного вида.",
      "Кактусы": "кактус с характерными ареолами и разными силуэтами — от округлых до вытянутых. Кактусы запасают влагу и обычно предпочитают солнечное место.",
      "Суккуленты": "суккулент, который запасает влагу в листьях или стеблях. Разнообразие форм и фактур делает эти растения интересным акцентом в интерьере.",
      "Папоротники": "папоротник с выразительной листвой. Папоротники не образуют цветков и семян; их выращивают ради зелени и фактуры листьев.",
      "Хвойные": "хвойное растение с игольчатой или чешуйчатой листвой. Оно придаёт композиции структуру круглый год, а размер и условия выращивания зависят от вида.",
      "Деревья и кустарники": "древесное растение, которое добавляет объём и зелень в саду. Форма кроны и сезонные особенности зависят от вида."
    };
    const plantGroupCare = {
      "Цветы": {
        watering: "Поливайте после подсыхания верхнего слоя почвы; не оставляйте воду в поддоне.",
        lighting: "Яркий рассеянный свет; защищайте от жёсткого полуденного солнца.",
        humidity: "Обычная комнатная влажность; проветривайте без холодных сквозняков."
      },
      "Кактусы": {
        watering: "Поливайте редко, только после полного просыхания субстрата; зимой сокращайте полив.",
        lighting: "Очень яркое освещение; постепенно приучайте к прямому солнцу.",
        humidity: "Низкая или обычная влажность; обеспечьте хорошее проветривание."
      },
      "Суккуленты": {
        watering: "Поливайте после полного просыхания грунта; лишнюю воду сразу сливайте.",
        lighting: "Яркий свет, многим видам подходит несколько часов мягкого прямого солнца.",
        humidity: "Обычная или пониженная влажность; не опрыскивайте розетки без необходимости."
      },
      "Папоротники": {
        watering: "Поддерживайте субстрат равномерно слегка влажным, не допуская заболачивания.",
        lighting: "Рассеянный свет или полутень; избегайте прямого солнца.",
        humidity: "Повышенная влажность и мягкая циркуляция воздуха."
      },
      "Хвойные": {
        watering: "Поддерживайте умеренную влажность корневого кома; после укоренения поливайте в засуху.",
        lighting: "Светлое место; учитывайте, что требования к солнцу зависят от вида.",
        humidity: "Уличные условия и естественная влажность; в контейнере не пересушивайте ком."
      },
      "Деревья и кустарники": {
        watering: "Поливайте глубоко после подсыхания верхнего слоя; молодые посадки не пересушивайте.",
        lighting: "Светлое место; точные требования к солнцу зависят от вида.",
        humidity: "Обычная внешняя влажность; важнее дренированная почва и свободная циркуляция воздуха."
      }
    };
    const featuredDescriptions = {
      rose: "Розы ценят за выразительные цветы, богатство оттенков и разнообразие сортов. Среди них есть компактные кусты, плетистые формы и растения для срезки; при выборе учитывайте шипы.",
      peony: "Пионы привлекают крупными пышными цветами и красивой резной листвой. Многие сорта обладают заметным ароматом и эффектно смотрятся в саду и букете.",
      chamomile: "Ромашка узнаваема по светлым лепесткам вокруг жёлтой сердцевины. Её простой, естественный облик хорошо подходит для цветников и летних букетов.",
      tulip: "Тюльпаны — весенние луковичные растения с огромным разнообразием форм и оттенков. Их высаживают группами в саду и выращивают ради ярких букетов.",
      lavender: "Лаванда известна узкими серебристо-зелёными листьями и ароматными цветками в колосовидных соцветиях. Она добавляет саду фактуру и привлекает насекомых-опылителей.",
      sunflower: "Подсолнух выделяется крупными солнечными соцветиями и выразительным силуэтом. Существуют как высокорослые садовые сорта, так и более компактные формы.",
      iris: "Ирис узнаваем по необычным цветкам и длинным мечевидным листьям. Разнообразие видов и сортов позволяет подобрать растение для разных садовых композиций.",
      cosmos: "Космея — лёгкое садовое растение с тонкой ажурной листвой и открытыми цветами. Её воздушные посадки красиво смотрятся в летнем цветнике.",
      strelitzia: "Стрелиция славится крупными листьями и необычными цветками, напоминающими яркую птицу. Это выразительное растение для просторного светлого интерьера.",
      hydrangea: "Гортензии украшают сад крупными соцветиями и пышной листвой. Окраска цветков у некоторых сортов может меняться в зависимости от условий выращивания.",
      poppy: "Маки привлекают крупными нежными цветками и лёгким движением лепестков на ветру. Виды мака различаются внешностью и особенностями выращивания.",
      orchid: "Орхидеи — разнообразная группа растений с необычными цветками и множеством форм роста. Условия ухода заметно различаются между видами, поэтому ориентируйтесь на рекомендации для конкретного растения."
    };
    function transcribeScientificName(name) {
      const digraphs = { sch: "ш", ch: "х", ph: "ф", th: "т", sh: "ш", ae: "э", oe: "э", qu: "кв" };
      const letters = { a: "а", b: "б", c: "к", d: "д", e: "е", f: "ф", g: "г", h: "г", i: "и", j: "й", k: "к", l: "л", m: "м", n: "н", o: "о", p: "п", q: "к", r: "р", s: "с", t: "т", u: "у", v: "в", w: "в", x: "кс", y: "и", z: "з" };
      return name.toLowerCase().replace(/sch|ch|ph|th|sh|ae|oe|qu|[a-z]/g, (part) => digraphs[part] || letters[part])
        .replace(/^([а-яё])/, (letter) => letter.toLocaleUpperCase("ru"));
    }
    const plantGroupOf = (item) => {
      const group = item.group || item.plantGroup || "Цветы";
      if (group !== "Комнатные растения") return group;
      const genus = item.latin.split(/\s+/)[0];
      if (item.classKey === "Polypodiopsida") return "Папоротники";
      if (item.classKey === "Pinopsida") return "Хвойные";
      if (item.family === "Cactaceae") return "Кактусы";
      if (item.family === "Crassulaceae" ||
          ["Aloe", "Echeveria", "Gasteria", "Haworthiopsis", "Kalanchoe", "Sedum"].includes(genus)) return "Суккуленты";
      if (["Ficus", "Heptapleurum", "Dracaena", "Schefflera"].includes(genus) ||
          ["Moraceae", "Araliaceae"].includes(item.family)) return "Деревья и кустарники";
      return "Цветы";
    };
    const mappedCatalogFlowers = catalogItems.map((item, index) => {
      const familyLabel = familyLabels[item.family] || familyAliases[item.family] || item.family;
      const taxonomy = familyTaxonomy[item.family] || { classKey: item.classKey, order: item.order };
      if (!taxonomy.classKey || !taxonomy.order || !classLabels[taxonomy.classKey]) throw new Error(`Не найдена классификация семейства ${item.family}.`);
      const additionalPhoto = additionalMedia[item.latin];
      const verifiedMedia = additionalPhoto ? {
        photo: additionalPhoto.photo,
        credit: additionalPhoto.photoCredit,
        license: additionalPhoto.photoLicense,
        source: additionalPhoto.photoSource,
        sourceName: additionalPhoto.photoSourceName,
        photoVerified: additionalPhoto.photoVerified
      } : window.FLORA_VERIFIED_MEDIA[item.latin];
      const expansionPhoto = expansionMedia[item.latin] || (window.FLORA_MORE_MEDIA && window.FLORA_MORE_MEDIA[item.latin]);
      const isGenericStockPhoto = item.sourceName === "Unsplash" ||
        (typeof item.photo === "string" && /^https:\/\/images\.unsplash\.com\//i.test(item.photo));
      const curatedGroupMedia = !isGenericStockPhoto && item.photo && item.credit && item.license && item.source ? item : null;
      const photoData = curatedGroupMedia ? {
        photo: curatedGroupMedia.photo,
        credit: curatedGroupMedia.credit,
        license: curatedGroupMedia.license,
        source: curatedGroupMedia.source,
        sourceName: curatedGroupMedia.sourceName,
        photoVerified: curatedGroupMedia.photoVerified !== false,
        photoNote: curatedGroupMedia.photoNote
      } : verifiedMedia || (expansionPhoto ? {
        photo: expansionPhoto.photo,
        credit: expansionPhoto.photoCredit,
        license: expansionPhoto.photoLicense,
        source: expansionPhoto.photoSource,
        sourceName: expansionPhoto.photoSourceName,
        photoVerified: expansionPhoto.photoVerified,
        photoNote: expansionPhoto.photoNote
      } : null);
      const plantGroup = plantGroupOf(item);
      const name = item.native || item.nameSource ? item.name : transcribeScientificName(item.latin);
      const careLabels = { watering: "Полив", lighting: "Освещение", humidity: "Влажность" };
      const defaults = plantGroupCare[plantGroup] || plantGroupCare["Цветы"];
      const care = Object.fromEntries(Object.keys(careLabels).map((key) => [
        key,
        typeof item.care?.[key] === "string" && item.care[key].trim() ? item.care[key].trim() : defaults[key]
      ]));
      const careSummary = care
        ? Object.entries(care)
          .filter(([key, value]) => careLabels[key] && typeof value === "string" && value.trim())
          .map(([key, value]) => `${careLabels[key]}: ${value.trim()}`)
          .join(" ")
        : "";
      const sourceDescription = typeof item.description === "string" ? item.description.trim() : "";
      const description = sourceDescription || `${name} (${item.latin}) — представитель семейства ${familyLabel}. ${plantGroupDescriptions[plantGroup] || plantGroupDescriptions["Цветы"]}`;
      return {
        id: `flora-${index + 1}`, name,
        descriptionProvided: description.length >= 40,
        englishName: item.native || item.nameSource ? "" : item.name, latin: item.latin, family: item.family,
        familyLabel, classKey: taxonomy.classKey, classLabel: classLabels[taxonomy.classKey],
        order: taxonomy.order, kind: "botanical", kindLabel: familyLabel,
        plantGroup, category: item.category && item.category !== "Комнатные растения" ? item.category : plantGroup, care,
        nameLanguage: item.nameSource || (item.native ? "Русское название из GBIF" :
          "Русская транслитерация научного названия; бытовое название не найдено в GBIF"),
        season: item.season || [], color: item.color || "", mood: item.mood || [], emoji: item.emoji || "✿", time: item.time || "",
        description: careSummary ? `${description} Уход: ${careSummary}` : description,
        photo: photoData?.photo || "",
        photoCredit: photoData?.credit || "",
        photoLicense: photoData?.license || "",
        photoSource: photoData?.source || "",
        photoSourceName: photoData?.sourceName || "",
        photoVerified: Boolean(photoData && photoData.photoVerified !== false),
        photoNote: photoData?.photoNote || "",
        gbifKey: item.taxonKey || verifiedMedia?.taxonKey || "",
        allowMissingPhoto: item.allowMissingPhoto === true
      };
    });
    const incompletePhotoCount = mappedCatalogFlowers.filter((flower) =>
      !flower.photo || !flower.photoCredit || !flower.photoLicense || !flower.photoSource
    ).length;
    if (incompletePhotoCount) {
      console.warn(`Из каталога исключено растений без полного подтверждённого фото: ${incompletePhotoCount}.`);
    }
    const extraFlowers = mappedCatalogFlowers.filter((flower) =>
      flower.photo && flower.photoCredit && flower.photoLicense && flower.photoSource
    );
    featuredFlowers.forEach((flower) => {
      flower.familyLabel = familyLabels[flower.family] || flower.family;
      flower.classLabel = classLabels[flower.classKey];
      flower.plantGroup = "Цветы";
      flower.category = flower.plantGroup;
      flower.description = featuredDescriptions[flower.id];
      flower.descriptionProvided = flower.description.length >= 40;
      flower.care = plantGroupCare[flower.plantGroup];
    });
    const flowers = [...featuredFlowers, ...extraFlowers];
    if (flowers.length !== 1111 ||
        new Set(flowers.map((flower) => canonicalLatin(flower.latin))).size !== 1111) {
      throw new Error(`Ботанический каталог должен содержать ровно 1111 уникальных растений, сейчас: ${flowers.length}.`);
    }
    if (flowers.some((flower) =>
      !flower.name || !flower.latin || !flower.family || !flower.category ||
      typeof flower.description !== "string" || flower.description.trim().length < 40 ||
      !flower.care?.watering || !flower.care?.lighting || !flower.care?.humidity ||
      !flower.photo || !flower.photoCredit || !flower.photoLicense || !flower.photoSource
    )) {
      throw new Error("Каждое растение должно иметь описание, категорию, уход и подтверждённое фото.");
    }

    let catalogOverrides = {};
    try {
      const savedOverrides = localStorage.getItem("flora-catalog-overrides");
      if (savedOverrides) {
        const parsedOverrides = JSON.parse(savedOverrides);
        if (!parsedOverrides || typeof parsedOverrides !== "object" || Array.isArray(parsedOverrides)) {
          throw new TypeError("Ожидался объект изменений каталога.");
        }
        catalogOverrides = parsedOverrides;
      }
    } catch (error) {
      console.warn("Не удалось загрузить изменения каталога из локального хранилища.", error);
    }
    flowers.forEach((flower) => {
      const override = catalogOverrides[flower.id];
      if (!override || typeof override !== "object") return;
      if (typeof override.name === "string" && override.name.trim()) flower.name = override.name.trim();
      if (typeof override.description === "string" && override.description.trim()) {
        flower.description = override.description.trim();
        flower.descriptionProvided = flower.description.length >= 40;
      }
      if (typeof override.lifeForm === "string" && override.lifeForm.trim()) flower.lifeForm = override.lifeForm.trim();
      if (typeof override.category === "string" && override.category.trim()) flower.category = override.category.trim();
    });
    const importedSpecies = Array.isArray(catalogOverrides.__additions) ? catalogOverrides.__additions : [];
    importedSpecies.forEach((item) => {
      if (!item || typeof item.id !== "string" || flowers.some((flower) => flower.id === item.id) ||
          !item.name || !item.latin || !item.family || !item.plantGroup) return;
      const familyLabel = familyLabels[item.family] || familyAliases[item.family] || item.family;
      const classKey = item.classKey && classLabels[item.classKey] ? item.classKey : "Magnoliopsida";
      flowers.push({
        id: item.id,
        name: item.name,
        latin: item.latin,
        family: item.family,
        familyLabel,
        classKey,
        classLabel: classLabels[classKey],
        order: item.order || "Не определён",
        kind: "botanical",
        kindLabel: familyLabel,
        plantGroup: item.plantGroup,
        nameLanguage: "Русское название добавлено через CSV",
        description: item.description || `${item.name} — запись, добавленная в атлас пользователем.`,
        photo: "",
        photoCredit: "",
        photoLicense: "",
        photoSource: "",
        photoSourceName: "",
        photoVerified: false,
        emoji: "✿",
        mood: [],
        season: [],
        color: "",
        time: "",
        lifeForm: item.lifeForm || "",
        category: item.category || item.plantGroup,
        safetyStatus: "unknown"
      });
    });
    flowers.forEach((flower) => {
      if (flower.plantGroup === "Комнатные растения") {
        flower.plantGroup = plantGroupOf(flower);
      }
      if (flower.category === "Комнатные растения") {
        flower.category = flower.plantGroup;
      }
    });
    const catalogBeforeCleanup = flowers.length;
    const cleanupStats = { missingPhoto: 0, missingDescription: 0, invalidRecord: 0, duplicate: 0 };
    const seenCatalogIds = new Set();
    const seenScientificNames = new Set();
    const isSecureURL = (value) => {
      try {
        return new URL(value).protocol === "https:";
      } catch {
        return false;
      }
    };
    const cleanFlowers = flowers.filter((flower) => {
      const scientificName = String(flower.latin || "")
        .normalize("NFKC")
        .replace(/[’‘`]/g, "'")
        .replace(/\s+/g, " ")
        .trim()
        .toLocaleLowerCase("en");
      const hasCompleteRecord = Boolean(
        flower.id && flower.name?.trim() && scientificName && flower.family?.trim() &&
        flower.familyLabel?.trim() && flower.classLabel?.trim() && flower.order?.trim() &&
        flower.plantGroup?.trim() && flower.category?.trim()
      );
      const attribution = `${flower.photoCredit || ""} ${flower.photoLicense || ""} ${flower.photoSourceName || ""}`;
      const hasPlaceholderAttribution = /<[^>]*>|пример|например|укажите|автор не указан/i.test(attribution);
      const hasAttributedPhoto = Boolean(
        flower.photoVerified && isSecureURL(flower.photo) && flower.photoCredit?.trim() &&
        flower.photoLicense?.trim() && isSecureURL(flower.photoSource) && flower.photoSourceName?.trim() &&
        !hasPlaceholderAttribution
      );
      const hasDocumentedIllustration = Boolean(
        flower.photoVerified === false && flower.photoNote?.includes("Иллюстрация близкого вида") &&
        isSecureURL(flower.photo) && flower.photoCredit?.trim() && flower.photoLicense?.trim() &&
        isSecureURL(flower.photoSource) && flower.photoSourceName?.trim() && !hasPlaceholderAttribution
      );
      const hasUsableImage = hasAttributedPhoto || hasDocumentedIllustration;
      if (!hasUsableImage) {
        flower.photo = "";
        flower.photoCredit = "";
        flower.photoLicense = "";
        flower.photoSource = "";
        flower.photoSourceName = "";
        flower.photoVerified = false;
      }
      const hasDescription = typeof flower.description === "string" && flower.description.trim().length >= 40;
      const isDuplicate = seenCatalogIds.has(flower.id) || seenScientificNames.has(scientificName);
      if (!hasUsableImage) cleanupStats.missingPhoto += 1;
      if (!hasDescription) cleanupStats.missingDescription += 1;
      if (!hasCompleteRecord) cleanupStats.invalidRecord += 1;
      if (isDuplicate) cleanupStats.duplicate += 1;
      if (!hasCompleteRecord || !hasUsableImage || !hasDescription || isDuplicate) return false;
      seenCatalogIds.add(flower.id);
      seenScientificNames.add(scientificName);
      return true;
    });
    flowers.splice(0, flowers.length, ...cleanFlowers);
    console.info("Каталог очищен:", {
      осталось: flowers.length,
      было: catalogBeforeCleanup,
      безПроверенногоФото: cleanupStats.missingPhoto,
      безОписания: cleanupStats.missingDescription,
      неполныеЗаписи: cleanupStats.invalidRecord,
      дубликаты: cleanupStats.duplicate
    });
    if (flowers.length !== 1111 ||
        flowers.some((flower) =>
          !flower.category || !flower.care?.watering || !flower.care?.lighting || !flower.care?.humidity ||
          !flower.photo || !flower.photoCredit || !flower.photoLicense || !flower.photoSource
        )) {
      throw new Error(`После очистки каталог должен содержать 1111 полных карточек с фото, сейчас: ${flowers.length}.`);
    }
    const normalizePlantWords = (value) => String(value || "")
      .normalize("NFKC")
      .toLocaleLowerCase("ru-RU")
      .replace(/ё/g, "е")
      .match(/[a-zа-я0-9]+/g) || [];
    const stemPlantWord = (word) => {
      if (!/^[а-я]+$/.test(word)) return word;
      for (const ending of ["иями", "ями", "ами", "ыми", "ими", "ого", "его", "ему", "ому", "ая", "яя", "ое", "ее", "ые", "ие", "ый", "ий", "ой", "ей", "ом", "ем", "ам", "ям", "ах", "ях", "ов", "ев", "ью", "ую", "юю", "а", "я", "ы", "и", "е", "у", "ю", "о"]) {
        if (word.endsWith(ending) && word.length - ending.length >= 3) return word.slice(0, -ending.length);
      }
      return word;
    };
    window.floraGetPlantContext = (question, screenContext = null) => {
      if (typeof question !== "string" || !question.trim()) return screenContext ? [screenContext] : [];
      const questionWords = new Set(normalizePlantWords(question).map(stemPlantWord));
      const editDistance = (first, second) => {
        if (Math.abs(first.length - second.length) > 2) return 3;
        let previous = Array.from({ length: second.length + 1 }, (_, index) => index);
        for (let row = 1; row <= first.length; row += 1) {
          const current = [row];
          for (let column = 1; column <= second.length; column += 1) {
            current[column] = Math.min(
              current[column - 1] + 1,
              previous[column] + 1,
              previous[column - 1] + (first[row - 1] === second[column - 1] ? 0 : 1)
            );
          }
          previous = current;
        }
        return previous[second.length];
      };
      const matches = flowers
        .map((flower) => {
          const names = [flower.name, flower.englishName, flower.latin].filter(Boolean);
          const nameWords = new Set(names.flatMap((name) => normalizePlantWords(name).map(stemPlantWord)));
          const matchedWords = [...nameWords].flatMap((word) => {
            if (word.length <= 3) return [];
            if (questionWords.has(word)) return [{ word, score: 10 }];
            const distance = [...questionWords].reduce((best, queryWord) => {
              const threshold = queryWord.length >= 8 ? 2 : queryWord.length >= 5 ? 1 : 0;
              if (!threshold) return best;
              const candidateDistance = editDistance(word, queryWord);
              return candidateDistance <= threshold ? Math.min(best, candidateDistance) : best;
            }, 3);
            return distance <= 2 ? [{ word, score: 3 - distance }] : [];
          });
          return { flower, score: matchedWords.reduce((sum, match) => sum + match.score, 0) };
        })
        .filter((match) => match.score > 0)
        .sort((left, right) => right.score - left.score)
        .slice(0, 2)
        .map(({ flower }) => ({
          name: flower.name,
          latin: flower.latin,
          category: flower.plantGroup,
          description: flower.description,
          care: flower.microclimate,
        }));
      if (screenContext && !matches.some((plant) => plant.latin === screenContext.latin)) {
        return [screenContext, ...matches].slice(0, 2);
      }
      return matches;
    };
    window.floraGetCurrentScreenContext = () => {
      if (!activeFlower || !document.querySelector("#flower-dialog").open) return null;
      return {
        name: activeFlower.name,
        latin: activeFlower.latin,
        category: activeFlower.plantGroup,
        description: activeFlower.description,
        care: activeFlower.microclimate,
      };
    };
    const popularFlowerOrder = new Map(featuredFlowers.map((flower, index) => [flower.id, index]));
    const microclimateByGroup = {
      "Цветы": { light: "partial", water: "moderate" },
      "Кактусы": { light: "sun", water: "rare" },
      "Суккуленты": { light: "sun", water: "rare" },
      "Папоротники": { light: "shade", water: "moist" },
      "Хвойные": { light: "partial", water: "moderate" },
      "Деревья и кустарники": { light: "partial", water: "moderate" }
    };
    const microclimateByFamily = {
      Asteraceae: { light: "sun", water: "moderate" },
      Iridaceae: { light: "sun", water: "moderate" },
      Lamiaceae: { light: "sun", water: "rare" },
      Orchidaceae: { light: "partial", water: "moderate" },
      Paeoniaceae: { light: "sun", water: "moderate" },
      Hydrangeaceae: { light: "partial", water: "moist" },
      Cactaceae: { light: "sun", water: "rare" },
      Crassulaceae: { light: "sun", water: "rare" },
      Asphodelaceae: { light: "partial", water: "rare" },
      Nephrolepidaceae: { light: "shade", water: "moist" },
      Pteridaceae: { light: "partial", water: "moderate" },
      Aspleniaceae: { light: "shade", water: "moist" },
      Dryopteridaceae: { light: "shade", water: "moist" },
      Polypodiaceae: { light: "partial", water: "moderate" },
      Araceae: { light: "partial", water: "moderate" },
      Amaryllidaceae: { light: "sun", water: "moderate" },
      Pinaceae: { light: "sun", water: "moderate" },
      Cupressaceae: { light: "sun", water: "moderate" },
      Rosaceae: { light: "sun", water: "moderate" }
    };
    const microclimateByGenus = {
      Adiantum: { light: "shade", water: "moist" },
      Aloe: { light: "sun", water: "rare" },
      Begonia: { light: "partial", water: "moderate" },
      Calathea: { light: "shade", water: "moist" },
      Chlorophytum: { light: "partial", water: "moderate" },
      Cosmos: { light: "sun", water: "moderate" },
      Dracaena: { light: "partial", water: "moderate" },
      Epiphyllum: { light: "partial", water: "moderate" },
      Echeveria: { light: "sun", water: "rare" },
      Epipremnum: { light: "partial", water: "moderate" },
      Euphorbia: { light: "sun", water: "rare" },
      Ficus: { light: "partial", water: "moderate" },
      Hemerocallis: { light: "sun", water: "moderate" },
      Helianthus: { light: "sun", water: "moderate" },
      Haworthiopsis: { light: "partial", water: "rare" },
      Gasteria: { light: "partial", water: "rare" },
      Hydrangea: { light: "partial", water: "moist" },
      Iris: { light: "sun", water: "moderate" },
      Kalanchoe: { light: "sun", water: "rare" },
      Lavandula: { light: "sun", water: "rare" },
      Lilium: { light: "sun", water: "moderate" },
      Matricaria: { light: "sun", water: "moderate" },
      Monstera: { light: "partial", water: "moderate" },
      Narcissus: { light: "sun", water: "moderate" },
      Papaver: { light: "sun", water: "moderate" },
      Peperomia: { light: "partial", water: "moderate" },
      Phalaenopsis: { light: "partial", water: "moderate" },
      Philodendron: { light: "partial", water: "moderate" },
      Pteris: { light: "partial", water: "moderate" },
      Lophophora: { light: "sun", water: "rare" },
      Poinsettia: { light: "sun", water: "moderate" },
      Rosa: { light: "sun", water: "moderate" },
      Sansevieria: { light: "partial", water: "rare" },
      Schlumbergera: { light: "partial", water: "moderate" },
      Spathiphyllum: { light: "shade", water: "moist" },
      Strelitzia: { light: "sun", water: "moderate" },
      Tulipa: { light: "sun", water: "moderate" },
      Zamioculcas: { light: "shade", water: "rare" }
    };
    const microclimateLabels = {
      light: {
        sun: { icon: "sun", label: "Светолюбивое", title: "Предпочитает яркое освещение" },
        partial: { icon: "leaf", label: "Полутень", title: "Предпочитает рассеянный свет или полутень" },
        shade: { icon: "moon", label: "Теневыносливое", title: "Лучше переносит затенённые места" }
      },
      water: {
        rare: { icon: "water", label: "Редкий полив", title: "Поливать редко, после подсыхания грунта" },
        moderate: { icon: "water", label: "Умеренный полив", title: "Умеренный полив без переувлажнения" },
        moist: { icon: "water", label: "Влаголюбивое", title: "Предпочитает регулярно влажный грунт" }
      }
    };
    flowers.forEach((flower) => {
      const genus = flower.latin.split(/\s+/)[0];
      const genusCare = microclimateByGenus[genus] || {};
      const familyCare = microclimateByFamily[flower.family] || {};
      const groupCare = microclimateByGroup[flower.plantGroup] || microclimateByGroup["Цветы"];
      const light = microclimateLabels.light[flower.light] ? flower.light :
        genusCare.light || familyCare.light || groupCare.light;
      const water = microclimateLabels.water[flower.water] ? flower.water :
        genusCare.water || familyCare.water || groupCare.water;
      const lightBasis = microclimateLabels.light[flower.light] ? "вид" :
        genusCare.light ? `род ${genus}` : familyCare.light ? `семейство ${flower.family}` : `группа «${flower.plantGroup}»`;
      const waterBasis = microclimateLabels.water[flower.water] ? "вид" :
        genusCare.water ? `род ${genus}` : familyCare.water ? `семейство ${flower.family}` : `группа «${flower.plantGroup}»`;
      flower.microclimate = {
        light,
        water,
        lightBasis,
        waterBasis,
      };
    });
    const iconMarkup = (name, className = "ui-icon") =>
      `<svg class="${className}" aria-hidden="true" focusable="false"><use href="#icon-${name}"></use></svg>`;
    const microclimateMarkup = (flower) => {
      const light = {
        ...microclimateLabels.light[flower.microclimate.light],
        title: `${microclimateLabels.light[flower.microclimate.light].title}. Ориентир: ${flower.microclimate.lightBasis}; точные условия зависят от вида и места выращивания.`
      };
      const water = {
        ...microclimateLabels.water[flower.microclimate.water],
        title: `${microclimateLabels.water[flower.microclimate.water].title}. Ориентир: ${flower.microclimate.waterBasis}; проверяйте влажность грунта и требования вида.`
      };
      return `<div class="microclimate" aria-label="Ориентиры ухода">
        <span class="microclimate-chip" title="${light.title}">${iconMarkup(light.icon)}<span>${light.label}</span></span>
        <span class="microclimate-chip" title="${water.title}">${iconMarkup(water.icon)}<span>${water.label}</span></span>
      </div>`;
    };
    const careDifficultyByGroup = {
      "Цветы": "Средняя",
      "Кактусы": "Средняя",
      "Суккуленты": "Для новичков",
      "Папоротники": "Средняя",
      "Хвойные": "Для профи",
      "Деревья и кустарники": "Средняя"
    };
    const careDifficultyByGenus = {
      Adiantum: "Средняя",
      Euphorbia: "Средняя",
      Lilium: "Для профи",
      Phalaenopsis: "Средняя"
    };
    const placementByGroup = {
      "Цветы": "Для сада",
      "Кактусы": "Для дома",
      "Суккуленты": "Для дома",
      "Папоротники": "Для дома",
      "Хвойные": "Для сада",
      "Деревья и кустарники": "Для сада"
    };
    const placementByGenus = {
      Chlorophytum: "Для офиса",
      Dracaena: "Для офиса",
      Ficus: "Для офиса",
      Monstera: "Для офиса",
      Peperomia: "Для офиса",
      Sansevieria: "Для офиса",
      Spathiphyllum: "Для офиса",
      Zamioculcas: "Для офиса"
    };
    const validDifficulties = new Set(["Для новичков", "Средняя", "Для профи"]);
    const validSafetyStatuses = new Set(["safe", "toxic", "unknown"]);
    const validPlacements = new Set(["Для дома", "Для сада", "Для офиса"]);
    const lifeFormByGroup = {
      "Цветы": "Травянистое растение",
      "Кактусы": "Суккулент",
      "Суккуленты": "Суккулент",
      "Папоротники": "Многолетнее травянистое",
      "Хвойные": "Дерево или кустарник",
      "Деревья и кустарники": "Дерево или кустарник"
    };
    const lifeFormByGenus = {
      Lavandula: "Полукустарник",
      Rosa: "Кустарник",
      Helianthus: "Однолетнее травянистое",
      Tulipa: "Луковичный многолетник",
      Paeonia: "Травянистый многолетник",
      Hydrangea: "Кустарник"
    };
    function addProductDefaults(plants) {
      plants.forEach((plant) => {
        const genus = plant.latin.split(/\s+/)[0];
        if (!validDifficulties.has(plant.careDifficulty)) {
          plant.careDifficulty = careDifficultyByGenus[genus] || careDifficultyByGroup[plant.plantGroup] || "Средняя";
        }
        if (!validSafetyStatuses.has(plant.safetyStatus)) plant.safetyStatus = "unknown";
        if (!validPlacements.has(plant.placement)) {
          plant.placement = plant.latin === "Euphorbia milii"
            ? "Для дома"
            : placementByGenus[genus] || placementByGroup[plant.plantGroup] || "Для дома";
        }
        delete plant.stockStatus;
        delete plant.price;
        delete plant.sizes;
        plant.lifeForm ||= lifeFormByGenus[genus] || lifeFormByGroup[plant.plantGroup] || "Жизненная форма не указана";
        plant.category ||= plant.plantGroup;
        if (!Array.isArray(plant.humanTags) || plant.humanTags.some((tag) => typeof tag !== "string")) {
          plant.humanTags = [plant.category, plant.lifeForm];
        }
        if (!plant.dataQuality || typeof plant.dataQuality !== "object" || Array.isArray(plant.dataQuality)) plant.dataQuality = {
          care: {
            light: plant.microclimate.lightBasis,
            water: plant.microclimate.waterBasis
          },
          difficulty: careDifficultyByGenus[genus] ? "genus" : "group",
          placement: plant.latin === "Euphorbia milii" ? "species" : placementByGenus[genus] ? "genus" : "group",
          safety: plant.safetyStatus === "unknown" ? "unverified" : "curated",
          commerce: "demo"
        };
      });
      return plants;
    }
    addProductDefaults(flowers);
    const aliasesByLatin = {
      "Stenocereus eruca": ["ползучий дьявол", "ползучего дьявола", "creeping devil"]
    };
    const flowerById = new Map(flowers.map((flower, index) => {
      flower.searchTerms = [flower.name, flower.englishName, flower.latin, ...(aliasesByLatin[flower.latin] || [])]
        .join(" ")
        .toLocaleLowerCase("ru")
        .split(/[\s-]+/)
        .filter(Boolean);
      return [flower.id, { flower, index }];
    }));
    const prefetchedPlantDetails = new Map();
    const optimizedImageFallbacks = new Map();
    const webPSupported = document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
    const flowerSuggestions = document.querySelector("#flower-suggestions");
    const flowerSearch = document.querySelector("#flower-search");
    const suggestionButton = document.createElement("button");
    suggestionButton.className = "search-suggestion-option";
    suggestionButton.type = "button";
    suggestionButton.setAttribute("role", "option");
    flowerSuggestions.append(suggestionButton);
    const searchTokenScore = (query, term) => {
      const normalizedQuery = stemPlantWord(query);
      const normalizedTerm = stemPlantWord(term);
      if (normalizedTerm === normalizedQuery) return 0;
      if (normalizedTerm.startsWith(normalizedQuery)) return 1;
      if (normalizedQuery.length < 5 || normalizedTerm.length < 5 ||
          Math.abs(normalizedQuery.length - normalizedTerm.length) > 2) return Infinity;
      let previous = Array.from({ length: normalizedTerm.length + 1 }, (_, index) => index);
      for (let row = 1; row <= normalizedQuery.length; row += 1) {
        const current = [row];
        for (let column = 1; column <= normalizedTerm.length; column += 1) {
          current[column] = Math.min(
            current[column - 1] + 1,
            previous[column] + 1,
            previous[column - 1] + (normalizedQuery[row - 1] === normalizedTerm[column - 1] ? 0 : 1)
          );
        }
        previous = current;
      }
      const distance = previous[normalizedTerm.length];
      return distance <= (normalizedQuery.length >= 8 ? 2 : 1) ? distance + 2 : Infinity;
    };
    const searchMatchScore = (flower, query) => {
      const terms = query.split(/\s+/).filter(Boolean);
      const scores = terms.map((queryTerm) => Math.min(
        ...flower.searchTerms.map((term) => searchTokenScore(queryTerm, term))
      ));
      return scores.every(Number.isFinite) ? scores.reduce((sum, score) => sum + score, 0) : Infinity;
    };
    const resolvePlant = (query) => {
      const ignoredWords = new Set([
        "пожалуйста", "покажи", "показать", "открой", "открыть", "найди", "найти", "карточка",
        "карточку", "карточки", "страница", "страницу", "профиль", "растение", "растения",
        "растению", "растении", "цветок", "цветка", "цветы", "вид", "виды", "каталог",
        "мне", "его", "ее", "этого", "этой", "этот", "эту", "него", "неё", "нему",
        "который", "которая", "которое", "которые", "у", "нас", "есть", "же", "там",
        "the", "please", "show", "open", "find", "me", "its", "this", "plant", "card",
        "catalog", "profile", "page", "покаж", "откр", "найд", "карточк", "страниц",
        "профил", "растени", "цветк", "цвет", "пожалуйста", "кактус", "суккулент",
        "папоротник", "хвойн", "дерев", "кустарник"
      ]);
      const tokens = [...new Set(normalizePlantWords(query)
        .map(stemPlantWord)
        .filter((word) => word.length > 2 && !ignoredWords.has(word)))];
      if (!tokens.length) return null;
      const matches = flowers.map((flower) => {
        const scores = tokens.map((token) => Math.min(
          ...flower.searchTerms.map((term) => searchTokenScore(token, term))
        ));
        const matchedScores = scores.filter(Number.isFinite);
        const exactMatches = matchedScores.filter((score) => score === 0).length;
        const score = exactMatches * 10 + matchedScores.reduce((total, value) => total + (10 - value), 0);
        return { flower, score, matched: matchedScores.length };
      }).filter((match) => match.matched > 0)
        .sort((first, second) => second.score - first.score || second.matched - first.matched);
      return matches[0]?.flower || null;
    };
    window.floraFindPlant = (query) => {
      if (typeof query !== "string" || !query.trim()) return null;
      const flower = resolvePlant(query);
      return flower ? {
        id: flower.id,
        name: flower.name,
        latin: flower.latin,
        group: flower.plantGroup,
        description: flower.description,
        category: flower.category,
        care: flower.microclimate,
      } : null;
    };
    const closeSearchSuggestion = () => {
      flowerSuggestions.hidden = true;
      flowerSearch.setAttribute("aria-expanded", "false");
    };
    const updateSearchSuggestion = () => {
      const query = flowerSearch.value.trim().toLocaleLowerCase("ru");
      if (!query) {
        closeSearchSuggestion();
        return;
      }
      const suggestion = flowers
        .map((flower) => ({ flower, score: searchMatchScore(flower, query) }))
        .filter((match) => Number.isFinite(match.score))
        .sort((first, second) => first.score - second.score ||
          first.flower.name.localeCompare(second.flower.name, "ru"))[0]?.flower;
      if (!suggestion) {
        closeSearchSuggestion();
        return;
      }
      suggestionButton.dataset.suggestionName = suggestion.name;
      suggestionButton.innerHTML = `<span class="search-suggestion-title">${escapeHTML(suggestion.name)}</span><span class="search-suggestion-latin">${escapeHTML(suggestion.latin)}</span>`;
      suggestionButton.dataset.fuzzy = String(!suggestion.searchTerms.some((term) => term.startsWith(query)));
      suggestionButton.setAttribute("aria-label", suggestionButton.dataset.fuzzy === "true"
        ? `Возможно, вы искали ${suggestion.name}, ${suggestion.latin}`
        : `${suggestion.name}, ${suggestion.latin}`);
      flowerSuggestions.hidden = false;
      flowerSearch.setAttribute("aria-expanded", "true");
    };
    const acceptSearchSuggestion = () => {
      if (flowerSuggestions.hidden) return;
      flowerSearch.value = suggestionButton.dataset.suggestionName;
      closeSearchSuggestion();
      catalogPage = 1;
      renderCatalog();
      flowerSearch.focus();
    };
    flowerSearch.addEventListener("input", () => {
      catalogPage = 1;
      updateSearchSuggestion();
      renderCatalog();
    });
    flowerSearch.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" && !flowerSuggestions.hidden) {
        event.preventDefault();
        suggestionButton.focus();
      } else if (event.key === "Enter" && !flowerSuggestions.hidden) {
        event.preventDefault();
        acceptSearchSuggestion();
      } else if (event.key === "Escape") {
        closeSearchSuggestion();
      }
    });
    suggestionButton.addEventListener("click", acceptSearchSuggestion);
    suggestionButton.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSearchSuggestion();
        flowerSearch.focus();
      }
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-wrap")) closeSearchSuggestion();
    });
    let familyOptions = [];
    const refreshFamilyOptions = () => {
      familyOptions = [...new Map(flowers.map((flower) => [flower.family, flower.familyLabel])).entries()]
        .sort((a, b) => a[1].localeCompare(b[1], "ru"));
      ["picker-family"].forEach((id) => {
        const select = document.querySelector(`#${id}`);
        const allLabel = "Любое семейство";
        const groupSelect = document.querySelector("#picker-class");
        const addOptions = () => {
          const selected = select.value;
          const groupFamilies = groupSelect && groupSelect.value !== "all"
            ? new Set(flowers.filter((flower) => flower.plantGroup === groupSelect.value).map((flower) => flower.family))
            : null;
          select.replaceChildren(new Option(allLabel, "all"));
          familyOptions.filter(([key]) => !groupFamilies || groupFamilies.has(key))
            .forEach(([key, label]) => select.add(new Option(`${label} · ${key}`, key)));
          select.value = [...select.options].some((option) => option.value === selected) ? selected : "all";
        };
        addOptions();
        if (!select.dataset.groupChangeBound) {
          groupSelect?.addEventListener("change", () => {
            select.value = "all";
            addOptions();
          });
          select.dataset.groupChangeBound = "true";
        }
      });
    };
    refreshFamilyOptions();

    const storage = {
      get(key, fallback) {
        try {
          const value = localStorage.getItem(key);
          return value === null ? fallback : value;
        } catch (error) {
          console.warn(`Не удалось прочитать настройку «${key}» из локального хранилища.`, error);
          return fallback;
        }
      },
      set(key, value) {
        try {
          localStorage.setItem(key, value);
          window.dispatchEvent(new CustomEvent("flora:local-data-change", { detail: { key, value } }));
          return true;
        } catch (error) {
          console.warn(`Не удалось сохранить настройку «${key}» в локальном хранилище.`, error);
          return false;
        }
      },
    };
    const recentlyViewedKey = "flora-recently-viewed";
    let recentlyViewedIds = [];
    try {
      const savedRecentlyViewed = JSON.parse(storage.get(recentlyViewedKey, "[]"));
      if (!Array.isArray(savedRecentlyViewed)) throw new TypeError("Ожидался массив идентификаторов растений.");
      recentlyViewedIds = [...new Set(savedRecentlyViewed.filter((id) => typeof id === "string" && flowerById.has(id)))].slice(0, 5);
    } catch (error) {
      console.warn("Список недавно просмотренных повреждён; будет использован пустой список.", error);
    }
    let favoriteIds = [];
    try {
      const savedFavorites = JSON.parse(storage.get("flora-favorites", "[]"));
      if (!Array.isArray(savedFavorites)) throw new TypeError("Ожидался массив идентификаторов.");
      favoriteIds = [...new Set(savedFavorites.filter((id) => typeof id === "string" && flowerById.has(id)))];
    } catch (error) {
      console.warn("Сохранённое избранное повреждено; будет использована пустая коллекция.", error);
    }
    let collectionIds = [];
    try {
      const savedCollection = JSON.parse(storage.get("flora-collection", JSON.stringify(favoriteIds)));
      if (!Array.isArray(savedCollection)) throw new TypeError("Ожидался массив идентификаторов растений.");
      collectionIds = [...new Set(savedCollection.filter((id) => typeof id === "string" && flowerById.has(id)))];
    } catch (error) {
      console.warn("Сохранённая коллекция повреждена; будет использована пустая коллекция.", error);
    }
    const savedPlantIds = [...new Set([...collectionIds, ...favoriteIds])];
    const selectionChanged = savedPlantIds.length !== collectionIds.length || savedPlantIds.length !== favoriteIds.length;
    collectionIds = savedPlantIds;
    favoriteIds = savedPlantIds;
    if (selectionChanged) {
      const collectionSaved = storage.set("flora-collection", JSON.stringify(savedPlantIds));
      const favoritesSaved = storage.set("flora-favorites", JSON.stringify(savedPlantIds));
      if (!collectionSaved || !favoritesSaved) {
        console.warn("Не удалось объединить избранное с моей коллекцией. Проверьте доступное место в хранилище браузера.");
      }
    }
    const plantNotesKey = "flora-plant-notes";
    const plantNoteLimit = 5000;
    let plantNotes = {};
    try {
      const savedNotes = JSON.parse(storage.get(plantNotesKey, "{}"));
      if (!savedNotes || typeof savedNotes !== "object" || Array.isArray(savedNotes)) {
        throw new TypeError("Ожидался объект заметок по растениям.");
      }
      plantNotes = Object.fromEntries(
        Object.entries(savedNotes)
          .filter(([id, note]) => flowerById.has(id) && typeof note === "string")
          .map(([id, note]) => [id, note.slice(0, plantNoteLimit).trim()])
          .filter(([, note]) => note.length > 0)
      );
    } catch (error) {
      console.warn("Сохранённые заметки повреждены; будет использован пустой блокнот.", error);
    }
    const wateringDatesKey = "flora-watering-dates";
    let wateringDates = {};
    try {
      const savedWateringDates = JSON.parse(storage.get(wateringDatesKey, "{}"));
      if (!savedWateringDates || typeof savedWateringDates !== "object" || Array.isArray(savedWateringDates)) {
        throw new TypeError("Ожидался объект дат полива.");
      }
      wateringDates = Object.fromEntries(Object.entries(savedWateringDates).filter(([id, date]) =>
        flowerById.has(id) && typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(`${date}T00:00:00Z`))
      ));
    } catch (error) {
      console.warn("Сохранённые даты полива повреждены; будет показан пустой список.", error);
    }
    const bloomObservationsKey = "flora-season-observations";
    const now = new Date();
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let selectedSeasonMonth = now.getMonth();
    let selectedSeasonYear = now.getFullYear();
    let bloomObservations = {};
    try {
      const savedObservations = JSON.parse(storage.get(bloomObservationsKey, "{}"));
      if (!savedObservations || typeof savedObservations !== "object" || Array.isArray(savedObservations)) {
        throw new TypeError("Ожидался объект сезонных наблюдений.");
      }
      bloomObservations = Object.fromEntries(
        Object.entries(savedObservations)
          .filter(([id, periods]) => flowerById.has(id) && Array.isArray(periods))
          .map(([id, periods]) => [
            id,
            [...new Set(periods.filter((period) =>
              typeof period === "string" && /^\d{4}-(0[1-9]|1[0-2])$/.test(period)
            ))]
          ])
          .filter(([, periods]) => periods.length > 0)
      );
    } catch (error) {
      console.warn("Сохранённые сезонные наблюдения повреждены; будет показан пустой трекер.", error);
    }
    let activeFilter = "all";
    let activeLightFilter = "all";
    let activeWaterFilter = "all";
    let activeFlower = null;
    let selectedCompareIds = [];
    let catalogPage = 1;
    let activePage = "";
    let botanistScore = 0;
    let botanistTimer = 0;
    let botanistPlant = null;
    const unavailableQuizPhotos = new Set();
    const catalogPageSize = 24;

    const pageIds = ["home", "catalog", "collection", "luck", "botanist", "picker", "season", "guide"];
    const pageTitles = { home: "Главная", catalog: "Атлас растений", collection: "Моя коллекция", luck: "Случайное растение", botanist: "Угадай растение", picker: "Подбор по настроению", season: "Сезонный трекер", guide: "О проекте" };
    const pagePanels = document.querySelectorAll("[data-page]");
    const dockTabs = document.querySelectorAll(".dock-tab");
    const grid = document.querySelector("#flower-grid");
    const collectionGrid = document.querySelector("#collection-grid");

    function hasPlantNote(id) {
      return Boolean(plantNotes[id]);
    }

    function renderRecentlyViewed() {
      const section = document.querySelector("#recent-plants");
      const list = document.querySelector("#recent-plants-list");
      if (!section || !list) return;
      section.hidden = recentlyViewedIds.length === 0;
      list.innerHTML = recentlyViewedIds.map((id) => {
        const flower = flowerById.get(id)?.flower;
        if (!flower) return "";
        const imageUrl = flowerImageUrl(flower, 240);
        return `<button class="recent-plant" type="button" data-open="${escapeHTML(flower.id)}" aria-label="Открыть растение: ${escapeHTML(flower.name)} (${escapeHTML(flower.latin)})">
          ${imageUrl ? `<img src="${escapeHTML(imageUrl)}" alt="" loading="lazy" decoding="async">` : `<span class="recent-plant-placeholder" aria-hidden="true">${iconMarkup("flower")}</span>`}
          <span class="recent-plant-name">${escapeHTML(flower.name)}</span>
        </button>`;
      }).join("");
      list.querySelectorAll("img").forEach((image) => image.addEventListener("error", () => {
        const placeholder = document.createElement("span");
        placeholder.className = "recent-plant-placeholder";
        placeholder.setAttribute("aria-hidden", "true");
        placeholder.innerHTML = iconMarkup("flower");
        image.replaceWith(placeholder);
      }, { once: true }));
    }

    function recordRecentlyViewed(flower) {
      recentlyViewedIds = [flower.id, ...recentlyViewedIds.filter((id) => id !== flower.id)].slice(0, 5);
      storage.set(recentlyViewedKey, JSON.stringify(recentlyViewedIds));
      renderRecentlyViewed();
    }

    function plantNoteIndicator(flower) {
      return hasPlantNote(flower.id)
        ? `<span class="plant-note-indicator" title="Есть личная заметка" aria-label="Есть личная заметка">${iconMarkup("note")}</span>`
        : "";
    }

    function localDateKey(date = new Date()) {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    }

    function wateringInfo(flower) {
      const interval = { rare: 14, moderate: 7, moist: 3 }[flower.microclimate?.water] || 0;
      const lastDate = wateringDates[flower.id] || "";
      const daysAgo = lastDate
        ? Math.max(0, Math.floor((Date.parse(`${localDateKey()}T00:00:00Z`) - Date.parse(`${lastDate}T00:00:00Z`)) / 86400000))
        : null;
      return { interval, lastDate, daysAgo, due: Boolean(interval && daysAgo !== null && daysAgo >= interval) };
    }

    function wateringMarkup(flower, detail = false) {
      if (!collectionIds.includes(flower.id)) return "";
      const info = wateringInfo(flower);
      const lastStatus = info.daysAgo === null
        ? "Полив ещё не отмечен."
        : `Последний полив: ${info.daysAgo} ${russianPlural(info.daysAgo, "день", "дня", "дней")} назад.`;
      const nextStatus = info.interval && info.daysAgo !== null
        ? `Следующий полив примерно через ${Math.max(0, info.interval - info.daysAgo)} ${russianPlural(Math.max(0, info.interval - info.daysAgo), "день", "дня", "дней")} · ориентир, зависит от условий.`
        : info.interval && info.daysAgo === null
          ? `Ориентировочный интервал: около ${info.interval} ${russianPlural(info.interval, "дня", "дней", "дней")}; зависит от условий.`
          : "";
      return `<div class="watering-card ${info.due ? "is-due" : ""} ${detail ? "detail-watering" : ""}">
        ${info.due ? '<span class="watering-due-label">Пора полить</span>' : ""}
        <p class="watering-status">${lastStatus}</p>
        ${nextStatus ? `<p class="watering-status">${nextStatus}</p>` : ""}
        <button class="button secondary small" type="button" data-water="${escapeHTML(flower.id)}" aria-label="Отметить полив сегодня: ${escapeHTML(flower.name)}">Полил(а) сегодня</button>
        <p class="watering-status" data-watering-status role="status" aria-live="polite" hidden></p>
      </div>`;
    }

    function markPlantWatered(id) {
      if (!collectionIds.includes(id)) return;
      const nextDates = { ...wateringDates, [id]: localDateKey() };
      if (!storage.set(wateringDatesKey, JSON.stringify(nextDates))) {
        const status = document.querySelector("[data-watering-status]");
        if (status) {
          status.textContent = "Не удалось сохранить дату полива на этом устройстве.";
          status.hidden = false;
        }
        return;
      }
      wateringDates = nextDates;
      renderCatalog();
      if (activeFlower?.id === id && document.querySelector("#flower-dialog").open) {
        document.querySelector("#flower-dialog").close();
        showFlowerDetail(id);
      }
    }

    function savePlantNote(id, value) {
      if (!flowerById.has(id)) return false;
      const note = value.trim();
      const nextNotes = { ...plantNotes };
      if (note) nextNotes[id] = note.slice(0, plantNoteLimit);
      else delete nextNotes[id];
      if (!storage.set(plantNotesKey, JSON.stringify(nextNotes))) return false;
      plantNotes = nextNotes;
      renderCatalog();
      return true;
    }

    function selectedSeasonKey() {
      return `${selectedSeasonYear}-${String(selectedSeasonMonth + 1).padStart(2, "0")}`;
    }

    function hasBloomObservation(id, period = selectedSeasonKey()) {
      return bloomObservations[id]?.includes(period) || false;
    }

    function setBloomObservation(id, isBlooming) {
      if (!flowerById.has(id)) return;
      const period = selectedSeasonKey();
      const current = bloomObservations[id] || [];
      const nextPeriods = isBlooming
        ? [...new Set([...current, period])]
        : current.filter((item) => item !== period);
      const nextObservations = { ...bloomObservations };
      if (nextPeriods.length) nextObservations[id] = nextPeriods;
      else delete nextObservations[id];
      if (!storage.set(bloomObservationsKey, JSON.stringify(nextObservations))) {
        document.querySelector("#season-summary").textContent = "Не удалось сохранить запись. Проверьте свободное место на устройстве.";
        return;
      }
      bloomObservations = nextObservations;
      renderSeasonTracker();
    }

    function renderSeasonTracker() {
      const monthGrid = document.querySelector("#season-months");
      const yearSelect = document.querySelector("#season-year");
      if (!monthGrid || !yearSelect) return;
      const years = Array.from({ length: 11 }, (_, index) => now.getFullYear() - 5 + index);
      yearSelect.innerHTML = years.map((year) => `<option value="${year}">${year}</option>`).join("");
      if (!years.includes(selectedSeasonYear)) {
        years.push(selectedSeasonYear);
        years.sort((first, second) => first - second);
        yearSelect.innerHTML = years.map((year) => `<option value="${year}">${year}</option>`).join("");
      }
      yearSelect.value = String(selectedSeasonYear);
      const monthCounts = Array(12).fill(0);
      Object.values(bloomObservations).forEach((periods) => {
        periods.forEach((period) => {
          const [year, month] = period.split("-").map(Number);
          if (year === selectedSeasonYear) monthCounts[month - 1] += 1;
        });
      });
      monthGrid.innerHTML = monthNames.map((month, index) =>
        `<button class="season-month ${index === selectedSeasonMonth ? "is-selected" : ""}" type="button" data-season-month="${index}" aria-pressed="${index === selectedSeasonMonth}" aria-label="${month}, ${monthCounts[index]} ${russianPlural(monthCounts[index], "наблюдение", "наблюдения", "наблюдений")}"><span>${month}</span><small>${monthCounts[index]}</small></button>`
      ).join("");

      const period = selectedSeasonKey();
      const recorded = flowers
        .filter((flower) => hasBloomObservation(flower.id, period))
        .sort((first, second) => first.name.localeCompare(second.name, "ru"));
      const monthName = monthNames[selectedSeasonMonth].toLocaleLowerCase("ru");
      document.querySelector("#season-summary").textContent =
        `${recorded.length} ${russianPlural(recorded.length, "наблюдение", "наблюдения", "наблюдений")} · ${monthName} ${selectedSeasonYear}`;
      document.querySelector("#season-observations-hint").textContent =
        recorded.length ? `Отмечено в ${monthName} ${selectedSeasonYear}` : `Пока нет записей за ${monthName} ${selectedSeasonYear}`;
      document.querySelector("#season-observation-list").innerHTML = recorded.length
        ? recorded.map((flower) => `
          <article class="season-observation">
            <button class="season-observation-plant" type="button" data-open="${escapeHTML(flower.id)}">
              <span>${escapeHTML(flower.name)}<small>${escapeHTML(flower.latin)}</small></span>
            </button>
            <button class="season-remove" type="button" data-season-toggle="${escapeHTML(flower.id)}" aria-label="Убрать наблюдение: ${escapeHTML(flower.name)}">${iconMarkup("close")}</button>
          </article>`).join("")
        : `<p class="season-empty">Отмеченные растения появятся здесь.</p>`;
      renderSeasonSearch();
    }

    function renderSeasonSearch() {
      const results = document.querySelector("#season-search-results");
      const query = document.querySelector("#season-search").value.trim().toLocaleLowerCase("ru");
      if (!query) {
        results.innerHTML = `<p class="season-empty">Введите название на русском или латинице.</p>`;
        return;
      }
      const terms = query.split(/\s+/).filter(Boolean);
      const matches = flowers
        .filter((flower) => terms.every((term) => flower.searchTerms.some((searchTerm) => searchTerm.startsWith(term))))
        .sort((first, second) => first.name.localeCompare(second.name, "ru"))
        .slice(0, 8);
      results.innerHTML = matches.length
        ? matches.map((flower) => {
          const isRecorded = hasBloomObservation(flower.id);
          return `<article class="season-search-result">
            <button class="season-observation-plant" type="button" data-open="${escapeHTML(flower.id)}">
              <span>${escapeHTML(flower.name)}<small>${escapeHTML(flower.latin)}</small></span>
            </button>
            <button class="season-add ${isRecorded ? "is-recorded" : ""}" type="button" data-season-toggle="${escapeHTML(flower.id)}" aria-label="${isRecorded ? "Убрать наблюдение" : "Отметить цветение"}: ${escapeHTML(flower.name)}">${isRecorded ? "Отмечено" : "Добавить"}</button>
          </article>`;
        }).join("")
        : `<p class="season-empty">Растение не найдено. Проверьте написание или попробуйте латинское название.</p>`;
    }

    function showPage(id, { push = true } = {}) {
      const page = pageIds.includes(id) ? id : "home";
      const previousPage = activePage;
      activePage = page;
      pagePanels.forEach((panel) => { panel.hidden = panel.dataset.page !== page; });
      dockTabs.forEach((tab) => {
        if (tab.dataset.go === page) tab.setAttribute("aria-current", "page");
        else tab.removeAttribute("aria-current");
      });
      document.title = `${pageTitles[page]} — Flora-Anotomy`;
      if (push && location.hash !== `#${page}`) history.pushState({ page }, "", `#${page}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (page === "luck" && previousPage !== "luck") showRandomFlower();
      if (page === "botanist" && previousPage !== "botanist") startBotanistQuestion();
      if (page === "season") renderSeasonTracker();
    }
    window.floraNavigateTo = (page) => {
      if (!pageIds.includes(page)) return false;
      showPage(page);
      return true;
    };

    function flowerImageUrl(flower, width = 500) {
      if (flower.photo) {
        let source;
        try {
          source = new URL(flower.photo);
        } catch {
          return "";
        }
        const isINaturalist = source.protocol === "https:" &&
          source.hostname === "inaturalist-open-data.s3.amazonaws.com";
        const connection = navigator.connection;
        const saveData = Boolean(connection?.saveData) || /(^|-)2g$|^3g$/i.test(connection?.effectiveType || "");
        const variant = width > 700 ? "large" : "medium";
        const fallbackURL = new URL(flower.photo);
        fallbackURL.pathname = fallbackURL.pathname.replace(
          /(\/photos\/\d+\/)(?:original|square|medium|large)\.(jpe?g|png|gif)$/i,
          `$1${variant}.$2`
        );
        if (!isINaturalist || !webPSupported) return fallbackURL.href;

        const requestedWidth = Math.max(240, Math.min(
          width,
          Math.round((window.innerWidth || width) * (window.devicePixelRatio || 1)),
          saveData ? 480 : 1200
        ));
        const quality = saveData ? 62 : (navigator.deviceMemory && navigator.deviceMemory <= 4 ? 74 : 84);
        const optimizedURL = new URL("https://wsrv.nl/");
        optimizedURL.searchParams.set("url", source.href.replace(
          /(\/photos\/\d+\/)(?:square|medium|large)\.(jpe?g|png|gif)$/i,
          "$1original.$2"
        ));
        optimizedURL.searchParams.set("w", String(requestedWidth));
        optimizedURL.searchParams.set("q", String(quality));
        optimizedURL.searchParams.set("output", "webp");
        optimizedURL.searchParams.set("maxage", "1y");
        optimizedImageFallbacks.set(optimizedURL.href, fallbackURL.href);
        if (optimizedImageFallbacks.size > 256) {
          optimizedImageFallbacks.delete(optimizedImageFallbacks.keys().next().value);
        }
        return optimizedURL.href;
      }
      return "";
    }

    document.addEventListener("error", (event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement)) return;
      const fallbackURL = optimizedImageFallbacks.get(image.currentSrc) ||
        optimizedImageFallbacks.get(image.src);
      if (!fallbackURL || image.dataset.imageFallback === "used") return;
      image.dataset.imageFallback = "used";
      image.src = fallbackURL;
      event.stopImmediatePropagation();
    }, true);

    function safeExternalURL(value) {
      try {
        const url = new URL(value, location.href);
        return url.protocol === "https:" ? url.href : "#";
      } catch {
        return "#";
      }
    }

    function licenseLabel(license) {
      const labels = {
        "cc-by": "CC BY 4.0", "cc-by-sa": "CC BY-SA 4.0",
        "cc-by-nc": "CC BY-NC 4.0", "cc-by-nc-sa": "CC BY-NC-SA 4.0",
        "cc-by-nc-nd": "CC BY-NC-ND 4.0", cc0: "CC0 1.0", pd: "Public domain"
      };
      const normalized = String(license || "").toLowerCase();
      const licensePath = normalized.match(/\/licenses\/(by(?:-nc)?(?:-sa|-nd)?)(?:\/(\d+(?:\.\d+)?))?\//);
      const code = normalized.match(/cc-(?:by|0)(?:-nc)?(?:-sa|-nd)?/)?.[0] ||
        licensePath?.[1] ||
        (normalized.includes("publicdomain/zero") ? "cc0" : normalized.includes("publicdomain/mark") ? "pd" : "");
      const labelCode = code && !code.startsWith("cc-") ? `cc-${code}` : code;
      const label = labels[normalized] || labels[labelCode];
      return label && licensePath?.[2] ? label.replace(/\d+(?:\.\d+)?$/, licensePath[2]) :
        label || (normalized.includes("publicdomain") ? "Общественное достояние" : license);
    }

    function licenseURL(license) {
      const normalized = String(license || "").toLowerCase();
      const licensePath = normalized.match(/\/licenses\/(by(?:-nc)?(?:-sa|-nd)?)(?:\/(\d+(?:\.\d+)?))?\//);
      const code = normalized.match(/cc-(?:by|0)(?:-nc)?(?:-sa|-nd)?/)?.[0] ||
        licensePath?.[1] ||
        (normalized.includes("publicdomain/zero") ? "cc0" : normalized.includes("publicdomain/mark") ? "pd" : "");
      if (code === "cc0" || normalized.includes("publicdomain/zero")) return "https://creativecommons.org/publicdomain/zero/1.0/";
      if (code === "pd" || normalized.includes("publicdomain/mark")) return "https://creativecommons.org/publicdomain/mark/1.0/";
      if (licensePath) return `https://creativecommons.org/licenses/${licensePath[1]}/${licensePath[2] || "4.0"}/`;
      if (code?.startsWith("cc-")) return `https://creativecommons.org/licenses/${code}/4.0/`;
      return safeExternalURL(license) || "#";
    }

    function escapeHTML(value) {
      return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[character]);
    }

    function russianPlural(value, one, few, many) {
      const lastTwo = value % 100;
      if (lastTwo >= 11 && lastTwo <= 14) return many;
      const last = value % 10;
      return last === 1 ? one : last >= 2 && last <= 4 ? few : many;
    }

    const adminPanel = document.querySelector("#admin-panel");
    const adminStatus = document.querySelector("#admin-status");
    const parseCsv = (text) => {
      const rows = [];
      let row = [];
      let cell = "";
      let quoted = false;
      for (let index = 0; index < text.length; index += 1) {
        const character = text[index];
        if (quoted && character === '"' && text[index + 1] === '"') {
          cell += '"';
          index += 1;
        } else if (character === '"') {
          quoted = !quoted;
        } else if (!quoted && character === ",") {
          row.push(cell);
          cell = "";
        } else if (!quoted && (character === "\n" || character === "\r")) {
          if (character === "\r" && text[index + 1] === "\n") index += 1;
          row.push(cell);
          if (row.some((value) => value.trim())) rows.push(row);
          row = [];
          cell = "";
        } else {
          cell += character;
        }
      }
      if (quoted) throw new Error("CSV повреждён: не закрыта кавычка.");
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      return rows;
    };
    const csvCell = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const openAdminPanel = () => {
      adminPanel.hidden = false;
      adminStatus.textContent = "Изменения применяются только в этом браузере.";
    };
    const downloadCatalogCsv = () => {
      const header = ["id", "name", "latin", "family", "group", "life_form", "category", "description"];
      const rows = flowers.map((flower) => [
        flower.id,
        flower.name,
        flower.latin,
        flower.family,
        flower.plantGroup,
        flower.lifeForm,
        flower.category,
        flower.description
      ]);
      const csv = `\uFEFF${[header, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
      const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "flora-catalog.csv";
      link.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      adminStatus.textContent = `Экспортировано растений: ${flowers.length}.`;
    };
    const importCatalogCsv = (text) => {
      const rows = parseCsv(text.replace(/^\uFEFF/, ""));
      if (rows.length < 2) throw new Error("CSV-файл пуст или не содержит строк растений.");
      const headers = rows[0].map((header) => header.trim().toLowerCase());
      const column = (...names) => headers.findIndex((header) => names.includes(header));
      const idColumn = column("id");
      const nameColumn = column("name", "название");
      const latinColumn = column("latin", "латинское название");
      const familyColumn = column("family", "семейство");
      const groupColumn = column("group", "группа");
      const descriptionColumn = column("description", "описание");
      const lifeFormColumn = column("life_form", "lifeform", "жизненная форма");
      const categoryColumn = column("category", "категория");
      if (idColumn < 0 || nameColumn < 0 || descriptionColumn < 0) {
        throw new Error("В CSV должны быть столбцы id, name и description. Для новых видов нужны latin, family и group.");
      }
      const knownFlowers = new Map(flowers.map((flower) => [flower.id, flower]));
      const updates = new Map();
      const additions = [...importedSpecies];
      rows.slice(1).forEach((row, index) => {
        let id = row[idColumn]?.trim();
        const name = row[nameColumn]?.trim();
        const latin = latinColumn >= 0 ? row[latinColumn]?.trim() : "";
        const description = row[descriptionColumn]?.trim() || "";
        const family = familyColumn >= 0 ? row[familyColumn]?.trim() : "";
        const plantGroup = groupColumn >= 0 ? row[groupColumn]?.trim() : "";
        if (updates.has(id) || (id && additions.some((item) => item.id === id))) {
          throw new Error(`В CSV повторяется id «${id}».`);
        }
        if (!name || name.length > 120) throw new Error(`Некорректное русское название в строке ${index + 2}.`);
        if (description.length > 3000) throw new Error(`Описание в строке ${index + 2} должно быть не длиннее 3000 символов.`);
        if (description && description.length < 40) throw new Error(`Описание в строке ${index + 2} должно содержать не менее 40 символов.`);
        const flower = knownFlowers.get(id);
        if (flower) {
          updates.set(id, {
            name,
            description: description || flower.description,
            ...(lifeFormColumn >= 0 && row[lifeFormColumn]?.trim() ? { lifeForm: row[lifeFormColumn].trim() } : {}),
            ...(categoryColumn >= 0 && row[categoryColumn]?.trim() ? { category: row[categoryColumn].trim() } : {})
          });
          return;
        }
        if (!latin || !family || !plantGroup) {
          throw new Error(`Новый вид в строке ${index + 2} должен содержать латинское имя, семейство и группу.`);
        }
        if (!/^[A-Za-z][A-Za-z .'-]{1,119}$/.test(latin)) {
          throw new Error(`Укажите латинское научное имя в строке ${index + 2}.`);
        }
        if (!/^[\p{L}\d][\p{L}\d_-]{1,79}$/u.test(id || "")) {
          id = `import-${latin.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
        }
        if (!id || knownFlowers.has(id) || additions.some((item) => item.id === id)) {
          throw new Error(`Не удалось создать уникальный id для строки ${index + 2}.`);
        }
        if (flowers.some((item) => item.latin.toLowerCase() === latin.toLowerCase()) ||
            additions.some((item) => item.latin.toLowerCase() === latin.toLowerCase())) {
          throw new Error(`Латинское имя «${latin}» уже есть в атласе.`);
        }
        if (!["Цветы", "Кактусы", "Суккуленты", "Папоротники", "Хвойные", "Деревья и кустарники"].includes(plantGroup)) {
          throw new Error(`Неизвестная группа растений в строке ${index + 2}.`);
        }
        const item = {
          id,
          name,
          latin,
          family,
          plantGroup,
          description: description || `${name} — описание пока не добавлено.`,
          lifeForm: lifeFormColumn >= 0 ? row[lifeFormColumn]?.trim() : "",
          category: categoryColumn >= 0 ? row[categoryColumn]?.trim() : plantGroup
        };
        additions.push(item);
        updates.set(id, item);
      });
      const additionsWithoutVerifiedMedia = [...updates.keys()].filter((id) => !knownFlowers.has(id));
      if (additionsWithoutVerifiedMedia.length) {
        throw new Error("Новые виды без проверенной фотографии и атрибуции не добавлены. CSV может обновлять существующие карточки.");
      }
      if (!updates.size) throw new Error("В CSV не найдено изменений или новых записей.");
      const nextOverrides = { ...catalogOverrides };
      updates.forEach((update, id) => {
        if (knownFlowers.has(id)) nextOverrides[id] = { ...(nextOverrides[id] || {}), ...update };
      });
      nextOverrides.__additions = additions;
      if (!storage.set("flora-catalog-overrides", JSON.stringify(nextOverrides))) {
        throw new Error("Не удалось сохранить каталог в этом браузере. Проверьте свободное место.");
      }
      catalogOverrides = nextOverrides;
      updates.forEach((update, id) => {
        const flower = knownFlowers.get(id);
        if (!flower) {
          const familyLabel = familyLabels[update.family] || familyAliases[update.family] || update.family;
          const genus = update.latin.split(/\s+/)[0];
          const groupCare = microclimateByGroup[update.plantGroup];
          const added = {
            ...update,
            familyLabel,
            classKey: "Magnoliopsida",
            classLabel: classLabels.Magnoliopsida,
            order: "Не определён",
            kind: "botanical",
            kindLabel: familyLabel,
            nameLanguage: "Русское название добавлено через CSV",
            photo: "",
            photoCredit: "",
            photoLicense: "",
            photoSource: "",
            photoSourceName: "",
            photoVerified: false,
            emoji: "✿",
            mood: [],
            season: [],
            color: "",
            time: "",
            englishName: "",
            safetyStatus: "unknown",
            careDifficulty: "Средняя",
            placement: "Для дома",
            microclimate: {
              light: groupCare.light,
              water: groupCare.water,
              lightBasis: `группа «${update.plantGroup}»`,
              waterBasis: `группа «${update.plantGroup}»`,
            },
            dataQuality: { care: { light: "group", water: "group" }, description: "user", taxonomy: "user" },
            humanTags: [update.category || update.plantGroup, update.lifeForm || lifeFormByGroup[update.plantGroup]]
          };
          if (!added.lifeForm) added.lifeForm = lifeFormByGenus[genus] || lifeFormByGroup[update.plantGroup];
          flowers.push(added);
          added.searchTerms = [added.name, added.latin].join(" ").toLocaleLowerCase("ru").split(/[\s-]+/).filter(Boolean);
          flowerById.set(id, { flower: added, index: flowers.length - 1 });
          return;
        }
        flower.name = update.name;
        flower.description = update.description;
        flower.descriptionProvided = flower.description.length >= 40;
        flower.lifeForm = update.lifeForm || flower.lifeForm;
        flower.category = update.category || flower.category;
        flower.humanTags = [flower.category, flower.lifeForm];
        flower.searchTerms = [flower.name, flower.englishName, flower.latin]
          .join(" ")
          .toLocaleLowerCase("ru")
          .split(/[\s-]+/)
          .filter(Boolean);
      });
      if (activeFlower && updates.has(activeFlower.id) && document.querySelector("#flower-dialog").open) {
        showFlowerDetail(activeFlower.id);
      }
      refreshFamilyOptions();
      renderCatalog();
      renderCollection();
      adminStatus.textContent = `Импортировано записей: ${updates.size}.`;
    };
    document.querySelector("#admin-close").addEventListener("click", () => {
      adminPanel.hidden = true;
    });
    document.querySelector("#catalog-export").addEventListener("click", downloadCatalogCsv);
    const importFile = document.querySelector("#catalog-import-file");
    document.querySelector("#catalog-import-open").addEventListener("click", () => importFile.click());
    importFile.addEventListener("change", async () => {
      const [file] = importFile.files || [];
      if (!file) return;
      try {
        if (file.size > 2 * 1024 * 1024) throw new Error("CSV-файл слишком большой. Максимальный размер — 2 МБ.");
        importCatalogCsv(await file.text());
      } catch (error) {
        console.error("Не удалось импортировать каталог.", error);
        adminStatus.textContent = error instanceof Error ? error.message : "Не удалось прочитать CSV.";
      } finally {
        importFile.value = "";
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") {
        event.preventDefault();
        adminPanel.hidden ? openAdminPanel() : (adminPanel.hidden = true);
      }
    });

    function renderCatalog() {
      grid.setAttribute("aria-busy", "true");
      const query = document.querySelector("#flower-search").value.trim().toLocaleLowerCase("ru");
      const favoriteSet = new Set(favoriteIds);
      const visible = flowers.filter((flower) => {
        const matchesQuery = !query || Number.isFinite(searchMatchScore(flower, query));
        const matchesFilter = activeFilter === "all" || flower.plantGroup === activeFilter;
        const matchesLight = activeLightFilter === "all" || flower.microclimate.light === activeLightFilter;
        const matchesWater = activeWaterFilter === "all" || flower.microclimate.water === activeWaterFilter;
        return matchesQuery && matchesFilter && matchesLight && matchesWater;
      });
      const sortMode = document.querySelector("#catalog-sort").value;
      const compareAlphabetically = (first, second) => first.name.localeCompare(second.name, "ru");
      if (sortMode === "alphabetical") {
        visible.sort(compareAlphabetically);
      } else if (sortMode === "popular") {
        visible.sort((first, second) =>
          (popularFlowerOrder.get(first.id) ?? Number.MAX_SAFE_INTEGER) -
          (popularFlowerOrder.get(second.id) ?? Number.MAX_SAFE_INTEGER) ||
          compareAlphabetically(first, second)
        );
      }
      const pageCount = Math.max(1, Math.ceil(visible.length / catalogPageSize));
      catalogPage = Math.max(1, Math.min(catalogPage, pageCount));
      const pageFlowers = visible.slice((catalogPage - 1) * catalogPageSize, catalogPage * catalogPageSize);
      const noSearchResults = Boolean(query) && visible.length === 0;
      const searchEmpty = document.querySelector("#search-empty");
      searchEmpty.hidden = !noSearchResults;
      grid.hidden = noSearchResults;
      grid.innerHTML = "";
      const cards = document.createDocumentFragment();
      pageFlowers.forEach((flower, index) => {
        const card = document.createElement("article");
        card.className = "flower-card";
        card.dataset.prefetchPlant = flower.id;
        const source = safeExternalURL(flower.photoSource || `https://www.gbif.org/species/search?q=${encodeURIComponent(flower.latin)}`);
        const credit = flower.photoCredit || "";
        const creditLabel = credit.match(/\(c\)\s*([^,]+)/)?.[1] || credit || "Автор не указан";
        const license = flower.photoLicense ? licenseLabel(flower.photoLicense) : "";
        const isFavorite = favoriteSet.has(flower.id);
        const imageUrl = flowerImageUrl(flower, 500);
        const photoAttribution = flower.photo
          ? `<a class="photo-credit" href="${escapeHTML(source)}" target="_blank" rel="noopener noreferrer" title="${escapeHTML(`${credit} · ${license} ${flower.photoNote}`)}">${flower.photoVerified ? "© " : "Иллюстрация · © "}${escapeHTML(creditLabel)}</a>`
          : `<span class="photo-credit">Фотография не добавлена</span>`;
        card.innerHTML = `
          <div class="flower-photo-wrap">
            ${imageUrl ? `<img class="flower-photo" src="${escapeHTML(imageUrl)}" alt="${escapeHTML(flower.name)}" loading="${index > 1 ? "lazy" : "eager"}" decoding="async" fetchpriority="${index < 2 ? "high" : "auto"}" width="500" height="375">` : ""}
            <div class="flower-photo-placeholder" ${imageUrl ? "hidden" : ""} aria-label="Фотография пока не добавлена">${iconMarkup("flower")}<span>Фото не добавлено</span></div>
            <span class="flower-tag">${escapeHTML(flower.plantGroup)}</span>
            <button class="favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-favorite="${flower.id}" aria-label="${isFavorite ? "Убрать из избранного" : "Добавить в избранное"}" aria-pressed="${isFavorite}">${iconMarkup("heart")}</button>
            ${plantNoteIndicator(flower)}
            ${photoAttribution}
          </div>
          <div class="flower-info">
            <div class="flower-card-name"><h3>${escapeHTML(flower.name)}</h3><div class="flower-latin">${escapeHTML(flower.latin)}</div></div>
            <div class="plant-tags">${[flower.category, flower.lifeForm].filter(Boolean).map((tag) => `<span class="plant-tag">${escapeHTML(tag)}</span>`).join("")}</div>
            ${microclimateMarkup(flower)}
            <p class="flower-description">${escapeHTML(flower.description)}</p>
            <p class="botanical-meta">${escapeHTML(flower.familyLabel)}</p>
            <div class="flower-card-actions">
              <button class="button ghost small" type="button" data-details="${flower.id}">Подробнее</button>
              <button class="compare-select-button" type="button" data-compare="${escapeHTML(flower.id)}" aria-label="${selectedCompareIds.includes(flower.id) ? "Убрать из сравнения" : "Добавить в сравнение"}: ${escapeHTML(flower.name)}" aria-pressed="${selectedCompareIds.includes(flower.id)}" title="${selectedCompareIds.includes(flower.id) ? "Убрать из сравнения" : "Добавить в сравнение"}">${iconMarkup("transfer")}<span>${selectedCompareIds.includes(flower.id) ? "Убрать" : "Сравнить"}</span></button>
            </div>
          </div>`;
        const image = card.querySelector(".flower-photo");
        image?.addEventListener("error", () => {
          image.removeAttribute("src");
          image.hidden = true;
          card.querySelector(".flower-photo-placeholder").hidden = false;
          card.querySelector(".photo-credit").textContent = "Фотография временно недоступна";
        }, { once: true });
        cards.append(card);
      });
      grid.append(cards);
      grid.setAttribute("aria-busy", "false");
      const firstItem = visible.length ? (catalogPage - 1) * catalogPageSize + 1 : 0;
      const lastItem = Math.min(catalogPage * catalogPageSize, visible.length);
      const careFiltersActive = activeLightFilter !== "all" || activeWaterFilter !== "all";
      document.querySelector("#catalog-count").textContent = `Показано ${firstItem}–${lastItem} из ${visible.length} растений${careFiltersActive ? " · фильтр ухода" : ""}`;
      document.querySelector("#page-indicator").textContent = `${catalogPage} / ${pageCount}`;
      document.querySelector("#previous-page").disabled = catalogPage === 1;
      document.querySelector("#next-page").disabled = catalogPage === pageCount;
      document.querySelector("#catalog-pagination").hidden = noSearchResults || visible.length <= catalogPageSize;
      if (!visible.length && !noSearchResults) grid.innerHTML = `<div class="empty-state">Растения не найдены. Измените параметры фильтра.</div>`;
      document.querySelector("#flower-total").textContent = `${flowers.length} ${russianPlural(flowers.length, "растение", "растения", "растений")}`;
      document.querySelector("#favorite-total").textContent = `${favoriteIds.length} ${russianPlural(favoriteIds.length, "растение", "растения", "растений")}`;
      renderCollection();
      const groupCount = new Set(flowers.map((flower) => flower.plantGroup)).size;
      document.querySelector("#group-total").textContent = `${groupCount} ${russianPlural(groupCount, "группа", "группы", "групп")}`;
    }

    window.floraApplyCatalogIntent = (plantGroup) => {
      const allowedGroups = new Set(["Цветы", "Кактусы", "Суккуленты", "Папоротники", "Хвойные", "Деревья и кустарники"]);
      if (!allowedGroups.has(plantGroup)) return false;
      activeFilter = plantGroup;
      activeLightFilter = "all";
      activeWaterFilter = "all";
      catalogPage = 1;
      document.querySelector("#catalog-group-filter").value = plantGroup;
      document.querySelector("#care-light-filter").value = "all";
      document.querySelector("#care-water-filter").value = "all";
      flowerSearch.value = "";
      closeSearchSuggestion();
      showPage("catalog");
      renderCatalog();
      return true;
    };
    window.floraSearchCatalog = (query) => {
      if (typeof query !== "string" || !query.trim()) return false;
      const matchedPlant = resolvePlant(query);
      activeFilter = "all";
      activeLightFilter = "all";
      activeWaterFilter = "all";
      catalogPage = 1;
      document.querySelector("#catalog-group-filter").value = "all";
      document.querySelector("#care-light-filter").value = "all";
      document.querySelector("#care-water-filter").value = "all";
      flowerSearch.value = matchedPlant?.name || query.trim();
      closeSearchSuggestion();
      showPage("catalog");
      renderCatalog();
      return true;
    };
    window.floraOpenPlantByQuery = (query) => {
      if (typeof query !== "string" || !query.trim()) return false;
      const flower = resolvePlant(query);
      if (!flower) return false;
      activeFilter = "all";
      activeLightFilter = "all";
      activeWaterFilter = "all";
      catalogPage = 1;
      document.querySelector("#catalog-group-filter").value = "all";
      document.querySelector("#care-light-filter").value = "all";
      document.querySelector("#care-water-filter").value = "all";
      flowerSearch.value = "";
      closeSearchSuggestion();
      showPage("catalog");
      renderCatalog();
      showFlowerDetail(flower.id);
      return true;
    };

    function renderCollection() {
      const collection = collectionIds.map((id) => flowerById.get(id)?.flower).filter(Boolean);
      document.querySelector("#collection-count").textContent = String(collection.length);
      document.querySelector("#collection-count").setAttribute("aria-label", `${collection.length} ${russianPlural(collection.length, "растение", "растения", "растений")}`);
      document.querySelector("#collection-count-label").textContent =
        `${collection.length} ${russianPlural(collection.length, "растение сохранено", "растения сохранено", "растений сохранено")}`;
      const groupCounts = new Map();
      collection.forEach((flower) => groupCounts.set(flower.plantGroup, (groupCounts.get(flower.plantGroup) || 0) + 1));
      const collectionStat = document.querySelector("#collection-stat");
      collectionStat.hidden = collection.length === 0;
      collectionStat.textContent = collection.length
        ? `${collection.length} ${russianPlural(collection.length, "растение", "растения", "растений")}${[...groupCounts]
          .map(([group, count]) => ` · ${group} ${count}`)
          .join("")}`
        : "";
      collectionGrid.innerHTML = collection.length ? collection.map((flower) => {
        const imageUrl = flowerImageUrl(flower, 500);
        return `<article class="flower-card collection-card" data-prefetch-plant="${escapeHTML(flower.id)}">
          <div class="flower-photo-wrap">
            ${imageUrl ? `<img class="flower-photo" src="${escapeHTML(imageUrl)}" alt="${escapeHTML(flower.name)}" loading="lazy" decoding="async" width="500" height="375">` : `<div class="collection-no-photo" aria-hidden="true">${iconMarkup("flower")}</div>`}
            <span class="flower-tag">${escapeHTML(flower.plantGroup)}</span>
            ${plantNoteIndicator(flower)}
          </div>
          <div class="flower-info">
            <div class="flower-card-name"><h3>${escapeHTML(flower.name)}</h3><div class="flower-latin">${escapeHTML(flower.latin)}</div></div>
            ${wateringMarkup(flower)}
            <div class="flower-card-actions">
              <button class="button ghost small" type="button" data-details="${flower.id}">Открыть карточку</button>
              <button class="compare-select-button" type="button" data-compare="${escapeHTML(flower.id)}" aria-label="${selectedCompareIds.includes(flower.id) ? "Убрать из сравнения" : "Добавить в сравнение"}: ${escapeHTML(flower.name)}" aria-pressed="${selectedCompareIds.includes(flower.id)}" title="${selectedCompareIds.includes(flower.id) ? "Убрать из сравнения" : "Добавить в сравнение"}">${iconMarkup("transfer")}<span>${selectedCompareIds.includes(flower.id) ? "Убрать" : "Сравнить"}</span></button>
              <button class="button small collection-toggle is-saved" type="button" data-collection="${flower.id}" aria-pressed="true">Убрать из коллекции</button>
            </div>
          </div>
        </article>`;
      }).join("") : `<div class="empty-state">Здесь пока пусто. Добавляйте растения в коллекцию из атласа.</div>`;
    }

    function toggleCollection(id) {
      if (!flowerById.has(id)) return;
      setPlantSaved(id, !collectionIds.includes(id));
    }

    function similarPlantsMarkup(flower) {
      const withPhotos = flowers.filter((candidate) =>
        candidate.id !== flower.id && Boolean(flowerImageUrl(candidate, 240))
      );
      let candidates = withPhotos.filter((candidate) => candidate.family === flower.family);
      if (candidates.length < 2) {
        candidates = withPhotos.filter((candidate) => candidate.plantGroup === flower.plantGroup);
      }
      if (candidates.length < 2) return "";

      const stableOrder = (id) => {
        let hash = 2166136261;
        for (const character of `${flower.id}:${id}`) {
          hash = Math.imul(hash ^ character.charCodeAt(0), 16777619);
        }
        return (hash >>> 0).toString(16).padStart(8, "0");
      };
      const recommendations = candidates
        .sort((first, second) => stableOrder(first.id).localeCompare(stableOrder(second.id)) || first.name.localeCompare(second.name, "ru"))
        .slice(0, 4);

      return `<section class="similar-plants" aria-labelledby="similar-plants-title">
        <h3 id="similar-plants-title">Похожие растения</h3>
        <div class="similar-plants-list">
          ${recommendations.map((plant) => `<button class="similar-plant-card" type="button" data-open="${escapeHTML(plant.id)}" aria-label="Открыть карточку растения: ${escapeHTML(plant.name)}">
            <img src="${escapeHTML(flowerImageUrl(plant, 240))}" alt="Фото: ${escapeHTML(plant.name)}" loading="lazy" decoding="async">
            <span class="similar-plant-name">${escapeHTML(plant.name)}</span>
            <span class="similar-plant-latin">${escapeHTML(plant.latin)}</span>
          </button>`).join("")}
        </div>
      </section>`;
    }

    function prefetchPlantDetail(id) {
      const cached = prefetchedPlantDetails.get(id);
      if (cached) {
        prefetchedPlantDetails.delete(id);
        prefetchedPlantDetails.set(id, cached);
        return;
      }
      const flower = flowerById.get(id)?.flower;
      if (!flower) return;
      const detail = { flower, image: null };
      const imageURL = flowerImageUrl(flower, 900);
      if (imageURL) {
        detail.image = new Image();
        detail.image.decoding = "async";
        detail.image.fetchPriority = "low";
        detail.image.src = imageURL;
      }
      prefetchedPlantDetails.set(id, detail);
      if (prefetchedPlantDetails.size > 24) {
        prefetchedPlantDetails.delete(prefetchedPlantDetails.keys().next().value);
      }
    }

    function showFlowerDetail(id) {
      prefetchPlantDetail(id);
      const flower = prefetchedPlantDetails.get(id)?.flower;
      if (!flower) return;
      recordRecentlyViewed(flower);
      activeFlower = flower;
      const savedNote = plantNotes[flower.id] || "";
      const source = safeExternalURL(flower.photoSource || `https://www.gbif.org/species/search?q=${encodeURIComponent(flower.latin)}`);
      const imageUrl = flowerImageUrl(flower, 900);
      const photoInfo = flower.photo
        ? `${flower.photoVerified ? "Фото" : "Иллюстрация близкого вида"}: <a href="${escapeHTML(source)}" target="_blank" rel="noopener noreferrer">${escapeHTML(flower.photoCredit)}</a> · <a href="${escapeHTML(safeExternalURL(licenseURL(flower.photoLicense)))}" target="_blank" rel="noopener noreferrer">${escapeHTML(licenseLabel(flower.photoLicense))}</a>${flower.photoNote ? `. ${escapeHTML(flower.photoNote)}` : ""}`
        : "Фотография этого вида пока недоступна.";
      document.querySelector("#flower-detail").innerHTML = `
        <button class="dialog-close" type="button" aria-label="Закрыть">✕</button>
        ${imageUrl ? `<img class="detail-photo" src="${escapeHTML(imageUrl)}" alt="${escapeHTML(flower.name)}" loading="eager" decoding="async" fetchpriority="high">` : `<div class="detail-no-photo">${iconMarkup("flower")}<span>Фотография этого вида ещё не добавлена.</span></div>`}
        <div class="eyebrow" style="margin-top:18px">Семейство · ${escapeHTML(flower.familyLabel)}</div>
        <h2 id="detail-name" style="margin:7px 0 3px">${iconMarkup("flower", "plant-mark")} ${escapeHTML(flower.name)}</h2>
        <div class="flower-latin">${escapeHTML(flower.latin)}</div>
        <section class="detail-section" aria-labelledby="detail-care-title">
          <h3 id="detail-care-title">Условия ухода</h3>
          ${microclimateMarkup(flower)}
        </section>
        <section class="detail-section" aria-labelledby="detail-description-title">
          <h3 id="detail-description-title">О растении</h3>
          <p class="detail-text">${escapeHTML(flower.description)}</p>
        </section>
        <details class="detail-disclosure detail-notes">
          <summary>Заметки · мои наблюдения</summary>
          <section class="plant-notes" aria-labelledby="plant-notes-title">
            <div class="plant-notes-heading"><svg class="ui-icon"><use href="#icon-note"></use></svg><h3 id="plant-notes-title">Мои наблюдения</h3></div>
            <label class="visually-hidden" for="plant-note-input">Личная заметка о растении ${escapeHTML(flower.name)}</label>
            <textarea class="plant-note-input" id="plant-note-input" maxlength="${plantNoteLimit}" placeholder="Запишите наблюдения об этом растении…" data-note-id="${escapeHTML(flower.id)}">${escapeHTML(savedNote)}</textarea>
            <div class="plant-notes-footer">
              <p class="plant-note-status" id="plant-note-status" role="status" aria-live="polite">${savedNote ? "Заметка сохранена на этом устройстве." : "Заметка останется только в этом браузере."}</p>
              <button class="button ghost small plant-note-save" type="button" data-save-note="${escapeHTML(flower.id)}">Сохранить заметку</button>
            </div>
          </section>
        </details>
        ${collectionIds.includes(flower.id) ? `<details class="detail-disclosure detail-watering-disclosure">
          <summary>Полив</summary>
          ${wateringMarkup(flower, true)}
        </details>` : ""}
        <div class="detail-actions">
          <button class="button detail-action-button favorite-detail-button ${favoriteIds.includes(flower.id) ? "is-favorite" : ""}" type="button" data-modal-favorite="${flower.id}" aria-pressed="${favoriteIds.includes(flower.id)}" aria-label="${favoriteIds.includes(flower.id) ? "Убрать из коллекции" : "Добавить в коллекцию"}" title="${favoriteIds.includes(flower.id) ? "Убрать из коллекции" : "Добавить в коллекцию"}">${iconMarkup("heart")}<span class="visually-hidden">${favoriteIds.includes(flower.id) ? "В коллекции" : "В коллекцию"}</span></button>
          <button class="button detail-action-button ask-flora-detail-button" type="button" data-ai-plant="${escapeHTML(flower.id)}">${iconMarkup("spark")}<span>Спросить Flora</span></button>
          <button class="button detail-action-button care-pdf-button" type="button" data-care-pdf="${flower.id}" aria-label="Скачать карточку ухода (PDF)" title="Скачать карточку ухода (PDF)">${iconMarkup("file")}<span>Скачать карточку ухода (PDF)</span></button>
        </div>
        <p class="care-pdf-status" id="care-pdf-status" role="status" aria-live="polite"></p>
        <details class="taxonomy-details">
          <summary>Таксономия и источники</summary>
          <div class="flower-facts"><span class="fact-chip">Класс: ${escapeHTML(flower.classLabel)}</span><span class="fact-chip">Отряд: ${escapeHTML(flower.order)}</span><span class="fact-chip">Семейство: ${escapeHTML(flower.familyLabel)}</span></div>
          ${flower.nameLanguage ? `<p class="photo-credit-detail">${escapeHTML(flower.nameLanguage)}.</p>` : ""}
          <p class="photo-credit-detail">${photoInfo} · <a href="${escapeHTML(safeExternalURL(`https://www.gbif.org/species/search?q=${encodeURIComponent(flower.latin)}`))}" target="_blank" rel="noopener noreferrer">Проверить вид в GBIF ↗</a></p>
        </details>
        ${similarPlantsMarkup(flower)}`;
      const detailImage = document.querySelector("#flower-detail .detail-photo");
      detailImage?.addEventListener("error", () => {
        detailImage.remove();
      }, { once: true });
      document.querySelector("#flower-dialog").showModal();
    }

    const compareDock = document.querySelector("#compare-dock");
    const compareDialog = document.querySelector("#compare-dialog");
    const compareCount = document.querySelector("#compare-count");
    const compareOpenButton = document.querySelector("#compare-open");
    function updateCompareDock() {
      const hint = document.querySelector("#compare-hint");
      compareDock.hidden = selectedCompareIds.length === 0;
      compareCount.textContent = `Выбрано растений: ${selectedCompareIds.length}/2`;
      if (hint) hint.textContent = selectedCompareIds.length === 2
        ? "Готово — можно открыть сравнение"
        : "Добавьте ещё одно растение из каталога";
      compareOpenButton.disabled = selectedCompareIds.length !== 2;
    }

    function togglePlantCompare(id) {
      if (!flowerById.has(id)) return;
      selectedCompareIds = selectedCompareIds.includes(id)
        ? selectedCompareIds.filter((selectedId) => selectedId !== id)
        : [...selectedCompareIds.slice(-1), id];
      updateCompareDock();
      renderCatalog();
    }

    function renderComparison() {
      if (selectedCompareIds.length !== 2) return;
      const plants = selectedCompareIds.map((id) => flowerById.get(id)?.flower).filter(Boolean);
      if (plants.length !== 2) return;
      const textValue = (value) => value ? String(value) : "Нет данных";
      const rows = [
        ["Семейство", (plant) => plant.familyLabel || plant.family],
        ["Группа", (plant) => plant.plantGroup],
        ["Освещение", (plant) => plant.microclimate?.light ? microclimateLabels.light[plant.microclimate.light]?.label : ""],
        ["Полив", (plant) => plant.microclimate?.water ? microclimateLabels.water[plant.microclimate.water]?.label : ""],
        ["Сложность ухода", (plant) => plant.careDifficulty]
      ];
      const plantCards = plants.map((plant) => {
        const imageUrl = flowerImageUrl(plant, 500);
        const credit = plant.photoCredit || "Автор фото: нет данных";
        const license = plant.photoLicense ? licenseLabel(plant.photoLicense) : "Лицензия: нет данных";
        const source = safeExternalURL(plant.photoSource);
        return `<article class="compare-plant">
          <div class="compare-plant-image-wrap">${imageUrl
            ? `<img src="${escapeHTML(imageUrl)}" alt="Фотография растения ${escapeHTML(plant.name)}" loading="lazy" decoding="async">`
            : `<div class="compare-plant-image-placeholder">Фото пока нет</div>`}</div>
          <p class="compare-plant-credit">${plant.photoSource ? `<a href="${escapeHTML(source)}" target="_blank" rel="noopener noreferrer">${escapeHTML(credit)}</a>` : escapeHTML(credit)} · ${escapeHTML(license)}</p>
          <h3>${escapeHTML(plant.name)}</h3><p class="flower-latin">${escapeHTML(plant.latin)}</p>
        </article>`;
      }).join("");
      const comparisonRows = rows.map(([label, getValue]) => {
        const values = plants.map((plant) => textValue(getValue(plant)));
        const isDifferent = values[0] !== values[1];
        return `<tr><th scope="row">${escapeHTML(label)}</th>${values.map((value) =>
          `<td class="${isDifferent ? "is-different" : ""}">${escapeHTML(value)}</td>`
        ).join("")}</tr>`;
      }).join("");
      document.querySelector("#compare-results").innerHTML = `
        <div class="compare-plants">${plantCards}</div>
        <div class="compare-table-wrap"><table class="compare-table">
          <thead><tr><th scope="col">Параметр</th>${plants.map((plant) => `<th scope="col">${escapeHTML(plant.name)}</th>`).join("")}</tr></thead>
          <tbody>${comparisonRows}</tbody>
        </table></div>`;
      document.querySelectorAll("#compare-results .compare-plant-image-wrap img").forEach((image) => {
        image.addEventListener("error", () => {
          const fallback = document.createElement("div");
          fallback.className = "compare-plant-image-placeholder";
          fallback.textContent = "Фото временно недоступно";
          image.replaceWith(fallback);
        }, { once: true });
      });
      if (!compareDialog.open) compareDialog.showModal();
    }

    let html2PdfPromise;
    function loadHtml2Pdf() {
      if (typeof window.html2pdf === "function") return Promise.resolve(window.html2pdf);
      if (!html2PdfPromise) {
        html2PdfPromise = new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.2/html2pdf.bundle.min.js";
          script.async = true;
          script.onload = () => typeof window.html2pdf === "function"
            ? resolve(window.html2pdf)
            : reject(new Error("Библиотека генерации PDF не загрузилась."));
          script.onerror = () => reject(new Error("Не удалось загрузить библиотеку PDF. Проверьте подключение к интернету."));
          document.head.append(script);
        }).catch((error) => {
          html2PdfPromise = null;
          throw error;
        });
      }
      return html2PdfPromise;
    }
    async function downloadCarePdf(flower) {
      const html2pdf = await loadHtml2Pdf();
      const light = {
        sun: "Светолюбивое",
        partial: "Полутень",
        shade: "Теневыносливое"
      }[flower.microclimate.light];
      const water = {
        rare: "Редкий полив",
        moderate: "Умеренный полив",
        moist: "Влаголюбивое"
      }[flower.microclimate.water];
      const sheet = document.createElement("article");
      sheet.className = "care-pdf-sheet";
      const brand = document.createElement("p");
      brand.textContent = "FLORA-ANOTOMY · БОТАНИЧЕСКИЙ АТЛАС";
      const imageUrl = flowerImageUrl(flower, 900);
      const image = document.createElement("img");
      if (imageUrl) {
        image.crossOrigin = "anonymous";
        image.src = imageUrl;
        image.alt = flower.name;
      } else {
        image.alt = "Фотография растения недоступна";
      }
      const title = document.createElement("h1");
      title.textContent = flower.name;
      const latin = document.createElement("p");
      latin.textContent = flower.latin;
      const tags = document.createElement("ul");
      [
        `Свет: ${light}`,
        `Полив: ${water}`,
        `Уход: ${flower.careDifficulty}`
      ].forEach((value) => {
        const item = document.createElement("li");
        item.textContent = value;
        tags.append(item);
      });
      const description = document.createElement("p");
      description.textContent = flower.description;
      const care = document.createElement("p");
      care.textContent = `Освещение: ${microclimateLabels.light[flower.microclimate.light].title} (${flower.microclimate.lightBasis}). Полив: ${microclimateLabels.water[flower.microclimate.water].title} (${flower.microclimate.waterBasis}). Рекомендации ориентировочные: учитывайте вид, сезон и условия выращивания.`;
      const footer = document.createElement("small");
      footer.textContent = `ID: ${flower.id} · ${flower.familyLabel} · Ботанический атлас Flora-Anotomy`;
      sheet.append(brand, image, title, latin, tags, description, care, footer);
      document.body.append(sheet);
      try {
        if (imageUrl) await image.decode().catch(() => image.remove());
        else image.remove();
        await html2pdf().set({
          margin: [16, 16, 18, 16],
          filename: `flora-${flower.id}-care.pdf`,
          image: { type: "jpeg", quality: 0.96 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        }).from(sheet).save();
      } finally {
        sheet.remove();
      }
    }

    function animateFavoriteToCollection(button) {
      if (!button?.closest(".flower-card") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const primaryTarget = document.querySelector(".primary-collection-link");
      const target = primaryTarget?.getClientRects().length
        ? primaryTarget
        : document.querySelector('.dock-tab[data-go="collection"]');
      if (!target) return;
      const from = button.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      const flight = document.createElement("span");
      flight.className = "favorite-flight";
      flight.innerHTML = iconMarkup("heart");
      flight.style.width = `${from.width}px`;
      flight.style.height = `${from.height}px`;
      flight.style.left = `${from.left}px`;
      flight.style.top = `${from.top}px`;
      document.body.append(flight);
      const animation = flight.animate([
        { transform: "translate(0, 0) scale(1)", opacity: 1 },
        { transform: `translate(${to.left + to.width / 2 - from.left - from.width / 2}px, ${to.top + to.height / 2 - from.top - from.height / 2}px) scale(.25)`, opacity: .2 },
      ], { duration: 540, easing: "cubic-bezier(.2,.8,.25,1)", fill: "forwards" });
      animation.onfinish = () => flight.remove();
      animation.oncancel = () => flight.remove();
    }

    function toggleFavorite(id, button) {
      setPlantSaved(id, !favoriteIds.includes(id), button);
    }

    function setPlantSaved(id, isSaved, sourceButton = null) {
      if (!flowerById.has(id)) return;
      if (isSaved) {
        animateFavoriteToCollection(sourceButton);
        if (typeof navigator.vibrate === "function") {
          try {
            navigator.vibrate(10);
          } catch (error) {
            console.warn("Не удалось вызвать тактильный отклик устройства.", error);
          }
        }
      }
      const nextIds = isSaved
        ? [...new Set([...collectionIds, id])]
        : collectionIds.filter((item) => item !== id);
      const collectionSaved = storage.set("flora-collection", JSON.stringify(nextIds));
      const favoritesSaved = storage.set("flora-favorites", JSON.stringify(nextIds));
      if (!collectionSaved || !favoritesSaved) return;
      collectionIds = nextIds;
      favoriteIds = nextIds;
      renderCatalog();
      if (activeFlower?.id === id && document.querySelector("#flower-dialog").open) showFlowerDetail(id);
    }

    function chooseFlower({ classKey = "all", family = "all", mood = "all", includeExtra = true } = {}) {
      const collection = includeExtra ? flowers : featuredFlowers;
      const options = collection.filter((flower) =>
        (classKey === "all" || flower.plantGroup === classKey) &&
        (family === "all" || flower.family === family) &&
        (mood === "all" || flower.mood.includes(mood))
      );
      return options[Math.floor(Math.random() * options.length)] || null;
    }

    function renderPlantOfDay() {
      const plantOfDayOrder = [
        "Vanda hindsii", "Vanda coerulea", "Vanda tricolor",
        "Phalaenopsis amabilis", "Passiflora incarnata", "Hibiscus syriacus",
        "Hibiscus moscheutos", "Ixora coccinea", "Tabernaemontana divaricata",
        "Tabernaemontana alba", "Tabernaemontana citrifolia", "Bougainvillea glabra",
        "Curcuma pseudomontana", "Curcuma rhabdota", "Curcuma amada",
        "Globba radicalis", "Globba atrosanguinea", "Globba leucantha",
        "Siphonochilus aethiopicus", "Siphonochilus kirkii", "Strophanthus hispidus",
        "Strophanthus thollonii", "Strophanthus sarmentosus", "Delonix regia",
        "Nymphaea odorata", "Datura discolor", "Datura pruinosa",
        "Datura quercifolia", "Datura wrightii", "Euphorbia pulcherrima",
        "Euphorbia milii", "Lantana camara", "Lantana montevidensis",
        "Rhododendron ponticum", "Pachypodium lamerei", "Astrophytum asterias",
        "Gymnocalycium mihanovichii", "Cereus repandus", "Cereus hildmannianus",
        "Epiphyllum oxypetalum", "Epiphyllum phyllanthus", "Lophophora williamsii",
        "Schlumbergera truncata", "Rhipsalis baccifera", "Mammillaria elongata",
        "Opuntia microdasys", "Tillandsia usneoides", "Platycerium bifurcatum",
        "Echeveria shaviana", "Kalanchoe beharensis"
      ];
      const hasVerifiedPhoto = (flower) =>
        flower.photoVerified && flower.photo && flower.photoCredit?.trim() &&
        flower.photoLicense?.trim() && flower.photoSource?.trim();
      const candidates = plantOfDayOrder
        .map((latin) => flowers.find((flower) => flower.latin === latin))
        .filter((flower) => flower && hasVerifiedPhoto(flower));
      if (candidates.length !== 50) {
        throw new Error(`Для ежедневной подборки ожидалось 50 растений с подтверждёнными фото, найдено: ${candidates.length}.`);
      }
      const today = new Date();
      const dayIndex = Math.floor(
        (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - Date.UTC(2026, 0, 1)) / 86400000,
      );
      const flower = candidates[((dayIndex % candidates.length) + candidates.length) % candidates.length];
      const verifiedMedia = flower.photoSourceName === "Unsplash" ? window.FLORA_VERIFIED_MEDIA?.[flower.latin] : null;
      const displayFlower = verifiedMedia?.photo && verifiedMedia.credit?.trim() &&
        verifiedMedia.license?.trim() && verifiedMedia.source?.trim()
        ? {
          ...flower,
          photo: verifiedMedia.photo,
          photoCredit: verifiedMedia.credit,
          photoLicense: verifiedMedia.license,
          photoSource: verifiedMedia.source,
          photoSourceName: verifiedMedia.sourceName || "GBIF",
          photoVerified: true
        }
        : flower;
      const credit = displayFlower.photoCredit.match(/\(c\)\s*([^,]+)/i)?.[1] || displayFlower.photoCredit;
      const heroImage = document.querySelector(".hero-art img");
      const heroLabel = document.querySelector("#hero-art-label");
      if (heroImage) {
        heroImage.dataset.fallbackSrc ||= heroImage.src;
        heroImage.src = flowerImageUrl(displayFlower, 1000);
        heroImage.alt = `Растение дня: ${displayFlower.name}`;
        heroImage.loading = "eager";
        heroImage.fetchPriority = "high";
        heroImage.addEventListener("error", () => {
          heroImage.src = heroImage.dataset.fallbackSrc;
          heroImage.alt = "Букет сезонных цветов";
          if (heroLabel) {
            heroLabel.href = "https://www.gbif.org/";
            heroLabel.textContent = "Ботанический атлас";
            heroLabel.title = "Ботанический атлас растений";
          }
        }, { once: true });
      }
      if (heroLabel) {
        heroLabel.href = safeExternalURL(displayFlower.photoSource);
        heroLabel.textContent = `Растение дня · ${displayFlower.name} · © ${credit} · ${licenseLabel(displayFlower.photoLicense)}`;
        heroLabel.title = `${displayFlower.photoCredit} · ${licenseLabel(displayFlower.photoLicense)}`;
      }
    }

    function showRandomFlower() {
      const result = document.querySelector("#random-pick-result");
      const flower = chooseFlower();
      if (!flower) {
        result.innerHTML = `<p class="empty-state">В атласе пока нет растений для подбора.</p>`;
        return;
      }
      const imageUrl = flowerImageUrl(flower, 900);
      result.innerHTML = `
        <article class="random-pick-plant">
          <div class="random-pick-photo">${imageUrl
            ? `<img src="${escapeHTML(imageUrl)}" alt="${escapeHTML(flower.name)}" width="900" height="675">`
            : `<span class="random-pick-placeholder">${iconMarkup("flower")}</span>`}
            <span class="flower-tag">${escapeHTML(flower.plantGroup)}</span>
          </div>
          <div class="random-pick-info">
            <p class="eyebrow">Ваше случайное растение</p>
            <h2>${escapeHTML(flower.name)}</h2>
            <p class="flower-latin">${escapeHTML(flower.latin)}</p>
            <p class="random-pick-description">${escapeHTML(flower.description)}</p>
            ${microclimateMarkup(flower)}
            <button class="button secondary" type="button" data-open="${escapeHTML(flower.id)}">Открыть ботаническую карточку</button>
          </div>
        </article>`;
      const image = result.querySelector("img");
      image?.addEventListener("error", () => {
        image.remove();
        result.querySelector(".random-pick-photo").innerHTML = `<span class="random-pick-placeholder">${iconMarkup("flower")}</span><span class="flower-tag">${escapeHTML(flower.plantGroup)}</span>`;
      }, { once: true });
    }

    function startBotanistQuestion() {
      window.clearTimeout(botanistTimer);
      const image = document.querySelector("#botanist-image");
      const answers = document.querySelector("#botanist-answers");
      const feedback = document.querySelector("#botanist-feedback");
      const photoCandidates = flowers.filter((flower) =>
        !unavailableQuizPhotos.has(flower.id) &&
        Boolean(flowerImageUrl(flower, 900))
      );
      const candidates = photoCandidates.length > 1
        ? photoCandidates.filter((flower) => flower.id !== botanistPlant?.id)
        : photoCandidates;
      if (!candidates.length) {
        botanistPlant = null;
        image.removeAttribute("src");
        image.hidden = true;
        answers.innerHTML = "";
        feedback.textContent = "Не удалось найти доступное фото для нового вопроса.";
        return;
      }

      botanistPlant = candidates[Math.floor(Math.random() * candidates.length)];
      const questionPlant = botanistPlant;
      const wrongAnswers = flowers.filter((flower) =>
        flower.id !== botanistPlant.id &&
        flower.name !== botanistPlant.name
      );
      const choices = [botanistPlant];
      while (choices.length < 4 && wrongAnswers.length) {
        const index = Math.floor(Math.random() * wrongAnswers.length);
        const [choice] = wrongAnswers.splice(index, 1);
        if (!choices.some((item) => item.name === choice.name)) choices.push(choice);
      }
      for (let index = choices.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [choices[index], choices[swapIndex]] = [choices[swapIndex], choices[index]];
      }

      image.hidden = false;
      image.src = flowerImageUrl(botanistPlant, 900);
      image.onerror = () => {
        if (botanistPlant?.id !== questionPlant.id) return;
        window.clearTimeout(botanistTimer);
        unavailableQuizPhotos.add(questionPlant.id);
        startBotanistQuestion();
      };
      answers.innerHTML = choices.map((flower) =>
        `<button class="botanist-answer" type="button" data-answer="${escapeHTML(flower.id)}" data-correct="${flower.id === botanistPlant.id}">${escapeHTML(flower.name)}</button>`
      ).join("");
      feedback.textContent = "Как называется это растение?";
    }

    renderCatalog();
    renderRecentlyViewed();
    renderPlantOfDay();
    updateCompareDock();
    showPage(location.hash.slice(1), { push: false });

    document.querySelectorAll("[data-go]").forEach((button) => button.addEventListener("click", () => showPage(button.dataset.go)));
    document.querySelector("#random-pick-again").addEventListener("click", showRandomFlower);
    document.querySelector("#season-year").addEventListener("change", (event) => {
      selectedSeasonYear = Number(event.currentTarget.value);
      renderSeasonTracker();
    });
    document.querySelector("#season-search").addEventListener("input", renderSeasonSearch);
    document.querySelector("#season-months").addEventListener("click", (event) => {
      const monthButton = event.target.closest("[data-season-month]");
      if (!monthButton) return;
      selectedSeasonMonth = Number(monthButton.dataset.seasonMonth);
      renderSeasonTracker();
    });
    document.querySelector("#page-season").addEventListener("click", (event) => {
      const observationButton = event.target.closest("[data-season-toggle]");
      if (!observationButton) return;
      setBloomObservation(observationButton.dataset.seasonToggle, !hasBloomObservation(observationButton.dataset.seasonToggle));
    });
    window.addEventListener("popstate", () => showPage(location.hash.slice(1), { push: false }));
    window.addEventListener("hashchange", () => showPage(location.hash.slice(1), { push: false }));

    const themeToggle = document.querySelector("#theme-toggle");
    function updateThemeButton() {
      const dark = document.body.classList.contains("dark-theme");
      themeToggle.innerHTML = iconMarkup(dark ? "sun" : "moon");
      themeToggle.setAttribute("aria-label", dark ? "Включить светлое оформление" : "Включить тёмное оформление");
      themeToggle.title = dark ? "Включить светлое оформление" : "Включить тёмное оформление";
    }
    const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    let savedTheme = storage.get("flora-theme", null);
    const applyAutomaticTheme = () => {
      if (savedTheme === null) document.body.classList.toggle("dark-theme", systemDarkTheme.matches);
      document.body.classList.toggle("eye-comfort", new Date().getHours() >= 21 || new Date().getHours() < 7);
      document.body.dataset.themeChoice = savedTheme || "auto";
      updateThemeButton();
    };
    if (savedTheme === "dark" || (savedTheme === null && systemDarkTheme.matches)) document.body.classList.add("dark-theme");
    updateThemeButton();
    document.body.dataset.themeChoice = savedTheme || "auto";
    document.body.classList.toggle("eye-comfort", new Date().getHours() >= 21 || new Date().getHours() < 7);
    systemDarkTheme.addEventListener("change", applyAutomaticTheme);
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const nextTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
      storage.set("flora-theme", nextTheme);
      savedTheme = nextTheme;
      document.body.dataset.themeChoice = nextTheme;
      updateThemeButton();
    });

    const paletteSelect = document.querySelector("#palette-select");
    const palettes = new Set(["green", "lavender", "rose", "sand"]);
    const savedPalette = storage.get("flora-palette", "green");
    const activePalette = palettes.has(savedPalette) ? savedPalette : "green";
    document.body.dataset.palette = activePalette;
    paletteSelect.value = activePalette;
    paletteSelect.addEventListener("change", () => {
      const palette = palettes.has(paletteSelect.value) ? paletteSelect.value : "green";
      document.body.dataset.palette = palette;
      storage.set("flora-palette", palette);
    });

    document.querySelector("#recent-plants-clear").addEventListener("click", () => {
      recentlyViewedIds = [];
      storage.set(recentlyViewedKey, "[]");
      renderRecentlyViewed();
    });

    document.querySelector("#catalog-sort").addEventListener("change", () => {
      catalogPage = 1;
      renderCatalog();
    });
    document.querySelector("#care-light-filter").addEventListener("change", (event) => {
      activeLightFilter = event.currentTarget.value;
      catalogPage = 1;
      renderCatalog();
    });
    document.querySelector("#care-water-filter").addEventListener("change", (event) => {
      activeWaterFilter = event.currentTarget.value;
      catalogPage = 1;
      renderCatalog();
    });
    document.querySelector("#catalog-group-filter").addEventListener("change", (event) => {
      activeFilter = event.currentTarget.value;
      catalogPage = 1;
      renderCatalog();
    });
    document.querySelector("#previous-page").addEventListener("click", () => {
      if (catalogPage > 1) {
        catalogPage -= 1;
        renderCatalog();
      }
    });
    document.querySelector("#next-page").addEventListener("click", () => {
      catalogPage += 1;
      renderCatalog();
    });
    const plantPrefetchTimers = new WeakMap();
    grid.addEventListener("pointerover", (event) => {
      if (event.pointerType !== "mouse") return;
      const card = event.target.closest("[data-prefetch-plant]");
      if (!card || card.contains(event.relatedTarget)) return;
      const timer = window.setTimeout(() => prefetchPlantDetail(card.dataset.prefetchPlant), 100);
      plantPrefetchTimers.set(card, timer);
    });
    grid.addEventListener("pointerout", (event) => {
      const card = event.target.closest("[data-prefetch-plant]");
      if (!card || card.contains(event.relatedTarget)) return;
      window.clearTimeout(plantPrefetchTimers.get(card));
    });
    grid.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") {
        const card = event.target.closest("[data-prefetch-plant]");
        if (card) prefetchPlantDetail(card.dataset.prefetchPlant);
      }
    }, { passive: true });
    grid.addEventListener("focusin", (event) => {
      const card = event.target.closest("[data-prefetch-plant]");
      if (card) prefetchPlantDetail(card.dataset.prefetchPlant);
    });
    grid.addEventListener("click", (event) => {
      const favoriteButton = event.target.closest("[data-favorite]");
      const detailsButton = event.target.closest("[data-details]");
      const collectionButton = event.target.closest("[data-collection]");
      if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite, favoriteButton);
      else if (detailsButton) showFlowerDetail(detailsButton.dataset.details);
      else if (collectionButton) toggleCollection(collectionButton.dataset.collection);
    });
    collectionGrid.addEventListener("click", (event) => {
      const detailsButton = event.target.closest("[data-details]");
      const collectionButton = event.target.closest("[data-collection]");
      if (detailsButton) showFlowerDetail(detailsButton.dataset.details);
      else if (collectionButton) toggleCollection(collectionButton.dataset.collection);
    });
    document.querySelector("#flower-dialog").addEventListener("click", async (event) => {
      if (event.target === event.currentTarget || event.target.closest(".dialog-close")) event.currentTarget.close();
      const noteButton = event.target.closest("[data-save-note]");
      if (noteButton) {
        const noteInput = document.querySelector("#plant-note-input");
        const noteStatus = document.querySelector("#plant-note-status");
        if (!noteInput || !noteStatus) return;
        const saved = savePlantNote(noteButton.dataset.saveNote, noteInput.value);
        if (saved) {
          noteInput.value = plantNotes[noteButton.dataset.saveNote] || "";
          noteStatus.textContent = noteInput.value
            ? "Заметка сохранена на этом устройстве."
            : "Заметка удалена.";
        } else {
          noteStatus.textContent = "Не удалось сохранить заметку. Проверьте свободное место на устройстве.";
        }
        return;
      }
      const saveButton = event.target.closest("[data-modal-favorite]");
      if (saveButton) toggleFavorite(saveButton.dataset.modalFavorite, saveButton);
      const collectionButton = event.target.closest("[data-collection]");
      if (collectionButton) toggleCollection(collectionButton.dataset.collection);
      const pdfButton = event.target.closest("[data-care-pdf]");
      if (pdfButton) {
        const flower = flowerById.get(pdfButton.dataset.carePdf)?.flower;
        const status = document.querySelector("#care-pdf-status");
        if (!flower || !status) return;
        pdfButton.disabled = true;
        status.textContent = "Готовим памятку…";
        try {
          await downloadCarePdf(flower);
          status.textContent = "Памятка скачана.";
        } catch (error) {
          console.error("Не удалось создать PDF-памятку.", error);
          status.textContent = error instanceof Error ? error.message : "Не удалось создать PDF.";
        } finally {
          pdfButton.disabled = false;
        }
        return;
      }
    });
    document.querySelector("#flower-dialog").addEventListener("input", (event) => {
      if (event.target.id !== "plant-note-input") return;
      const noteStatus = document.querySelector("#plant-note-status");
      if (!noteStatus || !activeFlower) return;
      const currentNote = event.target.value.trim();
      noteStatus.textContent = currentNote === (plantNotes[activeFlower.id] || "")
        ? "Заметка сохранена на этом устройстве."
        : "Есть несохранённые изменения.";
    });

    document.querySelector("#botanist-answers").addEventListener("click", (event) => {
      const answer = event.target.closest("[data-answer]");
      if (!answer || answer.disabled || !botanistPlant) return;
      const choices = [...document.querySelectorAll(".botanist-answer")];
      const isCorrect = answer.dataset.correct === "true";
      choices.forEach((choice) => {
        choice.disabled = true;
        if (choice.dataset.correct === "true") choice.classList.add("is-correct");
      });
      if (isCorrect) {
        botanistScore += 1;
        document.querySelector("#botanist-score").textContent = `Угадано: ${botanistScore}`;
        document.querySelector("#botanist-feedback").textContent = "Верно! Отличная работа.";
      } else {
        answer.classList.add("is-incorrect");
        document.querySelector("#botanist-feedback").textContent = `Это ${botanistPlant.name}. Попробуем ещё раз!`;
      }
      botanistTimer = window.setTimeout(startBotanistQuestion, 2000);
    });

    document.querySelector("#picker-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const flower = chooseFlower({
        mood: document.querySelector("#picker-mood").value,
        classKey: document.querySelector("#picker-class").value,
        family: document.querySelector("#picker-family").value
      });
      const result = document.querySelector("#picker-result");
      if (!flower) {
        result.textContent = "Такого сочетания пока нет в атласе — попробуйте ослабить фильтры.";
        return;
      }
      result.innerHTML = `Ваше растение — <button class="button ghost small" type="button" data-open="${flower.id}">${iconMarkup("flower")} ${escapeHTML(flower.name)}</button>. ${escapeHTML(flower.description)}`;
    });
    document.addEventListener("click", (event) => {
      const askFloraButton = event.target.closest("[data-ai-plant]");
      if (askFloraButton) {
        const plant = flowerById.get(askFloraButton.dataset.aiPlant)?.flower;
        if (plant) {
          document.querySelector("#flower-dialog").close();
          window.dispatchEvent(new CustomEvent("flora:ai-open", {
            detail: {
              name: plant.name,
              latin: plant.latin,
              category: plant.plantGroup,
              description: plant.description,
              care: plant.microclimate,
            },
          }));
        }
        return;
      }
      const compareButton = event.target.closest("[data-compare]");
      if (compareButton) {
        togglePlantCompare(compareButton.dataset.compare);
        return;
      }
      const waterButton = event.target.closest("[data-water]");
      if (waterButton) {
        markPlantWatered(waterButton.dataset.water);
        return;
      }
      const button = event.target.closest("[data-open]");
      if (button) showFlowerDetail(button.dataset.open);
    });
    compareOpenButton.addEventListener("click", renderComparison);
    document.querySelector("#compare-clear").addEventListener("click", () => {
      selectedCompareIds = [];
      updateCompareDock();
      if (compareDialog.open) compareDialog.close();
      renderCatalog();
    });
    document.querySelector("#compare-close").addEventListener("click", () => compareDialog.close());
    compareDialog.addEventListener("click", (event) => {
      if (event.target === compareDialog) compareDialog.close();
    });

    const installDialog = document.querySelector("#install-dialog");
    const installButton = document.querySelector("#install-app");
    const installConfirm = document.querySelector("#install-confirm");
    let deferredInstallPrompt = null;
    const isStandalone = () => window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;
    const updateInstallButton = () => {
      installButton.hidden = isStandalone();
    };
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      installConfirm.hidden = false;
      updateInstallButton();
    });
    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      installDialog.close();
      updateInstallButton();
    });
    installButton.addEventListener("click", () => {
      const instructions = document.querySelector("#install-instructions");
      const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      instructions.textContent = isAppleMobile
        ? "В Safari нажмите «Поделиться», затем выберите «На экран Домой». Сайт должен быть открыт по HTTPS или на localhost."
        : "В меню браузера выберите «Установить приложение» или «Добавить на главный экран». Сайт должен быть открыт по HTTPS или на localhost.";
      installDialog.showModal();
    });
    installConfirm.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      await deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installConfirm.hidden = true;
    });
    document.querySelector("#install-close").addEventListener("click", () => installDialog.close());
    installDialog.addEventListener("click", (event) => {
      if (event.target === installDialog) installDialog.close();
    });
    updateInstallButton();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(".//service-worker.js").catch((error) => {
        if (error.name !== "SecurityError") {
          console.error("Не удалось зарегистрировать офлайн-режим приложения.", error);
        }
      });
    }