<template>
  <section class="text-gray-600 body-font bg-white m-4 rounded-md md:mx-20">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gradient sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal animate-gradient"
        >
          Welcome to Our Website
        </h1>
        <p class="mb-8 md:pl-0 pl-2 pr-2 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, harum consequatur labore
          sapiente est optio rem atque dolores quis nesciunt nihil distinctio iure sunt dolorum et
          possimus excepturi eaque omnis.
        </p>
      </div>
      <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="../components/icons/juicy.gif"
        />
      </div>
    </div>
  </section>
</template>
<style>
@keyframes gradient-change {
  0% {
    color: #3498db;
    /* Blue */
  }

  25% {
    color: #9b59b6;
    /* Purple */
  }

  50% {
    color: #8b0090;
    /* Red */
  }

  75% {
    color: #2ecc71;
    /* Green */
  }

  100% {
    color: #f39c12;
    /* Yellow */
  }
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #3498db, #9b59b6, #8b0090, #2ecc71, #f39c12);
  animation: gradient-change 10s infinite;
  background-size: 400% 400%;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
}
</style>
