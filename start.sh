#!/bin/bash

echo "🚀 Starting Software Company Website..."
echo ""

# Start Django backend
echo "📦 Starting Django backend server..."
cd "/Users/mehedidev/Desktop/AI Project"
source venv/bin/activate
python manage.py runserver 8000 &
BACKEND_PID=$!
echo "✅ Backend running at http://localhost:8000"
echo "✅ Admin panel at http://localhost:8000/admin"
echo ""

# Wait a moment for backend to start
sleep 2

# Start React frontend
echo "⚛️  Starting React frontend server..."
cd "/Users/mehedidev/Desktop/AI Project/frontend"
npm run dev &
FRONTEND_PID=$!
echo "✅ Frontend will be at http://localhost:5173 or http://localhost:5174"
echo ""

echo "🎉 Both servers are starting!"
echo ""
echo "To stop both servers, press Ctrl+C"
echo ""
echo "Credentials for Admin Panel:"
echo "  Username: admin"
echo "  Password: admin123"
echo "  ⚠️  Remember to change the password!"
echo ""

# Wait for Ctrl+C
wait
