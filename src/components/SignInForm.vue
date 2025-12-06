<script lang="ts" setup>
  import { ref } from 'vue';

  import { useUserSession } from '../services/supabase';

  const { signIn } = useUserSession();

  const email = ref();
  const password = ref();

  function submit() {
    signIn(email.value, password.value);
  }
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <label for="email">Email:</label>
      <input v-model="email" id="email" />
    </div>

    <div>
      <label for="password">Password:</label>
      <input v-model="password" id="password" type="password" />
    </div>

    <div>
      <button type="submit">Sign In</button>
    </div>
  </form>
</template>
