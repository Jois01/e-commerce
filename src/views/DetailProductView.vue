<template>
  <div
    class="bg-white rounded-md container mx-auto flex m-8 md:px-24 md:py-10 md:flex-row flex-col items-center"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div class="col-sel-2">
        <img :src="product.images" alt="image" />
      </div>
      <div class="items-center justify-center">
        <h1 class="text-3xl font-bold text-left">{{ product.title }}</h1>
        <p class="text-lg text-left justify-center">
          {{ product.description }}
        </p>
        <p class="text-lg font-medium text-gray-900">{{ product.price }}</p>
        <button
          class="bg-blue-500 text-white w-32 py-2 text-center rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          @click="addToCart"
        >
          add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      product: {},
    }
  },
  mounted() {
    axios
      .get('https://dummyjson.com/products/1' + this.$route.params.id)
      .then((response) => {
        this.product = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods:{
    addToCart(product){
      const itemInCart = this.cart.find((item) => item.id === this.product.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
        })
      }
    },
  }
}
</script>
