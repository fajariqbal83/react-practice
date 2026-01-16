export interface DropdownOptions {
  label: string;
  value: string;
  icon?: React.ReactNode;

}

export interface Dropdowns {
  label: string;
  value: string;
  actionText?: string;
  option?: DropdownOptions[];
}
