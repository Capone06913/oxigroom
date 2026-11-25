# AURA font match

Страница русская. Обе гарнитуры с кириллицей в Google Fonts.

## Разобранные пары

- Manrope + Manrope — текущий сайт, плотный гротеск, держит и H1, и абзац.
- Unbounded + Manrope — плакатный display для огромной надписи.
- Onest + Manrope — мягкий продукт, слабее плакат.
- Nunito + Nunito Sans — слишком круглое «детское», ближе к магазину игрушек.
- Golos Text — спокойный сервис, без плакатного жеста.
- Inter — не использован. Для этого сайта он ничего не добавляет к Manrope.

## Решение

Интерфейс, текстовый H1, карточки и тело: **Manrope** (веса 500, 700, 800). Это осознанное продолжение oxigroom.ru, не случайный пресет.

Декоративное обрезанное слово «ОксиГрум» за стаей: **Unbounded** 800. Оно `aria-hidden` и не заменяет H1. Два семейства, третьего нет.

Подключение:

```text
https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Unbounded:wght@800&display=swap
```

Плюс `preconnect` к `fonts.googleapis.com` и `fonts.gstatic.com`.

Трекинг крупных заголовков Manrope: `-0.03em` … `-0.045em`. Unbounded на обрезанном слове: `-0.045em`, line-height `0.8`.
