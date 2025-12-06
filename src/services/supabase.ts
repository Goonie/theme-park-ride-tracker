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
  const user = ref<User | undefined>();

  supabase.auth.onAuthStateChange((_, session) => {
    user.value = session?.user;
  });

  return { user };
}

export { supabase, useUserSession };
