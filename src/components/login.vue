<script setup>
import { user, isLoggedIn } from './state'
</script>
<template>
  <section class="text-gray-600 body-font bg-white m-4 rounded-md md:mx-20">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow mt-5  md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start text-left mb-16 md:mb-0 items-center"
      >
        <form class="items-center justify-center m-4 md:w-96 sm:w-96" @submit.prevent="loginUser">
          <div class="text-xl">
            <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
          </div>
          <div class="mb-5">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900"
              >Your username</label
            >
            <input
              type="text"
              id="username"
              v-model="username"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your password</label
            >
            <input
              type="password"
              id="password"
              v-model="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
            <div to="/Register">register</div>
          </div>
        </form>
      </div>
      <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        <img
          class="object-cover hidden md:block object-center rounded"
          alt="hero"
          src="../components/icons/juicy.gif"
        />
      </div>
    </div>
  </section>
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
            username: username.value,
            password: password.value,
          }),
        })
        if (response.ok) {
          const data = await response.json()
          localStorage.setItem('token', data.token)
          localStorage.setItem(
            'user',
            JSON.stringify({ username: data.username, image: data.image }),
          )
          user.value = { username: data.username, image: data.image }
          isLoggedIn.value = true

          alert('Login successful!')
          this.$router.push('/')
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
