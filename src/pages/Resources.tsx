
import React, { useState } from 'react';
import { Search, BookOpen, FileText, AlertTriangle, ExternalLink, FileType } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import ReportModalExample from '@/components/ReportModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showReportModal, setShowReportModal] = useState(false);

  const resources = [
    {
      id: 1,
      title: 'Student Guide to Online Privacy',
      description: 'Comprehensive guide for protecting your privacy online',
      type: 'guide',
      source: 'SURAKSHA Team',
      category: 'Privacy',
      link: 'https://cybersecurityguide.org/resources/internet-safety/'
    },
    {
      id: 2,
      title: 'Identifying and Reporting Phishing Attempts',
      description: 'Learn how to spot and report phishing emails',
      type: 'article',
      source: 'Cyber Security Center',
      category: 'Threats',
      link: "https://www.cisco.com/c/en/us/products/security/secure-access/phishing-for-dummies.html?utm_medium=search-paid&utm_source=g+google&utm_campaign=CSA_APJC_IN_EN_GS_Nonbrand_Threats_T1&utm_content=CSA-CONT-COX-FY24-Q1-Content-Ebook-Phishing-for-Dummies-2023-ABX&utm_term=how%20to%20spot%20a%20phishing%20email&utm_matchtype=p&utm_device=c&_bt=717467644243&_bk=how%20to%20spot%20a%20phishing%20email&_bm=p&_bn=g&_bg=166647662303&gad_source=1&gbraid=0AAAAA-OrpYqiXMU7WK0lz3nNkAKCpcgqQ&gclid=Cj0KCQjw8cHABhC-ARIsAJnY12zZvXa8zeyiz0bHgokDp1UvpA8_ZeZ0BWeHWpFqqfYRA_yvprhuufgaAuz4EALw_wcB"
    },
    {
      id: 3,
      title: 'Essential Cybersecurity Tools for Students',
      description: 'Tools and techniques that are used to defend networks, systems and data against cyberattacks',
      type: 'tool',
      source: 'Cyber Security Center',
      category: 'Hackathon',
      link: "https://www.devry.edu/blog/cyber-security-tools-and-techniques.html"
    },
    {
      id: 4,
      title: 'Password Management Best Practices',
      description: 'Guidelines for creating and managing secure passwords',
      type: 'guide',
      source: 'SURAKSHA Team',
      category: 'Security',
      link: "https://www.liventus.com/guidelines-for-creating-secure-passwords/"
    },
    {
      id: 5,
      title: 'Two-Factor Authentication Setup Guide',
      description: 'Step-by-step instructions for enabling 2FA on your accounts',
      type: 'guide',
      source: 'Cyber Security Center',
      category: 'Security',
      link: "https://www.domainindia.com/login/knowledgebase/708/-Step-by-Step-Guide-to-Enabling-Two-Factor-Authentication-2FA-in-Your-DomainIndia.com-Account.html"
    },
    {
      id: 6,
      title: 'Recent Cyber Threats Targeting Students',
      description: 'Analysis of recent cyber attacks aimed at university students',
      type: 'article',
      source: 'Security Awareness Blog',
      category: 'Threats',
      link: "https://www.schellman.com/blog/cybersecurity/cybersecurity-incidents-at-universities-2023"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className="h-5 w-5 text-green-500" />;
      case 'article':
        return <FileText className="h-5 w-5 text-blue-500" />;
      case 'tool':
        return <FileType className="h-5 w-5 text-purple-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide':
        return 'bg-green-100 text-green-800';
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'tool':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-4 pb-20 pt-20">
      <h1 className="section-title">Resources</h1>

      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4 mb-8">
        {filteredResources.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No resources found matching your search
          </div>
        ) : (
          filteredResources.map(resource => (
            <Card key={resource.id} className="security-card">
              <CardContent className="p-4">
                <div className="flex">
                  <div className="mr-3">
                    {getTypeIcon(resource.type)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{resource.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      </div>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0" /></a>
                    </div>

                    <div className="flex items-center mt-3">
                      <Badge className={getTypeColor(resource.type)}>
                        {getTypeLabel(resource.type)}
                      </Badge>
                      <span className="text-xs text-gray-500 ml-3">
                        Source: {resource.source}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex items-start">
        <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium text-amber-800">Report a Security Incident</h3>
          <p className="text-sm text-amber-700 mt-1">
            If you encounter any suspicious activity or believe you may have been targeted by a cyber attack, please report it immediately.
          </p>
          <button
            onClick={() => setShowReportModal(true)}
            className="text-sm font-medium text-amber-800 underline mt-2 inline-block"
          >
            Report Now
          </button>

        </div>
      </div>
      {showReportModal && (
        <ReportModalExample onClose={() => setShowReportModal(false)} />
      )}

    </div>
  );
};

export default Resources;
