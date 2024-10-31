import Link from 'next/link';
import { getAdminData, getUserData } from '../_lib/customHooks';
import { Button } from './ui/Button';

export function createRoleProtection(dataRetrievalFn) {
  return async function RoleProtection({ children }) {
    const result = await dataRetrievalFn()

    if (!result) {
      return(

        <div>
      <p>You are not logged in or not authorized , if so login with the authorized account pls.</p>
      <Link href={"/login"}>
        <Button> Login</Button>
      </Link>
    </div>
      )
      // redirect('/login')
    }

    return <>{children}</>
  }
}



export const UserAccessProtectionServer = createRoleProtection(getUserData)
export const AdminAccessProtectionServer = createRoleProtection(getAdminData)
// export const UserAccessProtectionClient = createRoleProtection(() =>getUserData(serverOrClient="client"))
// export const AdminAccessProtectionClient = createRoleProtection(()=>getAdminData(serverOrClient="client"))