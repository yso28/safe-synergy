
import React from 'react';
import { Home, Calendar, BookOpen, MessageSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const isActive = (route: string) => {
    return path === route;
  };
  
  const navItems = [
    { icon: Home, label: 'Home', route: '/' },
    { icon: Calendar, label: 'Events', route: '/events' },
    { icon: BookOpen, label: 'Training', route: '/training' },
    { icon: MessageSquare, label: 'Forum', route: '/forum' },
    { icon: User, label: 'Profile', route: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-10">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link 
            key={item.route} 
            to={item.route} 
            className={`flex flex-col items-center justify-center ${
              isActive(item.route) ? 'text-primary' : 'text-gray-500'
            }`}
          >
            <item.icon className="nav-icon" />
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
