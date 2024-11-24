
import {
  AdminAccessProtectionServer
} from "@/_components/RoleAccessProtection";
import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <AdminAccessProtectionServer>
      <p>Hello {data?.user.email}</p>
      <p> this is Private page </p>
    </AdminAccessProtectionServer>
  );
}