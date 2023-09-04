// useUser.ts
import { ref } from 'vue';
import { User } from '~~/models/User';
const globalState = reactive({
  someString: "Initial value",
  someBoolean: false
});
const userData = reactive<User>({
  uid: '',
  email: '',
  pseudo: '',
  age: 0,
  isPublic: false,
  phoneNumber: '',
  isAuthenticated: false,
});




export function useUser() {


  const updateValues = (sValue: string, bValue: boolean) => {
    // Set the global state values
    globalState.someString = sValue;
    globalState.someBoolean = bValue;

  };
  
  const  updateUserData = (user: User) => {
      userData.uid = user.uid;
      userData.email = user.email;
      userData.pseudo = user.pseudo;
      userData.age = user.age;
      userData.isPublic = user.isPublic;
      userData.phoneNumber = user.phoneNumber;
      userData.isAuthenticated = user.isAuthenticated;
  }

  return {
    userData,
    updateUserData,
  };
}

