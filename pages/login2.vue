<script setup>
  const credentials = reactive({
    email: '',
    password: '',
  });
</script>

<template>
  <h1>Log in to your account!</h1>
  <form>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="credentials.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="credentials.password" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>