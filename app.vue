<template>
  <div>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
// import { useFirebaseAuth } from '@/chemin/vers/useFirebaseAuth'; // Assurez-vous de fournir le chemin correct
// import { onMounted } from 'vue'; // Importez les hooks nécessaires

// export default {
//   setup() {
//     const { user, registerUser } = useFirebaseAuth();

//     // Exemple : appel à registerUser lorsque le composant est monté
//     onMounted(async () => {
//       const registrationSuccessful = await registerUser('example@example.com', 'motdepasse');
//       if (registrationSuccessful) {
//         console.log('Inscription réussie !');
//       } else {
//         console.log('Inscription échouée.');
//       }
//     });

//     return {
//       user,
//       registerUser,
//     };
//   },
// };
</script>
