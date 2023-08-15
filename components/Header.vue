<template>
    <section :class="[ $route.path.includes('/offres/')    ? ''  : 'fixed' , 'w-full px-6  antialiased  bg-transparent  lg:relative z-50']" ref="headerSection" >
        <div class="mx-auto   max-w-8xl relative z-50 ">
            <nav class="relative z-50 h-24 select-none  ">
                <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium lg:overflow-visible  sm:px-4 md:px-2 lg:px-0">
                    <div class="flex items-center justify-start  h-full pr-4 relative break-words ">
                        <div class=" bg-white shadow   shadow-zinc-400 rounded-full p-2 mx-auto  w-[50px] "
                            @click="toogleOpenMenu">
                            <p class="text-3xl  font-bold px-2 text-primary-500">T</p>

                            </div>
                    </div>
                    <div class="w-[65px] ">
                      <img src="../assets/images/logomonaparte.png" alt="" width="100%">

                    </div>
                    <NuxtLink :to="'/settings'"
                        :class="[' rounded-full cursor-pointer lg:hidden hover:bg-gray-100']">
                        <div class="p-2 bg-white rounded-full w-[50px]">
                          <img src="../assets/images/icon_param.png" class="w-[30px] h-auto" alt="">

                        </div>
                        <!-- <Icon :name="showMenu ? 'octicon:chevron-up-12' : 'octicon:chevron-down-12' " class=" text-gray-400 absolute bottom-0 -right-1" size="20" /> -->

                    </NuxtLink>
                </div>
                <!-- <mci-extension data-role="overlay" id="overlay-root"></mci-extension> -->
            </nav>
    
            <div
                class="w-full h-20  justify-center items-center absolute  -bottom-10  z-30 object-cover   hidden    xl:flex  ">
                    
            </div>
        </div>

    </section>
    <!-- overlay div only show menu variable  
    <div v-if="showMenu" @click="toogleOpenMenu" class="fixed inset-0 z-40 bg-black bg-opacity-50">
        <div class="bg-gray-50 rounded-3xl   shadow-sm  absolute  right-0 left-0  bottom-0 m-auto  top-1/3  w-[96%]  mx-auto  ">
                    <h2>ssssss</h2>
            </div>
    </div> -->
    <!-- Carré pivotant avec logo -->
</template>


<script setup>
import { ref, computed } from 'vue';
import { onMounted, onUnmounted } from 'vue';
const headerSection = ref('headerSection');


const showMenu = useState('showMenu', () => null)

// const nowYear = new Date().getFullYear()
// const yearsMore1 = [{ value: nowYear }, { value: nowYear + 1 }]
const nowYear = new Date().getFullYear();
const yearsMore1 = ref([{ value: nowYear }, { value: nowYear + 1 }]);

// route define  
const route = useRoute();


// scroll background header 


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  if (headerSection.value) {
    const scrollY = window.scrollY;
    if (scrollY > 65) {
      headerSection.value.classList.remove('bg-transparent');
      headerSection.value.classList.add('bg-white');
    } else {
      headerSection.value.classList.add('bg-transparent');
      headerSection.value.classList.remove('bg-white');
    }
  }
};


// fin scroll background header

watch(route, value => {
    // console.log('ici CA CHABGE !!!')
    showMenu.value = false;
}, { deep: true, immediate: true })



// if change dataItems alors faire quelque chose  
watch(() => showMenu.value, (data) => {
    // console.log('dataItems changed')
    // console.log(showMenu.value)
    // console.log(oldValue)
})


// functopn toogleOpenMenu  
const toogleOpenMenu = () => {
    showMenu.value = !showMenu.value
}


</script>