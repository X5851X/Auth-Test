export default defineNuxtRouteMiddleware((to) => {
  // Skip middleware on server-side rendering
  if (process.server) return

  const token = localStorage.getItem('token')
  
  // Validate token format (JWT should have 3 parts separated by dots)
  if (token && (!token.includes('.') || token.split('.').length !== 3)) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return navigateTo('/login')
  }
  
  // If no token and trying to access dashboard, redirect to login
  if (!token && to.path === '/dashboard') {
    return navigateTo('/login')
  }
  
  // If has token and trying to access login/register/index, redirect to dashboard
  if (token && (to.path === '/login' || to.path === '/register' || to.path === '/')) {
    return navigateTo('/dashboard')
  }
})