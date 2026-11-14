# V33 Validation

## Passed source/package checks
- Phone number standardized to `7036892959` in live website code and project-media protection overlay.
- Project/client name standardized to `Srihitha Infra`.
- Project slug and physical media folder renamed to `srihitha-infra`.
- No stale `703692959`, `Sri Hita Infra`, or `mallampet-site` references remain under `src/`.
- All asset() references in `src/lib/site-data.ts` resolve to existing files.
- Mahitha Developers / Balaji Nagar remains preserved.
- V32 drone-survey homepage video functionality remains included.
- `DEPLOY_V33_TO_EXISTING_REPO.ps1` is included.

## Build note
A clean `npm install --no-audit --no-fund` exceeded the execution window in the isolated environment, leaving Vite unavailable locally. Therefore a local production build is **not** marked as passed. GitHub Actions will perform the clean dependency install and Vite build after deployment.
