@echo off
cd /d "%~dp0"
echo.
echo ============================================
echo   AKSHAT MISHRA - PORTFOLIO
 echo ============================================
echo.
echo Portfolio folder:
echo %CD%
echo.
if not exist "index.html" (
  echo ERROR: index.html was not found in this folder.
  echo Please make sure you are running this file from the folder containing index.html.
  pause
  exit /b 1
)
echo Starting local server on port 5500...
echo.
start "" "http://localhost:5500/index.html"
python -m http.server 5500
