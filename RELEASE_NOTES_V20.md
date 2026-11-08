# Surya Survey Solutions V20

## Exact client-order verification
- Reverified the newly uploaded project ZIP file-by-file and project-folder-by-project-folder.
- Source ZIP SHA-256: `328f066010c30def480d0b14dc695cd21c427a77002abf9ae79007392049ccb3`.
- The newly uploaded ZIP is byte-for-byte identical to the previously audited ordered client ZIP.
- Verified 483 client source items against 483 website sequence entries.
- Order mismatches: 0.
- Missing referenced project assets: 0.
- Videos remain inside their exact numbered positions.
- Source-number gaps are preserved exactly; no synthetic renumbering is performed.
- GAD `twenty four .jpeg` remains position 24 by explicit written-number fallback.
- GAD `fifty 50.pdf` remains visible at position 50 as the web-rendered media item.

## Public assets and watermark protection
- V20 is built as a full copy of the verified V19 source, so existing public assets are preserved.
- Project media retains the Surya Survey Solutions logo + `™` watermark treatment.
- Protected media retains no-download UI deterrents, right-click blocking and drag blocking.
- Public asset inventory is included as `PUBLIC_ASSET_INVENTORY_V20.csv`.

## Safer deployment workflow
- `scripts/robocopy-to-deploy.ps1` no longer purges the `public` directory.
- Application/source files are mirrored while excluding `public`.
- The `public` directory is copied additively using `/E`, not `/MIR` and not `/PURGE`.
- This directly addresses the OneDrive/Git failures caused by attempts to delete locked public media directories.
- The default deployment repository is automatically detected as the sibling folder `Surya-Git-Deploy`.

## Audit files
- `ORDER_AUDIT_V20.csv` — all 483 ordered source items and website assets.
- `ORDER_AUDIT_V20.md` — folder-level verification summary.
- `PUBLIC_ASSET_INVENTORY_V20.csv` — complete V20 public asset inventory.
