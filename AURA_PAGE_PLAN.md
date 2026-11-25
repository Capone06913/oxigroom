# AURA Page Plan

Дизайн-план. URL, H1, title и description не придумываются: они из `teya-memory/semantic-core/oxigroom-2026-11-24/06-url-map.csv`. Смысл услуг ограничен `07-content-briefs.md` и текстом текущего сайта.

## Test Build Limit

Всего страниц в карте: 40.
В тестовой сборке: 5.
Обязательно: главная + груминг собак + груминг кошек + комплексный груминг + обучение.

## Pages

### 1. Главная
- slug: /
- build_in_test: yes
- design_priority: P0
- role: homepage
- design_source: бриф владельца, постер `spa_02.jpg`, стая из фото работ
- h1: Студия груминга в Саратове
- title: ОксиГрум — груминг собак и кошек в Саратове
- description: Две студии ОксиГрум в Саратове: груминг собак и кошек и очное обучение. Запись в WhatsApp, Telegram и Max.
- key_sections:
  - header
  - hero-video-slot
  - pack
  - services
  - studios
  - education-teaser
  - blog-teaser
  - footer
- menu: логотип, Груминг, Породы, Обучение, Блог, Контакты, телефон, «Записаться». Услуги и породы только внутри выпадающих списков. На телефоне то же дерево в панели «Меню».
- components: круглая запись, фото-карточки услуг, бишон на столе первого экрана, обрезанное слово
- responsive_notes: 1440 ряд стаи из фото студии, до 1100px панель меню, 375 одна колонка, бишон не шире 46vw и не на кнопке
- motion_notes: ken burns постера, появление стаи и карточек, подъём карточки, выезд меню, четыре состояния бишона. При prefers-reduced-motion всё статично. Служебную подпись про ролик не печатать. Подзаголовок героя — p, не h2. H2 секций: «Груминг собак и кошек в Саратове», «Две студии ОксиГрум в Саратове», «Обучение грумингу в Саратове», «Блог о груминге собак и кошек».
- aura_requirements: не ставить champion.jpg, цены, часы, стаж
- semantic_notes_for_aurora: районные запросы не превращать в отдельные адреса студии; Заводской, Ленинский, Солнечный, Юбилейный и Чапаева не называть адресом ОксиГрум

### 2. Груминг собак
- slug: /gruming-sobak/
- build_in_test: yes
- design_priority: P0
- role: service hub
- design_source: шаблон услуги, акцент «до и после» йорка и пуделя
- h1: Стрижка и груминг собак в Саратове
- title: Стрижка собак в Саратове — груминг в ОксиГрум
- description: Стрижка и груминг собак в двух студиях Саратова. Что входит в процедуру и как записаться. Цену на сайте не публикуем.
- key_sections:
  - hero-text-h1
  - split-before-after
  - includes
  - excludes
  - breed-links
  - studios
  - booking
  - neighbor-and-article
- components: две фотоколонки до/после, список состава, круглая запись
- visual_accent: пара `before_grooming_02.jpg` / `after_grooming_02.jpg` на бирюзовой вертикали слева. Это не общий текстовый шаблон.
- responsive_notes: на 375 колонки до/после друг под другом
- motion_notes: без персонажа курсора, статичные фото
- aura_requirements: цену не публиковать; выезд не обещать
- semantic_notes_for_aurora: соседняя услуга `/kompleksnyj-gruming/`, статья `/blog/koltuny-u-sobaki/`

### 3. Груминг кошек
- slug: /gruming-koshek/
- build_in_test: yes
- design_priority: P0
- role: service
- design_source: шаблон услуги, акцент кошка и вычёс
- h1: Груминг кошек в Саратове
- title: Груминг кошек в Саратове — экспресс-линька в ОксиГрум
- description: Что ОксиГрум делает с кошкой: подтверждена экспресс-линька. Это студия груминга, не ветприём.
- key_sections:
  - hero-text-h1
  - cat-photo
  - includes
  - excludes-no-body-clip
  - studios
  - booking
  - neighbor-and-article
- components: крупное фото `linka_03.jpg`, плашка «стрижки корпуса нет»
- visual_accent: фото кошки занимает 7 колонок, справа бирюзовая плашка запрета стрижки корпуса. Не обещать наркоз.
- responsive_notes: плашка под фото на 375
- motion_notes: нет
- aura_requirements: не рисовать стетоскоп и не обещать лечение
- semantic_notes_for_aurora: сосед `/ekspress-linka/`, статья `/blog/koltuny-u-koshki/`

