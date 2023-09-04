<template>
    <main class="flex min-h-full py-24 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div class="text-center">
        <h1 class="text-4xl font-semibold text-white mb-6 ">Welcome to My <br> Event page {{ currentUser == null ? '' : currentUser.pseudo }} </h1>
        <p class="text-lg text-white mb-8">Discover the amazing features of our platform.</p>
        <a
          href="https://example.com"
          class="inline-block bg-white text-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Evennements
        </a>
      </div>
    </main>

</template>

<script lang="ts">

export default {
    name: "Event",
    methods: {
    },
    components: { },
    data() {
        return {
          currentUser : null as any,

        }
    },
    mounted() {
      const {  userData } = useUser(); // Assurez-vous d'importer correctement le chemin du composable
      this.currentUser = userData
      console.log('this.currentUser')

      console.log(this.currentUser.pseudo)
      console.log(this.currentUser)
      console.log(this.currentUser)


    },

};
</script>
