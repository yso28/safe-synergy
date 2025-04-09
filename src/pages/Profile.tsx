
import React from 'react';
import { User, Settings, Award, BookOpen, Shield, LogOut, Camera, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Profile = () => {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    role: 'Student',
    completedCourses: 3,
    totalCourses: 8,
    certificates: [
      { id: 1, name: 'Social Engineering Defense', date: 'Feb 15, 2025' },
      { id: 2, name: 'Password Security Basics', date: 'Mar 2, 2025' },
    ],
    badges: [
      { id: 1, name: 'Quick Learner', icon: Award, description: 'Completed first course in record time' },
      { id: 2, name: 'Security Aware', icon: Shield, description: 'Reported a phishing attempt' },
    ]
  };

  return (
    <div className="container px-4 pb-24 pt-24">
      <div className="glass-card p-6 rounded-3xl mb-6">
        <div className="relative">
          <div className="absolute top-0 right-0">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-muted/50">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-24 w-24 mb-4 border-2 border-white shadow-lg">
                <AvatarFallback className="text-xl bg-gradient-to-br from-primary to-accent text-white">AJ</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" className="absolute bottom-3 right-0 bg-white rounded-full h-8 w-8 shadow-md">
                <Camera className="h-4 w-4 text-primary" />
              </Button>
            </div>
            
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground text-sm">{user.email}</p>
            <Badge className="mt-2 bg-primary/10 text-primary border-none">{user.role}</Badge>
          </div>
        </div>
      </div>
      
      <Card className="glass-card mb-6 border-none">
        <CardContent className="p-5">
          <h2 className="font-semibold mb-3">Learning Progress</h2>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Courses Completed</span>
            <span className="font-medium">{user.completedCourses}/{user.totalCourses}</span>
          </div>
          <Progress value={(user.completedCourses / user.totalCourses) * 100} className="h-2 mb-2" />
          <div className="flex justify-end">
            <span className="text-xs text-accent font-medium">{Math.round((user.completedCourses / user.totalCourses) * 100)}% complete</span>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4 mb-6">
        <Card className="glass-card border-none">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-semibold">Certificates</h2>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            
            {user.certificates.length > 0 ? (
              <div className="space-y-4">
                {user.certificates.map(cert => (
                  <div key={cert.id} className="flex items-start p-3 bg-muted/30 rounded-xl">
                    <div className="bg-white p-2 rounded-lg mr-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">Issued: {cert.date}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-lg">View</Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No certificates earned yet</p>
            )}
          </CardContent>
        </Card>
        
        <Card className="glass-card border-none">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-accent/10 p-2 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <h2 className="font-semibold">Badges</h2>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            
            {user.badges.length > 0 ? (
              <div className="space-y-4">
                {user.badges.map(badge => (
                  <div key={badge.id} className="flex items-start p-3 bg-muted/30 rounded-xl">
                    <div className="bg-white p-2 rounded-lg mr-3">
                      <badge.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{badge.name}</p>
                      <p className="text-xs text-muted-foreground">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No badges earned yet</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Button variant="outline" className="w-full rounded-xl flex items-center justify-center gap-2 glass-card border-none">
        <LogOut className="h-4 w-4 text-primary" />
        <span>Sign Out</span>
      </Button>
    </div>
  );
};

export default Profile;
