
import React from 'react';
import { User, Settings, Award, BookOpen, Shield, LogOut } from 'lucide-react';
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
    <div className="container px-4 pb-20 pt-20">
      <div className="text-center mb-6">
        <Avatar className="h-24 w-24 mx-auto mb-4">
          <AvatarFallback className="text-xl bg-primary text-primary-foreground">AJ</AvatarFallback>
        </Avatar>
        
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>
        <Badge className="mt-2">{user.role}</Badge>
        
        <div className="flex justify-center mt-4">
          <Button variant="outline" size="sm" className="text-xs">
            <Settings className="h-3 w-3 mr-1" /> Edit Profile
          </Button>
        </div>
      </div>
      
      <Card className="mb-6">
        <CardContent className="p-4">
          <h2 className="font-semibold mb-2">Learning Progress</h2>
          <div className="flex justify-between text-sm mb-1">
            <span>Courses Completed: {user.completedCourses}/{user.totalCourses}</span>
            <span>{Math.round((user.completedCourses / user.totalCourses) * 100)}%</span>
          </div>
          <Progress value={(user.completedCourses / user.totalCourses) * 100} className="h-2" />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <Award className="h-5 w-5 text-primary mr-2" />
              <h2 className="font-semibold">Certificates</h2>
            </div>
            
            {user.certificates.length > 0 ? (
              <ul className="space-y-3">
                {user.certificates.map(cert => (
                  <li key={cert.id} className="flex items-start">
                    <BookOpen className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-gray-500">Issued: {cert.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No certificates earned yet</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <Shield className="h-5 w-5 text-primary mr-2" />
              <h2 className="font-semibold">Badges</h2>
            </div>
            
            {user.badges.length > 0 ? (
              <ul className="space-y-3">
                {user.badges.map(badge => (
                  <li key={badge.id} className="flex items-start">
                    <badge.icon className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{badge.name}</p>
                      <p className="text-xs text-gray-500">{badge.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No badges earned yet</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    </div>
  );
};

export default Profile;
