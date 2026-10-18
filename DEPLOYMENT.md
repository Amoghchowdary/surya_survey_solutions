# Surya Survey Solutions V6 Deployment

## 1. Local verification

```powershell
cd "C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya_Survey_Solutions_V6"

Set-ExecutionPolicy -Scope Process Bypass -Force
.\scripts\INSTALL_AND_VERIFY_V6.ps1
npm run dev
```

The verification script runs:

1. `npm cache verify`
2. `npm install`
3. `npm run security:audit`
4. `npm run build`

Expected production output: `dist/client`.

## 2. Permanent Git deployment folder

Keep this folder permanently:

`C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy`

Its `.git` directory must never be deleted when changing website versions.

If it does not exist yet:

```powershell
.\scripts\setup-deploy-folder.ps1
```

## 3. Robocopy V6 into the permanent deploy repository

From the V6 source folder:

```powershell
.\scripts\robocopy-to-deploy.ps1
```

This mirrors V6 into `Surya-Git-Deploy` while excluding `.git`, `node_modules`, build output and caches.

## 4. Push V6

```powershell
cd "C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy"

git status
git add .
git commit -m "V6 - Final approved homepage and 16K survey hero"
git push origin main
```

GitHub Actions runs the critical npm audit gate, builds the site and deploys `dist/client` to GitHub Pages.
