
import React from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, User, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Forum = () => {
  const discussions = [
    {
      id: 1,
      title: 'How to spot phishing emails?',
      author: 'Alex Johnson',
      role: 'Student',
      date: '2 days ago',
      replies: 8,
      likes: 12,
      tags: ['Phishing', 'Email Security'],
      pinned: true
    },
    {
      id: 2,
      title: 'Best free antivirus software for students?',
      author: 'Jamie Smith',
      role: 'Student',
      date: '1 week ago',
      replies: 15,
      likes: 7,
      tags: ['Antivirus', 'Tools'],
      pinned: false
    },
    {
      id: 3,
      title: 'Recent ransomware targeting universities',
      author: 'Dr. Sarah Chen',
      role: 'Expert',
      date: '3 days ago',
      replies: 6,
      likes: 18,
      tags: ['Ransomware', 'Threat Alert'],
      pinned: true
    },
    {
      id: 4,
      title: 'Campus Wi-Fi security concerns',
      author: 'Mike Torres',
      role: 'Student',
      date: '5 days ago',
      replies: 3,
      likes: 5,
      tags: ['Wi-Fi', 'Network Security'],
      pinned: false
    },
    {
      id: 5,
      title: 'How to secure your social media accounts',
      author: 'Priya Patel',
      role: 'Moderator',
      date: '1 day ago',
      replies: 11,
      likes: 24,
      tags: ['Social Media', 'Account Security'],
      pinned: false
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Expert':
        return 'bg-blue-100 text-blue-800';
      case 'Moderator':
        return 'bg-purple-100 text-purple-800';
      case 'Student':
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <div className="container px-4 pb-20 pt-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="section-title">Community Forum</h1>
        <Button size="sm" className="flex items-center gap-1">
          <Plus className="h-4 w-4" /> New Topic
        </Button>
      </div>
      
      <Tabs defaultValue="recent">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="solved">Solved</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="mt-4">
          <div className="space-y-3">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="security-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(discussion.author)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium">{discussion.title}</h3>
                        {discussion.pinned && (
                          <Badge variant="outline" className="text-xs h-5">Pinned</Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="mr-2">{discussion.author}</span>
                        <Badge variant="secondary" className={`text-xs h-5 ${getRoleColor(discussion.role)}`}>
                          {discussion.role}
                        </Badge>
                        <span className="mx-2">•</span>
                        <span>{discussion.date}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {discussion.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="flex items-center mr-4">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="popular" className="mt-4">
          <div className="flex items-center justify-center h-24 text-gray-500">
            Loading popular discussions...
          </div>
        </TabsContent>
        
        <TabsContent value="solved" className="mt-4">
          <div className="flex items-center justify-center h-24 text-gray-500">
            Loading solved discussions...
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Forum;
