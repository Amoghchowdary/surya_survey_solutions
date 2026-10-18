$ErrorActionPreference = "Stop"

Write-Host "Surya Survey Solutions V6 - clean install and verification" -ForegroundColor Cyan

if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}

if (Test-Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
}

npm cache verify
npm install
npm run security:audit
npm run build

Write-Host ""
Write-Host "V6 install, audit and production build completed successfully." -ForegroundColor Green
Write-Host "Run: npm run dev" -ForegroundColor Green
