<template>
    <main class="flex min-h-full py-12 items-center justify-center bg-gradient-to-r from-secondary-400 to-primary-600 ">
      <div class="text-center">
        <h1 class="text-4xl font-semibold text-white mb-6 ">Parametre de <br> votre profil </h1>
        <p class="text-lg text-white mb-8">Discover the amazing features of our platform.</p>
        <!-- <a
          href="https://example.com"
          class="inline-block bg-white text-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Public / priver
        </a> -->
        <div class="text-center bg-emedrald-300 flex justify-center flex-col items-center ">
            <toggle :value="toggleValue" @input="doSomething($event)" />
            <p class="text-lg font-semibold text-white">{{toggleValue ? "Public" : "Priver"}}</p>
        </div>

      </div>
    </main>

</template>

<script lang="ts">

export default {
    name: "Settings",
    methods: {
        doSomething(event:boolean) {
            console.log(this.toggleValue);
            this.toggleValue = event;
        },
    },
    components: { },
    data() {
        return {
            toggleValue: false,
        }
    },
    

};
</script>
