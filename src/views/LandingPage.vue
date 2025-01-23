<template>
  <div class="min-h-screen bg-white">
    <nav class="relative flex items-center justify-between px-4 md:px-8 py-4">
      <img src="../assets/img/Logo.png" alt="Value8 Group" class="h-6 md:h-8" />
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
        <svg class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="hidden md:flex gap-8">
        <a href="#" class="text-blue-600">Discover</a>
        <a href="#" class="text-gray-700">Browse</a>
        <a href="#" class="text-gray-700">About</a>
        <a href="#" class="text-gray-700">Contact Us</a>
      </div>
      <button @click="handleLogin" class="hidden md:block font-semibold text-base px-6 py-2 bg-blue-100 text-blue-600 rounded-full">
        Log In
      </button>
      <!-- <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden p-4 z-50">
          <div class="flex flex-col gap-4">
            <a href="#" class="text-blue-600">Discover</a>
            <a href="#" class="text-gray-700">Browse</a>
            <a href="#" class="text-gray-700">About</a>
            <a href="#" class="text-gray-700">Contact Us</a>
            <button @click="handleLogin" class="px-6 py-2 bg-blue-50 text-blue-600 rounded-full w-full">
              Log In
            </button>
          </div>
        </div> -->
    </nav>

    <div class="text-center px-4 my-8 md:my-16">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">Welcome to Pike Store</h1>
      <p class="text-gray-600 mb-6">Your one-stop shop for everything chic, comfortable, affordable and fashionable</p>
      <button class="px-6 py-2 bg-blue-600 text-white rounded-full">Browse Products</button>
    </div>

    <div class="mx-4 md:mx-8 bg-gray-200 rounded-xl overflow-hidden h-[38rem] md:h-[40rem] sm:h-[48rem]">
      <div class="grid grid-cols-1 md:grid-cols-2 h-full">
        <div class="p-6 md:p-12 flex flex-col justify-center">
          <p class="text-blue-600 uppercase font-semibold">SONIC BACKPACKS</p>
          <h2 class="text-2xl md:text-4xl font-bold my-4">HAPPY CAMPER</h2>
          <p class="text-gray-600 mb-8">Comfort inside a fun-sized backpack, suitable for road trips and camp outings
          </p>
          <button class="px-4 py-2 bg-blue-600 text-white rounded-full w-32 sm:w-40">Shop Now</button>
          <div class="flex gap-2 mt-8">
            <button v-for="i in 3" :key="i" class="w-2 h-2 rounded-full"
              :class="i === 1 ? 'bg-blue-600' : 'bg-gray-300'"></button>
          </div>
        </div>
        <div class="relative flex-1">
          <img src="../assets/img/bagpack.png" alt="Backpack" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { initiateOAuthFlow } from '../services/auth'

const isMenuOpen = ref(false)

const handleLogin = () => {
  initiateOAuthFlow()
}
</script>