import { createStore } from "vuex";
import { User } from '~/models/User'

const store = createStore({
  state() {
    return {
      count: 0,
      currentUser: null as User | null,

    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUser(state, user) {
        state.currentUser = user
      },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});