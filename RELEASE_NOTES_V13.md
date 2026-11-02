# Surya Survey Solutions V13

## Project-media integration
- Added four real project galleries from the supplied `surya project images.zip`.
- Curated 48 website-ready images from 149 supplied files.
- Removed exact duplicates and reduced repetitive / low-value imagery.
- Converted selected public project imagery to optimised WebP assets.
- Replaced placeholder Projects entries with actual folder-derived project names and supplied field media.

## Projects now represented
1. Amaravati Site Survey
2. Bheemaa Amaravati GAD Tower Survey
3. Greater Infra Villa Project Survey
4. Yashoda Villa Site Survey

## Client scroller
- Added Sri Eswar Ram supplied logo.
- Added visible company names under logos.
- Logo and company name are a single clickable target.
- Bheemaa, Greater Infra and Yashoda deep-link directly to matching projects and automatically open their image gallery.
- Other clients open the overall project gallery until matching project media is supplied.

## Deployment
- Existing deployment folder is preserved.
- `robocopy-to-deploy.ps1` only mirrors V13 into the existing deployment folder.
- It does not initialise Git and does not execute or print Git push commands.

## Preserved
- V12 desktop/tablet/mobile responsive work.
- Existing homepage hero and approved desktop design.
- Contact details, counters, security configuration, GitHub Pages workflow and favicon/logo system.
