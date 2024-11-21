<template>
  <div class="bg-white shadow-lg m-8 rounded-md">
    <div class="items-center p-4 border-b border-gray-200 md:flex justify-between block">
      <h2 class="text-2xl ml-4">All Products</h2>

      <form class="md:w-96 m-4" @submit.prevent="searchProducts">
        <div class="flex">
          <div
            class="inset-y-0 start-0 flex items-center ps-3 item-center p-2 rounded-l-lg border border-black bg-gray-300 pointer-events-none"
          >
            <img src="../assets/searct.svg" class="size-6 item-center" />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-black rounded-r-lg bg-gray-50 hover:border-blue-500"
            v-model="search"
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <RouterLink
          :to="{ name: 'DetailProduct', params: { id: product.id } }"
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group cursor-pointer"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img :src="product.images" class="size-full object-cover object-center" />
          </div>
          <div class="mt-2 text-xl">{{ product.title }}</div>
          <h3 class="mt-2 text-sm text-gray-700 bg-gray-100 rounded-md w-24 text-center">
            {{ product.category }}
          </h3>
          <p class="text-lg font-medium text-gray-900">$ {{ product.price }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      loading: true,
      search: '',
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://dummyjson.com/products')
        this.products = response.data.products
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        this.loading = false
      }
    },
    async searchProducts() {
      if (!this.search.trim()) {
        return this.fetchProducts()
      }
      try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${this.search}`)
        this.products = response.data.products
      } catch (error) {
        console.error('Error searching products:', error)
      }
    },
  },
}
</script>
