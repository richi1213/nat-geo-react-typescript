import { ChevronDown } from 'lucide-react';
import {
  Label,
  RadioGroup,
  RadioGroupItem,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  Button,
} from '@/components';
import { useState, useEffect } from 'react';
import type { FlexibleDropdownProps } from './types';

export const FlexibleDropdown: React.FC<FlexibleDropdownProps> = ({
  options,
  type,
  value,
  onChange,
  triggerLabel = 'Select option',
}) => {
  const [selectedRadio, setSelectedRadio] = useState<string>(value as string);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>(
    value as string[],
  );

  useEffect(() => {
    if (type === 'radio') {
      setSelectedRadio(value as string);
    } else {
      setSelectedCheckboxes(value as string[]);
    }
  }, [value, type]);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const newSelection = checked
      ? [...selectedCheckboxes, value]
      : selectedCheckboxes.filter((item) => item !== value);

    setSelectedCheckboxes(newSelection);
    onChange?.(newSelection);
  };

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
    onChange?.(value);
  };

  const getDisplayLabel = () => {
    if (type === 'radio') {
      const selected = options.find((opt) => opt.value === selectedRadio);
      return selected ? selected.label : triggerLabel;
    } else {
      const count = selectedCheckboxes.length;
      return count > 0 ? `${triggerLabel} (${count})` : triggerLabel;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size='sm'
          variant='outline'
          className='justify-between rounded-none border-none bg-gray-200 font-normal hover:bg-gray-300'
        >
          {getDisplayLabel()}
          <ChevronDown className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='start'
        className='w-[200px] bg-foreground p-3 text-primary-foreground'
      >
        {type === 'radio' ? (
          <RadioGroup
            value={selectedRadio}
            onValueChange={handleRadioChange}
            className='space-y-2'
          >
            {options.map((option) => (
              <div key={option.value} className='flex items-center space-x-2'>
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className='font-normal'>
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className='space-y-2'>
            {options.map((option) => (
              <div key={option.value} className='flex items-center space-x-2'>
                <Checkbox
                  id={option.value}
                  checked={selectedCheckboxes.includes(option.value)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(option.value, checked as boolean)
                  }
                />
                <Label htmlFor={option.value} className='font-normal'>
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
