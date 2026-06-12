# Copy package.json, README.md, and LICENSE.md to dist, then publish from dist
# Usage: powershell -ExecutionPolicy Bypass -File publish.ps1

$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
$publishDir = Join-Path $root 'dist'
$indexFile = Join-Path $root 'src\index.ts'
$packageFile = Join-Path $root 'package.json'

# Increment version in package.json and update index.ts
if ((Test-Path $packageFile) -and (Test-Path $indexFile)) {
	$packageContent = Get-Content $packageFile
	$regex = [regex]'"version":\s*"(-?\d+)\.(-?\d+)\.(-?\d+)"'
	$match = $regex.Match($packageContent)
	if ($match.Success) {
		$major = [int]$match.Groups[1].Value
		$minor = [int]$match.Groups[2].Value
		$patch = [int]$match.Groups[3].Value + 1
		$newVer = "$major.$minor.$patch"
		$pkgVer = '"version": "' + $newVer + '"'
		$newPackageContent = $packageContent -replace '"version":\s*"[^"]+"', $pkgVer
		# Write updated package.json
		Set-Content $packageFile $newPackageContent
		# Update index.ts with new version
		$indexContent = Get-Content $indexFile
		$newIndexContent = $indexContent -replace 'export const version = [^;]+;', "export const version = '$newVer';"
		Set-Content $indexFile $newIndexContent
	} else {
		Write-Host "Version format in package.json is invalid. Skipping version bump."
	}
}

# Build rollup package
npx rollup --config rollup.config.js

# Copy package.json, README.md, LICENSE if they exist
Copy-Item "$packageFile" "$publishDir\package.json" -Force
if (Test-Path "$root\README.md") { Copy-Item "$root\README.md" "$publishDir\README.md" -Force }
if (Test-Path "$root\LICENSE") { Copy-Item "$root\LICENSE" "$publishDir\LICENSE" -Force }

# Change to dist directory and publish
Push-Location $publishDir
npm publish --access=public
Pop-Location
