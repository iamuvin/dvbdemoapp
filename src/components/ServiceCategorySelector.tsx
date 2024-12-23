import React from 'react';
import { Wrench, Battery, Truck, Disc } from 'lucide-react';
import type { ServiceCategory } from '../types';

interface CategoryOption {
  id: ServiceCategory;
  icon: React.ReactNode;
  label: string;
}

const categories: CategoryOption[] = [
  { id: 'MECHANICAL', icon: <Wrench className="w-6 h-6" />, label: 'Mechanical' },
  { id: 'ELECTRICAL', icon: <Battery className="w-6 h-6" />, label: 'Electrical' },
  { id: 'TOWING', icon: <Truck className="w-6 h-6" />, label: 'Towing' },
  { id: 'TIRE_SERVICE', icon: <Disc className="w-6 h-6" />, label: 'Tire Service' },
];

interface Props {
  onSelect: (category: ServiceCategory) => void;
  selected?: ServiceCategory;
}

export function ServiceCategorySelector({ onSelect, selected }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all
            ${selected === category.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
            }`}
        >
          <div className={`${selected === category.id ? 'text-blue-500' : 'text-gray-600'}`}>
            {category.icon}
          </div>
          <span className="mt-2 text-sm font-medium">{category.label}</span>
        </button>
      ))}
    </div>
  );
}