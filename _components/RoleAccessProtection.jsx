import Link from "next/link";
import { getAdminData, getUserData } from "@/_lib/getUserData";
import { Button } from "./ui/Button2";

export function createRoleProtection(dataRetrievalFn) {
  return async function RoleProtection({ children }) {
    const result = await dataRetrievalFn();

    if (!result) {
      return (
        <div className="flex flex-col items-center bg-background p-4 rounded-lg shadow-lg">
          <p className="text-2xl text-primary">
            You are not logged in or not authorized, if so login with the
            authorized account pls.
          </p>
          <Link href={"/"}>
            <Button className="mt-4" variant="outline">
              Login
            </Button>
          </Link>
        </div>
      );
      // redirect('/login')
    }

    return <>{children}</>;
  };
}

export const UserAccessProtectionServer = createRoleProtection(getUserData);
export const AdminAccessProtectionServer = createRoleProtection(getAdminData);
export const UserAccessProtectionClient = createRoleProtection(() =>getUserData(serverOrClient="client"))
export const AdminAccessProtectionClient = createRoleProtection(()=>getAdminData(serverOrClient="client"))
