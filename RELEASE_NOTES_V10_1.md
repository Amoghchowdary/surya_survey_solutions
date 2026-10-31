# Surya Survey Solutions V10.1

## Scope
Mobile-only production correction. The approved tablet/laptop/desktop layout is preserved.

## Mobile fixes
- All phones up to 767px now use the dedicated 9:16 mobile hero asset.
- Added safe left/right padding so the logo, eyebrow, heading and buttons cannot touch or clip against the viewport edge.
- Reduced mobile hero typography proportionally while preserving the same desktop hierarchy.
- Tightened description and CTA spacing.
- Total Station focal position is retained on the right.
- Four trust cards remain visible as a compact 2×2 grid without consuming excessive height.
- CTA buttons remain two columns on normal phones and stack only below 360px.
- Added short-height portrait safeguards.
- Explicit `box-sizing` and horizontal overflow containment prevent accidental viewport widening.

## Preserved
- Tablet, laptop and desktop composition.
- V9 counters/contact details.
- Client logo marquee.
- Security configuration.
- GitHub Pages workflow.
- Permanent deployment-folder workflow.
