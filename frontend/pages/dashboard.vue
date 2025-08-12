<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
    <!-- Navigation Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-blue-200 dark:border-gray-600 shadow-sm transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Left side -->
          <div class="flex items-center">
            <!-- Logo/Brand -->
            <div class="flex-shrink-0 flex items-center">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span class="text-white font-bold text-lg">SA</span>
              </div>
              <div class="hidden sm:block">
                <span class="font-bold text-gray-900 dark:text-white text-lg">Spike Admin</span>
                <div class="text-xs text-blue-600 dark:text-blue-400 font-medium">Dashboard v2.0</div>
              </div>
            </div>
          </div>

          <!-- Center - Search Bar -->
          <div class="flex-1 max-w-2xl mx-4 lg:mx-8">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search anything..." 
                class="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-sm bg-blue-50/50 placeholder-blue-400 transition-all duration-200"
              />
            </div>
          </div>

          <!-- Right side -->
          <div class="flex items-center space-x-2 lg:space-x-4">
            <!-- Theme Toggle -->
            <button @click="toggleDarkMode" class="p-2 lg:p-3 text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200">
              <svg v-if="!isDarkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            </button>

            <!-- Language -->
            <button @click="toggleLanguage" class="p-2 lg:p-3 text-blue-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-xl transition-all duration-200">
              <div class="w-7 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center shadow-sm">
                <span class="text-white text-xs font-bold">{{ currentLang }}</span>
              </div>
            </button>

            <!-- Profile -->
            <div class="flex items-center space-x-2 lg:space-x-3 bg-blue-50 dark:bg-gray-700 rounded-xl p-2">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white text-sm font-bold">{{ user?.name?.charAt(0) || 'U' }}</span>
              </div>
              <div class="hidden sm:block">
                <div class="text-sm font-semibold text-gray-900 dark:text-white">{{ user?.name || 'User' }}</div>
                <div class="text-xs text-blue-600 dark:text-blue-400">Administrator</div>
              </div>
              <button @click="handleLogout" class="p-2 text-blue-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      <!-- FAQ Section -->
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 dark:border-gray-600 transition-colors duration-300">
        <div class="px-6 lg:px-8 py-8 text-center border-b border-blue-100 dark:border-gray-600">
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">{{ faqTitle }}</h1>
          <p class="text-blue-600 dark:text-blue-400 font-medium">{{ faqSubtitle }}</p>
        </div>

        <div class="p-6 lg:p-8">
          <div class="space-y-4">
            <!-- FAQ Item 1 -->
            <div class="border border-blue-200 dark:border-gray-600 rounded-xl bg-blue-50/30 dark:bg-gray-700/30 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-all duration-200">
              <button 
                @click="toggleFaq(1)"
                class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span class="font-semibold text-gray-900 dark:text-white text-lg">{{ faq1Title }}</span>
                <svg 
                  :class="{ 'rotate-180': activeFaq === 1 }"
                  class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="activeFaq === 1" class="px-6 pb-5">
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ faq1Content }}</p>
              </div>
            </div>

            <!-- FAQ Item 2 -->
            <div class="border border-blue-200 dark:border-gray-600 rounded-xl bg-blue-50/30 dark:bg-gray-700/30 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-all duration-200">
              <button 
                @click="toggleFaq(2)"
                class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span class="font-semibold text-gray-900 dark:text-white text-lg">{{ faq2Title }}</span>
                <svg 
                  :class="{ 'rotate-180': activeFaq === 2 }"
                  class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="activeFaq === 2" class="px-6 pb-5">
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ faq2Content }}</p>
              </div>
            </div>

            <!-- FAQ Item 3 -->
            <div class="border border-blue-200 dark:border-gray-600 rounded-xl bg-blue-50/30 dark:bg-gray-700/30 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-all duration-200">
              <button 
                @click="toggleFaq(3)"
                class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span class="font-semibold text-gray-900 dark:text-white text-lg">{{ faq3Title }}</span>
                <svg 
                  :class="{ 'rotate-180': activeFaq === 3 }"
                  class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="activeFaq === 3" class="px-6 pb-5">
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ faq3Content }}</p>
              </div>
            </div>

            <!-- FAQ Item 4 -->
            <div class="border border-blue-200 dark:border-gray-600 rounded-xl bg-blue-50/30 dark:bg-gray-700/30 hover:bg-blue-50/50 dark:hover:bg-gray-700/50 transition-all duration-200">
              <button 
                @click="toggleFaq(4)"
                class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span class="font-semibold text-gray-900 dark:text-white text-lg">{{ faq4Title }}</span>
                <svg 
                  :class="{ 'rotate-180': activeFaq === 4 }"
                  class="w-6 h-6 text-blue-500 dark:text-blue-400 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-show="activeFaq === 4" class="px-6 pb-5">
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ faq4Content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Welcome Message -->
      <div class="mb-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-gray-600 rounded-2xl p-8 shadow-lg">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-3">{{ welcomeMessage }}, {{ user?.name }}!</h2>
        <p class="text-gray-600 dark:text-gray-300 text-lg">{{ dashboardMessage }}</p>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

