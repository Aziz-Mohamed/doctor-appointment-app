import { getAdminData, getUserData } from "@/_hooks/getUserData";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/_components/ui/Button";
import Image from "next/image";
import blurHospital from "@/public/blur-hospital.jpg";
import { LoginForm } from "@/_components/LoginForm";

export default async function Home() {
  const { roleData: admin } = (await getAdminData()) ?? {};
  const { data: user } = (await getUserData()) ?? {};

  if (admin) {
    return redirect("/admin/specialties");
  } else if (user) {
    return redirect("/dashboard");
  } else {
    return (
      <div className="relative h-screen w-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={blurHospital}
            alt="Hospital hall"
            fill
            className="object-cover object-center -z-10"
            priority
          />
        </div>

        <div className="z-10">
          <div className="flex h-screen w-full items-center justify-center px-4">
            <LoginForm />
          </div>
        </div>
      </div>

      // <div className="flex items-center justify-center h-screen w-screen bg-blue-100 bg-cover bg-center" style={{ backgroundImage: `url(/blur-hospital.jpg)` }}>
      //   <Link href="/login">
      //     <Button> Login | Signup </Button>
      //   </Link>
      // </div>

      // <div className="flex items-center justify-center h-screen w-screen bg-blue-100">
      //   <Image
      //     src={blurHospital}
      //     fill
      //     placeholder="blur"
      //     quality={80}
      //     className="object-cover object-top"
      //     alt="Hospital hall"
      //   />
      //   <Link href="/login">
      //     <Button> Login | Signup</Button>
      //   </Link>
      // </div>
    );
  }
}
