<template>
  <div id="app" class="grid grid-cols-1 md:grid-cols-3 m-4">
    <div class="card col-span-2">
      <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
        <div class="card-title m-4 text-2xl">My Cart</div>
        <div class="card-body m-4 items-center">
          <div class="card bg-gray-50 rounded-lg">
            <div v-if="cart.length" class="container mx-auto">
              <div
                v-for="(item, index) in cart"
                :key="item.id"
                class="flex justify-between items-center mb-4 m-8"
              >
                <img
                  :src="item.thumbnail || item.images || 'default.jpg'"
                  alt="Product Image"
                  class="w-20 h-20 object-cover"
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
                <span class="text-lg font-medium">${{ item.price * item.quantity }}</span>
                <button @click="removeFromCart(index)" class="text-red-500">Remove</button>
              </div>
              <div class="text-right mt-6">
                <h3 class="text-xl font-bold">
                  Total: 
                </h3>
              </div>
            </div>
            <div v-else class="text-center py-10">
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
            <h5 class="text-lg font-bold">Items Subtotal
            </h5>
            <div class="total text-lg font-bold">${{ cart.reduce((total, item) => total + item.price * item.quantity, 0) }}</div>
          </div>
          <div class="flex justify-between">
          <div>Promo</div>
          <div class="promo">-</div>
          </div>
          <div class="flex justify-between">
            <h5 class="text-lg font-bold">Order Total
            </h5>
            <div class="total text-lg font-bold">${{ cart.reduce((total, item) => total + item.price * item.quantity, 0) }}</div>
          </div>          <div>have a promo code?</div>
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
