
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
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 glass-card z-10 px-2 py-2 w-[90%] max-w-md">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const active = isActive(item.route);
          return (
            <Link 
              key={item.route} 
              to={item.route} 
              className="flex flex-col items-center justify-center"
            >
              <div className={`relative flex items-center justify-center ${
                active ? 'bg-primary text-white' : 'bg-transparent text-gray-500'
              } p-2 rounded-xl transition-all duration-300`}>
                <item.icon className="nav-icon" />
                {active && (
                  <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>
                )}
              </div>
              <span className={`text-[10px] mt-1 ${active ? 'text-primary font-medium' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
