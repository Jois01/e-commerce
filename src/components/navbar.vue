<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { user, isLoggedIn } from './state'

const isProfileMenuOpen = ref(false)

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
    isLoggedIn.value = true
  }
})

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  user.value = null
  isLoggedIn.value = false
  alert('Logged out successfully!')
}
</script>

<template>
  <nav class="bg-white w-full p-6 shadow-md">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img class="w-48 m-4" src="./icons/logoipsum.png" alt="" />
        <RouterLink class="text-xl m-4 hidden md:block" to="/">Home</RouterLink>
        <RouterLink class="text-xl m-4 hidden md:block" to="/product">Produck</RouterLink>
        <div class="m-3 px-6 hidden md:block">
          <RouterLink to="/Cart">
            <img src="./icons/cart.svg" class="size-6" alt="" />
          </RouterLink>
        </div>
      </div>
      <div class="hidden md:block relative" v-if="isLoggedIn">
        <button
          type="button"
          @click="isProfileMenuOpen = !isProfileMenuOpen"
          class="relative flex max-w-xs items-center m-4"
          id="user-menu-button"
        >
          <img
            class="w-10 rounded-full"
            :src="user?.image || './icons/default-avatar.png'"
            alt=""
          />
          <div class="m-2">{{ user?.username }}</div>
        </button>

        <div
          v-if="isProfileMenuOpen"
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <button
            @click="logout"
            type="submit"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
          >
            Logout
          </button>
        </div>
      </div>
      <RouterLink
        to="/Login"
        class="py-2 px-3 bg-blue-500 rounded-md text-white shadow-md hover:bg-blue-800"
        v-else
      >
        Login
      </RouterLink>

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
        <RouterLink to="/">
          <div class="m-3 hover:border hover:border-blue-500 p-2 rounded-md">Home</div>
        </RouterLink>
        <RouterLink to="/product">
          <div class="m-3 hover:border hover:border-blue-500 p-2 rounded-md">Produck</div>
        </RouterLink>
        <RouterLink to="/Cart" class="flex m-3 hover:border hover:border-blue-500 p-2 rounded-md">
          <img src="./icons/cart.svg" class="size-6" alt="" />
          <div class="text-gray-700">Cart</div>
        </RouterLink>
        <div class="m-3 hover:border hover:border-blue-500 p-2 rounded-md" v-if="isLoggedIn">
          <div class="profile gap-2 flex justify-between">
            <div class="profile flex">
              <img
                class="w-10 rounded-full"
                :src="user?.image || './icons/default-avatar.png'"
                alt=""
              />
              <div class="m-2">{{ user?.username }}</div>
            </div>
            <button
              @click="logout"
              class="py-2 px-3 bg-red-500 rounded-md text-white shadow-md hover:bg-red-800"
            >
              Logout
            </button>
          </div>
        </div>
        <div class="m-5 flex" v-else>
          <RouterLink
            to="/Login"
            class="py-2 px-3 bg-blue-500 rounded-md text-white shadow-md hover:bg-blue-800"
          >
            Login
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      Open: false,
    }
  },
  methods: {
    toggleMenu() {
      const menuDropdown = document.getElementById('menu-dropdown')
      menuDropdown.classList.toggle('hidden')
    },
  },
}
</script>
