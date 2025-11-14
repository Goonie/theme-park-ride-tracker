import { createClient } from '@supabase/supabase-js';

import type { Database } from './supabase.types';

const url = import.meta.env.VITE__SUPABASE__URL;
const key = import.meta.env.VITE__SUPABASE__KEY;

const supabase = createClient<Database>(url, key);

export { supabase };
