<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
      <div v-if="loading" class="space-y-4">
        <div class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Completing Sign In</h2>
        <p class="text-gray-600">Please wait while we sign you in...</p>
      </div>
      
      <div v-else-if="error" class="space-y-4">
        <div class="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Sign In Failed</h2>
        <p class="text-gray-600">{{ error }}</p>
        <button 
          @click="$router.push('/login')" 
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const { token, user, error: authError } = route.query
    
    if (authError) {
      error.value = getErrorMessage(authError)
      loading.value = false
      return
    }
    
    if (token && user) {
      // Store token and user data
      if (process.client) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', decodeURIComponent(user))
      }
      
      // Redirect to dashboard
      await navigateTo('/dashboard')
    } else {
      error.value = 'Invalid authentication response'
      loading.value = false
    }
  } catch (err) {
    console.error('Auth callback error:', err)
    error.value = 'Authentication failed. Please try again.'
    loading.value = false
  }
})

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'google_auth_failed':
      return 'Google authentication failed. Please try again.'
    case 'facebook_auth_failed':
      return 'Facebook authentication failed. Please try again.'
    default:
      return 'Authentication failed. Please try again.'
  }
}
</script>