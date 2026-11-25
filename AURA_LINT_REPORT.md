# AURA lint report

Проверка `AURADESIGN.md`.

- YAML открывается и закрывается. Цвета, типографика, spacing, rounded, borders, shadows, components, motion, assets на месте.
- Ссылки компонентов ведут на объявленные токены: `{colors.primary}`, `{colors.on-primary}`, `{rounded.full}`, `{typography.label-sm}`, `{colors.surface-container}`, `{colors.on-background}`, `{borders.hairline}`, `{colors.outline-variant}`, `{rounded.md}`, `{spacing.md}`, `{colors.outline}`, `{rounded.DEFAULT}`, `{spacing.sm}`.
- Контраст primary / on-primary: 5.97:1. Контраст background / on-background: 14.06:1. Оба выше 4.5:1.
- Радиусы: 8, 16, 20, 28, 36, 9999. Кнопка круглая по брифу, карточка 20px. Разрыв осознанный: капсула против карточки, не случайный 2px против 40px.
- Обязательные разделы тела: doctrine, composition lock, philosophy, color, typography, layout, elevation, states, motion, assets, responsive, accessibility, do/don't, QA, AI prompt.
- Кириллица: Manrope и Unbounded.
- Шейпы: круг кнопки, обрез слова, скруглённые фото, радиус стыка секций. Клякс и звёзд нет.
- Deliverables набора созданы в `teya-memory/design/`.
- Статус: pass.
