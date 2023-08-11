import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {

    const firebaseConfig = {
        apiKey: "AIzaSyBXofjjtETrEpK5YVUtFRFXrmOouVqHs4o",
        authDomain: "monaparteenpoche.firebaseapp.com",
        projectId: "monaparteenpoche",
        storageBucket: "monaparteenpoche.appspot.com",
        messagingSenderId: "587210519153",
        appId: "1:587210519153:web:b54561842321d49cb621d0",
        measurementId: "G-3CZ14RNK8D"
      };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})