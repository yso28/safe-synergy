
import React from 'react';
import { Calendar, Cpu, MessageSquare, FileText, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const sections = [
    {
      title: 'Workshops & Seminars',
      icon: Calendar,
      description: 'Stay updated with upcoming security events',
      route: '/events',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-primary'
    },
    {
      title: 'Interactive Training',
      icon: Cpu,
      description: 'Learn through simulations and case studies',
      route: '/training',
      color: 'bg-gradient-to-br from-green-50 to-emerald-50',
      iconColor: 'text-secondary'
    },
    {
      title: 'Community Forum',
      icon: MessageSquare,
      description: 'Connect with peers and security experts',
      route: '/forum',
      color: 'bg-gradient-to-br from-purple-50 to-violet-50',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Resources',
      icon: FileText,
      description: 'Access guides, articles, and reporting tools',
      route: '/resources',
      color: 'bg-gradient-to-br from-amber-50 to-yellow-50',
      iconColor: 'text-amber-500'
    }
  ];

  return (
    <div className="container px-4 pb-24 pt-24">
      <div className="mb-8 glass-card p-6 rounded-3xl">
        <div className="mb-4 flex justify-center">
          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-2xl">
            <Shield className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2 gradient-text">
          SURAKSHA
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Student Association for Cyber Security and Crime Awareness
        </p>
        
        <div className="bg-muted rounded-xl p-4 flex items-center">
          <div className="bg-accent/10 p-2 rounded-lg mr-3">
            <Shield className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Security Status</h3>
            <p className="text-xs text-muted-foreground">Your account is fully protected</p>
          </div>
          <div className="bg-green-500 h-2.5 w-2.5 rounded-full"></div>
        </div>
      </div>
      
      <h2 className="gradient-text text-xl mb-4">Explore</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {sections.map((section) => (
          <Link to={section.route} key={section.title}>
            <Card className={`overflow-hidden border-none ${section.color} card-hover`}>
              <CardContent className="p-5 flex flex-row items-center">
                <div className="mr-4 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
                  <section.icon className={`h-6 w-6 ${section.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{section.title}</h2>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="glass-card p-5 rounded-2xl">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Cyber Security Tip</h2>
          <span className="text-xs text-muted-foreground">Today</span>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          Always use a password manager to create and store strong, unique passwords for all your accounts.
        </p>
        <div className="w-full bg-muted/50 h-1 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full w-1/3"></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">1/3 Tips</span>
          <button className="text-xs text-accent font-medium">Next tip</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
