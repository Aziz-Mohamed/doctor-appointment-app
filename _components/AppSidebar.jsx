// import React from "react";
// import {
//   Activity,
//   Calendar,
//   ChevronRight,
//   ClipboardList,
//   Heart,
//   Home,
//   Layers,
//   Microscope,
//   Pill,
//   Scissors,
//   Stethoscope,
//   Users,
// } from "lucide-react";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/_components/ui/Collapsible"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
//   SidebarProvider,
//   SidebarRail,
// } from "@/_components/ui/Sidebar";

// const coreFeatures = [
//   {
//     title: "Dashboard",
//     icon: Home,
//     url: "/dashboard",
//   },
//   {
//     title: "Calendar",
//     icon: Calendar,
//     url: "/calendar",
//   },
//   {
//     title: "Patients",
//     icon: Users,
//     url: "/patients",
//   },
// ];

// const specialties = [
//   {
//     category: "General Medicine",
//     icon: Stethoscope,
//     items: [
//       { title: "Family Medicine", url: "/specialties/family-medicine" },
//       { title: "Internal Medicine", url: "/specialties/internal-medicine" },
//       { title: "Pediatrics", url: "/specialties/pediatrics" },
//       { title: "Geriatrics", url: "/specialties/geriatrics" },
//     ],
//   },
//   {
//     category: "Specialized Medicine",
//     icon: Pill,
//     items: [
//       { title: "Cardiology", url: "/specialties/cardiology" },
//       { title: "Dermatology", url: "/specialties/dermatology" },
//       { title: "Endocrinology", url: "/specialties/endocrinology" },
//       { title: "Gastroenterology", url: "/specialties/gastroenterology" },
//       { title: "Neurology", url: "/specialties/neurology" },
//       { title: "Oncology", url: "/specialties/oncology" },
//       { title: "Pulmonology", url: "/specialties/pulmonology" },
//       { title: "Rheumatology", url: "/specialties/rheumatology" },
//       { title: "Urology", url: "/specialties/urology" },
//     ],
//   },
//   {
//     category: "Surgical Specialties",
//     icon: Scissors,
//     items: [
//       { title: "General Surgery", url: "/specialties/general-surgery" },
//       { title: "Orthopedic Surgery", url: "/specialties/orthopedic-surgery" },
//       { title: "Plastic Surgery", url: "/specialties/plastic-surgery" },
//       {
//         title: "Cardiovascular Surgery",
//         url: "/specialties/cardiovascular-surgery",
//       },
//       { title: "Neurosurgery", url: "/specialties/neurosurgery" },
//       { title: "Otolaryngology", url: "/specialties/otolaryngology" },
//       { title: "Ophthalmology", url: "/specialties/ophthalmology" },
//     ],
//   },
//   {
//     category: "Other Specialties",
//     icon: Microscope,
//     items: [
//       { title: "Radiology", url: "/specialties/radiology" },
//       { title: "Pathology", url: "/specialties/pathology" },
//       { title: "Anesthesiology", url: "/specialties/anesthesiology" },
//       { title: "Psychiatry", url: "/specialties/psychiatry" },
//       { title: "Physical Therapy", url: "/specialties/physical-therapy" },
//       {
//         title: "Occupational Therapy",
//         url: "/specialties/occupational-therapy",
//       },
//     ],
//   },
// ];

// export default function AppSidebar() {
//   return (
//     <SidebarProvider>
//       <Sidebar collapsible="icon">
//         <SidebarHeader>
//           <SidebarMenu>
//             <SidebarMenuItem>
//               <SidebarMenuButton size="lg">
//                 <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
//                   <Heart className="size-4" />
//                 </div>
//                 <div className="flex flex-col gap-0.5 leading-none">
//                   <span className="font-semibold">MedClinic</span>
//                   <span className="text-xs">Healthcare System</span>
//                 </div>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           </SidebarMenu>
//         </SidebarHeader>
//         <SidebarContent>
//           {/* Core Features */}
//           <SidebarGroup>
//             <SidebarGroupLabel>Core Features</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {coreFeatures.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild tooltip={item.title}>
//                       <a href={item.url}>
//                         <item.icon className="size-4" />
//                         <span>{item.title}</span>
//                       </a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>

//           {/* Medical Specialties */}
//           <SidebarGroup>
//             <SidebarGroupLabel>Medical Specialties</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {specialties.map((specialty) => (
//                   <Collapsible
//                     key={specialty.category}
//                     className="group/collapsible"
//                   >
//                     <SidebarMenuItem>
//                       <CollapsibleTrigger asChild>
//                         <SidebarMenuButton tooltip={specialty.category}>
//                           <specialty.icon className="size-4" />
//                           <span>{specialty.category}</span>
//                           <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
//                         </SidebarMenuButton>
//                       </CollapsibleTrigger>
//                       <CollapsibleContent>
//                         <SidebarMenuSub>
//                           {specialty.items.map((item) => (
//                             <SidebarMenuSubItem key={item.title}>
//                               <SidebarMenuSubButton asChild>
//                                 <a href={item.url}>
//                                   <span>{item.title}</span>
//                                 </a>
//                               </SidebarMenuSubButton>
//                             </SidebarMenuSubItem>
//                           ))}
//                         </SidebarMenuSub>
//                       </CollapsibleContent>
//                     </SidebarMenuItem>
//                   </Collapsible>
//                 ))}
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>

//           {/* Quick Stats */}
//           <SidebarGroup>
//             <SidebarGroupLabel>Quick Stats</SidebarGroupLabel>
//             <SidebarGroupContent>
//               <div className="grid gap-2 px-2">
//                 <div className="flex items-center gap-2 rounded-md border bg-card p-2 text-sm">
//                   <Activity className="size-4 text-primary" />
//                   <div className="grid gap-0.5 leading-none">
//                     <span className="font-medium">Today's Appointments</span>
//                     <span className="text-xs text-muted-foreground">
//                       23 Scheduled
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 rounded-md border bg-card p-2 text-sm">
//                   <ClipboardList className="size-4 text-primary" />
//                   <div className="grid gap-0.5 leading-none">
//                     <span className="font-medium">Patient Records</span>
//                     <span className="text-xs text-muted-foreground">
//                       1,234 Total
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 rounded-md border bg-card p-2 text-sm">
//                   <Layers className="size-4 text-primary" />
//                   <div className="grid gap-0.5 leading-none">
//                     <span className="font-medium">Departments Active</span>
//                     <span className="text-xs text-muted-foreground">
//                       15 Online
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//         <SidebarRail />
//       </Sidebar>
//     </SidebarProvider>
//   );
// }















// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
// } from "@/_components/ui/Sidebar";
// import { SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/Sidebar";

// export function AppSidebar() {
//   return (
//     <Sidebar>
//       <Sidebar>
//         <SidebarHeader />
//         <SidebarContent>
//           <SidebarGroup />
//           <SidebarGroup />
//         </SidebarContent>
//         <SidebarFooter />
//       </Sidebar>
//     </Sidebar>

//   );
// }














import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/_components/ui/Sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
