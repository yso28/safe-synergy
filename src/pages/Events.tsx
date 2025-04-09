
import React, { useState } from 'react';
import { Calendar, Search, Filter, MapPin, Clock, Users } from 'lucide-react';
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
    <div className="container px-4 pb-20 pt-20">
      <h1 className="section-title">Workshops & Seminars</h1>
      
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search events..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="all" onValueChange={setFilter}>
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="workshop">Workshops</TabsTrigger>
            <TabsTrigger value="seminar">Seminars</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No events found matching your criteria
          </div>
        ) : (
          filteredEvents.map(event => (
            <Card key={event.id} className="security-card">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <Badge variant={event.type === 'workshop' ? 'secondary' : 'outline'} className="mt-1">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                
                <div className="mt-4 space-y-2 text-sm text-gray-600">
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
                
                <Button className="w-full mt-4">Register</Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Events;
