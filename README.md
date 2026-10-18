# Surya Survey Solutions V6

Production website for **Surya Survey Solutions**, a civil-engineering surveying business.

## Website pages

- Home
- About Us
- Project Gallery
- Contact Us

## V6 homepage sections

1. Full-screen responsive hero using the approved construction photograph
2. Project statistics
3. Company introduction
4. Surveying capabilities
5. Survey workflow
6. Technology and equipment
7. Civil-engineering project sectors
8. Featured projects
9. Why choose Surya Survey Solutions
10. Project enquiry CTA

## Hero image delivery

The V6 package contains a 16K master image plus responsive derivatives so browsers do not need to download the full 16K asset unnecessarily:

- `survey-hero-16k.jpg` — 15360×8640
- `survey-hero-8k.webp` — 7680×4320
- `survey-hero-4k.webp` — 3840×2160
- `survey-hero-2560.webp`
- `survey-hero-1920.webp`
- `survey-hero-tablet.webp`
- `survey-hero-mobile.webp`

## Technology

- React 19
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS 4
- TypeScript

## Local verification

```powershell
Set-ExecutionPolicy -Scope Process Bypass -Force
.\scripts\INSTALL_AND_VERIFY_V6.ps1
npm run dev
```

See `DEPLOYMENT.md` for the permanent Robocopy + GitHub deployment workflow.
