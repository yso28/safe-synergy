
import React from 'react';
import { Shield, Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/70 border-b border-white/20 z-10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-1.5 mr-3">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold gradient-text">SURAKSHA</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-muted/80">
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-muted/80">
            <Bell className="h-4 w-4 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
