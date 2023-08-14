import useUser from 'composables/useUser'
import { getAuth } from 'firebase-admin/auth'

import formatUser from '~/helpers/format-user'


// Acts like nuxtServerInit.
// Checks if token is valid on first load.
export default defineNuxtPlugin(async () => {
  const token = useCookie('token')
  const user = useUser()

  try {
    const auth = getAuth()
    if (token.value) {
      const result = await auth.verifyIdToken(token.value)
      user.value = formatUser(result)
      console.log(user.value)
    }
  } catch (e) {
    // Not authenticated or invalid token
    token.value = null
  }
})
