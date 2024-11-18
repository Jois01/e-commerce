<template>
  <form class="max-w-sm mx-auto">
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        type="email"
        id="email"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="name@examle.com"
        required
      />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your password</label
      >
      <input
        type="password"
        id="password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="repeat-password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Repeat password</label
      >
      <input
        type="password"
        id="repeat-password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Register new account
    </button>
  </form>
</template>
