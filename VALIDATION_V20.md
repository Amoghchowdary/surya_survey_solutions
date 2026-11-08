# V20 Validation Report

## Client order
- Authoritative source items: 483
- Website ordered entries: 483
- Order mismatches: 0
- Missing referenced project assets: 0
- Source ZIP hash verified against the re-uploaded client ZIP.

## Project counts
- Amaravati site: 113 ordered items
- Bheemma Amaravati site GAD Tower: 80 ordered items
- BHEEMAA JUNIPER BANGLORE SITE: 60 ordered items
- BHEEMAA Shamshabad GLOR SITE: 76 ordered items
- Greater Infra Apartments: 102 ordered items
- Yashoda villa site: 52 ordered items

## Videos
- 11 ordered project videos validated with ffprobe.
- GAD Tower videos: positions 25, 78, 79, 80.
- Juniper Bengaluru videos: positions 1, 7, 8, 18.
- Shamshabad GLOR videos: positions 55, 66.
- Yashoda Villa video: position 16.
- All 11 project videos visibly retain the Surya Survey Solutions logo/watermark treatment.

## Images
- 472 ordered image/PDF-derived website entries retained.
- All referenced project image/poster assets decode successfully.
- Project images retain the Surya Survey Solutions watermark treatment.

## Public asset preservation
- V19 public assets: 583 files.
- V20 public assets before audit/report additions: 583 files.
- Public assets deleted from V19 to V20: 0.
- V20 Robocopy deployment intentionally does not purge `public`.

## Deployment safety
- Application code is mirrored excluding `public`.
- `public` is copied additively with `/E`.
- No `/MIR` or `/PURGE` is used on the deployment `public` directory.
