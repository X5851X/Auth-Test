// Simple test to verify backend is working
const testBackend = async () => {
  try {
    const response = await fetch('http://localhost:3001');
    const data = await response.json();
    console.log('✅ Backend is running:', data);
    
    // Test registration
    const registerResponse = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      })
    });
    
    if (registerResponse.ok) {
      const registerData = await registerResponse.json();
      console.log('✅ Registration works:', registerData);
    } else {
      const error = await registerResponse.text();
      console.log('❌ Registration error:', error);
    }
    
  } catch (error) {
    console.log('❌ Backend connection failed:', error.message);
    console.log('Make sure to:');
    console.log('1. Start MySQL server');
    console.log('2. Create auth_db database');
    console.log('3. Run: cd backend && npm run start:dev');
  }
};

// Run in browser console or Node.js
if (typeof window !== 'undefined') {
  testBackend();
} else {
  console.log('Run this in browser console after starting the backend');
}