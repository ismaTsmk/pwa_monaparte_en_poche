<template>
  <footer class=" bottom-10 w-full z-20 fixed " >
    <div class="md:px-10 mx-auto  w-[90%] bg-white rounded-3xl h-[62px] flex items-center" >
      <div class="flex flex-row items-center sm:flex-row  justify-evenly bg-emerald-00  w-full">
        <!-- <Icon v-for="(icon,index) in listIcon" :name="icon.nameIcon" class=" text-gray-400" size="20" /> -->
        <NuxtLink
          v-for="(icon, index) in listIcon"
          :key="index"
          :to="icon.link"
          class="flex flex-col justify-center  items-center bg-yellow-30"
        >
          <Icon :name="icon.nameIcon" :class="$route.path == icon.link ? 'text-[#FF409C]' : 'text-[#E0D1FF]'" size="20" /> 
          <span :class="$route.path == icon.link ? 'text-[#FF409C]' : 'text-[#ccb4fc]'">{{ icon.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
  </template>


  <script setup>
  import { ref, computed } from 'vue';
  // list data return icon  
  const listIcon = ref([
    {name:"Accueil",  nameIcon: 'octicon:home-16', link: '/' ,active : true  },
    {name:"Evennements", nameIcon: 'octicon:search-16', link: '/event',active : false },
    {name:"Aide", nameIcon: 'octicon:bookmark-16', link: '/help',active : false },
    {name:"Découvrir", nameIcon: 'octicon:person-16', link: '/discover',active : false },
  ]);
  
  </script>