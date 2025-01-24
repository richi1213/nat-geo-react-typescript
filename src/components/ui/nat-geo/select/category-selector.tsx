import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components';
import { ArticleCategories, type ArticleCategory } from '@/supabase';
import type { CategorySelectorProps } from './types';

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  onSelect,
  placeholder = 'Select a category',
  label = 'Categories',
  className = 'w-[180px]',
}) => {
  return (
    <Select onValueChange={(value) => onSelect(value as ArticleCategory)}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {Object.values(ArticleCategories).map((category) => (
            <SelectItem key={category} value={category}>
              {category.charAt(0).toUpperCase() +
                category.slice(1).toLowerCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
