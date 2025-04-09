
import React from 'react';
import { Calendar, Cpu, MessageSquare, FileText, Shield, ArrowRight, Star, Bell, Lock, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  const sections = [
    {
      title: 'Workshops & Seminars',
      icon: Calendar,
      description: 'Stay updated with upcoming security events',
      route: '/events',
      color: 'from-indigo-50 to-blue-100',
      iconColor: 'text-primary'
    },
    {
      title: 'Interactive Training',
      icon: Cpu,
      description: 'Learn through simulations and case studies',
      route: '/training',
      color: 'from-emerald-50 to-green-100',
      iconColor: 'text-emerald-500'
    },
    {
      title: 'Community Forum',
      icon: MessageSquare,
      description: 'Connect with peers and security experts',
      route: '/forum',
      color: 'from-violet-50 to-purple-100',
      iconColor: 'text-violet-500'
    },
    {
      title: 'Resources',
      icon: FileText,
      description: 'Access guides, articles, and reporting tools',
      route: '/resources',
      color: 'from-amber-50 to-yellow-100',
      iconColor: 'text-amber-500'
    }
  ];

  const securityTips = [
    'Always use a password manager to create and store strong, unique passwords.',
    'Enable two-factor authentication on all your important accounts.',
    'Be cautious of phishing attempts via email, messages, or calls.'
  ];

  const [tipIndex, setTipIndex] = React.useState(0);
  
  const nextTip = () => {
    setTipIndex((prev) => (prev + 1) % securityTips.length);
  };

  return (
    <div className="container px-4 pb-24 pt-24">
      <div className="mb-8 glass-card p-6 rounded-3xl shadow-lg">
        <div className="mb-6 flex justify-center">
          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-2xl shadow-md">
            <Shield className="h-10 w-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2 gradient-text">
          SURAKSHA
        </h1>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Student Association for Cyber Security and Crime Awareness
        </p>
        
        <div className="bg-muted/50 backdrop-blur-sm rounded-xl p-4 flex items-center relative floating-card">
          <div className="absolute -top-2 -right-2">
            <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white border-none text-[10px]">
              Active
            </Badge>
          </div>
          <div className="bg-accent/10 p-2.5 rounded-lg mr-3 shadow-sm">
            <Shield className="h-5 w-5 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Security Status</h3>
            <p className="text-xs text-muted-foreground">Your account is fully protected</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2.5 w-2.5 rounded-full pulsate"></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="gradient-text text-xl">Explore</h2>
        <Button variant="ghost" size="sm" className="text-primary text-sm">
          See all <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {sections.map((section) => (
          <Link to={section.route} key={section.title}>
            <Card className={`overflow-hidden border-none bg-gradient-to-br ${section.color} card-hover floating-card`}>
              <CardContent className="p-5">
                <div className="mb-3 p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm inline-block">
                  <section.icon className={`h-6 w-6 ${section.iconColor}`} />
                </div>
                <div>
                  <h2 className="font-semibold text-base mb-1">{section.title}</h2>
                  <p className="text-xs text-gray-600 line-clamp-2">{section.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="glass-card p-5 rounded-2xl shadow-lg mb-6 floating-card">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-500 mr-2" />
            <h2 className="font-semibold">Featured Event</h2>
          </div>
          <Badge className="bg-primary/10 text-primary border-none text-xs">Tomorrow</Badge>
        </div>
        <h3 className="font-medium text-base mb-1">Ethical Hacking Workshop</h3>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          Learn the fundamentals of ethical hacking and penetration testing techniques.
        </p>
        <Button size="sm" className="w-full justify-center bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
          Register Now
        </Button>
      </div>

      <div className="glass-card p-5 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <Lock className="h-4 w-4 text-primary mr-2" />
            <h2 className="font-semibold">Cyber Security Tip</h2>
          </div>
          <span className="text-xs text-muted-foreground">Today</span>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          {securityTips[tipIndex]}
        </p>
        <div className="w-full bg-muted/50 h-1 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: `${((tipIndex + 1) / securityTips.length) * 100}%` }}></div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">{tipIndex + 1}/{securityTips.length} Tips</span>
          <button onClick={nextTip} className="text-xs text-accent font-medium flex items-center">
            Next tip
            <ChevronRight className="h-3 w-3 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
