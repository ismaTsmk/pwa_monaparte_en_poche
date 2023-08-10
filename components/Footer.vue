<template>
  <div class="mt-[115px] "></div>
  <footer class="pb-5 pt-1  bg-gray-50 shadow-sm   bottom-0 lg:bg-white w-full z-50" >
    <div class="px-10 mx-auto " >
      <div class="flex flex-col items-center sm:flex-row sm:justify-between ">
        <NuxtLink :to="'/'" class="flex items-center text-lg font-bold mb-10 lg:mb-0">
          <img src="@/assets/images/logo/logo_alminbar274x135.png" alt="logo" class=" max-w-[100px] -mb-10">
        </NuxtLink>
      </div>
      <div class="flex flex-col justify-between   mt-5 mb-5 text-center sm:mb-0 sm:mt-12 sm:flex-row">
        <ul class="flex flex-col lg:flex-row justify-center pb-3 -ml-4 -mr-4 text-sm font-bold">
          <li> <NuxtLink href="/mention-legale" class="px-2  text-gray-500 hover:text-gray-600">Mentions légales</NuxtLink> </li>
          <li> <NuxtLink  href="/condition" class="px-2  text-gray-500 hover:text-gray-600">Condition générale de vente</NuxtLink> </li>
          <li> <a href="#_" class="px-2  text-gray-500 hover:text-gray-600"> Politique de confidentialité</a> </li>
          <li> <a href="#_" class="px-2  text-gray-500 hover:text-gray-600">Contactez nous au 06 60 50 83 97</a></li>
        </ul>
        <p class="mt-3 text-xs leading-tight text-gray-500 sm:mt-0"> © Copyright 2023</p>

      </div>
    </div>
  </footer></template>
  