
import React, { useState, useMemo } from 'react';
import { Shield, Lock, Wifi, Globe, Cpu, Server, PlayCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import TrainingFilters, { FilterOption } from '@/components/TrainingFilters';
import { useToast } from '@/hooks/use-toast';

const Training = () => {
  const { toast } = useToast();
  const [filters, setFilters] = useState<FilterOption>({
    difficulty: null,
    status: null,
    category: null
  });

  const modules = [
    {
      id: 1,
      title: 'Social Engineering Defense',
      description: 'Learn to identify and protect against social engineering attacks',
      icon: Shield,
      difficulty: 'Beginner',
      progress: 0,
      duration: '45 min',
      category: 'Awareness',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      title: 'Password Security',
      description: 'Best practices for creating and managing secure passwords',
      icon: Lock,
      difficulty: 'Beginner',
      progress: 25,
      duration: '30 min',
      category: 'Basic',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'Wi-Fi Network Security',
      description: 'Securing your connections on public and private networks',
      icon: Wifi,
      difficulty: 'Intermediate',
      progress: 0,
      duration: '60 min',
      category: 'Network',
      color: 'from-orange-500 to-amber-600'
    },
    {
      id: 4,
      title: 'Protecting Your Digital Footprint',
      description: 'Managing your online presence and privacy',
      icon: Globe,
      difficulty: 'Beginner',
      progress: 75,
      duration: '40 min',
      category: 'Privacy',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 5,
      title: 'Malware Analysis',
      description: 'Understanding and identifying different types of malware',
      icon: Cpu,
      difficulty: 'Advanced',
      progress: 0,
      duration: '90 min',
      category: 'Technical',
      color: 'from-red-500 to-rose-600'
    },
    {
      id: 6,
      title: 'Cloud Security Fundamentals',
      description: 'Security principles for cloud-based applications and storage',
      icon: Server,
      difficulty: 'Intermediate',
      progress: 10,
      duration: '75 min',
      category: 'Cloud',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  // Extract unique categories from modules
  const categories = useMemo(() => 
    Array.from(new Set(modules.map(module => module.category))),
    []
  );

  // Apply filters to modules
  const filteredModules = useMemo(() => {
    return modules.filter(module => {
      if (filters.difficulty && module.difficulty !== filters.difficulty) return false;
      if (filters.category && module.category !== filters.category) return false;
      
      // Check status filter
      if (filters.status) {
        if (filters.status === 'Not Started' && module.progress > 0) return false;
        if (filters.status === 'In Progress' && (module.progress === 0 || module.progress === 100)) return false;
        if (filters.status === 'Completed' && module.progress !== 100) return false;
      }
      
      return true;
    });
  }, [modules, filters]);

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

  const handleStartModule = (moduleId: number, action: string) => {
    toast({
      title: `${action} module`,
      description: `You have ${action.toLowerCase()} the module #${moduleId}`,
      variant: "default",
    });
  };

  return (
    <div className="container px-4 pb-24 pt-24">
      <h1 className="section-title">Training</h1>
      
      <div className="glass-card p-5 rounded-2xl mb-6">
        <div className="flex items-center space-x-4">
          <div className="bg-accent/20 rounded-xl p-3">
            <PlayCircle className="h-6 w-6 text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">Continue Learning</h3>
            <p className="text-sm text-muted-foreground">Password Security</p>
            <Progress value={25} className="h-1.5 mt-2" />
          </div>
          <Button variant="ghost" size="sm" className="rounded-xl">
            Resume
          </Button>
        </div>
      </div>
      
      {/* Add the filters component */}
      <TrainingFilters 
        filters={filters} 
        setFilters={setFilters} 
        categories={categories}
      />
      
      {filteredModules.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No modules match your filters</p>
          <Button 
            variant="outline" 
            onClick={() => setFilters({ difficulty: null, status: null, category: null })}
            className="mt-4"
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredModules.map((module) => (
            <Card key={module.id} className="glass-card overflow-hidden border-none">
              <CardContent className="p-0">
                <div className={`h-20 bg-gradient-to-r ${module.color} flex items-center`}>
                  <div className="ml-5 bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <module.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4 text-white">
                    <Badge className="bg-white/30 text-white border-none">{module.category}</Badge>
                    <p className="text-xs mt-1">{module.duration}</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                    <Badge className={getDifficultyColor(module.difficulty)}>
                      {module.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{module.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex-1 mr-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{module.progress > 0 ? `${module.progress}% Complete` : 'Not Started'}</span>
                      </div>
                      <Progress value={module.progress} className="h-1.5" />
                    </div>
                    <Button 
                      size="sm" 
                      className={`rounded-xl ${module.progress > 0 ? 'bg-primary' : 'bg-accent'}`}
                      onClick={() => handleStartModule(module.id, module.progress > 0 ? 'Continue' : 'Start')}
                    >
                      {module.progress > 0 ? 'Continue' : 'Start'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Training;
