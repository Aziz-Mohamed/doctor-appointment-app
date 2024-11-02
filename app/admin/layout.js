import { SidebarProvider, SidebarTrigger } from "@/_components/ui/sidebar"
import { AppSidebar } from "@/_components/appSidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
