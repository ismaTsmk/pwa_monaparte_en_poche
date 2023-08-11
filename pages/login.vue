<template>
    <main class="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div class="text-center">
        <h1 class="text-4xl font-semibold text-white mb-6">Bienvenue<br> connecte toi</h1>
  
        <div class="mt-10 p-8 bg-white rounded-lg shadow-md w-80">
          <h2 class="text-2xl font-semibold mb-4">Login</h2>
          <form @submit.prevent="onSubmit">
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" v-model="email" id="email" name="email" class="mt-1 px-3 py-2 w-full border rounded-lg">
            </div>
            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" v-model="password" id="password" name="password" class="mt-1 px-3 py-2 w-full border rounded-lg">
            </div>
            <button type="submit" class="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-400 transition duration-300">Login</button>
          </form>
          <p v-if="error" class="text-red-500 mt-2">There was an error logging in.</p>
        </div>
      </div>
    </main>
  </template>
  
  
  <script>
//   import { useFirebaseAuth } from '@/composables/useFirebaseAuth'
  
  export default {
    name: "Login",

    components: {},
    data () {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      onSubmit () {
        const { registerUser } = useFirebaseAuth()
  
        this.error = ''
  
        if (this.email && this.password) {
          const success =  registerUser(this.email, this.password)
  
          if (success) {
            this.$router.push({ name: 'index' })
          } else {
            this.error = 'There was an error logging in.'
          }
        }
      }
    }
  }
  </script>
  