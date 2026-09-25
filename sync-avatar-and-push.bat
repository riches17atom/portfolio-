@echo off
title Update Avatar and Push to GitHub
cd /d "%~dp0"

echo ========================================================
echo  UPDATING AVATAR TO FUTURISTIC ANIME DEVOPS ENGINEER
echo ========================================================
echo.

:: 1. Ensure directory exists
if not exist "assets\images" mkdir "assets\images"

:: 2. Copy the newly generated futuristic anime avatars
echo [1/3] Copying futuristic anime avatar to assets/images...
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_devops_avatar_1790356352791.jpg" "assets\images\riches-portrait.jpg" >nul
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_devops_avatar_1790356352791.jpg" "assets\images\riches-avatar.jpg" >nul
copy /Y "C:\Users\acer\.gemini\antigravity-ide\brain\a0c3b0ed-5b7f-4f65-8da1-501c7fee6add\anime_avatar_portrait_1790356379194.jpg" "assets\images\riches-anime-hud.jpg" >nul

echo   [+] assets/images/riches-portrait.jpg updated with futuristic anime avatar
echo   [+] assets/images/riches-avatar.jpg updated
echo   [+] assets/images/riches-anime-hud.jpg updated
echo.

:: 3. Git Commit and Push
echo [2/3] Staging changes and committing to Git...
git add .
git commit -m "Replace second image with futuristic anime DevOps engineer avatar"

echo.
echo [3/3] Pushing changes to GitHub repository...
git push origin main

echo.
echo ========================================================
echo  DONE! Successfully pushed to GitHub!
echo  Visit your site at: http://localhost:3000
echo  GitHub Repo: https://github.com/riches17atom/portfolio-
echo ========================================================
echo.
pause
