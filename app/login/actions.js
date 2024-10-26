// 'use server';

// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

// import { createClient } from '@/utils/supabase/server';

// export async function loginWithPassword(formData) {
//   const supabase = createClient();

//   const data = {
//     email: formData.get('email'),
//     password: formData.get('password'),
//   };

//   const { error } = await supabase.auth.signInWithPassword(data);

//   if (error) {
//     console.log("the error is : ", error)
//     redirect('/error');
//   }

//   revalidatePath('/', 'layout');
//   redirect('/');
// }

// export async function signupWithPassword (formData) {
//   const supabase = createClient();

//   const data = {
//     email: formData.get('email'),
//     password: formData.get('password'),
//   };

//   const { error } = await supabase.auth.signUp(data);

//   if (error) {
//     console.error("the Signup error:", error.message);
//     redirect('/error');
//   }

//   revalidatePath('/', 'layout');
//   redirect('/');
// }
