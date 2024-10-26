import GoogleOAuth from '../_components/GoogleOAuth'
import Signup from '../_components/Signup'
import { loginWithPassword, signupWithPassword } from './actions'

export default function LoginPage() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <Signup />
        <GoogleOAuth />
    </div>
    // <form>
    //   <label htmlFor="email">Email:</label>
    //   <input id="email" name="email" type="email" required />
    //   <label htmlFor="password">Password:</label>
    //   <input id="password" name="password" type="password" required />
    //   <button formAction={loginWithPassword}>Log in</button>
    //   <button formAction={signupWithPassword}>Sign up</button>
    // </form>
  )
}