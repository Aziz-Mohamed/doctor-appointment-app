import { createClient as ServerSupabase } from "@/utils/supabase/server";
import { createClient as ClientSupabase } from "@/utils/supabase/client";



export async function getUserData(serverOrClient = "server") {
  const supabase =
    serverOrClient === "server" ? ServerSupabase() : ClientSupabase();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) return null;
  return { data, error };
}


export async function getAdminData(serverOrClient = "server") {
  const supabase =
    serverOrClient === "server" ? ServerSupabase() : ClientSupabase();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) return null;

  const userId = data.user.id;

  const { data: roleData, error: roleError } = await supabase
    .from("user")
    .select("role")
    .eq("id", userId)
    .single();

  if (roleError || roleData?.role !== "admin") return null;
  return { data, error, roleData, roleError };
}

