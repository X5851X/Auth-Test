<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden">
      <div class="flex">
        <!-- Left Side - Purple Illustration -->
        <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-200 to-blue-300 items-center justify-center p-12 relative">
          <!-- Character with phone -->
          <div class="relative">
            <!-- Phone/Device -->
            <div class="w-32 h-48 bg-white rounded-2xl shadow-lg relative mx-auto mb-8">
              <div class="p-4">
                <div class="w-8 h-8 bg-blue-500 rounded-lg mb-3 mx-auto"></div>
                <div class="space-y-2">
                  <div class="h-2 bg-gray-200 rounded w-full"></div>
                  <div class="h-2 bg-gray-200 rounded w-3/4"></div>
                  <div class="h-6 bg-blue-300 rounded mt-3"></div>
                </div>
              </div>
              <!-- Download icon -->
              <div class="absolute -bottom-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>
            
            <!-- Character -->
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div class="w-12 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full relative">
                <!-- Head -->
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-200 rounded-full"></div>
                <!-- Arms -->
                <div class="absolute top-1 -left-1 w-2 h-6 bg-blue-500 rounded-full transform -rotate-30"></div>
                <div class="absolute top-1 -right-1 w-2 h-6 bg-blue-500 rounded-full transform rotate-30"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Login Form -->
        <div class="w-full lg:w-1/2 p-8 lg:p-12">
          <div class="max-w-sm mx-auto">
            <!-- Header -->
            <div class="mb-8">
              <div class="flex items-center mb-6">
                <div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-2">
                  <span class="text-white font-bold text-xs">S</span>
                </div>
                <span class="font-medium text-gray-700 text-sm">Spike Admin</span>
              </div>
              
              <h1 class="text-2xl font-bold text-gray-900 mb-2">Welcome to Spike Admin</h1>
              <p class="text-blue-600 text-sm font-medium">Please sign in to your account</p>
            </div>

            <!-- Social Login Buttons -->
            <div class="space-y-3 mb-6">
              <button 
                @click="handleGoogleLogin" 
                type="button"
                class="w-full flex items-center justify-center px-4 py-3 border border-blue-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-blue-50/50 hover:bg-blue-100 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              
              <button 
                @click="handleFacebookLogin" 
                type="button"
                class="w-full flex items-center justify-center px-4 py-3 border border-blue-200 rounded-xl shadow-sm text-sm font-medium text-gray-700 bg-blue-50/50 hover:bg-blue-100 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <svg class="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </button>
            </div>
            
            <div class="relative mb-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-xs">
                <span class="px-2 bg-white text-gray-500">Or continue with email</span>
              </div>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleLogin" class="space-y-4">
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  v-model="loginForm.email" 
                  type="email" 
                  required
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/30 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <input 
                  v-model="loginForm.password" 
                  type="password" 
                  required
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/30 transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>

              <button 
                type="submit" 
                :disabled="loading"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md text-sm transition"
              >
                {{ loading ? 'Signing in...' : 'Sign in' }}
              </button>
            </form>

            <div v-if="error" class="mt-4 p-2 bg-red-50 border border-red-200 text-red-700 rounded text-xs">
              {{ error }}
            </div>

            <div class="mt-6 text-center">
              <p class="text-gray-500 text-xs">
                Don't have an account?
                <button @click="$router.push('/register')" class="text-blue-600 hover:text-blue-800 font-medium">
                  Create an account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const loginForm = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const error = ref('')
const config = useRuntimeConfig()
const route = useRoute()

// Check for social login errors
onMounted(() => {
  if (route.query.error) {
    switch (route.query.error) {
      case 'google_auth_failed':
        error.value = 'Google authentication failed. Please try again.'
        break
      case 'facebook_auth_failed':
        error.value = 'Facebook authentication failed. Please try again.'
        break
      default:
        error.value = 'Authentication failed. Please try again.'
    }
  }
})

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  // Sanitize inputs
  const email = loginForm.email.trim().toLowerCase()
  const password = loginForm.password
  
  // Basic validation
  if (!email || !password) {
    error.value = 'Email and password are required'
    loading.value = false
    return
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.value = 'Please enter a valid email address'
    loading.value = false
    return
  }
  
  try {
    const response = await $fetch('/auth/login', {
      method: 'POST',
      baseURL: config.public.apiBase,
      body: {
        email: email,
        password: password
      }
    })
    
    if (response.access_token) {
      localStorage.setItem('token', response.access_token)
      localStorage.setItem('user', JSON.stringify(response.user))
      await navigateTo('/dashboard')
    }
  } catch (err) {
    console.error('Login error:', err)
    if (err.status === 401) {
      error.value = 'Invalid email or password'
    } else {
      error.value = err.data?.message || 'Login failed. Please try again.'
    }
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = () => {
  window.location.href = `${config.public.apiBase}/auth/google`
}

const handleFacebookLogin = () => {
  window.location.href = `${config.public.apiBase}/auth/facebook`
}
</script>