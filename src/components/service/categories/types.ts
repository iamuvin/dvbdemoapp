import type { ServiceCategory } from '../../../types';
import type { LucideIcon } from 'lucide-react';

export interface CategoryOption {
  id: ServiceCategory;
  icon: LucideIcon;
  label: string;
  description: string;
}