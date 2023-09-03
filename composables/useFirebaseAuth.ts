import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut, updateProfile } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc,getDocs ,collection,query,where, orderBy } from 'firebase/firestore'

// import useUser from './useUser'
// import { User } from 'models/User'

export default function() {

  const { $auth } = useNuxtApp()
  const firestore = getFirestore()

  // const user = useState<User | useUsernull>("fb_user", () => null)
  // const user$ = useUser()

  const token = useCookie('token')
  // const events = collection(firestore, "events");
  const registerUser = async (email: string, password: string, pseudo: string, age: number, isPublic: boolean, phoneNumber: string): Promise<boolean> => {
    try {
      const { user } = await createUserWithEmailAndPassword($auth as Auth, email, password);
      if (user) {
        // Mise à jour du profil Firebase avec les informations supplémentaires
        await updateProfile(user, { displayName: pseudo });
        
        // Enregistrement des autres informations dans Firestore
        const userData = {
          email,
          pseudo,
          age,
          isPublic,
          phoneNumber,
        };
        console.log('debut de insertOrUpdateDocument');

        await insertOrUpdateDocument('users', user.uid, userData); // Supposons que 'users' est votre collection Firestore pour les utilisateurs
        console.log('fin de insertOrUpdateDocument');

        // Reste de votre code...
  
        return true;
      } else {
        console.log('Aucun utilisateur créé');
        return false;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Gérer les erreurs liées à l'inscription
      }
      return false;
    }
  }
  

  // const registerUser = async (email: string, password: string): Promise<boolean> => {
  //   try {
  //     const {user } = await createUserWithEmailAndPassword($auth as Auth, email, password)
  //     if (user) {
  //       console.log(user)
  //       // user.value = userCreds.user
  //       console.log('user ici') 
  //       // user$.value = user as User
  //       const userData:any = user
  //       token.value = userData.value.accessToken || ''

  //       // console.log(user)
  //       // console.log('user$.value.email')
  //       // console.log(user$.value.email)
  //       // console.log('user$.value.uid')
  //       // console.log(user$.value.uid)
  //       // console.log(token.value)

  //       return true
  //     } else {
  //       console.log('no user')
  //       return false
  //     }
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       // handle error
  //     }
  //     return false
  //   }
  //   return false
  // }
  

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

  const getAllDocuments = async (
    collectionName: string,
    filters?: { field: string, operator: any, value: any }[],
    sortField?: string,
    sortOrder?: 'asc' | 'desc'
  ): Promise<any[]> => {
    try {
      console.log('Fetching documents from collection:', collectionName);
      // let q = collection(firestore, collectionName);
      let q = query(collection(firestore, collectionName));

  
      if (filters && Array.isArray(filters) && filters.length > 0) {
        filters.forEach(filter => {
          q = query(q, where(filter.field, filter.operator, filter.value));
        });
      }
  
      if (sortField && sortOrder) {
        q = query(q, orderBy(sortField, sortOrder));
      }
  
      const querySnapshot = await getDocs(q);
      const documents = querySnapshot.docs.map(doc => doc.data());
      console.log('Documents retrieved:', documents);
      return documents;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error fetching documents:', error);
      }
      return [];
    }
  }
  
  
  
  const getDocument = async (collection: string, documentId: string): Promise<any | null> => {
    try {
      const documentRef = doc(firestore, collection, documentId)
      const documentSnapshot = await getDoc(documentRef)
      if (documentSnapshot.exists()) {
        return documentSnapshot.data()
      } else {
        return null
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return null
    }
  }

  const insertOrUpdateDocument = async (collection: string, documentId: string, data: any): Promise<boolean> => {
    try {
      const documentRef = doc(firestore, collection, documentId );
      console.log('Données à enregistrer :', data);
      setDoc(documentRef, data, { merge: true });
      console.log('Enregistrement réussi.');
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Erreur lors de l\'enregistrement :', error);
      }
      return false;
    }
  }
  

  const logoutUser = async (): Promise<void> => {
    try {
      console.log('logout')
      console.log('logout')
      console.log('logout')

      await signOut($auth as Auth); // Déconnexion de l'utilisateur
      // Vous pouvez effectuer d'autres actions ici après la déconnexion
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Gérer les erreurs liées à la déconnexion
      }
    }
  }

  return {
    // user$,
    // useUser,
    getAllDocuments,
    getDocument,
    insertOrUpdateDocument,
    registerUser,
    loginUser,
    token,
    getUser,
    logoutUser
  }
}