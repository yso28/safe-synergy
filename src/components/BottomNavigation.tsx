
import React, { useState, useEffect } from 'react';
import { Home, Calendar, BookOpen, MessageSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  
  const navItems = [
    { icon: Home, label: 'Home', route: '/' },
    { icon: Calendar, label: 'Events', route: '/events' },
    { icon: BookOpen, label: 'Training', route: '/training' },
    { icon: MessageSquare, label: 'Forum', route: '/forum' },
    { icon: User, label: 'Profile', route: '/profile' },
  ];

  const isActive = (route: string) => path === route;
  
  useEffect(() => {
    const activeIndex = navItems.findIndex(item => isActive(item.route));
    setIndicatorPosition(activeIndex);
  }, [path]);

  return (
    <nav className="fixed bottom-5 left-1/2 transform -translate-x-1/2 glass-nav z-10 px-2 py-2 w-[90%] max-w-md rounded-2xl">
      <div className="grid grid-cols-5 h-16 relative">
        <motion.div 
          className="absolute top-2 left-0 w-1/5 h-10 flex justify-center"
          animate={{ x: `${indicatorPosition * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="w-12 h-12 bg-primary/10 rounded-xl"></div>
        </motion.div>
        
        {navItems.map((item, index) => {
          const active = isActive(item.route);
          return (
            <Link 
              key={item.route} 
              to={item.route} 
              className="flex flex-col items-center justify-center relative z-10"
            >
              <div className={`relative flex items-center justify-center ${
                active ? 'text-primary' : 'text-gray-500'
              } p-2 rounded-xl transition-all duration-300`}>
                <item.icon className={`nav-icon ${active ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`} />
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
