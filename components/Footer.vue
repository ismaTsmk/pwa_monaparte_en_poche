<template>
  <footer class=" bottom-10 w-full z-20 fixed   ">

    <Transition name="slide-fade">
    <div v-if="showMenu2"
      :class="[showMenu2 ? ' opacity-100 z-40' : 'z-0', 'opacity-0 fixed inset-0  transition-opacity duration-100']">
      <div class="bg-black bg-opacity-50 absolute min-h-screen min-w-full" @click="toogleOpenMenu"></div>
      <div
        :class="[ ' bg-white rounded-3xl   shadow-sm  absolute  right-0 left-0  bottom-10 m-auto  top-1/3  w-[96%]  mx-auto   z-50 ']">
        <div class=" grid grid-cols-2 gap-4 bg-emerald-20 items-center justify-center mt-10">
          <div v-for="(item,index) in services" class=" p-10 bg-gray-50 rounded-full border border-indigo-300 shadow-md hover:shadow-xl hover:bg-gray-100  shadow-orange-200 text-center ">
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>

    <div class="md:px-10 mx-auto  w-[90%] bg-white rounded-3xl h-[62px] flex items-center shadow-lg shadow-primary-200">
      <div class="flex flex-row items-center sm:flex-row  justify-evenly bg-emerald-00  w-full">
        <!-- <Icon v-for="(icon,index) in listIcon" :name="icon.nameIcon" class=" text-gray-400" size="20" /> -->
        <div class="absolute -top-10 bg-white shadow   shadow-zinc-400 rounded-full p-3 mx-auto  "
          @click="toogleOpenMenu">
          <Icon :name="'mingcute:add-fill'" :class="'text-[#FF409C]'" size="35" />

        </div>
        <NuxtLink v-for="(icon, index) in listIcon" :key="index" :to="icon.link"
          class="flex flex-col justify-center  items-center bg-yellow-30">
          <Icon :name="icon.nameIcon" :class="$route.path == icon.link ? 'text-[#FF409C]' : 'text-[#E0D1FF]'" size="25" />
          <span :class="$route.path == icon.link ? 'text-[#FF409C]' : 'text-[#ccb4fc]'">{{ icon.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>


<script setup>
import { ref, computed } from 'vue';
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

// list data return icon  
const listIcon = ref([
  { name: "Accueil", nameIcon: 'octicon:home-16', link: '/', active: true },
  { name: "Evennements", nameIcon: 'carbon:event', link: '/event', active: false },
  // { name: "Aide", nameIcon: 'mdi:help-outline', link: '/help', active: false },
  // { name: "Découvrir", nameIcon: 'solar:map-bold-duotone', link: '/login', active: false },
]);

const showMenu2 = useState('showMenu', () => null)

const toogleOpenMenu = () => {
  showMenu2.value = !showMenu2.value
  console.log(showMenu2)
}

const services  = ref([
  { name: "AIDE COURSE", nameIcon: 'octicon:home-16', link: '/', active: true },
  { name: "SOUTIEN MORALE", nameIcon: 'carbon:event', link: '/event', active: false },
  { name: "BRICOLAGE", nameIcon: 'mdi:help-outline', link: '/help', active: false },
  { name: "AUTRES", nameIcon: 'solar:map-bold-duotone', link: '/discover', active: false },
]);


</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>