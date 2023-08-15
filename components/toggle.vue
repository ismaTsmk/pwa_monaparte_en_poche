<template>
    <div
      class="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 cursor-pointer"
      :class="{ 'bg-green-500': value }"
      :aria-checked="value.toString()"
      @click="value = !value"
    >
      <div
        class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300"
        :class="{ 'translate-x-6': value }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      toggle() {
        // this.value = !this.value
        console.log('heeeh')
          this.$emit('input', !this.value)
      }
    },
    watch: {
      value() {
        console.log('value changed')
        this.$emit('input',this.value)
      }
    }
  };
  </script>