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


                                <div
                                    class="flex flex-col   items-start lg:items-center  lg:justify-center px-4 lg:px-0   lg:flex-row w-full   mb-20 lg:mb-0 ">

                                    <div class="group relative cursor-pointer py-2   w-full  md:w-auto">
                                        <div class="flex items-center justify-start  lg:justify-between space-x-5 bg-white px-2">
                                            <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-2 "
                                                onClick="">
                                                Omra
                                            </a>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="hidden lg:absolute z-50 flex    mx-auto  lg:w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:flex rounded-3xl border-b border-primary-500"
                                            onClick="">
                                            <NuxtLink v-for="(item, index) in yearsMore1" :key="index"  ref="customLink"
                                                class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black lg:mx-2 hover:border-b  hover:border-primary-900">
                                                {{ item.value }}</NuxtLink>
                                        </div>
                                    </div>
                                    <div class="group relative cursor-pointer py-2   w-full  md:w-auto">
                                        <div class="flex items-center justify-start  lg:justify-between space-x-5 bg-white px-2">
                                            <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-2 "
                                                onClick="">
                                                Omra Ramadan
                                            </a>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="hidden lg:absolute z-50 flex   mx-auto  lg:w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:flex rounded-3xl border-b border-primary-500"
                                            onClick="">
                                            <NuxtLink v-for="(item, index) in yearsMore1" :key="index" ref="customLink"
                                                class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black lg:mx-2 hover:border-b  hover:border-primary-900">
                                                {{ item.value }}</NuxtLink>

                                        </div>
                                    </div>
                                        <div class="flex items-center justify-between space-x-5 bg-white px-2">
                                            <NuxtLink 
                                                class="  my-2 py-2 text-base font-medium text-black lg:mx-2">
                                                Hajj
                                            </NuxtLink>
                                        </div>


 
                                    <div class="group relative cursor-pointer py-2   w-full  md:w-auto">
                                        <div class="flex items-center justify-start  lg:justify-between space-x-5 bg-white px-2">
                                            <a class="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-2 "
                                                onClick="">
                                                Omra Combinée
                                            </a>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="hidden lg:absolute z-50 flex   mx-auto  lg:w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:flex rounded-3xl border-b border-primary-500"
                                            onClick="">
                                            <NuxtLink v-for="(item, index) in yearsMore1" :key="index" ref="customLink"
                                                
                                                class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black lg:mx-2 hover:border-b  hover:border-primary-900">
                                                {{ item.value }}</NuxtLink>

                                        </div>
                                    </div>

                                        <div class="flex items-center justify-between space-x-5 bg-white px-2">
                                            <NuxtLink to="/a_propos" 
                                                class="  my-2 py-2 text-base font-medium text-black lg:mx-2 hover:text-indigo-800">
                                                Infos Pratique
                                            </NuxtLink>
                                        </div>
                                </div>


                                <!-- <NuxtLink href="/"
                                    class="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative">
                                    <svg class="inline w-5 h-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class=""></path>
                                    </svg>
                                </NuxtLink> -->

                            </div>
                            <div
                                class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0 lg:hidden 3xl:block">
                                <!-- <a href="#" class="w-full px-3 py-2 mr-0 text-gray-700 md:mr-2 lg:mr-3 md:w-auto"
                                    style="word-break: break-word; position: relative; z-index: 0;">Sign In</a> -->
                                <NuxtLink href=""
                                    class="  inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white drop-shadow-lg shadow-black 
                                             bg-primary-900 md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-primary-700 
                                             focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-800  justify-center">
                                    Contactez nous
                                    <!-- <img src="@/assets/images/watt_logo.png" width="30" alt="" class="ms-4"> -->

                                </NuxtLink>

                            </div>
                            <!-- <mci-extension data-role="overlay" id="overlay-root"></mci-extension> -->
                        </div>
                    </div>
                    <div @click="toogleOpenMenu"
                        :class="['absolute right-0 flex flex-col  items-end justify-center w-10 h-10 rounded-full cursor-pointer lg:hidden hover:bg-gray-100']">
                        <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                        <svg class="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>

                    </div>
                </div>
                <!-- <mci-extension data-role="overlay" id="overlay-root"></mci-extension> -->
            </nav>
            <div
                class="w-full h-20  justify-center items-center absolute  -bottom-10  z-30 object-cover   hidden    xl:flex  ">
                <!-- <div class="w-80   h-80  bg-gradient-to-b from-white bg-opacity-75 to-transparent  via-transparent transform rotate-45 flex  items-center justify-center"> -->
                <div v-if="$route.path === '/' || $route.hash == '/a_propos'"
                    class=" w-[500px]   h-auto  flex  items-center justify-center">

                    <!-- image place logo in asset   local -->
                    <!-- <img src="@/assets/images/logo/logo_alminbar548x270.png" alt="logo" class="h-auto   w-full   pt-64"> -->
                    

                </div>
            </div>
        </div>

    </section>
    <!-- overlay div only show menu variable  --> 
    <div v-if="showMenu" @click="toogleOpenMenu" class="fixed inset-0 z-40 bg-black opacity-50"></div>
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