<script setup>
import navbar from './components/navbar.vue'
import cart from './components/cart.vue'
</script>

<template>
  <header class="sticky top-0 ">
    <navbar />
  </header>
  <RouterView />
</template>
