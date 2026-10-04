param(
    [string]$Source = (Resolve-Path (Join-Path $PSScriptRoot "..")),
    [string]$Deploy = "C:\Users\SarkshGroups\OneDrive\Desktop\Surya\Surya-Git-Deploy"
)

Write-Host "Source: $Source"
Write-Host "Deploy: $Deploy"

if (-not (Test-Path $Deploy)) {
    New-Item -ItemType Directory -Path $Deploy | Out-Null
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
Write-Host "Next: cd `"$Deploy`"; git status; git add .; git commit; git push"
exit 0
