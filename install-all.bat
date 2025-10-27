@echo off
echo Installing Backend Dependencies...
cd backend
call npm install
echo.
echo Installing Frontend Dependencies...
cd ../frontend
call npm install
echo.
echo Done! Now run start-backend.bat and start-frontend.bat in separate terminals.
pause

