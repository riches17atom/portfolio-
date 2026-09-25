@echo off
title Push Riches Thapa Portfolio to GitHub
echo ========================================================
echo  Deploying Portfolio to https://github.com/riches17atom/portfolio-
echo  Target Domain: richeshthapa.com.np
echo ========================================================
echo.

:: 1. Create assets/images directory if it doesn't exist
if not exist "assets\images" mkdir "assets\images"

:: 2. Copy profile and futuristic anime avatar images into assets folder
echo [1/5] Updating profile photos and futuristic anime DevOps avatar...
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\.user_uploaded\media_1790352987102.jpg" "assets\images\riches-main.jpg" >nul
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_devops_avatar_1790356352791.jpg" "assets\images\riches-portrait.jpg" >nul
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_devops_avatar_1790356352791.jpg" "assets\images\riches-avatar.jpg" >nul
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_avatar_portrait_1790356379194.jpg" "assets\images\riches-anime-hud.jpg" >nul
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\.user_uploaded\media_1790353003778.jpg" "assets\images\riches-mountain.jpg" >nul

echo   - assets/images/riches-main.jpg [Main Profile Photo]
echo   - assets/images/riches-portrait.jpg [Futuristic Anime DevOps Avatar]
echo   - assets/images/riches-anime-hud.jpg [Cyberpunk HUD Avatar]
echo   - assets/images/riches-mountain.jpg [Kathmandu Valley Photo]
echo.

:: 3. Git Initialization
echo [2/5] Initializing Git repository...
if not exist ".git" (
    git init
)

:: 4. Set Remote Origin
echo [3/5] Configuring GitHub remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/riches17atom/portfolio-.git

:: 5. Stage, Commit & Push
echo [4/5] Staging files and committing...
git add .
git commit -m "Deploy Riches Thapa DevOps Portfolio with 3D WebGL and Custom Domain"

echo.
echo [5/5] Pushing to GitHub (main branch)...
git branch -M main
git push -u origin main --force

echo.
echo ========================================================
echo  DEPLOYMENT COMPLETE!
echo  Repository: https://github.com/riches17atom/portfolio-
echo  Live Domain: http://richeshthapa.com.np/
echo ========================================================
echo.
pause
