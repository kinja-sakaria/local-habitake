// ----------------- Types -----------------

export interface Option {
  label: string;
  value: string;
};

export interface FilterGroupProps  {
  label: string;
  options: Option[];
  selected: string;
  setSelected: (value: string) => void;
  icon?: React.ReactNode;
};

export interface CheckboxGroupProps {
  title: string;
  items: string[];
  selectedItems: string[];
  toggleItem: (item: string) => void;
};