// useUser.ts
import { ref } from 'vue';
import { User } from '~~/models/User';

export function useUser() {
  const userData = ref<User | null>(null);

  const  updateUserData = (user: User | null) => {
    userData.value = user;
  };

  return {
    userData,
    updateUserData,
  };
}
