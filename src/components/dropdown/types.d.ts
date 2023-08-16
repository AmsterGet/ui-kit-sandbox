import { MouseEventHandler, ReactNode } from 'react';

export type DropdownVariant = 'default' | 'ghost';
export type DropdownOptionValue =
  | string
  | boolean
  | number
  | { value: string | number; label: string };
export type RenderDropdownOption = (value: DropdownOptionValue) => void;

export type DropdownOptionType = {
  value: DropdownOptionValue;
  label: ReactNode;
  disabled?: boolean;
  hidden?: boolean;
  title?: string;
  groupRef?: string;
};

export interface DropdownOptionProps {
  selected?: boolean;
  onChange?: (value: DropdownOptionValue) => void;
  highlightHovered?: boolean;
  render?: RenderDropdownOption;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  option: DropdownOptionType;
}
