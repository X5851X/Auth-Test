#!/bin/bash

echo "Starting Authentication System with Docker..."
echo

echo "Building Docker images..."
docker-compose build --no-cache

echo
echo "Starting all services..."
docker-compose up -d

echo
echo "Waiting for services to be ready..."
sleep 10

echo
echo "Services Status:"
docker-compose ps

echo
echo "Application URLs:"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:3001"
echo "MySQL Database: localhost:3306"

echo
echo "To view logs: npm run docker:logs"
echo "To stop services: npm run docker:down"
echo