# Система обложек

- Инструмент генерации для Excalibur: Kie.ai `gpt-image-2-text-to-image`, не MCP KV.
- Снятие фона не нужно: `requires_background_removal` у всех тем false.
- Формат 16:9, цель 1200×675.
- Файл обложки кладёт Excalibur в `teya-memory/blog/articles/<topic_id>-<slug>/cover/cover.png`.
- В публичный HTML не оставлять временный URL Kie: после импорта это медиатека WordPress. На этом шаге импорта нет, сайт не публикуется.
- Проверка серии: восемь превью рядом должны держать одну бирюзовую полосу слева и ни одного читаемого слова на картинке.
- Если два кадра выглядят как разные бренды, вернуть концепт, а не править стиль в статье.

Сборка:

```text
global_prompt_prefix + topic_scene_descriptor + global_prompt_suffix
```
