import type { LucideIcon } from "lucide-react";

export interface DropdownOptions {
  label: string;
  value: string;
  subLabel?: string;
  avatarText?: string;
  avatarType?:string;
  icon?: LucideIcon;

}

export interface Dropdowns {
  label: string;
  value: string;
  icon?: LucideIcon;
  actionText?: string;
  option?: DropdownOptions[];
}
