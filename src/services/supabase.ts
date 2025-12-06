import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE__SUPABASE__URL;
const key = import.meta.env.VITE__SUPABASE__KEY;

const supabase = createClient(url, key);

export { supabase };
