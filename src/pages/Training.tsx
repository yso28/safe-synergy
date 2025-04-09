
import React from 'react';
import { Shield, Lock, Wifi, Globe, Cpu, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Training = () => {
  const modules = [
    {
      id: 1,
      title: 'Social Engineering Defense',
      description: 'Learn to identify and protect against social engineering attacks',
      icon: Shield,
      difficulty: 'Beginner',
      progress: 0,
      duration: '45 min',
      category: 'Awareness'
    },
    {
      id: 2,
      title: 'Password Security',
      description: 'Best practices for creating and managing secure passwords',
      icon: Lock,
      difficulty: 'Beginner',
      progress: 25,
      duration: '30 min',
      category: 'Basic'
    },
    {
      id: 3,
      title: 'Wi-Fi Network Security',
      description: 'Securing your connections on public and private networks',
      icon: Wifi,
      difficulty: 'Intermediate',
      progress: 0,
      duration: '60 min',
      category: 'Network'
    },
    {
      id: 4,
      title: 'Protecting Your Digital Footprint',
      description: 'Managing your online presence and privacy',
      icon: Globe,
      difficulty: 'Beginner',
      progress: 75,
      duration: '40 min',
      category: 'Privacy'
    },
    {
      id: 5,
      title: 'Malware Analysis',
      description: 'Understanding and identifying different types of malware',
      icon: Cpu,
      difficulty: 'Advanced',
      progress: 0,
      duration: '90 min',
      category: 'Technical'
    },
    {
      id: 6,
      title: 'Cloud Security Fundamentals',
      description: 'Security principles for cloud-based applications and storage',
      icon: Server,
      difficulty: 'Intermediate',
      progress: 10,
      duration: '75 min',
      category: 'Cloud'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'Advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container px-4 pb-20 pt-20">
      <h1 className="section-title">Interactive Training</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modules.map((module) => (
          <Card key={module.id} className="security-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-24 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <module.icon className="h-12 w-12 text-white" />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{module.title}</h3>
                  <Badge className={getDifficultyColor(module.difficulty)}>
                    {module.difficulty}
                  </Badge>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{module.duration}</span>
                  <span>{module.progress > 0 ? `${module.progress}% Complete` : 'Not Started'}</span>
                </div>
                
                <Progress value={module.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Training;
