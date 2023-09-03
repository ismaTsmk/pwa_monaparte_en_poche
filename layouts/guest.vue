<template>
  <div class="scroll-smooth bg-gray-100 lg:hidden ">
      <slot />
  </div>
  <div class=" hidden lg:flex justify-center items-center bg-gradient-to-r from-secondary-400 to-primary-500 min-h-screen ">
    <div class="flex flex-col items-center justify-center text-center text-white">
      <h1 class="text-3xl font-bold">Disponible sur mobile uniquement</h1>
      <p class="text-xl"></p>
      <div class="flex mt-10">
        <img src="../assets/images/mockup_phone_monaparte-min.png" alt="" class=" max-h-80 rotate-12 ">
        <img src="../assets/images/mockup_phone_monaparte-min.png" alt="" class=" max-h-80 -rotate-12 ">

      </div>
    </div>
  </div>
</template>
