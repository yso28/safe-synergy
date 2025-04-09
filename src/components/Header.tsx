
import React from 'react';
import { Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-10 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="h-6 w-6 text-primary mr-2" />
          <h1 className="text-lg font-bold text-primary">SURAKSHA</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
