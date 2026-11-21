# Surya Survey Solutions — V48 Production Hardening

## Visual finishing
- Corrected header logo alignment using a square crop of the approved circular emblem; the logo artwork itself was not redrawn.
- Normalized desktop/mobile navigation order and spacing.
- Updated footer to use the same aligned emblem mark.
- Added premium branded 404 and 500 states and a keyboard skip-to-content link.

## SEO and crawler layer
- Added sitemap index plus dedicated page, image and video sitemaps.
- Added video thumbnails for all hosted MP4 files used by the video sitemap.
- Added robots.txt, llms.txt, llms-full.txt, humans.txt, security.txt and /.well-known/security.txt.
- Added llms.txt discovery relation in the HTML head.
- Corrected Projects and Gallery Open Graph naming.
- Fixed Organization/WebSite structured-data ID linkage and added the verified public contact point.
- Preserved canonical URLs for all seven public routes.

## Production essentials
- Expanded web app manifest, Apple touch icon and maskable icon support.
- Added browserconfig.xml.
- Added no-script fallback and premium custom 404 behavior.
- Strengthened GitHub Pages workflow checks so crawler, sitemap, favicon, LLM and security files must be present in every deployed artifact.
- Custom domain remains www.suryasurveysolutions.in with SITE_BASE_PATH=/.
