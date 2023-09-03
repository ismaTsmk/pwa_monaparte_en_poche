<template>
  <div class="flex min-h-screen  items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-24">
    <div class="text-center">
      <h1 class="text-4xl font-semibold text-white mb-6">Bienvenue</h1>

      <div class="mt-10 p-8 bg-white rounded-lg shadow-md w-80">
        <h2 class="text-2xl font-semibold mb-4">{{ authMode }}</h2>
        <form @submit.prevent="onSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" v-model="email" id="email" name="email" class="mt-1 px-3 py-2 w-full border rounded-lg" placeholder="Ex : johndoe@gmail.com">
          </div>
          <div class="mb-4 relative">
            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input :type="passwordVisible ? 'text' : 'password'" v-model="password" id="password" name="password"
              class="mt-1 px-3 py-2 w-full border rounded-lg">
            <Icon :name="passwordVisible ? 'carbon:view' : 'carbon:view-filled' " @click="togglePassword"  class="absolute right-5 top-9 " id="eye-icon"/>
          </div>
          <div v-if="isRegisterMode">
            <!-- // Add the registration fields -->
            <div class="mb-4">
              <label for="pseudo" class="block text-sm font-medium text-gray-700">Pseudo</label>
              <input type="text" v-model="pseudo" id="pseudo" name="pseudo" placeholder="Ex : Mathis du 3eme"
                class="mt-1 px-3 py-2 w-full border rounded-lg">
            </div>
            <div class="mb-4">
              <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
              <input type="number" v-model="age" id="age" name="age"
                class="mt-1 px-3 py-2 w-full border rounded-lg text-center" min="12" max="99">
            </div>
            <div class="mb-4">
              <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
              <input type="tel" v-model="phoneNumber" id="phoneNumber" name="phoneNumber"
                placeholder="Ex : 06 00 00 00 00" class="mt-1 px-3 py-2 w-full border rounded-lg">
            </div>
            <div class="mb-4 relative">
              <label for="isPublic" class="block text-sm font-medium text-gray-700">
                Profil <span class="font-bold text-primary-600">{{ isPublic ? 'public' : 'priver' }}</span>
                <Icon :name="'ep:info-filled'" size="25" class="ms-2" />
              </label>
              <input type="checkbox" v-model="isPublic" class="toggle toggle-success" checked />


            </div>
          </div>



          <button type="submit"
            class="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-400 transition duration-300">Confirmer
            mes infos </button>
        </form>
        <p v-if="error" class="text-red-500 mt-2">There was an error logging in.</p>
      </div>
      <div>
        <span class="text-white mr-2">Ou</span>
        <button @click="isRegisterMode = !isRegisterMode" class="btn mt-4 btn-sm">
          {{ toggleButtonText }}
        </button>
      </div>

    </div>

  </div>
</template>
<script lang="ts">
//   import { useFirebaseAuth } from '@/composables/useFirebaseAuth'
const layout = 'guest'

export default {
  name: "Login",

  setup() {
    definePageMeta({
      layout: false,
    });
    // const { getUser } = useFirebaseAuth()
    // const user = getUser()
    // if (user) {
    //   this.$router.push({ name: 'index' })
    // }
  },
  components: {},
  data() {
    return {
      email: '',
      password: '',
      passwordVisible: false,
      error: '',
      pseudo: '' as string,
      age: 17 as number,
      isPublic: false,
      phoneNumber: '' as string,
      isRegisterMode: false, // Add a flag for registration mode

    }
  },
  computed: {
    authMode() {
      return this.isRegisterMode ? "Inscription" : "Connexion";
    },
    toggleButtonText() {
      return this.isRegisterMode ? "Se connecter" : "S'inscrire";
    },
  },
  methods: {
    togglePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
    onSubmit() {
      const { loginUser, registerUser } = useFirebaseAuth()

      this.error = ''
      let success: any = false; // Déclarez la variable en dehors des blocs conditionnels

      try {
        if (this.email && this.password) {
          if (this.isRegisterMode) {
            success = registerUser(this.email, this.password, this.pseudo, this.age, this.isPublic, this.phoneNumber)

          } else {
            success = loginUser(this.email, this.password)
          }

          if (success) {
            this.$router.push({ name: 'index' })

          } else {
            this.error = 'There was an error logging in.'
          }
        }
      } catch (error) {
        console.log('une erreur est survenue ')
        console.log(error)
      }

    }
  },
  watch: {
    isPublic() {
      console.log(this.isPublic)
    }
  }

}
</script>
  