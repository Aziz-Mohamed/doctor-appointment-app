import { AppSidebar } from "@/_components/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/_components/ui/Sidebar";
import { AppointmentsProvider } from "@/_context/AppointmentsContext";
import { fetchAllAppointmentsFromSupabase } from "@/_lib/data-server";
import "@/app/globals.css";

export default async function Layout({ children }) {
  // const fetchedAppointments = await fetchAllAppointmentsFromSupabase();

  return (
    // <AppointmentsProvider initialData={fetchedAppointments}>
      <SidebarProvider>
        <div className="flex h-screen overflow-hidden">
          <AppSidebar />
          <SidebarInset className="flex flex-col flex-1">
            <header className="flex h-16 items-center border-b px-4">
              <SidebarTrigger />
            </header>
            <main className="flex-1 overflow-auto p-4">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    // </AppointmentsProvider>
  );
}
