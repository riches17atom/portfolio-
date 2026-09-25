# Push Riches Thapa Portfolio to GitHub
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host " Deploying to https://github.com/riches17atom/portfolio-" -ForegroundColor Green
Write-Host " Target Domain: richeshthapa.com.np" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Create assets/images directory
if (-not (Test-Path "assets/images")) {
    New-Item -ItemType Directory -Force -Path "assets/images" | Out-Null
}

# 2. Copy profile and anime avatar images
Write-Host "[1/5] Updating profile photos and futuristic anime DevOps avatar..." -ForegroundColor Cyan
Copy-Item "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\.user_uploaded\media_1790352987102.jpg" "assets/images/riches-main.jpg" -Force
Copy-Item "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_devops_avatar_1790356352791.jpg" "assets/images/riches-portrait.jpg" -Force
Copy-Item "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_devops_avatar_1790356352791.jpg" "assets/images/riches-avatar.jpg" -Force
Copy-Item "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_avatar_portrait_1790356379194.jpg" "assets/images/riches-anime-hud.jpg" -Force
Copy-Item "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\.user_uploaded\media_1790353003778.jpg" "assets/images/riches-mountain.jpg" -Force

Write-Host "  - assets/images/riches-main.jpg (Main Profile Photo)" -ForegroundColor Green
Write-Host "  - assets/images/riches-portrait.jpg (Futuristic Anime DevOps Avatar)" -ForegroundColor Green
Write-Host "  - assets/images/riches-anime-hud.jpg (Cyberpunk HUD Avatar)" -ForegroundColor Green
Write-Host "  - assets/images/riches-mountain.jpg (Kathmandu Valley Photo)" -ForegroundColor Green
Write-Host ""

# 3. Git Init
Write-Host "[2/5] Initializing Git repository..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
    git init
}

# 4. Remote Origin
Write-Host "[3/5] Setting remote origin..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin https://github.com/riches17atom/portfolio-.git

# 5. Stage, Commit & Push
Write-Host "[4/5] Staging and committing files..." -ForegroundColor Cyan
git add .
git commit -m "Deploy Riches Thapa DevOps Portfolio with 3D WebGL and Custom Domain"

Write-Host "[5/5] Pushing to GitHub (main branch)..." -ForegroundColor Cyan
git branch -M main
git push -u origin main --force

Write-Host ""
Write-Host "========================================================" -ForegroundColor Green
Write-Host " DEPLOYMENT TO GITHUB COMPLETE!" -ForegroundColor Green
Write-Host " Repository: https://github.com/riches17atom/portfolio-" -ForegroundColor White
Write-Host " Domain: http://richeshthapa.com.np/" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Green
