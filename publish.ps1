# Copy package.json, README.md, and LICENSE.md to _publish, then publish from _publish
# Usage: powershell -ExecutionPolicy Bypass -File publish.ps1

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$publishDir = Join-Path $root '_publish'
$indexFile = Join-Path $root 'objects\index.ts'
$packageFile = Join-Path $root 'package.json'

# Update version in objects/index.ts to match package.json
if ((Test-Path $packageFile) -and (Test-Path $indexFile)) {
	$pkg = Get-Content $packageFile | ConvertFrom-Json
	$ver = $pkg.version
	$indexContent = Get-Content $indexFile
	$newIndexContent = $indexContent -replace 'export const version = ".*";', "export const version = '$ver';"
	Set-Content $indexFile $newIndexContent
}

# Build rollup package
npx rollup --config rollup.config.js

# Copy package.json, README.md, LICENSE if they exist
Copy-Item "$packageFile" "$publishDir\package.json" -Force
if (Test-Path "$root\README.md") { Copy-Item "$root\README.md" "$publishDir\README.md" -Force }
if (Test-Path "$root\LICENSE.md") { Copy-Item "$root\LICENSE.md" "$publishDir\LICENSE.md" -Force }

# Change to _publish directory and publish
Push-Location $publishDir
npm publish
Pop-Location
