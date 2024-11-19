<template>
  <div id="app" class="grid grid-cols-1 md:grid-cols-3 m-4">
    <div class="card col-span-2">
      <div class="card bg-white m-6 p-2 rounded-md shadow-xl">
        <div class="card-title m-4 text-2xl">My Cart</div>
        <div class="card-body m-4 items-center">
          <div class="card bg-gray-50 rounded-lg">
            <cart />
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="bg-white rounded-md p-10 m-6 shadow-xl">
        <h5 class="card-title">Order Summary</h5>
        <hr class="mt-2" />
        <div class="mt-4">
          <div>Items Subtotal</div>
          <div>Promo</div>
          <div class="font-bold">Order total</div>
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
<script setup>
import cart from '@/components/cart.vue'
</script>
