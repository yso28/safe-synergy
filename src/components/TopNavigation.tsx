
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Training", path: "/training" },
  { name: "Forum", path: "/forum" },
  { name: "Resources", path: "/resources" },
  { name: "Profile", path: "/profile" },
];

const TopNavigation = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-background backdrop-blur-md shadow-sm fixed top-16 left-0 z-40">
      <NavigationMenu>
        <NavigationMenuList className="flex w-full justify-center">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.path;
            return (
              <NavigationMenuItem key={item.name}>
                <Link to={item.path}>
                  <NavigationMenuLink
                    className={`px-5 py-2 rounded-lg text-base font-medium transition-colors duration-200
                      ${
                        active
                          ? "bg-primary text-white shadow hover:bg-primary/90"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }
                    `}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default TopNavigation;