const user = ref(null)
const activeFaq = ref(null)
const isDarkMode = ref(false)
const currentLang = ref('EN')

const welcomeMessage = computed(() => {
  return currentLang.value === 'EN' ? 'Welcome back' : 'Selamat datang kembali'
})

const dashboardMessage = computed(() => {
  return currentLang.value === 'EN' 
    ? 'You have successfully logged into your dashboard.' 
    : 'Anda telah berhasil masuk ke dashboard.'
})

const faqTitle = computed(() => {
  return currentLang.value === 'EN' ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'
})

const faqSubtitle = computed(() => {
  return currentLang.value === 'EN' 
    ? 'Get to know more about ready-to-use admin dashboard templates'
    : 'Pelajari lebih lanjut tentang template dashboard admin siap pakai'
})

const faq1Title = computed(() => {
  return currentLang.value === 'EN' ? 'What is an Admin Dashboard?' : 'Apa itu Dashboard Admin?'
})

const faq1Content = computed(() => {
  return currentLang.value === 'EN' 
    ? 'An admin dashboard is a web-based interface that provides administrators and users with a centralized location to manage and monitor various aspects of a system, application, or website.'
    : 'Dashboard admin adalah antarmuka berbasis web yang menyediakan lokasi terpusat bagi administrator dan pengguna untuk mengelola dan memantau berbagai aspek sistem, aplikasi, atau website.'
})

const faq2Title = computed(() => {
  return currentLang.value === 'EN' ? 'What should an admin dashboard template include?' : 'Apa yang harus disertakan dalam template dashboard admin?'
})

const faq2Content = computed(() => {
  return currentLang.value === 'EN' 
    ? 'A comprehensive admin dashboard template should include user management, analytics and reporting, content management, system settings, notification system, and responsive design for mobile compatibility.'
    : 'Template dashboard admin yang komprehensif harus mencakup manajemen pengguna, analitik dan pelaporan, manajemen konten, pengaturan sistem, sistem notifikasi, dan desain responsif untuk kompatibilitas mobile.'
})

const faq3Title = computed(() => {
  return currentLang.value === 'EN' ? 'Why should I buy admin templates from Spike Admin?' : 'Mengapa harus membeli template admin dari Spike Admin?'
})

const faq3Content = computed(() => {
  return currentLang.value === 'EN' 
    ? 'Spike Admin offers high-quality, professionally designed admin templates with clean code, regular updates, excellent customer support, and comprehensive documentation to help you build better applications faster.'
    : 'Spike Admin menawarkan template admin berkualitas tinggi yang dirancang secara profesional dengan kode yang bersih, pembaruan rutin, dukungan pelanggan yang sangat baik, dan dokumentasi komprehensif untuk membantu Anda membangun aplikasi yang lebih baik dengan lebih cepat.'
})

const faq4Title = computed(() => {
  return currentLang.value === 'EN' ? 'Do we offer a guarantee?' : 'Apakah kami menawarkan garansi?'
})

const faq4Content = computed(() => {
  return currentLang.value === 'EN' 
    ? 'Yes, Spike Admin offers a 30-day money-back guarantee on all premium templates. If you\'re not satisfied with your purchase, you can request a full refund within 30 days of purchase.'
    : 'Ya, Spike Admin menawarkan garansi uang kembali 30 hari untuk semua template premium. Jika Anda tidak puas dengan pembelian Anda, Anda dapat meminta pengembalian dana penuh dalam 30 hari setelah pembelian.'
})

onMounted(() => {
  const token = localStorage.getItem('token')
  const userData = localStorage.getItem('user')
  
  if (!token || !userData) {
    navigateTo('/login')
    return
  }
  
  try {
    const parsedUser = JSON.parse(userData)
    user.value = {
      id: parsedUser.id,
      name: parsedUser.name || 'User',
      email: parsedUser.email || ''
    }
  } catch (error) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigateTo('/login')
  }
  
  // Load preferences
  isDarkMode.value = localStorage.getItem('darkMode') === 'true'
  currentLang.value = localStorage.getItem('language') || 'EN'
  updateDarkMode()
})

const toggleFaq = (faqNumber) => {
  activeFaq.value = activeFaq.value === faqNumber ? null : faqNumber
}

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'EN' ? 'ID' : 'EN'
  localStorage.setItem('language', currentLang.value)
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  updateDarkMode()
}

const updateDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

const handleLogout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  navigateTo('/login')
}
</script>