### 4. Комплексный груминг
- slug: /kompleksnyj-gruming/
- build_in_test: yes
- design_priority: P0
- role: service
- design_source: шаблон услуги, два портрета после полной стрижки
- h1: Комплексный груминг в Саратове
- title: Комплексный груминг в Саратове — что входит в ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- key_sections:
  - hero-text-h1
  - two-portraits
  - includes-eight
  - excludes
  - studios
  - booking
  - neighbor-and-article
- components: пара `complex_grooming_01.jpg` и `complex_grooming_02.jpg`
- visual_accent: два вертикальных кадра внахлёст, левый выше правого на 32px
- responsive_notes: на 375 кадры стопкой без нахлёста
- motion_notes: нет
- aura_requirements: состав из текста сайта, без чужого прайса
- semantic_notes_for_aurora: сосед `/gigienicheskij-gruming/`, статья `/blog/gigiena-i-kompleks/`

### 5. Обучение
- slug: /obuchenie/
- build_in_test: yes
- design_priority: P0
- role: education hub
- design_source: тот же каркас, визуально руки и ученик
- h1: Обучение грумингу в Саратове
- title: Обучение грумингу в Саратове — очные курсы ОксиГрум
- description: Очное обучение грумингу в Саратове: с нуля, индивидуально, мастер-класс, одна собака или курс для владельца. Диплом и трудоустройство не обещаем.
- key_sections:
  - hero-trainer
  - format-cards
  - student-marquee
  - not-promised
  - studios
  - booking
  - article-link
- components: портрет `trainer.jpg`, лента `trainings/thumb/01.jpg`–`08.jpg`, пять карточек форматов
- visual_accent: бирюзовая колонка слева с подписью «руки и ученик», фото Оксаны справа. Не фото готовой стрижки как у услуг.
- responsive_notes: лента выпускников читается, дублируется для бесшовного хода, при reduced-motion стоит
- motion_notes: медленная лента 40s, пауза при наведении
- aura_requirements: не ставить champion.jpg, «1-е место», «10 лет», «25+», «40+», диплом и заработок
- semantic_notes_for_aurora: статья `/blog/kak-stat-grumerom/`, не ставить H1 статьи про диплом на эту страницу

## Backlog

`build_in_test: no`. Тот же шаблон услуги, обучения, доверия, контакта, статьи или юридической страницы. У каждой свой кадр, не пустая текстовая колонка.

### Услуги

### 6. Гигиенический груминг
- slug: /gigienicheskij-gruming/
- build_in_test: no
- design_priority: P1
- role: service
- h1: Гигиенический груминг без стрижки туловища
- title: Гигиенический груминг в Саратове — без стрижки туловища
- description: Гигиенический груминг: уход и стрижка головы. Стрижки туловища в этой услуге нет.
- visual_accent: `hygene_grooming_01.jpg`, плашка запрета стрижки туловища на первом экране
- neighbor: /kompleksnyj-gruming/
- article: /blog/gigiena-i-kompleks/

### 7. Экспресс-линька
- slug: /ekspress-linka/
- build_in_test: no
- design_priority: P1
- role: service
- h1: Экспресс-линька собак и кошек в Саратове
- title: Экспресс-линька собак и кошек в Саратове — ОксиГрум
- description: Экспресс-линька собак и кошек в Саратове: мытьё, вычёс, когти и уши. Это не стрижка под ноль.
- visual_accent: `linka_02.jpg` и `linka_03.jpg`, подпись что это вычёс, не бритьё
- neighbor: /gruming-koshek/
- article: /blog/chto-takoe-ekspress-linka/

### 8. Тримминг
- slug: /trimming/
- build_in_test: no
- design_priority: P1
- role: service
- h1: Тримминг собак в Саратове
- title: Тримминг собак в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `trimming_02.jpg`, руки с инструментом, породы шнауцер, фокстерьер, жесткошёрстная такса текстом
- neighbor: /gruming-sobak/
- article: /blog/trimming-i-strizhka/

### 9. SPA-уход
- slug: /spa-uhod/
- build_in_test: no
- design_priority: P1
- role: service
- h1: SPA-уход для собак в Саратове
- title: SPA-уход для собак в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `spa_01.jpg`, `spa_02.jpg`, `spa_03.jpg` как ванна, маска и сушка. Лечебный эффект озона не обещать
- neighbor: /kompleksnyj-gruming/
- article: /blog/chto-takoe-gruming/

### Породы

Общий шаблон породы: H1, одно своё фото, что входит в стрижку или вычёс, чего нет, две студии, запись, сосед и статья. Цену породы не выдумывать. Титул чемпиона в заголовок не ставить.

