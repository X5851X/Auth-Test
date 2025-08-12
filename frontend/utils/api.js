export const apiRequest = async (url, options = {}) => {
  const config = useRuntimeConfig()
  
  try {
    const response = await $fetch(url, {
      baseURL: config.public.apiBase,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    })
    
    return response
  } catch (error) {
    console.error('API Error:', error)
    
    // Handle different error types
    if (error.status === 401) {
      // Unauthorized - clear tokens and redirect to login
      if (process.client) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        await navigateTo('/login')
      }
      throw new Error('Session expired. Please login again.')
    }
    
    if (error.status === 400) {
      throw new Error(error.data?.message || 'Invalid request')
    }
    
    if (error.status === 500) {
      throw new Error('Server error. Please try again later.')
    }
    
    if (error.status === 0 || !error.status) {
      throw new Error('Network error. Please check your connection.')
    }
    
    throw new Error(error.data?.message || error.message || 'An error occurred')
  }
}

export const authenticatedRequest = async (url, options = {}) => {
  if (process.client) {
    const token = localStorage.getItem('token')
    if (token) {
      options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`
      }
    }
  }
  
  return apiRequest(url, options)
}