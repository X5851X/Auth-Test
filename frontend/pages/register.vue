<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden">
      <div class="flex">
        <!-- Left Side - Team Illustration -->
        <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-200 to-blue-300 items-center justify-center p-12 relative">
          <!-- Background shapes -->
          <div class="absolute top-8 right-8 w-16 h-16 bg-blue-400 rounded-full opacity-30"></div>
          <div class="absolute bottom-8 left-8 w-20 h-20 bg-blue-400 rounded-full opacity-30"></div>
          
          <!-- Team of 3 people -->
          <div class="relative flex items-end space-x-4">
            <!-- Person 1 - Left -->
            <div class="relative">
              <div class="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full relative">
                <!-- Head -->
                <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-blue-200 rounded-full"></div>
                <!-- Arms -->
                <div class="absolute top-2 -left-2 w-3 h-8 bg-blue-500 rounded-full transform -rotate-30"></div>
                <div class="absolute top-2 -right-2 w-3 h-8 bg-blue-500 rounded-full transform rotate-30"></div>
              </div>
            </div>

            <!-- Person 2 - Center (sitting) -->
            <div class="relative mb-4">
              <div class="w-14 h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full relative">
                <!-- Head -->
                <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-200 rounded-full"></div>
                <!-- Arms -->
                <div class="absolute top-1 -left-1 w-2 h-6 bg-blue-500 rounded-full transform -rotate-45"></div>
                <div class="absolute top-1 -right-1 w-2 h-6 bg-blue-500 rounded-full transform rotate-45"></div>
              </div>
              <!-- Chair/seat -->
              <div class="w-16 h-4 bg-gray-400 rounded-full mx-auto -mt-1"></div>
            </div>

            <!-- Person 3 - Right -->
            <div class="relative">
              <div class="w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full relative">
                <!-- Head -->
                <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-blue-200 rounded-full"></div>
                <!-- Arms -->
                <div class="absolute top-2 -left-2 w-3 h-8 bg-blue-500 rounded-full transform -rotate-30"></div>
                <div class="absolute top-2 -right-2 w-3 h-8 bg-blue-500 rounded-full transform rotate-30"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Register Form -->
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
              <p class="text-blue-600 text-sm font-medium">Please create your account</p>
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
                <span class="px-2 bg-white text-gray-500">Or create account with email</span>
              </div>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleRegister" class="space-y-4">
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  v-model="registerForm.name" 
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/30 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  v-model="registerForm.email" 
                  type="email" 
                  required
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/30 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Password</label>
                <input 
                  v-model="registerForm.password" 
                  type="password" 
                  required
                  minlength="6"
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/30 transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Confirm Password</label>
                <input 
                  v-model="registerForm.confirmPassword" 
                  type="password" 
                  required
                  class="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/30 transition-all duration-200"
                  placeholder="Confirm your password"
                />
              </div>

              <button 
                type="submit" 
                :disabled="loading || !passwordsMatch"
                class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 rounded-md text-sm transition"
              >
                {{ loading ? 'Creating Account...' : 'Sign up' }}
              </button>
            </form>

            <div v-if="registerForm.confirmPassword && !passwordsMatch" class="mt-4 p-2 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded text-xs">
              Passwords do not match
            </div>

            <div v-if="success" class="mt-4 p-2 bg-green-50 border border-green-200 text-green-700 rounded text-xs">
              {{ success }}
            </div>

            <div v-if="error" class="mt-4 p-2 bg-red-50 border border-red-200 text-red-700 rounded text-xs">
              {{ error }}
            </div>

            <div class="mt-6 text-center">
              <p class="text-gray-500 text-xs">
                Already have an account?
                <button @click="$router.push('/login')" class="text-blue-600 hover:text-blue-800 font-medium">
                  Sign in here
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
const registerForm = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')
const success = ref('')
const config = useRuntimeConfig()

const passwordsMatch = computed(() => {
  return registerForm.password === registerForm.confirmPassword
})

const handleRegister = async () => {
  if (!passwordsMatch.value) {
    error.value = 'Passwords do not match'
    return
  }
  
  // Sanitize inputs
  const name = registerForm.name.trim()
  const email = registerForm.email.trim().toLowerCase()
  const password = registerForm.password
  
  // Validation
  if (!name || name.length < 2 || name.length > 255) {
    error.value = 'Name must be between 2 and 255 characters'
    return
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    error.value = 'Please enter a valid email address'
    return
  }
  
  if (password.length < 6) {
    error.value = 'Password must be at least 6 characters'
    return
  }

  loading.value = true
  error.value = ''
  success.value = ''
  
  try {
    const response = await $fetch('/auth/register', {
      method: 'POST',
      baseURL: config.public.apiBase,
      body: {
        name: name,
        email: email,
        password: password
      }
    })
    
    if (response.access_token) {
      success.value = 'Account created successfully! Please login to continue.'
      
      // Clear form
      registerForm.name = ''
      registerForm.email = ''
      registerForm.password = ''
      registerForm.confirmPassword = ''
      
      setTimeout(() => {
        navigateTo('/login')
      }, 2000)
    }
    
  } catch (err) {
    console.error('Registration error:', err)
    if (err.status === 401 && err.data?.message?.includes('already exists')) {
      error.value = 'Email already registered. Please use a different email.'
    } else {
      error.value = err.data?.message || 'Registration failed. Please try again.'
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