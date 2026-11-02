param(
    [string]$Source = (Resolve-Path (Join-Path $PSScriptRoot "..")),
    [string]$Deploy = "C:\Users\MYPC\Desktop\Surya soutions\Deployment\surya_survey_solutions"
)

Write-Host "Source: $Source"
Write-Host "Deploy: $Deploy"

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
  /XD ".git" "node_modules" ".output" "dist" ".vite" ".tanstack" ".cache" `
  /XF "*.log"

$code = $LASTEXITCODE
if ($code -ge 8) {
    throw "Robocopy failed with exit code $code"
}

Write-Host "Robocopy completed successfully (code $code)."
Write-Host "Deployment folder updated. No Git command has been executed."
exit 0
