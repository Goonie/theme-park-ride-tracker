import { ref } from 'vue';

import { createClient } from '@supabase/supabase-js';

import type { User } from '@supabase/supabase-js';

const url = import.meta.env.VITE__SUPABASE__URL;
const key = import.meta.env.VITE__SUPABASE__KEY;

const supabase = createClient(url, key);

/**
 * Returns the current user.
 *
 * @returns A Supabase User object if signed in
 * @returns Undefined if not signed in
 */
function useUserSession() {
  const loading = ref(true);
  const user = ref<User | undefined>();

  supabase.auth.onAuthStateChange((_, session) => {
    user.value = session?.user;
    loading.value = false;
  });

  async function signIn(email: string, password: string) {
    const credentials = { email, password };

    const { error } = await supabase.auth.signInWithPassword(credentials);

    if (error) {
      throw new Error(error.message);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  }

  return { loading, user, signIn, signOut };
}

export { supabase, useUserSession };
