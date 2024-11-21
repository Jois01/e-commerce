<template>
  <div id="app" class="grid grid-cols-1 md:grid-cols-3 m-4">
    <div class="card col-span-2">
      <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
        <div class="card-title m-4 text-2xl">My Cart</div>
        <div class="card-body m-4 items-center">
          <div class="card bg-gray-50 rounded-lg p-2">
            <div v-if="cart.length" class="container mx-auto">
              <div
                v-for="(item, index) in cart"
                :key="item.id"
                class="flex justify-between items-center mb-4 m-8"
              >
                <img
                  :src="item.thumbnail || item.images || 'default.png'"
                  alt="Product Image"
                  class="w-20 h-20 object-cover rounded-md"
                />
                <h2 class="text-lg font-medium">{{ item.title }}</h2>
                <div class="flex items-center">
                  <button @click="buttonKurang(index)" class="px-3 py-1 bg-gray-200 rounded">
                    -
                  </button>
                  <span class="mx-3">{{ item.quantity }}</span>
                  <button @click="buttonTambah(index)" class="px-3 py-1 bg-gray-200 rounded">
                    +
                  </button>
                </div>
                <span class="text-lg font-medium">${{ item.price }}</span>
                <button @click="removeFromCart(index)" class="text-red-500">
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div v-else class="text-center text-xl text-gray-300 py-10">
              <p>Your cart is empty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="bg-white rounded-md p-10 m-6 shadow-xl">
        <h5 class="card-title">Order Summary</h5>
        <hr class="mt-2" />
        <div class="mt-4">
          <div class="flex justify-between">
            <h5 class="text-lg font-bold">Items Subtotal</h5>
            <div class="total text-lg font-bold">$ {{ cartTotal }}</div>
          </div>
          <div class="flex justify-between">
            <div>Promo</div>
            <div class="promo">-</div>
          </div>
          <div class="flex justify-between">
            <h5 class="text-lg font-bold">Order Total</h5>
            <div class="total text-lg font-bold">$ {{ cartTotal }}</div>
          </div>
          <div>have a promo code?</div>
          <input type="text" class="text-center p-2" placeholder="XXX-XXX-XXX" />
          <button class="ml-2">apply</button>
        </div>
        <button
          class="bg-black text-white py-2 px-2 rounded-md mt-4 text-center item-center justify-center"
        >
          check out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // Daftar produk di keranjang
    }
  },
  mounted() {
    const storedCart = JSON.parse(localStorage.getItem('cart'))
    if (storedCart) {
      this.cart = storedCart
    }
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    },
  },
  methods: {
    buttonKurang(index) {
      this.cart[index].quantity--
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1)
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    buttonTambah(index) {
      this.cart[index].quantity++
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    removeFromCart(index) {
      this.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
}
</script>
