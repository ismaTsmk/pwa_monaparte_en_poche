<template>
  <div class=" overflow-scroll  ">
    <!-- bg-gradient-to-r from-secondary-500 to-primary-600 -->
    <!-- <div class="text-center">
        <h1 class="text-4xl font-semibold text-primary-500 mb-6 ">Welcome to My <br> Home page  </h1>
        <p class="text-lg text-primary-500 mb-8">Discover the amazing features of our platform.</p>
        <a
          href="https://example.com"
          class="inline-block bg-primary-500 text-secondary-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Découvrir
        </a>
      </div> -->
    <div class="bg-gray-100 p-4">
      <!-- Titre centré en gras avec couleurs primaires et secondaires -->
      <h1 class="text-center font-bold text-primary mb-4 text-secondary-500 text-2xl">Salut <span
          class="text-primary-500">Tom</span> <br> Du nouveau dans l'apparte</h1>

      <!-- Petite card -->
      <div class="bg-white p-4 rounded-3xl shadow-md shadow-primary-300 drop-shadow-lg  flex ">
        <div class="w-3/5">
          <p class="text-secondary-500 font-bold">Trouvez les informations essentielles</p>
          <a href="#" class="text-secondary-500 ">Mon batiment &gt;</a>
        </div>
        <div class="w-2/5">
          <img src="../assets/images/maskgroup.png" alt="Image" class="w-full h-auto">
        </div>
      </div>

      <!-- Bloc "Voisins actifs" -->
      <div class="mt-4 flex items-center justify-between">
        <h2 class="font-bold text-2xl text-secondary-500">Voisins actifs</h2>
        <button class="text-primary">Voir tout</button>
      </div>

      <!-- Bloc avec bouton "Ajouter favoris" et liste de thumbnails -->
      <div
        class="  flex items-start justify-start bg-emersald-300 max-w-[100vw] px-2 overflow-x-scroll overflow-hidden py-6">
        <div
          class="border me-5 border-primary-500 border-dashed px-2 py-1 text-center flex justify-center items-center flex-col rounded-xl w-[70px] h-[70px] ">
          <Icon :name="'mingcute:add-fill'" :class="'text-[#FF409C]'" size="35" />
          <p class=" text-xs">Ajouter favoris</p>
        </div>
        <div class="flex  px-3 ">
          <div v-for="avatar in avatars" :key="avatar.id" class="mr-4 w-[70px] relative ">
            <img
              class="rounded-2xl bg-gray-300 flex items-center justify-center mr-4 w-[70px] h-[70px] border border-primary-500"
              :src="'https://i.pravatar.cc/150?u=fake@pravatar.com'" alt="Avatar">
            <div v-if="avatar.id % 2 == 0"
              class="bg-red-400  rounded-full   flex justify-center items-center  w-[35px] h-[35px] absolute -top-4 -right-2">
              <Icon name="mdi:help-outline" class="text-white " size="23" />

            </div>
            <p class="text-center">{{ avatar.id % 2 == 0 ? "étage 1" : "Bat: R4" }} </p>
          </div>

        </div>
      </div>

      <!-- Bloc "Information locale" avec liste de blocs scrollable -->
      <div class="mt-4 ">
        <h2 class="text-left font-bold mb-2 text-2xl text-secondary-500">Information locale</h2>
        <div class="">
          <div v-for="event in eventsFirebaseCollections" :key="event.id" class="">
            <div class="ms-2  mb-3">
              <!-- <img src="https://placehold.co/75x75" alt="" class="rounded-full "> -->
              <div>
                <h5 class="text-xl text-secondary-500 font-bold">{{ event.title }}</h5>
                <p class="  font-light text-gray-600">{{ convertTimeStampToFrenchDate(event.date.seconds) }}</p>

              </div>
            </div>
            <div class="relative mb-6">
              <NuxtLink href="/"
                class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-64  hover:scale-105 rounded-xl shadow-md "
                :style="{ backgroundImage: 'url(' + event.image + ')' }" spellcheck="false"></NuxtLink>
              <div class="absolute top-2 right-4"><span href="#_"
                  class="inline-block text-sm font-bold rounded-full px-4 py-1 uppercase  bg-white text-primary-600 border-primary-600 border">Participer</span>
              </div>

            </div>
            <!-- <div class="bg-white p-2 rounded-md shadow-md   h-[243px] mb-6 flex justify-end" :style="{ backgroundImage: 'url(' + event.image + ')' }"> -->
            <!-- <div class="relative top-2 right-2"> -->
            <!-- <p class="  px-4 py-2 h-fit  bg-white border border-primary-500">Participer</p> -->

            <!-- </div> -->
            <!-- </div> -->
          </div>
        </div>
      </div>




    </div>


  </div>
</template>

<script lang="ts">
import { format } from 'date-fns'


export default {
  name: "index",
  methods: {
    convertTimeStampToFrenchDate(timestamp: any) {
      const date = new Date(timestamp * 1000);
      return format(date, "dd/MM/yyyy HH:mm:ss");
    },
  },
  components: {},
  data() {
    return {
      avatars: [
        { id: 1, image: "https://placehold.co/70x70" },
        { id: 2, image: "https://placehold.co/70x70" },
        { id: 3, image: "https://placehold.co/70x70" },
        { id: 4, image: "https://placehold.co/70x70" },
        { id: 5, image: "https://placehold.co/70x70" },
        { id: 6, image: "https://placehold.co/70x70" },
        { id: 7, image: "https://placehold.co/70x70" },
        { id: 8, image: "https://placehold.co/70x70" },

        // ... add more avatars
      ],
      eventsFirebaseCollections: [] as { id: number, image: string, title: string, date: { seconds: any, nanoseconds: any } }[],
    }
  },
  async mounted() {
    const { getAllDocuments } = useFirebaseAuth()

    //  const response = await  getAllDocuments('events')
    const response = await getAllDocuments('events',[], 'date', 'asc');
    this.eventsFirebaseCollections = response
    console.log(response)

    //  this.eventsFirebaseCollections = response 
    console.log("mounted1234")
    // const { $auth } = useNuxtApp()
    // console.log($auth.currentUser.email)
    // console.log("mounted2222")

    console.log("mounted")
    // console.log(useUser().value?.email)
    // console.log(useUser.arguments.email)
  },


};
</script>


<style scoped>
@media (max-height: 900px) and (min-width: 1285px) {}
</style> 