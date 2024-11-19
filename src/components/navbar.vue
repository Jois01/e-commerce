<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav class="bg-white w-full p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img class="w-48 m-4" src="./icons/logoipsum.png" alt="" />
        <RouterLink class="text-xl m-4 hidden md:block" to="/">Home</RouterLink>
        <RouterLink class="text-xl m-4 hidden md:block" to="/product">Produck</RouterLink>
        <div class="m-3 px-6 hidden md:block">
          <RouterLink to="/Cart">
            <img src="./icons/cart.svg" class="size-6 " alt="" />
          </RouterLink>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex">
          <div class="m-4 gap-2 flex">
            <img class="w-8 rounded-full" src="./icons/image.jpg" alt="" />
            <div class="text-xl">Jois Tika</div>
          </div>
          <button v-if="isLoggedIn"
            class="py-2 px-3 m-3 bg-red-500 rounded-md text-white shadow-md hover:bg-red-800"
          >
            logout
          </button>
          <RouterLink v-else
            to="login"
            class="py-2 px-3 m-3 bg-blue-500 rounded-md text-white shadow-md hover:bg-blue-800"
          >
            login
          </RouterLink>
         
        </div>
      </div>

      <div id="mobile-menu" class="md:hidden flex items-center px-10">
        <div
          class="bar-menu relative inline-flex items-center justify-center rounded-md p-2 border hover:border-blue-500"
          @click="toggleMenu()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </div>

    <div id="menu-dropdown" class="hidden md:hidden">
      <div class="text-md ml-auto m-3">
        <div class="m-3 hover:border hover:border-blue-500 p-2 rounded-md">
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="m-3 hover:border hover:border-blue-500 p-2 rounded-md">
          <RouterLink to="/product">Produck</RouterLink>
        </div>
        <RouterLink to="/Cart" class="flex m-3 hover:border hover:border-blue-500 p-2 rounded-md">
          <img src="./icons/cart.svg" class="size-6" alt="" />
          <div class="text-gray-700">cart</div>
        </RouterLink>
        <div class="m-3 hover:border hover:border-blue-500 p-2 rounded-md">
          <div class="profole gap-2 flex">
            <img class="w-8 rounded-full" src="./icons/image.jpg" alt="" />
            <div class="mt-1">Jois Tika</div>
          </div>
        </div>
        <div class="m-5 flex">
          <RouterLink
            to="login"
            class="py-2 px-3 bg-blue-500 rounded-md text-white shadow-md hover:bg-blue-800"
          >
            login
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    toggleMenu() {
      const menuDropdown = document.getElementById('menu-dropdown')
      menuDropdown.classList.toggle('hidden')
    },
  },
}
</script>
