<template>
  <div>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <div v-if="isLoading" class="h-screen flex items-center justify-center">
      <span class="loading loading-infinity loading-lg"></span>

    </div>
    <NuxtLayout v-else-if="userAuth">
      <NuxtPage />

    </NuxtLayout>
    <NuxtLayout name="guest" v-else>
      <Login />
    </NuxtLayout>

  </div>
</template>

<script>
import Login from '@/pages/login.vue';
// import { useUser } from '@/composables/useUser'
// const token = useCookie('token')
// import useUser from '@/composables/useUser'; // Assurez-vous d'importer correctement le chemin du composable
import { mapMutations } from 'vuex'; // Importez mapMutations pour utiliser les mutations du store Vuex


import { onAuthStateChanged } from 'firebase/auth'; // Importez onAuthStateChanged

export default {
  // computed: {
  //   userAuth : false,
  // },
  data() {
    return {
      userAuth: false,
      isLoading: true, // Ajoutez cette variable

    }
  },
  methods: {
    ...mapMutations('user', ['setUser']), // Utilisez mapMutations pour accéder à la mutation setUser du store Vuex

    checkUserAuth() {
      const { $auth } = useNuxtApp();
      const { updateUserData, userData } = useUser(); // Assurez-vous d'importer correctement le chemin du composable
      const { getDocument } = useFirebaseAuth(); // Assurez-vous d'importer correctement le chemin du composable
      onAuthStateChanged($auth, async (user) => {
        if (user) {

        const response = await getDocument('users', user.uid);

        if (response) {
          // Mettre à jour les données utilisateur

          updateUserData({
            uid: user.uid,
            email: user.email,
            pseudo: response.pseudo,
            age: response.age,
            isPublic: response.isPublic,
            phoneNumber: response.phoneNumber,
            isAuthenticated: true,
          });
          // console.log('userData')
          // console.log(userData.email)

          // console.log("L'utilisateur est connecté");
          this.userAuth = true;
          // console.log(this.userAuth);
        } else {
          console.log("Données utilisateur introuvables dans Firestore");
        }



          // console.log("L'utilisateur est connecté");
          this.userAuth = true;
          // console.log(this.userAuth)

        } else {
          console.log("L'utilisateur n'est pas connecté");
          this.userAuth = false;
          // console.log(this.userAuth)

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
