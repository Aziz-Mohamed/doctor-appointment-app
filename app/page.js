import { createClient } from "@/utils/supabase/server";
import { Appointments } from "@/_components/Appointments";
import DateTimePicker from "@/_components/DateTimePicker";
import GoogleOAuth from "@/_components/GoogleOAuth";
import Link from "next/link";
import Signout from "@/_components/Signout";
import { getAdminData, getUserData } from "../_lib/customHooks";
import { redirect } from "next/navigation";


export default async function Home() {
  const { roleData: admin } = (await getAdminData()) ?? {};
  const { data: user } = (await getUserData()) ?? {};

  // return(<p> okay app page.js</p>)

  // if (admin) {
  //   return (
  //     <SidebarProvider>
  //       {redirect("/admin")}
  //     </SidebarProvider>
  //   );
  if (admin) {
    return redirect("/admin");
  } else if (user) {
    return redirect("/dashboard");
  } else {
    return (
      <Link
        href="/login"
        className="hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Go to Login/Signup
      </Link>
    );
  }

  // const supabase = createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // return (
  //   <div className="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
  //     {!user ? (
  //       <Link
  //         href="/login"
  //         className="hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
  //       >
  //         Go to Login/Signup
  //       </Link>
  //     ) : (<Signout/>)}
  //   </div>
  // );
}
