@echo off
echo Starting Authentication System with Docker...
echo.

echo Building and starting containers...
docker-compose up --build -d

echo.
echo Waiting for services to start...
timeout /t 10 /nobreak > nul

echo.
echo Services are running:
echo Frontend: http://localhost:3000
echo Backend API: http://localhost:3001
echo MySQL: localhost:3307
echo.
echo To stop: docker-compose down
echo To view logs: docker-compose logs -f
echo.
pause