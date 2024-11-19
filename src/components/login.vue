<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div
    class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center bg-white rounded-md m-10 shadow-md"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <form class="items-center justify-center" @submit.prevent="loginUser">
        <div class="text-xl">
          <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
        </div>
        <div class="mb-5">
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your username</label
          >
          <input
            type="text"
            id="username"
            v-model="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
        <div class="text-center mt-8">
          <p class="text-sm text-gray-500 dark:text-gray-400">Don't have an account?</p>
          <RouterLink to="/Register">register</RouterLink>
        </div>
      </form>
      <div class="card">
        <img src="./icons/juicy.gif" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async loginUser() {
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        })
        if (response.ok) {
          const data = await response.json()
          localStorage.setItem('token', data.token)
          alert('Login successful!')
          this.$router.push('/home')
        } else {
          const error = await response.json()
          alert(error.message || 'Login failed.')
        }
      } catch (err) {
        console.error(err)
        alert('Something went wrong.')
      }
    },
  },
}
</script>
