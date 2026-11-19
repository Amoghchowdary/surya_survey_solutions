# V35 Validation

## Source checks
- Launch deadline is hard-coded as `2026-11-19T11:00:00+05:30` (11:00 AM IST).
- Root application content is wrapped by `LaunchGate`, so all routes are hidden before launch.
- Countdown updates four times per second and displays hours/minutes/seconds.
- At zero, the launch phase switches once to the blast animation.
- Blast phase lasts 1.8 seconds and then mounts the existing website.
- When loaded after the launch timestamp, the gate initializes directly to `open`, so the countdown/blast do not replay.
- Reduced-motion users receive a shortened transition.
- V34 site content and equipment carousels are otherwise unchanged.

## Build environment note
A local `npm run build` could not be executed in this isolated workspace because the extracted release does not include `node_modules`, and `npm install --no-audit --no-fund` exceeded the available execution window. GitHub Actions remains configured to perform a clean dependency install and V35 production build.
