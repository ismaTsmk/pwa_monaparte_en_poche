<template>
  <div class="scroll-smooth bg-gray-100 lg:hidden ">
    <Header />
    <!-- Le composant header -->
    <main class="z-0 pt-20">
      <slot />
    </main>
    <!-- Le contenu de la page -->
    <Footer />
    <!-- Le composant footer -->

    <!-- button wattshap logo in bottom fixed right  --> 
    <!-- <div v-if="!$route.path.includes('/offres/') " :class="[ ' bg-indigo-600 text-white bottom-5 right-4 fixed  lg:bottom-32  lg:right-6 z-30   p-4  shadow-md shadow-slate-100 rounded-full']">
      <a href="https://wa.me/33660508397?text=Salam%20aleykoum,%20j'aimerais%20prendre%20contact%20avec%20vous%20afin%20d'en%20savoir%20plus%20sur%20vos%20offres." target="_blank" >
        <p>dfudgf</p>
      </a>
    </div> -->


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
