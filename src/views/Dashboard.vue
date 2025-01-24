<template>
  <div class="min-h-screen bg-white">
    <!-- Promo Banner -->
    <div class="flex items-center overflow-hidden bg-black p-4 text-center text-xs text-white md:px-8">
      <span class="block whitespace-nowrap lg:inline-block"> 20% SITEWIDE PROMO &nbsp; &mdash; &nbsp; PROMO CODE VALUE45
        &nbsp; &mdash; &nbsp; 20% SITEWIDE &nbsp; &mdash; &nbsp; PROMO CODE VALUE45 &nbsp; &mdash; &nbsp; 20% SITEWIDE
        &nbsp; &mdash; &nbsp; PROMO &nbsp; &mdash; &nbsp; PROMO CODE VALUE45 &nbsp; &mdash; &nbsp; 20% SITEWIDE PROMO
        &nbsp; &mdash; &nbsp; PROMO CODE VALUE45 &nbsp; &mdash; &nbsp; 20% SITEWIDE PROMO &nbsp; &mdash; &nbsp; PROMO
        CODE VALUE45 &nbsp; &mdash; &nbsp; 20% SITEWIDE PROMO &nbsp; &mdash; &nbsp; PROMO CODE VALUE45 </span>
    </div>
    <header>
      <nav class="max-w-screen-2xl mx-auto w-full px-4 sm:px-8 py-4 flex items-center justify-between">
        <img src="../assets/img/value8_logo.png" alt="Value8 Group" class="h-6 sm:h-8" />
        <nav class="hidden lg:flex gap-4 sm:gap-8">
          <a href="#" class="text-[#0047BA] font-bold text-sm sm:text-base">Discover</a>
          <a href="#" class="text-gray-700 text-sm sm:text-base">Browse</a>
          <a href="#" class="text-gray-700 text-sm sm:text-base">About</a>
          <a href="#" class="text-gray-700 text-sm sm:text-base">Contact Us</a>
        </nav>
        <div class="flex items-center gap-2 sm:gap-4 relative">
          <button class="p-2 rounded-full bg-[#0047BA] text-white">
            <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="p-2 rounded-full bg-[#0047BA] text-white relative">
            <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cart.length"
              class="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{{
                cart.length }}</span>
          </button>
          <div class="flex items-center relative">
            <img src="../assets/img/Profile.png" alt="Profile"
              class="w-8 sm:w-10 h-8 sm:h-10 rounded-full cursor-pointer" />
            <button @click="toggleDropdown" class="p-1 text-black">
              <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <transition name="dropdown">
              <div v-if="dropdownOpen" class="absolute top-full right-0 mt-2 bg-white text-gray-700 
               rounded-xl shadow-lg w-64 p-4 border border-gray-100 
               ring-2 ring-blue-50 space-y-3 z-50">
                <div class="flex items-center space-x-3">
                  <img src="../assets/img/Profile.png" alt="Profile"
                    class="w-10 h-10 rounded-full ring-2 ring-blue-100" />
                  <div>
                    <div class="text-sm font-bold text-gray-800">
                      {{ user?.first_name || 'User' }} {{ user?.last_name || '' }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ user?.email || 'user@example.com' }}
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-100 pt-3 space-y-2">
                  <button @click="logout" class="w-full text-left px-3 py-2 text-red-600 
               hover:bg-red-50 rounded-md flex items-center space-x-2 
               transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </nav>
    </header>
    <main class="px-4 sm:px-8 mt-4 sm:mt-8 max-w-screen-2xl mx-auto w-full">
      <section class="grid text-white rounded-lg ">
        <div class="col-start-1 row-start-1 z-10 p-3 sm:p-8">
          <h2 class="text-lg font-semibold text-white lg:text-3xl mb-2">Welcome back, {{ user?.first_name || 'User' }}
            {{
              user?.last_name || '' }} {{ user?.surname || '' }}</h2>
          <p class="text-white text-sm sm:text-lg">Shop from our massive catalogue of backpacks for various seasons
            and moods</p>
          <button class="bg-[#0047BA] text-white px-4 sm:px-6 py-2 rounded-full mt-4 hover:bg-[#0047BA]/75">Browse
            Products</button>
        </div>
        <!-- img -->
        <div class="col-start-1 row-start-1 lg:max-h-44">
          <img class="h-full w-full backdrop-blur-sm backdrop-filter" src="../assets/img/pike_hero_img.png"
            alt="hero img">
        </div>
      </section>
      <section class="mt-4 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-0">
        <div v-for="(product, index) in products" :key="product.id" :class="getCardClass(index)"
          class="rounded-lg p-4 sm:p-6 overflow-hidden">
          <h3 class="font-bold mb-2 text-sm sm:text-lg">{{ product.name }}</h3>
          <p class="text-sm sm:text-lg font-medium mb-2">KES {{ product.price.toLocaleString() }}</p>
          <button type="button" @click="addToCart(product)"
            class="text-[#0047BA] text-xs font-semibold hover:underline">
            ADD TO CART
          </button>
          <img :src="product.image" :alt="product.name" class="mt-4 rounded-lg w-full h-full block" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
import pic1 from '../assets/img/pic1.png'
import pic2 from '../assets/img/pic2.png'
import pic3 from '../assets/img/pic3.png'

const authStore = useAuthStore()
const router = useRouter()

// Computed properties
const user = computed(() => authStore.currentUser)
const cart = ref([])

// State
const dropdownOpen = ref(false)
const mobileMenuOpen = ref(false)

// Product data
const products = [
  { name: 'CARGO BACKPACKS', price: '4,000', image: pic1 },
  { name: 'SQUARE BACKPACKS', price: '8,000', image: pic2 },
  { name: 'CASUAL BACKPACKS', price: '3,500', image: pic3 }
]

// Methods
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const getCardClass = (index) => {
  const classes = ['card-first', 'card-second', 'card-third']
  return classes[index] || ''
}

const logout = () => {
  authStore.logout()
  router.push('/')
}

// On component mount, check if authenticated and retrieve user info & cart
onMounted(async () => {
  try {
    if (!authStore.isAuthenticated) {
      router.push('/')
      return
    }

    // Retrieve saved cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart'))
    if (savedCart) {
      cart.value = savedCart
    }

    // Fetch user information if necessary
    if (!user.value) {
      await authStore.fetchUser() // Fetch user details if not already available
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
})
</script>

<style scoped>
.card-first {
  background-color: #D9D9D9;
}

.card-second {
  background: linear-gradient(99.45deg, #FAD9C5 1.07%, #E6EBEB 100%);
}

.card-third {
  background: linear-gradient(99.45deg, #F1F3FF 1.07%, #FFF4D8 100%);
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-300 ease-in-out;
}

.dropdown-enter,
.dropdown-leave-to {
  @apply opacity-0 translate-y-2;
}
</style>