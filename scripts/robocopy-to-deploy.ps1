param(
    [string]$Source = (Resolve-Path (Join-Path $PSScriptRoot "..")),
    [string]$Deploy = ""
)

if ([string]::IsNullOrWhiteSpace($Deploy)) {
    $externalDeploy = "C:\Surya-Deploy\surya_survey_solutions"
    if (Test-Path (Join-Path $externalDeploy ".git")) {
        $Deploy = $externalDeploy
    } else {
        $projectParent = Split-Path -Parent $Source
        $Deploy = Join-Path $projectParent "Surya-Git-Deploy"
    }
}

Write-Host "Source: $Source"
Write-Host "Deploy: $Deploy"
Write-Host "V28 deployment mode: code mirror + additive public assets (NO public purge)."

if (-not (Test-Path $Deploy)) {
    throw "Deployment folder was not found at: $Deploy"
}

if (-not (Test-Path (Join-Path $Deploy ".git"))) {
    throw "Existing deployment folder is not the expected Git-backed deployment directory: $Deploy"
}

robocopy `
  "$Source" `
  "$Deploy" `
  /MIR `
  /XD ".git" "node_modules" ".output" "dist" ".vite" ".tanstack" ".cache" "public" `
  /XF "*.log"

$code = $LASTEXITCODE
if ($code -ge 8) {
    throw "Application Robocopy failed with exit code $code"
}

robocopy `
  (Join-Path $Source "public") `
  (Join-Path $Deploy "public") `
  /E `
  /COPY:DAT `
  /DCOPY:DAT `
  /R:2 `
  /W:2 `
  /XF "*.log"

$publicCode = $LASTEXITCODE
if ($publicCode -ge 8) {
    throw "Public-assets Robocopy failed with exit code $publicCode"
}

Write-Host "V28 Robocopy completed successfully."
Write-Host "Application copy code: $code"
Write-Host "Public-assets copy code: $publicCode"
Write-Host "Public assets were copied/updated without deletion."
Write-Host "No Git command has been executed."
exit 0
