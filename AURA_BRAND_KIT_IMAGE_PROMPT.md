# Промпт сводной доски бренда

Статус: not_generated. Доска не рисовалась. В этом проходе Kie сделал только белого бишона. Стая закрыта фото студии. Промпт оставлен, чтобы позже собрать одну большую картинку-доску, не макет сайта.

```text
One large brand board for a Saratov dog and cat grooming studio, light gray #E6E5E1 background, turquoise #0C6E78, warm black #1A1814, white cards. Slides on a single canvas: color swatches, Manrope and Unbounded letter samples in Cyrillic, round solid booking button, portrait photo cards, a cropped huge word behind six animals, a video-poster frame, a small white bichon cutout, a 375px phone preview. No stethoscope, no pet shop, no prices, no English UI labels, no watermark.
```

Когда доска понадобится: `POST /api/v1/jobs/createTask` моделью `gpt-image-2-text-to-image`, затем при необходимости `recraft/remove-background` только для бишона, не для всей доски.
