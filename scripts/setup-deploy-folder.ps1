param(
    [string]$Deploy = "C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy",
    [string]$Repository = "https://github.com/Amoghchowdary/surya_survey_solutions.git"
)

if (Test-Path (Join-Path $Deploy ".git")) {
    Write-Host "Permanent deploy repository already exists: $Deploy"
    exit 0
}

if (Test-Path $Deploy) {
    $items = Get-ChildItem -Force $Deploy
    if ($items.Count -gt 0) {
        throw "Deploy folder exists but is not a Git repository and is not empty: $Deploy"
    }
} else {
    New-Item -ItemType Directory -Path (Split-Path $Deploy -Parent) -Force | Out-Null
}

git clone $Repository $Deploy
if ($LASTEXITCODE -ne 0) {
    throw "git clone failed with exit code $LASTEXITCODE"
}

Write-Host "Permanent deployment folder is ready: $Deploy"
