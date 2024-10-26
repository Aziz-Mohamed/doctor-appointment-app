import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';


async function handleGetRequest(request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const origin = url.origin;
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host');
      const isLocalEnv = process.env.NODE_ENV === 'development';

      let redirectUrl;
      if (isLocalEnv) {
        redirectUrl = `${origin}${next}`;
      } else if (forwardedHost) {
        redirectUrl = `https://${forwardedHost}${next}`;
      } else {
        redirectUrl = `${origin}${next}`;
      }

      return {
        status: 302,
        headers: {
          Location: redirectUrl,
        },
      };
    }
  }

  return {
    status: 302,
    headers: {
      Location: `${origin}/auth/auth-code-error`,
    },
  };
}

module.exports = handleGetRequest;










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



