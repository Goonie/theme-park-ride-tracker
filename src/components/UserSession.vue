<script lang="ts" setup>
  import { useUserSession } from '../services/supabase';

  import SignInForm from './SignInForm.vue';
  import SignOutForm from './SignOutForm.vue';

  const { loading, user } = useUserSession();
</script>

<template>
  <template v-if="!loading">
    <template v-if="user">
      <SignOutForm :user />
    </template>

    <template v-else>
      <SignInForm />
    </template>
  </template>
</template>
