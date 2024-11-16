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

    // <>
    //   <div
    //     id="g_id_onload"
    //     data-client_id="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"
    //     data-context="signin"
    //     data-ux_mode="popup"
    //     data-login_uri="https://oagdlivpnyrrmgputivl.supabase.co/auth/v1/callback"
    //     data-itp_support="true"
    //   ></div>

    //   <div
    //     class="g_id_signin"
    //     data-type="standard"
    //     data-shape="pill"
    //     data-theme="outline"
    //     data-text="signin_with"
    //     data-size="large"
    //     data-logo_alignment="left"
    //   ></div>
    // </>
  );
}
