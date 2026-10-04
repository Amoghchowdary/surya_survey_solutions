# Surya Survey Solutions V1 Deployment

## Local test

```powershell
npm install
npm run build
npm run dev
```

## Permanent deployment folder

Recommended permanent Git folder:

`C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy`

Keep its `.git` folder permanently. Do not delete the deploy folder between website versions.

## Copy V1 into the deploy folder

From this V1 source folder:

```powershell
.\scripts\robocopy-to-deploy.ps1
```

Or manually:

```powershell
robocopy `
"C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya_Survey_Solutions_V1" `
"C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy" `
/MIR `
/XD ".git" "node_modules" ".output" "dist" ".vite" ".tanstack" ".cache" `
/XF "*.log"
```

## Push

```powershell
cd "C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy"
git status
git add .
git commit -m "Deploy Surya Survey Solutions V1"
git push
```

GitHub Actions deploys the static site automatically from `main`.
