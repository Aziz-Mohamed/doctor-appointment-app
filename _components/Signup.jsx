import { signUpNewUser } from "../_lib/actions";

export default function Signup() {
  return (
    <form className="space-y-4" action={signUpNewUser}>
      <input
        type="text"
        placeholder="email"
        name="email"
        className="px-4 py-2 rounded-md border-2 border-gray-300"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        className="px-4 py-2 rounded-md border-2 border-gray-300"
      />
      <div className="space-x-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
