"use client";

import {
  Activity,
  Calendar,
  ChevronRight,
  ClipboardList,
  Heart,
  Home,
  Layers,
  Microscope,
  Pill,
  Scissors,
  Stethoscope,
  Users,
} from "lucide-react";
import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/_components/ui/Collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail
} from "@/_components/ui/Sidebar";
import Link from "next/link";

const coreFeatures = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Calendar",
    icon: Calendar,
    url: "/calendar",
  },
  {
    title: "Patients",
    icon: Users,
    url: "/patients",
  },
];

const specialties = [
  {
    category: "General Medicine",
    icon: Stethoscope,
    items: [
      { title: "Family Medicine", url: "/family-medicine" },
      { title: "Internal Medicine", url: "/internal-medicine" },
      { title: "Pediatrics", url: "/pediatrics" },
      { title: "Geriatrics", url: "/geriatrics" },
    ],
  },
  {
    category: "Specialized Medicine",
    icon: Pill,
    items: [
      { title: "Cardiology", url: "/cardiology" },
      { title: "Dermatology", url: "/dermatology" },
      { title: "Endocrinology", url: "/endocrinology" },
      { title: "Gastroenterology", url: "/gastroenterology" },
      { title: "Neurology", url: "/neurology" },
      { title: "Oncology", url: "/oncology" },
      { title: "Pulmonology", url: "/pulmonology" },
      { title: "Rheumatology", url: "/rheumatology" },
      { title: "Urology", url: "/urology" },
    ],
  },
  {
    category: "Surgical Specialties",
    icon: Scissors,
    items: [
      { title: "General Surgery", url: "/general-surgery" },
      { title: "Orthopedic Surgery", url: "/orthopedic-surgery" },
      { title: "Plastic Surgery", url: "/plastic-surgery" },
      {
        title: "Cardiovascular Surgery",
        url: "/cardiovascular-surgery",
      },
      { title: "Neurosurgery", url: "/neurosurgery" },
      { title: "Otolaryngology", url: "/otolaryngology" },
      { title: "Ophthalmology", url: "/ophthalmology" },
    ],
  },
  {
    category: "Other Specialties",
    icon: Microscope,
    items: [
      { title: "Radiology", url: "/radiology" },
      { title: "Pathology", url: "/pathology" },
      { title: "Anesthesiology", url: "/anesthesiology" },
      { title: "Psychiatry", url: "/psychiatry" },
      { title: "Physical Therapy", url: "/physical-therapy" },
      {
        title: "Occupational Therapy",
        url: "/occupational-therapy",
      },
    ],
  },
];
import { useAppointments } from "@/_context/AppointmentsContext";
import {convertTitleToSlug} from "@/_lib/utils";
import {useQueryParams} from "@/_hooks/useQueryParams";

export function AppSidebar() {
  const { handleFilterChange } = useAppointments();
  const { setQueryParam } = useQueryParams();

  return (
    // <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Heart className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">MedClinic</span>
                <span className="text-xs">Healthcare System</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* Core Features */}
        <SidebarGroup>
          <SidebarGroupLabel>Core Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {coreFeatures.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={`${item.url}`}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Medical Specialties */}

        <SidebarGroup>
          <SidebarGroupLabel>Medical Specialties</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {specialties.map((specialty) => (
                <Collapsible
                  key={specialty.category}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={specialty.category}>
                        <specialty.icon className="size-4" />
                        <span>{specialty.category}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {specialty.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild onClick={() =>{
                              const specialtyName =  item.title.toLowerCase().replace(/\s+/g, '-');
                              setQueryParam("specialty",specialtyName)
                              // const specialtyName = convertTitleToSlug(item.title);
                              // handleFilterChange(specialtyName)
                              }} >
                              {/* <Link
                                href={`/admin/specialties/${item.url}`}
                                prefetch
                              > */}
                                <span>{item.title}</span>
                              {/* </Link> */}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Stats */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick Stats</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="grid gap-2 px-2">
              <div className="flex items-center gap-2 rounded-md border bg-card p-2 text-sm">
                <Activity className="size-4 text-primary" />
                <div className="grid gap-0.5 leading-none">
                  <span className="font-medium">Today&#39;s Appointments</span>
                  <span className="text-xs text-muted-foreground">
                    23 Scheduled
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md border bg-card p-2 text-sm">
                <ClipboardList className="size-4 text-primary" />
                <div className="grid gap-0.5 leading-none">
                  <span className="font-medium">Patient Records</span>
                  <span className="text-xs text-muted-foreground">
                    1,234 Total
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md border bg-card p-2 text-sm">
                <Layers className="size-4 text-primary" />
                <div className="grid gap-0.5 leading-none">
                  <span className="font-medium">Departments Active</span>
                  <span className="text-xs text-muted-foreground">
                    15 Online
                  </span>
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
    // </SidebarProvider>
  );
}

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

// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/_components/ui/Sidebar"

// // Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ]

// export function AppSidebar() {
//   return (
//     <Sidebar>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {items.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild>
//                     <a href={item.url}>
//                       <item.icon />
//                       <span>{item.title}</span>
//                     </a>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   )
// }
