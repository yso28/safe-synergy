
import React, { useState } from 'react';
import { Shield, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Training", path: "/training" },
  { name: "Forum", path: "/forum" },
  { name: "Resources", path: "/resources" },
  { name: "Profile", path: "/profile" },
];

const Header = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 glass-nav z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-1.5 mr-3 shadow-md">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold gradient-text">SURAKSHA</h1>
        </div>
        {/* Navigation links in the center for desktop, drawer for mobile */}
        <nav className="hidden md:flex space-x-2 mx-8">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 rounded-md font-medium text-sm transition-all ${
                location.pathname === item.path
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          {isSearchActive ? (
            <div className="relative animate-fade-in">
              <input 
                autoFocus
                type="text" 
                placeholder="Search..."
                className="py-2 pl-9 pr-4 rounded-full text-sm bg-muted/80 border-none focus:ring-1 focus:ring-primary/30 outline-none w-[180px]"
                onBlur={() => setIsSearchActive(false)}
              />
              <Search className="h-4 w-4 text-muted-foreground absolute left-3 top-2.5" />
            </div>
          ) : (
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-muted/80 hover:bg-muted"
              onClick={() => setIsSearchActive(true)}
            >
              <Search className="h-4 w-4 text-muted-foreground" />
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full bg-muted/80 hover:bg-muted relative">
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full pulsate"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass-nav w-64 p-3 mr-4" align="end">
              <h3 className="font-medium text-sm mb-2 px-2">Notifications</h3>
              {[1, 2, 3].map((item) => (
                <DropdownMenuItem key={item} className="flex flex-col items-start rounded-lg p-3 focus:bg-primary/5 cursor-pointer">
                  <div className="flex items-center w-full mb-1">
                    <div className="bg-primary/10 p-1.5 rounded-full mr-2">
                      <Shield className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="font-medium text-xs">Security Alert</span>
                    <span className="ml-auto text-xs text-muted-foreground">2h ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">New phishing attempt detected targeting university students.</p>
                </DropdownMenuItem>
              ))}
              <div className="mt-2 pt-2 border-t border-border">
                <Button variant="ghost" size="sm" className="w-full text-xs justify-center text-primary">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Mobile navigation: show as horizontal scrollable bar under the header */}
      <nav className="flex md:hidden justify-center mt-4 space-x-2 overflow-x-auto pb-1">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-3 py-2 rounded-md font-medium text-sm transition-all ${
              location.pathname === item.path
                ? 'bg-primary text-white'
                : 'text-muted-foreground hover:bg-muted'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