### 10. Йорк
- slug: /strizhka-jorka/
- build_in_test: no
- h1: Стрижка йорка в Саратове
- title: Стрижка йорка в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `after_grooming_02.jpg`
- article: /blog/koltuny-u-sobaki/

### 11. Шпиц
- slug: /strizhka-shpica/
- build_in_test: no
- h1: Стрижка и вычёс шпица в Саратове
- title: Стрижка и вычёс шпица в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `groomed_spits_01.jpg`, рядом короткая схема «линька или стрижка» без запугивания
- article: /blog/chto-takoe-ekspress-linka/

### 12. Пудель
- slug: /strizhka-pudelya/
- build_in_test: no
- h1: Стрижка пуделя в Саратове
- title: Стрижка пуделя в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `groomed_03.jpg`
- article: /blog/chto-takoe-gruming/
- note: выставочный груминг не обещать

### 13. Мальтипу
- slug: /strizhka-maltipu/
- build_in_test: no
- h1: Стрижка мальтипу в Саратове
- title: Стрижка мальтипу в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: спокойный кадр светлой длинной шерсти `complex_grooming_02.jpg` с честным alt «мальтийская болонка», отдельного кадра мальтипу на сайте нет — не подписывать чужую породу как мальтипу. Если кадра нет, оставить фото болонки с точным alt и не врать в подписи.
- article: /blog/koltuny-u-sobaki/

### 14. Бишон
- slug: /strizhka-bishona/
- build_in_test: no
- h1: Стрижка бишона в Саратове
- title: Стрижка бишона в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: cutout курсорного бишона не ставить как «работу студии». Пока нет своего кадра бишона на oxigroom.ru, страница использует текстовый H1 и фото процесса `spa_02.jpg` с alt про работу студии, без подмены породы.
- article: /blog/chto-takoe-gruming/

### 15. Мальтийская болонка
- slug: /strizhka-maltez/
- build_in_test: no
- h1: Стрижка мальтийской болонки в Саратове
- title: Стрижка мальтийской болонки в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `complex_grooming_02.jpg`
- article: /blog/koltuny-u-sobaki/

### 16. Ши-тцу
- slug: /strizhka-shi-tcu/
- build_in_test: no
- h1: Стрижка ши-тцу в Саратове
- title: Стрижка ши-тцу в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `hygene_grooming_01.jpg`
- article: /blog/gigiena-i-kompleks/

### 17. Чихуахуа
- slug: /strizhka-chihuahua/
- build_in_test: no
- h1: Стрижка чихуахуа в Саратове
- title: Стрижка чихуахуа в Саратове — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `groomed_chihuahua.jpg`
- article: /blog/podgotovka-sobaki-k-grumingu/

### Обучение, внутренние

Тот же учебный акцент: руки, стол, ученик. Не сливать с карточкой стрижки.

### 18. С нуля
- slug: /obuchenie/s-nulya/
- build_in_test: no
- h1: Груминг с нуля в Саратове
- title: Груминг с нуля в Саратове — очный курс ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `trainings/thumb/01.jpg` крупно, список тем с сайта без обещания дохода
- article: /blog/kak-stat-grumerom/

### 19. Индивидуально
- slug: /obuchenie/individualno/
- build_in_test: no
- h1: Индивидуальное обучение грумингу
- title: Индивидуальное обучение грумингу — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: `trainer.jpg` и один кадр ученика `trainings/thumb/05.jpg`, без числа «быстрый результат» как гарантии
- article: /blog/kak-stat-grumerom/

### 20. Мастер-класс
- slug: /obuchenie/master-klass/
- build_in_test: no
- h1: Мастер-класс по грумингу для мастеров
- title: Мастер-класс по грумингу для мастеров — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: руки крупно, `trainings/thumb/08.jpg`
- article: /blog/trimming-i-strizhka/
- note: удостоверение повышения квалификации не обещать

### 21. Попробовать
- slug: /obuchenie/poprobovat/
- build_in_test: no
- h1: Попробовать груминг на одной собаке
- title: Попробовать груминг на одной собаке — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: два разных блока — «проба профессии» и «это не пробная стрижка своего животного»
- article: /blog/kak-stat-grumerom/

### 22. Для владельцев
- slug: /obuchenie/dlya-vladelcev/
- build_in_test: no
- h1: Курс груминга для владельца своей собаки
- title: Курс груминга для владельца своей собаки — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: домашний масштаб, фото своей собаки после ухода `groomed_spits_01.jpg`, не групповой выпуск
- article: /blog/podgotovka-sobaki-k-grumingu/

