import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CategoryIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export function CategoryIcon({ icon: Icon, size = 24, className = '' }: CategoryIconProps) {
  return <Icon size={size} className={className} />;
}