<template>
  <div>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtLayout >
        <NuxtPage v-if="userIsLoggedIn"/>
      <div v-else>
        <NuxtLink :to="'/login'">Aller à la page de connexion</NuxtLink>

      </div>
    </NuxtLayout>

  </div>
</template>

<script>
import Login from '@/pages/login.vue';
// import { useUser } from '@/composables/useUser'
// const token = useCookie('token')


export default {
    methods: {
        userIsLoggedIn() {
          const {getUser} = useFirebaseAuth()
          const { $auth  } = useNuxtApp()
          console.log('iciciciiciciciciicici ___________')
          getUser().then(isLoggedIn => {
          if (isLoggedIn) {
            console.log("L'utilisateur est connecté");
            return true
          } else {
            console.log("L'utilisateur n'est pas connecté");
            return false 
          }
          // return isLoggedIn
        });
          // const response  = getUser().then(
          //   userData => {
          //     console.log(userData)
          //   }
          //  )
          // console.log(response)
          // console.log(token.value)
            // Utilisez ici une condition pour vérifier si l'utilisateur est connecté
            // Par exemple, vérifiez si this.$auth.loggedIn est vrai
            // if (useUser().value === 'undefined') {
            //   console.log("userIsLoggedIn false")
            //   console.log(useUser())
            //     return false;
            // }
            // console.log("userIsLoggedIn true")
            // console.log(useUser())

            // return true;
        }
    },
    components: { Login }
};
</script>
