<template>
  <div class="min-h-screen bg-white">
    <header class="flex items-center justify-between px-4 sm:px-8 py-4 shadow">
      <img src="../assets/img/Logo.png" alt="Value8 Group" class="h-8 sm:h-10" />
      <nav class="flex gap-4 sm:gap-8">
        <a href="#" class="text-blue-600 text-sm sm:text-base">Discover</a>
        <a href="#" class="text-gray-700 text-sm sm:text-base">Browse</a>
        <a href="#" class="text-gray-700 text-sm sm:text-base">About</a>
        <a href="#" class="text-gray-700 text-sm sm:text-base">Contact Us</a>
      </nav>
      <div class="flex items-center gap-2 sm:gap-4 relative">
        <button class="p-2 rounded-full bg-blue-600 text-white">
          <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button class="p-2 rounded-full bg-blue-600 text-white relative">
          <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span v-if="cart.length"
            class="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{{
              cart.length }}</span>
        </button>
        <div class="flex items-center">
          <img src="../assets/img/Profile.png" alt="Profile"
            class="w-8 sm:w-10 h-8 sm:h-10 rounded-full cursor-pointer" />
          <button @click="toggleDropdown" class="p-1 text-black">
            <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div v-if="dropdownOpen" class="absolute right-0 mt-2 bg-white text-gray-700 rounded-md shadow-lg w-40">
          <div class="px-4 py-2 text-sm font-semibold text-gray-800">Hello, {{ user?.first_name || 'User' }} {{
            user?.last_name || '' }} {{ user?.surname || '' }}</div>
          <button @click="logout"
            class="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-gray-100">Logout</button>
        </div>
      </div>
    </header>
    <main>
      <section
        class="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 sm:p-12 rounded-lg mx-4 sm:mx-8 my-4 sm:my-6">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {{ user?.first_name || 'User' }} {{
          user?.last_name || '' }} {{ user?.surname || '' }}</h2>
        <p class="text-gray-200 text-sm sm:text-base">Shop from our massive catalogue of backpacks for various seasons
          and moods</p>
        <button class="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full mt-4 hover:bg-blue-700">Browse
          Products</button>
      </section>
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-x-6 sm:gap-y-0 px-4 sm:px-8 mt-4 sm:mt-8">
        <div v-for="(product, index) in products" :key="product.id" :class="getCardClass(index)"
          class="rounded-lg p-4 sm:p-6">
          <h3 class="font-bold mb-2 text-sm sm:text-base">{{ product.category }}</h3>
          <p class="text-lg sm:text-xl font-semibold mb-2">KES {{ product.price.toLocaleString() }}</p>
          <button @click="addToCart(product)" class="text-blue-600 text-xs sm:text-sm hover:underline">ADD TO
            CART</button>
          <img :src="product.image" :alt="product.category" class="mt-4 rounded-lg w-full h-5/6 block m-0" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchUserInfo } from '../services/auth'
import pic1 from '../assets/img/pic1.png'
import pic2 from '../assets/img/pic2.png'
import pic3 from '../assets/img/pic3.png'

const user = ref(null)
const cart = ref([])
const products = ref([
  { id: 1, category: 'CARGO BACKPACKS', price: 4000, image: pic1 },
  { id: 2, category: 'SQUARE BACKPACKS', price: 8000, image: pic2 },
  { id: 3, category: 'CASUAL BACKPACKS', price: 3500, image: pic3 }
])

const dropdownOpen = ref(false)
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const logout = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('user_info')
  localStorage.removeItem('cart')
  window.location.href = '/'
}

const addToCart = (product) => {
  cart.value.push(product)
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

const getCardClass = (index) => {
  if (index === 0) return 'card-first'
  if (index === 1) return 'card-second'
  if (index === 2) return 'card-third'
  return ''
}

onMounted(async () => {
  try {
    user.value = await fetchUserInfo()
    const savedCart = JSON.parse(localStorage.getItem('cart'))
    if (savedCart) {
      cart.value = savedCart
    }
  } catch (error) {
    console.error('Failed to fetch user info:', error)
  }
})

</script>



<style scoped>
.grid-item {
  height: 400px;
}

.grid-item img {
  margin-bottom: 0;
}

.card-first {
  background: linear-gradient(99.45deg, #CAC8D2 1.07%, #E9E5DE 99.14%);
}

.card-second {
  background: linear-gradient(99.45deg, #FAD9C5 1.07%, #E6EBEB 100%);
}

.card-third {
  background: #D9D9D9;
  backdrop-filter: blur(47.239009857177734px);
}

.relative {
  position: relative;
}

button:hover {
  cursor: pointer;
}
</style>