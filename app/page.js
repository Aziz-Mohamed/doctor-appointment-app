import { createClient } from "@/utils/supabase/server";
import { Appointments } from "./_components/Appointments";
import DateTimePicker from "./_components/DateTimePicker";
import GoogleOAuth from "./_components/GoogleOAuth";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
      <div className="flex space-x-4">
        <DateTimePicker />
        <Appointments />
      </div>

      {!user && (
        <Link
          href="/login"
          className="hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Go to Login/Signup
        </Link>
      )}
    </div>
  );
}
