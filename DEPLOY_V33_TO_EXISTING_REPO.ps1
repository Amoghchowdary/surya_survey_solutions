param([string]$Deploy = "C:\Users\MYPC\Desktop\Surya soutions\Deployment\surya_survey_solutions")
$Source = $PSScriptRoot
Set-ExecutionPolicy -Scope Process Bypass -Force
& (Join-Path $Source "scripts\robocopy-to-deploy.ps1") -Source $Source -Deploy $Deploy
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host "V33 deployment feed copied successfully. Review git status before committing."
