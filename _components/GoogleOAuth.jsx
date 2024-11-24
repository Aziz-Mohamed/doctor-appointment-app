import { signInWithGoogleOAuth } from "@/_lib/actions";

export default function GoogleOAuth() {
  return (
    <form
      action={signInWithGoogleOAuth}
      className="flex-1 flex min-h-screen justify-center items-center"
    >
      <button className="hover:bg-gray-800 p-8 rounded-xl">
        Sign in with Google
      </button>
    </form>

  );
}
