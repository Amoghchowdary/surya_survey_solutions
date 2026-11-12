# V29 Validation

Focused scope:
- Mahitha Projects is inside `clientLogos.map(...)` in both scrolling track copies.
- No Mahitha pinned wrapper is rendered by `ClientLogoMarquee`.
- Project image and video tiles both render `MediaSecurityOverlay`.
- Live media overlay is transparent and positioned at the top-left.
- Sequence number appears with `SURYA SURVEY SOLUTIONS`; no bottom-right live number is rendered.
- Surya logo remains visible in the same top-left overlay group.
- No unrelated routes/data were changed.

Build note:
- Dependency installation could not be completed in the isolated validation environment, so Vite build execution was unavailable here. Source-level checks were completed.
- V28 project JPG/WebP assets already contain a baked V28 protection mark. The patch intentionally does not destructively alter those photographs.
