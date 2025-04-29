
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { GraduationCap, CheckCircle, Clock } from 'lucide-react';

export type FilterOption = {
  difficulty: string | null;
  status: string | null;
  category: string | null;
};

interface TrainingFiltersProps {
  filters: FilterOption;
  setFilters: React.Dispatch<React.SetStateAction<FilterOption>>;
  categories: string[];
}

const TrainingFilters: React.FC<TrainingFiltersProps> = ({ filters, setFilters, categories }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="glass-card p-3 mb-4 rounded-xl">
      <div className="flex items-center justify-between mb-1">
        <CollapsibleTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 py-1">
              <GraduationCap className="h-3 w-3 mr-1" />
              Filters
            </Badge>
            <span className="text-xs text-muted-foreground">
              {isOpen ? 'Hide' : 'Show'}
            </span>
          </div>
        </CollapsibleTrigger>
        {!isOpen && (
          <div className="flex flex-wrap gap-1">
            {filters.difficulty && (
              <Badge variant="outline" className="text-xs py-0">
                {filters.difficulty}
              </Badge>
            )}
            {filters.status && (
              <Badge variant="outline" className="text-xs py-0">
                {filters.status}
              </Badge>
            )}
            {filters.category && (
              <Badge variant="outline" className="text-xs py-0">
                {filters.category}
              </Badge>
            )}
          </div>
        )}
      </div>
      
      <CollapsibleContent className="space-y-3 mt-2 animate-accordion-down">
        <div>
          <Label className="text-xs mb-1 block">Difficulty</Label>
          <ToggleGroup 
            type="single" 
            value={filters.difficulty || ''} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, difficulty: value || null }))}
            className="flex flex-wrap gap-1"
          >
            <ToggleGroupItem value="Beginner" size="sm" className="text-xs h-7 rounded-lg">
              <GraduationCap className="h-3 w-3 mr-1" />
              Beginner
            </ToggleGroupItem>
            <ToggleGroupItem value="Intermediate" size="sm" className="text-xs h-7 rounded-lg">
              <GraduationCap className="h-3 w-3 mr-1" />
              Intermediate
            </ToggleGroupItem>
            <ToggleGroupItem value="Advanced" size="sm" className="text-xs h-7 rounded-lg">
              <GraduationCap className="h-3 w-3 mr-1" />
              Advanced
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div>
          <Label className="text-xs mb-1 block">Status</Label>
          <ToggleGroup 
            type="single" 
            value={filters.status || ''} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, status: value || null }))}
            className="flex flex-wrap gap-1"
          >
            <ToggleGroupItem value="Not Started" size="sm" className="text-xs h-7 rounded-lg">
              <Clock className="h-3 w-3 mr-1" />
              Not Started
            </ToggleGroupItem>
            <ToggleGroupItem value="In Progress" size="sm" className="text-xs h-7 rounded-lg">
              <Clock className="h-3 w-3 mr-1" />
              In Progress
            </ToggleGroupItem>
            <ToggleGroupItem value="Completed" size="sm" className="text-xs h-7 rounded-lg">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        <div>
          <Label className="text-xs mb-1 block">Category</Label>
          <ToggleGroup 
            type="single" 
            value={filters.category || ''} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, category: value || null }))}
            className="flex flex-wrap gap-1"
          >
            {categories.map((category) => (
              <ToggleGroupItem key={category} value={category} size="sm" className="text-xs h-7 rounded-lg">
                {category}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default TrainingFilters;
