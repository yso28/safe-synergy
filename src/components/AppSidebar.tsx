
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Calendar, GraduationCap, Users, BookOpenCheck, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Home", path: "/", icon: Home },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Training", path: "/training", icon: GraduationCap },
  { name: "Forum", path: "/forum", icon: Users },
  { name: "Resources", path: "/resources", icon: BookOpenCheck },
  { name: "Profile", path: "/profile", icon: User },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigate</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild isActive={active}>
                      <Link to={item.path} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

