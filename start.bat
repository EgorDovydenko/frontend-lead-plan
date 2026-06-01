@echo off
chcp 65001 >nul
cd /d "%~dp0"

if not exist "node_modules\" (
  echo Установка зависимостей...
  call npm install
  if errorlevel 1 (
    echo Ошибка установки зависимостей.
    pause
    exit /b 1
  )
)

:: Отдельное окно — закрыть: Ctrl+C или крестик окна
start "frontend-lead-plan" cmd /k "echo. & echo frontend-lead-plan: http://localhost:5556 & echo Остановить: Ctrl+C или закройте окно & echo. & npm run dev"
