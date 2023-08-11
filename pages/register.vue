<script setup>
  const credentials = reactive({
    firstName: '',
    surname: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });
</script>

<template>
  <h1>Create an account!</h1>
  <form>
    <div>
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" v-model="credentials.firstname" />
    </div>
    <div>
      <label for="surname">Surname</label>
      <input type="text" id="surname" v-model="credentials.surname" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="credentials.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="credentials.password" />
    </div>
    <div>
      <label for="password">Repeat Password</label>
      <input
        type="password"
        id="repeat-password"
        v-model="credentials.passwordrepeat"
      />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>