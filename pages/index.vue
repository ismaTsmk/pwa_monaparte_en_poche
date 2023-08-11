<template>
    <div class="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 ">
      <div class="text-center">
        <h1 class="text-4xl font-semibold text-white mb-6 ">Welcome to My <br> Home page  </h1>
        <p class="text-lg text-white mb-8">Discover the amazing features of our platform.</p>
        <a
          href="https://example.com"
          class="inline-block bg-white text-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Découvrir
        </a>
      </div>
    </div>

</template>

<script lang="ts">


// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

// SwiperCore.use([EffectCoverflow, Pagination]);


export default {
    name: "index",
    methods: {
    },
    components: { },
    data() {
        return {


        }
    },
    mounted(){
      const { user } = useFirebaseAuth()

      console.log("mounted")
      console.log(user)
    }

};
</script>


<style scoped>
@media (max-height: 900px) and (min-width: 1285px) {


}
</style> 