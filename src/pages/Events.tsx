
import React, { useState } from 'react';
import { Calendar, Search, Filter, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: 'Blockchain Security Workshop',
      date: 'April 15, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Tech Building, Room 305',
      type: 'workshop',
      capacity: 30,
      registered: 18
    },
    {
      id: 2,
      title: 'Cyber Crime Prevention Seminar',
      date: 'April 20, 2025',
      time: '3:30 PM - 5:30 PM',
      location: 'Student Center, Auditorium',
      type: 'seminar',
      capacity: 100,
      registered: 65
    },
    {
      id: 3,
      title: 'Ethical Hacking Bootcamp',
      date: 'April 25-26, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Online (Zoom)',
      type: 'workshop',
      capacity: 50,
      registered: 42
    },
    {
      id: 4,
      title: 'Data Privacy Awareness Day',
      date: 'May 2, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Library Conference Room',
      type: 'seminar',
      capacity: 75,
      registered: 30
    }
  ];
  
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || event.type === filter;
    return matchesSearch && matchesFilter;
  });
  
  return (
    <div className="container px-4 pb-24 pt-24">
      <div className="flex items-center justify-between mb-6">
        <h1 className="section-title">Events</h1>
        <Button size="icon" variant="outline" className="rounded-full h-9 w-9">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mb-6 space-y-4">
        <div className="relative">
          <div className="glass-card flex items-center px-4 py-2">
            <Search className="text-muted-foreground h-4 w-4 mr-2" />
            <Input
              placeholder="Search events..." 
              className="border-none bg-transparent shadow-none focus-visible:ring-0 p-0 h-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
          <TabsList className="grid grid-cols-3 w-full glass-card p-1">
            <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">All</TabsTrigger>
            <TabsTrigger value="workshop" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Workshops</TabsTrigger>
            <TabsTrigger value="seminar" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Seminars</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500 glass-card">
            No events found matching your criteria
          </div>
        ) : (
          filteredEvents.map(event => (
            <Card key={event.id} className="glass-card overflow-hidden border-none">
              <CardContent className="p-0">
                <div className="relative">
                  <div className={`h-3 w-full ${event.type === 'workshop' ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gradient-to-r from-amber-400 to-orange-500'}`}></div>
                  <div className="absolute right-4 -bottom-4 bg-white rounded-full p-2 shadow-md">
                    <Calendar className={`h-5 w-5 ${event.type === 'workshop' ? 'text-primary' : 'text-amber-500'}`} />
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="mb-3">
                    <Badge variant={event.type === 'workshop' ? 'default' : 'secondary'} className="mb-2">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{event.registered}/{event.capacity} Registered</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-muted/50 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`${event.type === 'workshop' ? 'bg-primary' : 'bg-amber-500'} h-full rounded-full`}
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full ml-2 bg-muted/50">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Events;
