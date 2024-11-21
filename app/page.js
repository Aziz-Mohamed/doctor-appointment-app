import { getAdminData, getUserData } from "@/_hooks/getUserData";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/_components/ui/Button";
import Image from "next/image";
import blurHospital from "@/public/blur-hospital.jpg";
import { LoginForm } from "@/_components/LoginForm";
import { Heart } from "lucide-react";

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
        <div className="absolute top-0 left-0 flex items-center gap-2 p-4 pl-10 pt-6 z-50 ">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Heart className="size-4" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">MedClinic</span>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src={blurHospital}
            alt="Hospital hall"
            fill
            className="object-cover object-center -z-10"
            priority
          />
        </div>

        <div className="z-10 flex w-screen h-screen">
          <div className="flex flex-col items-center justify-center flex-1 ">
            <div className="flex flex-col items-center justify-center flex-1 pl-4 pb-10 max-w-2xl">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl px-8 text-sky-950	mr-auto">
                Join our community today! <br />
              </h1>
              <p className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl px-8 text-sky-950	mt-4  ">
                <b> Sign up </b>
                <span className="text-slate-900 font-normal">
                  now to reserve your appointment and access your health
                  records.
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mx-8 px-16 bg-gradient-to-br from-transparent via-blue-50 to-transparent ">
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
