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
    <nav class="relative mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8">
      <img src="../assets/img/value8_logo.png" alt="Value8 Group" class="h-6 md:h-8" />
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
        <svg class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="hidden gap-8 md:flex">
        <a href="#" class="text-sm font-bold text-[#0047BA] sm:text-base">Discover</a>
        <a href="#" class="text-sm text-gray-700 sm:text-base">Browse</a>
        <a href="#" class="text-sm text-gray-700 sm:text-base">About</a>
        <a href="#" class="text-sm text-gray-700 sm:text-base">Contact Us</a>
      </div>
      <button @click="handleLogin"
        class="hidden rounded-full bg-[#0047BA]/10 px-6 py-2 text-sm font-medium tracking-[-0.6%] text-[#0047BA] md:block">Log
        In</button>
      <div v-if="isMenuOpen" class="absolute top-full right-0 left-0 z-50 bg-white p-4 shadow-lg md:hidden">
        <div class="flex flex-col gap-4">
          <a href="#" class="text-sm font-bold text-[#0047BA] sm:text-base">Discover</a>
          <a href="#" class="text-sm text-gray-700 sm:text-base">Browse</a>
          <a href="#" class="text-sm text-gray-700 sm:text-base">About</a>
          <a href="#" class="text-sm text-gray-700 sm:text-base">Contact Us</a>
          <button @click="handleLogin" class="w-full rounded-full bg-blue-50 px-6 py-2 text-[#0047BA]">Log In</button>
        </div>
      </div>
    </nav>


    <div class="max-w-screen-2xl mx-auto w-full  text-center px-4 my-8 md:my-16">
      <h1 class="text-3xl lg:text-6xl font-semibold mb-3 font-sans">Welcome to Pike Store</h1>
      <p class="text-gray-900 mb-6">Your one-stop shop for everything chic, comfortable, affordable and fashionable</p>
      <button type="button" class="px-6 py-2 bg-[#0047BA] text-white rounded-full">Browse Products</button>
    </div>

    <div
      class="max-w-screen-2xl mx-auto w-full bg-[#DFE6F3] rounded-xl overflow-hidden h-[38rem] md:h-[40rem] sm:h-[48rem]">
      <div class="grid grid-cols-1 md:grid-cols-2 h-full">
        <div class="p-6 md:p-12 flex flex-col justify-center">
          <p class="text-[#0047BA] uppercase text-base lg:text-xl font-bold">SONIC BACKPACKS</p>
          <h2 class="text-2xl lg:text-5xl font-bold my-2">HAPPY CAMPER</h2>
          <p class="text-gray-900 text-base lg:text-xl mb-2">Comfort inside a fun-sized backpack, suitable for road
            trips and camp outings
          </p>
          <button class="px-4 py-2 bg-[#0047BA] text-white rounded-full w-32 sm:w-40">Shop Now</button>
          <div class="flex gap-2 mt-8">
            <button v-for="i in 3" :key="i" class="w-5 h-5 rounded-full"
              :class="i === 1 ? 'ring-1 ring-white bg-[#0047BA]' : 'bg-[#0047BA]/50'"></button>
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

<style scoped>
/* .marquee {
  display: flex;
  white-space: nowrap;
  animation: scroll 15s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
} */
</style>
