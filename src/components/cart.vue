<template>
  <div class="flex">
    <!-- <img
      :src="product.images"
      class="size-full object-cover object-center group-hover:opacity-75"
    /> -->
    <img
      src="./icons/image.jpg"
      class="size-20 object-cover object-center group-hover:opacity-75 rounded-md"
    />
    <!-- <h3 class="mt-2 text-xl">{{ product.title }}</h3> -->
    <h3 class="items-center text-center m-6 text-xl">produk 1</h3>
    <div class="flex justify-between">
      <div class="flex items-center">
        <button
          type="button"
          id="decrement-button"
          class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <img src="./icons/kurang.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
        </button>
        <!-- <button
          type="button"
          id="decrement-button"
          class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          @click="buttonKurang(index)"
        >
          <img src="./icons/kurang.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
        </button> -->
        <div class="text-center m-2">1</div>
        <!-- <div class="text-center m-2">
          {{ item.quantity }}
        </div> -->
        <button
          type="button"
          id="increment-button"
          class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <img src="./icons/tambah.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
        </button>
        <!-- <button
          type="button"
          id="increment-button"
          class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          @click="buttonTambah(index)"
        >
          <img src="./icons/tambah.svg" class="size-2 text-gray-900 dark:text-white" alt="" />
        </button> -->
      </div>
    </div>
    <div class="trash">
      <button>
        <!-- <button @click="removeFromCart(index)"> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 m-6 stroke-red-500"
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
</template>

<script></script>
