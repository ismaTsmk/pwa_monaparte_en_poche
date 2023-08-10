<template>
  <div class="scroll-smooth">
    <Header />
    <!-- Le composant header -->
    <slot />
    <!-- Le contenu de la page -->
    <Footer />
    <!-- Le composant footer -->

    <!-- button wattshap logo in bottom fixed right  --> 
    <div v-if="!$route.path.includes('/offres/') " :class="[ ,' bottom-5 right-4 fixed  lg:bottom-6  lg:right-6 z-30   p-4 bg-white shadow-xl rounded-full']">
      <a href="https://wa.me/33660508397?text=Salam%20aleykoum,%20j'aimerais%20prendre%20contact%20avec%20vous%20afin%20d'en%20savoir%20plus%20sur%20vos%20offres." target="_blank" >
        <!-- <img src="../assets/images/watt_logo.png" class=" w-[50px]  lg:w-[75px]" /> -->
      </a>
    </div>


  </div>
</template>
