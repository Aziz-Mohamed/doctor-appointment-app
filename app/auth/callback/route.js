import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

import { NextResponse } from 'next/server';


export async function GET(request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === 'development';
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}







// export async function GET(request) {
//     const { searchParams } = new URL(request.url);
//     const token_hash = searchParams.get('token_hash');
//     const type = searchParams.get('type')  | null;
//     const next = searchParams.get('next') ?? '/';

//     if (token_hash && type) {
//         const supabase = createClient();
//         const { error } = await supabase.auth.verifyOtp({
//             type,
//             token_hash,
//         });
//         if (!error) {
//             // redirect user to specified redirect URL or root of app
//             redirect(next);
//         }
//     }

//     // redirect the user to an error page with some instructions
//     redirect('/error');
// }



