<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <nav class="navbar flex justify-between bg-white shadow-xl p-6">
    <img class="w-48" src="./icons/logoipsum.png" alt="" />
    <div class="profile flex items-center text-xl mx-5 gap-8">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/product">Produck</RouterLink>
      <button>
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
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </button>
      <div class="profole gap-2 flex">
        <img class="w-8 rounded-full" src="./icons/image.jpg" alt="" />
        <div>Jois Tika</div>
      </div>
      <RouterLink to="login" class="py-2 px-3 bg-blue-500 rounded-md text-white shadow-md hover:bg-blue-800">
        login
      </RouterLink>
    </div>
  </nav>
</template>
