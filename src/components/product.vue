<template>
  <div class="bg-white shadow-lg m-8 rounded-md">
    <div class="flex items-center p-4 border-b border-gray-200">
      <input
        type="text"
        class="m-4 w-96 p-2 border border-gray-200 rounded-md"
        v-model="search"
        placeholder="Search..."
      />
      <img src="../assets/searct.svg" class="size-6" />
    </div>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="product.images"
              class="size-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4  text-xl ">{{ product.title }}</h3>
          <h3 class="mt-4 text-sm text-gray-700 bg-gray-100 rounded-md w-24 text-center">
            {{ product.category }}
          </h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </a>
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
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value)
    },
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
  },
}
</script>
