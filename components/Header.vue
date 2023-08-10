<template>
    <section :class="[ $route.path.includes('/offres/')    ? ''  : 'fixed' , 'w-full px-6  antialiased bg-white   lg:relative z-50']" >
        <div class="mx-auto   max-w-8xl relative z-50 ">

            <nav class="relative z-50 h-24 select-none  ">
                <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 lg:overflow-visible  sm:px-4 md:px-2 lg:px-0">
                    <div class="flex items-center justify-start  h-full pr-4 relative break-words ">
                        <NuxtLink href="/" class=" py-4 lg:py-0 " >
                            <!-- <img src="@/assets/images/logo/logo_alminbar274x135.png" alt="" class="h-auto " style="max-width: 150px;"> -->
                        </NuxtLink>
                    </div>
                    <div
                        :class="[' top-0 left-0 items-start w-full h-full p-4 text-sm bg-opacity-50 lg:items-center lg:w-5/6  2xl:4/5   lg:text-base   lg:bg-transparent lg:p-0 lg:relative lg:flex ', showMenu ? 'flex fixed' : 'hidden']">
                        <div
                            class="flex-col w-full h-auto overflow-hidden bg-whiste  rounded-lg   bg-white lg:bg-transpasrent lg:overflow-visible lg:rounded-none lg:relative lg:flex lg:flex-row ">
                            <NuxtLink href="/"
                                class="   inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 lg:hidden ">

                                <!-- <img src="@/assets/images/logo/logo_alminbar274x135.png" alt="" class="h-auto  ms-6 " style="max-width: 100px;"> -->
                            </NuxtLink>
                            <div
                                class=" flex flex-col items-start justify-center w-full  space-x-6 text-center lg:space-x-8  lg:mt-0 lg:flex-row lg:items-center ">

                            </div>

                            <!-- <mci-extension data-role="overlay" id="overlay-root"></mci-extension> -->
                        </div>
                    </div>
                    <div @click="toogleOpenMenu"
                        :class="['absolute right-0 flex flex-col  items-center justify-center w-10 h-10 rounded-full cursor-pointer lg:hidden hover:bg-gray-100']">
                        <Icon :name="showMenu ? 'octicon:chevron-up-12' : 'octicon:chevron-down-12' " class=" text-gray-400" size="20" />
                    </div>
                </div>
                <!-- <mci-extension data-role="overlay" id="overlay-root"></mci-extension> -->
            </nav>
    
            <div
                class="w-full h-20  justify-center items-center absolute  -bottom-10  z-30 object-cover   hidden    xl:flex  ">
                    
            </div>
        </div>

    </section>
    <!-- overlay div only show menu variable  --> 
    <div v-if="showMenu" @click="toogleOpenMenu" class="fixed inset-0 z-40 bg-black bg-opacity-50">
        <div class="bg-gray-50 rounded-3xl   shadow-sm  absolute  right-0 left-0  bottom-0 m-auto  top-1/3  w-[96%]  mx-auto  ">
                    <h2>ssssss</h2>
            </div>
    </div>
    <!-- Carré pivotant avec logo -->
</template>


<script setup>
import { ref, computed } from 'vue';

const showMenu = useState('showMenu', () => null)

// const nowYear = new Date().getFullYear()
// const yearsMore1 = [{ value: nowYear }, { value: nowYear + 1 }]
const nowYear = new Date().getFullYear();
const yearsMore1 = ref([{ value: nowYear }, { value: nowYear + 1 }]);

// route define  
const route = useRoute();

// create function named updateQueryParam empty  
// const updateQueryParam = (value) => {
//     const { query } = this.$route;

//     // Fusionner les paramètres de requête existants avec le nouveau paramètre
//     const newQuery = { ...query, year: value };

//     this.$router.push({ path: '/offres', query: newQuery });
// }


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

// if route change alors faire quelque chose  
// watch(() => $route, (data) => {
//     console.log('route changed')
//     console.log($route)
//     showMenu.value = false;

//     // console.log(oldValue)
// })






// functopn toogleOpenMenu  
const toogleOpenMenu = () => {
    showMenu.value = !showMenu.value
    // console.log(showMenu)
}


</script>