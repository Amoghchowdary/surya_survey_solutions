# V32 Validation

## Confirmed
- Source package version: 32.0.0.
- Homepage About-section media uses `public/videos/drone-surveying-home-v32.mp4`.
- Video attributes: autoplay, loop, muted, playsInline; no `controls` attribute is present.
- Final video: H.264, 1280x960, 31 seconds, no audio stream.
- Poster image is included for loading/fallback.
- Drone Surveying is present in the service capability data and has a matching homepage icon slot.
- V31 Sri Hita Infra and Mahitha Developers project names remain present.
- GitHub Pages workflow label updated to V32.
- V32 deployment script included.

## Build environment note
The isolated build environment could not complete `npm install` within its network/runtime window, so a full local Vite production build was not falsely marked as passed. GitHub Actions performs a clean `npm install` and `npm run build` on push.
