export type SearchbarProps = {
  keyword: string;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type Option = {
  value: string;
  label: string;
};

export type FlexibleDropdownProps = {
  options: Option[];
  type: 'radio' | 'checkbox';
  onChange?: (value: string | string[]) => void;
  triggerLabel?: string;
  value: string | string[];
};
