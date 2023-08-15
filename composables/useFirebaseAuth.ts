import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'
// import useUser from './useUser'
import { User } from 'models/User'

export default function() {

  const { $auth,firestore  } = useNuxtApp()
  // const user = useState<User | useUsernull>("fb_user", () => null)
  // const user$ = useUser()

  const token = useCookie('token')


  


  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const {user } = await createUserWithEmailAndPassword($auth as Auth, email, password)
      if (user) {
        console.log(user)
        // user.value = userCreds.user
        console.log('user ici') 
        // user$.value = user as User
        const userData:any = user
        token.value = userData.value.accessToken || ''

        // console.log(user)
        // console.log('user$.value.email')
        // console.log(user$.value.email)
        // console.log('user$.value.uid')
        // console.log(user$.value.uid)
        // console.log(token.value)

        return true
      } else {
        console.log('no user')
        return false
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false
    }
    return false
  }
  

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const {user} = await signInWithEmailAndPassword($auth as Auth, email, password)
      if (user) {
        // user$.value = user as User
        // token.value = user$.value.accessToken || ''
        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false
    }
    return false
  }

  const getUser = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged($auth as Auth, (user: any) => {
        if (user) {
          console.log(user);
          resolve(true);
        } else {
          console.log('Aucun utilisateur connecté');
          resolve(false);
        }
      });
    });
  }

  return {
    // user$,
    // useUser,
    registerUser,
    loginUser,
    token,
    getUser
  }
}