<script lang="ts" setup>
  import type { User } from '@supabase/supabase-js';

  import { useUserSession } from '../services/supabase';

  const { user } = defineProps<{ user: User }>();

  const { signOut } = useUserSession();

  function submit() {
    signOut();
  }
</script>

<template>
  <form @submit.prevent="submit">
    <p>{{ user.email }}</p>

    <div>
      <button type="submit" class="destructive">Sign Out</button>
    </div>
  </form>
</template>
