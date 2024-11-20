<template>
  <div
    class="bg-white rounded-md container mx-auto flex m- md:px-24 md:py-10 md:flex-row flex-col items-center"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <div class="col-sel-2">
        <img :src="product.images" alt="image" />
      </div>
      <div class="items-center justify-center m-10">
        <h1 class="text-3xl font-bold text-left">{{ product.title }}</h1>
        <p class="text-lg text-left justify-center">
          {{ product.description }}
        </p>
        <p class="text-xl font-medium text-gray-900 mt-4 mb-4">$ {{ product.price }}</p>
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
      .get('https://dummyjson.com/products/' + this.$route.params.id)
      .then((response) => {
        this.product = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
  methods: {
  addToCart() {
    const cartItem = {
      id: this.product.id,
      title: this.product.title,
      price: this.product.price,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === cartItem.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  },
},

}
</script>
