
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters' }).max(100),
  content: z.string().min(20, { message: 'Content must be at least 20 characters' }),
  tags: z.array(z.string()).min(1, { message: 'Select at least one tag' }),
});

const tagOptions = [
  'Phishing', 'Email Security', 'Ransomware', 'Antivirus', 'Tools', 
  'Threat Alert', 'Wi-Fi', 'Network Security', 'Social Media', 'Account Security'
];

const NewTopicDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      tags: [],
    },
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
    
    // Update form value
    const newTags = selectedTags.includes(tag) 
      ? selectedTags.filter(t => t !== tag) 
      : [...selectedTags, tag];
      
    form.setValue('tags', newTags);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Here you would typically send the data to your backend
    console.log('New topic submitted:', values);
    
    toast.success('Topic created successfully!');
    setOpen(false);
    form.reset();
    setSelectedTags([]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="flex items-center gap-1">
          <Plus className="h-4 w-4" /> New Topic
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Topic</DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Topic title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tags"
              render={() => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tagOptions.map((tag) => (
                      <Badge 
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${selectedTags.includes(tag) ? '' : 'bg-transparent'}`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                        {selectedTags.includes(tag) && (
                          <X className="ml-1 h-3 w-3" />
                        )}
                      </Badge>
                    ))}
                  </div>
                  {form.formState.errors.tags && (
                    <p className="text-sm font-medium text-destructive mt-1">
                      {form.formState.errors.tags.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your topic or ask your question..." 
                      className="min-h-32" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-2 pt-2">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Post Topic</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTopicDialog;
