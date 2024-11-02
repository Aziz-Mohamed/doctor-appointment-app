import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
// const supabaseSecret = process.env.SUPABASE_SECRET;

const supabase = createClient(supabaseUrl, supabaseKey);

// export const supabase = createClient(supabaseUrl, supabaseKey, {
//   auth: {
//     persistSession: false,
//     autoRefreshToken: false,
//     detectSessionInUrl: false,
//     header: 'Authorization',
//     params: {
//       grant_type: 'client_credentials',
//     },
//     type: 'api_key',
//     value: supabaseSecret,
//   },
// })

export default supabase;
