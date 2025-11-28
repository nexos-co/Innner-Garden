import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

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
} from "@/components/ui/sidebar"
import { collections } from "@/lib/constants/sidebar.constant"
import { Link } from "@tanstack/react-router"

export function LeftSidebar() {
  return (
      <Sidebar className="border-r-1 border-app-border">
        <SidebarHeader>
          <h1 className="text-2xl"></h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {collections.map((collection) => (
                <SidebarMenuItem key={collection.name}>
                  <SidebarMenuButton asChild>
                    <h2 className="font-medium pl-4 text-xl">
                      {collection.name}
                    </h2>
                  </SidebarMenuButton>
                  {collection.routes?.length ? (
                    <SidebarMenuSub>
                      {collection.routes.map((route) => (
                        <SidebarMenuSubItem key={route.name} className="mt-2">
                          <SidebarMenuSubButton asChild isActive={false}>
                            <Link to={route.url} className="text-[15px]">
                              <route.icon />
                              {route.name}
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
  )
}