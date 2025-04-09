
import React from 'react';
import { Calendar, Cpu, MessageSquare, FileText, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  const sections = [
    {
      title: 'Workshops & Seminars',
      icon: Calendar,
      description: 'Stay updated with upcoming security events',
      route: '/events',
      color: 'bg-blue-50',
      iconColor: 'text-primary'
    },
    {
      title: 'Interactive Training',
      icon: Cpu,
      description: 'Learn through simulations and case studies',
      route: '/training',
      color: 'bg-green-50',
      iconColor: 'text-secondary'
    },
    {
      title: 'Community Forum',
      icon: MessageSquare,
      description: 'Connect with peers and security experts',
      route: '/forum',
      color: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      title: 'Resources',
      icon: FileText,
      description: 'Access guides, articles, and reporting tools',
      route: '/resources',
      color: 'bg-amber-50',
      iconColor: 'text-amber-500'
    }
  ];

  return (
    <div className="container px-4 pb-20 pt-20">
      <div className="mb-6 flex items-center justify-center">
        <Shield className="h-12 w-12 text-primary" />
      </div>
      
      <h1 className="text-2xl font-bold text-center mb-2">
        Welcome to SURAKSHA
      </h1>
      <p className="text-gray-500 text-center mb-8">
        Student Association for Cyber Security and Crime Awareness
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <Link to={section.route} key={section.title}>
            <Card className={`hover:shadow-md transition-shadow ${section.color} border-none card-hover`}>
              <CardContent className="p-6 flex flex-row items-center">
                <div className="mr-4 p-3 rounded-full bg-white">
                  <section.icon className={`h-8 w-8 ${section.iconColor}`} />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{section.title}</h2>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-primary/10 rounded-xl p-4">
        <h2 className="font-semibold mb-2">Cyber Security Tip of the Day</h2>
        <p className="text-sm text-gray-700">
          Always use a password manager to create and store strong, unique passwords for all your accounts.
        </p>
      </div>
    </div>
  );
};

export default Home;