### Доверие и места

### 23. Отзывы
- slug: /otzyvy/
- build_in_test: no
- h1: Отзывы об ОксиГрум
- title: Отзывы об ОксиГрум в Саратове
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: две большие ссылки-карточки на Яндекс Карты и 2ГИС, без звёзд и без переписанных отзывов
- maps: https://yandex.ru/maps/org/oksigrum/216979961568/
- twogis: https://2gis.ru/saratov/firm/70000001103631619

### 24. Контакты
- slug: /kontakty/
- build_in_test: no
- h1: Контакты двух студий ОксиГрум в Саратове
- title: Адреса студий ОксиГрум в Саратове
- description: 2-я Садовая, 106 к9 и улица Панченко, 6. Один телефон +7 927 226-63-13. Часы подтверждаются у студии.
- visual_accent: две равные адресные карточки, телефон, мессенджеры. Часы, индекс и координаты не добавлять

### 25. Садовая
- slug: /kontakty/2-ya-sadovaya/
- build_in_test: no
- h1: ОксиГрум на 2-й Садовой, 106 к9
- title: ОксиГрум на 2-й Садовой, 106 к9 — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: одна адресная карточка, фото работы `complex_grooming_01.jpg` как жизнь студии, не карта с выдуманной точкой

### 26. Панченко
- slug: /kontakty/panchenko/
- build_in_test: no
- h1: ОксиГрум на улице Панченко, 6
- title: ОксиГрум на улице Панченко, 6 — ОксиГрум
- description: Страница ОксиГрум в Саратове. Состав услуги и запись в мессенджер. Цены, диплом и стаж не обещаем.
- visual_accent: вторая адресная карточка, фото `spa_03.jpg`. Кировский район только как подпись 2ГИС, не третья точка

### Блог

Хаб и статьи визуально из семейства `duotone_overlay`: серое поле, бирюзовая полоса слева, фото работы без текста на картинке. Тела статей AURA не пишет.

### 27. Хаб блога
- slug: /blog/
- build_in_test: no
- h1: Блог студии груминга ОксиГрум
- title: Блог о груминге собак и кошек и об обучении грумера — ОксиГрум
- description: Короткие ответы владельцам собак и кошек и тем, кто выбирает очное обучение грумингу в Саратове.
- visual_accent: сетка карточек B01–B08, обложка слот под Excalibur, без пустых «скоро» и без чужих цен

### 28–35. Статьи
- slugs: `/blog/koltuny-u-koshki/`, `/blog/chto-takoe-gruming/`, `/blog/gigiena-i-kompleks/`, `/blog/chto-takoe-ekspress-linka/`, `/blog/diplom-grumera-i-praktika/`, `/blog/kak-stat-grumerom/`, `/blog/trimming-i-strizhka/`, `/blog/koltuny-u-sobaki/`
- build_in_test: no
- template: article
- h1_source: `11-blog-topics.md` и url-map, не переписывать
- visual_accent: одна обложка 16:9 семейства duotone сверху, дальше текст Excalibur. AURA тексты не пишет
- also_in_url_map_without_topic_file: `/blog/podgotovka-sobaki-k-grumingu/`, `/blog/gruming-koshki-v-studii/` — те же правила обложки, сцены в промптах не выдумывать сверх `11-blog-topics.md`. Для этих двух URL карточка хаба ждёт тему редактора, дизайн-шаблон статьи уже задан

### Юридические

### 36. Политика конфиденциальности
- slug: /politika-konfidencialnosti/
- build_in_test: no
- h1: Политика конфиденциальности
- title: Политика конфиденциальности — ОксиГрум
- description: Как студия ОксиГрум обрабатывает имя, телефон и текст сообщения с сайта.
- visual_accent: узкая колонка 68ch, бирюзовая линия слева у H1, без героя-животного. ИНН не выдумывать

### 37. Политика cookies
- slug: /politika-cookies/
- build_in_test: no
- h1: Политика cookies
- title: Политика cookies — ОксиГрум
- description: Какие cookies использует сайт ОксиГрум и как принять или отклонить их.
- visual_accent: та же узкая колонка и баннер снизу с кнопкой «Принять». Счётчики не ставить до кода владельца

## Shared chrome

Шапка, подвал, круглая запись, фокус, телефон `+7 927 226-63-13`, WhatsApp `https://wa.me/79272266313`, Telegram `https://t.me/oxigrooms`, Max из site.inv, VK `https://vk.ru/oxigroom_saratov`. Метрику не ставить.
