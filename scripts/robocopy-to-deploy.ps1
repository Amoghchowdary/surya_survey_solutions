param(
    [string]$Source = (Resolve-Path (Join-Path $PSScriptRoot "..")),
    [string]$Deploy = "C:\Users\MYPC\Desktop\Surya soutions\Deployment\surya_survey_solutions"
)

Write-Host "Source: $Source"
Write-Host "Deploy: $Deploy"

if (-not (Test-Path $Deploy)) {
    throw "Deployment repository was not found at: $Deploy"
}

if (-not (Test-Path (Join-Path $Deploy ".git"))) {
    throw "The deployment folder is not a Git repository: $Deploy"
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
Write-Host "Next:"
Write-Host "cd `"$Deploy`""
Write-Host "git status"
Write-Host "git add -A"
Write-Host "git commit -m `"Deploy Surya Survey Solutions V12`""
Write-Host "git push origin main"
exit 0
