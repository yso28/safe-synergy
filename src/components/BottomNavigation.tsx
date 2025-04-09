
import React, { useState, useEffect } from 'react';
import { Home, Calendar, BookOpen, MessageSquare, User, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const BottomNavigation = () => {
  const location = useLocation();
  const path = location.pathname;
  
  const navItems = [
    { icon: Home, label: 'Home', route: '/' },
    { icon: Calendar, label: 'Events', route: '/events' },
    { icon: BookOpen, label: 'Training', route: '/training' },
    { icon: MessageSquare, label: 'Forum', route: '/forum' },
    { icon: FileText, label: 'Resources', route: '/resources' },
    { icon: User, label: 'Profile', route: '/profile' },
  ];

  const isActive = (route: string) => path === route;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-5 z-50 pointer-events-none">
      <nav className="glass-nav rounded-2xl px-2 py-1 shadow-xl backdrop-blur-xl bg-white/70 border border-white/30 pointer-events-auto">
        <div className="flex items-center justify-between space-x-1 relative">
          {navItems.map((item) => {
            const active = isActive(item.route);
            
            return (
              <Link
                key={item.route}
                to={item.route}
                className="relative flex flex-col items-center justify-center p-3"
              >
                <div className="relative">
                  {/* Background indicator for active item */}
                  {active && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1.6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ width: '100%', height: '100%', zIndex: -1 }}
                    />
                  )}
                  
                  <div 
                    className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                      active ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <item.icon 
                      className={`w-5 h-5 transition-all duration-300 ${
                        active ? 'stroke-[2.5px] scale-110' : 'stroke-[1.5px]'
                      }`} 
                    />
                    
                    {/* Pulsing effect for active item */}
                    {active && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-primary/5"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 0.2, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        style={{ width: '100%', height: '100%', zIndex: -1 }}
                      />
                    )}
                  </div>
                </div>
                
                {/* Label */}
                <AnimatePresence>
                  {active && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-[10px] font-medium text-primary mt-1 absolute -bottom-3"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;
