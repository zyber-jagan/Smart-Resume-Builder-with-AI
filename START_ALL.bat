@echo off
echo ========================================
echo   Smart Resume Builder
echo   Starting Application...
echo ========================================
echo.
echo Opening Backend in new window...
start "Backend Server" cmd /k "cd /d %~dp0backend && npm start"
timeout /t 3 /nobreak >nul
echo.
echo Opening Frontend in new window...
start "Frontend Server" cmd /k "cd /d %~dp0frontend && npm run dev"
echo.
echo ========================================
echo   Both servers are starting...
echo   Wait for them to finish loading
echo   Then open: http://localhost:3000
echo ========================================
pause

