# V11 Responsive QA Matrix

Test every page: `/`, `/about`, `/projects`, `/contact`.

| Class | Viewports |
|---|---|
| Mobile | 320×568, 360×800, 390×844, 430×932 |
| Tablet | 768×1024, 820×1180, 1024×768 |
| Desktop | 1366×768, 1440×900, 1920×1080 |

Acceptance criteria:
- no page-level horizontal scrollbar
- no clipped headings, buttons, cards, form controls, logos or images
- header/menu remains inside viewport
- all images preserve aspect ratio and stay within their containers
- forms are single-column on phone and comfortable on tablet+
- project dialog stays inside viewport
- trust/stat/client-logo sections do not overflow
- desktop visual hierarchy remains unchanged
