import { UserAccessProtectionServer } from "@/_components/RoleAccessProtection";
import SearchPanel from "@/_components/SearchPanel";
import SlideShowBG from "@/_components/SlideShowBG";
import { Heart } from "lucide-react";

export default async function Layout({ children }) {
  return (
    <UserAccessProtectionServer>
      <div className="h-screen ">
        <div className="relative flex min-h-[60vh] overflow-hidden mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 p-4 z-50">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Heart className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">MedClinic</span>
              </div>
            </div>
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

