@echo off
chcp 65001 >nul
cd /d "%~dp0"

set FOUND=0
for /f "tokens=5" %%a in ('netstat -ano ^| findstr "127.0.0.1:5556" ^| findstr "LISTENING"') do (
  echo Остановка процесса %%a на порту 5556...
  taskkill /PID %%a /F >nul 2>&1
  set FOUND=1
)

if "%FOUND%"=="0" (
  echo На порту 5556 ничего не запущено.
) else (
  echo Сервер остановлен.
)

pause
