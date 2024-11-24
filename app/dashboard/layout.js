import { UserAccessProtectionServer } from "@/_components/RoleAccessProtection";
import SearchPanel from "@/_components/SearchPanel";
import Signout from "@/_components/Signout";
import SlideShowBG from "@/_components/SlideShowBG";
import { Avatar, AvatarFallback, AvatarImage } from "@/_components/ui/Avatar";
import { Button } from "@/_components/ui/Button";
import { getAdminData, getUserData } from "@/_lib/getUserData";
import { Heart, User } from "lucide-react";
import Link from "next/link";

export default async function Layout({ children }) {
  const {
    data: { user },
  } = await getUserData();
  const { roleData: admin } = (await getAdminData()) ?? {};
  return (
    <UserAccessProtectionServer>
      <div className="h-screen ">
        <div className="relative flex min-h-[60vh] overflow-hidden mb-16">
          <div className="flex flex-col">
            <section className="z-50 flex flex-row justify-between items-center">
              <Link href="/">
                <div className="flex items-center gap-2 p-4 z-50">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Heart className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">MedClinic</span>
                  </div>
                </div>
              </Link>
              <div className="flex flex-row h-min items-center gap-x-4">
                <Avatar className="">
                  <AvatarImage
                    src={user?.user_metadata?.picture}
                    alt={user?.user_metadata?.name}
                  />
                  <AvatarFallback>
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                {admin ? (
                  <Link href="/admin/specialties">
                    <Button>Admin Panel</Button>
                  </Link>
                ) : (
                  ""
                )}
                <Signout
                  className="bg-primary text-primary-foreground py-1 px-4 mr-7 border-0"
                  size="sm"
                />
              </div>
            </section>
            <div className="w-screen flex flex-col items-center justify-center pt-52 bg-transparent">
              <p className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-[2.6rem] z-50 pb-4 mb-4 text-slate-800 shadow-sm py-4 px-8 bg-slate-300/40 rounded-md">
                <b> Find </b> the Right Doctor for You
              </p>
              <SearchPanel />
            </div>
            <div className="absolute inset-0 h-full w-full z-0">
              <SlideShowBG />
            </div>
          </div>
        </div>
        <main className="flex-1 overflow-auto p-4 container">{children}</main>
      </div>
    </UserAccessProtectionServer>
  );
}
