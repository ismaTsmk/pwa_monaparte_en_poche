<template>
  <div >
    <VitePwaManifest />
    <NuxtLoadingIndicator  />
    <div v-if="isLoading" class="h-screen flex items-center justify-center">
      <span class="loading loading-infinity loading-lg"></span>

    </div>
    <NuxtLayout v-else-if="userAuth">
        <NuxtPage />

    </NuxtLayout>
    <NuxtLayout name="guest"  v-else>
        <Login/>
    </NuxtLayout>

  </div>
</template>

<script>
import Login from '@/pages/login.vue';
// import { useUser } from '@/composables/useUser'
// const token = useCookie('token')

import { onAuthStateChanged } from 'firebase/auth'; // Importez onAuthStateChanged

export default {
  // computed: {
  //   userAuth : false,
  // },
  data () {
    return {
      userAuth : false,
      isLoading: true, // Ajoutez cette variable

    }
  },
    methods: {
      checkUserAuth() {
      const { $auth } = useNuxtApp();
      onAuthStateChanged($auth, (user) => {
        if (user) {
          
          console.log("L'utilisateur est connecté");
          this.userAuth = true;
          console.log(this.userAuth)

        } else {
          console.log("L'utilisateur n'est pas connecté");
          this.userAuth = false;
          console.log(this.userAuth)

        }
        this.isLoading = false; // La vérification de connexion est terminée, n'oubliez pas de mettre isLoading à false

      });
    },
    },
    mounted() {
      console.log('mounted')
    this.checkUserAuth(this.userAuth); // Appelez la fonction pour vérifier l'authentification lors du montage du composant
    // console.log(this.userAuth)

  },
    components: { Login }
};
</script>
