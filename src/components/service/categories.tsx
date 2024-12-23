import React from 'react';
import { Wrench, Battery, Truck, Disc } from 'lucide-react';
import type { ServiceCategory } from '../../types';

export interface CategoryOption {
  id: ServiceCategory;
  icon: React.ReactNode;
  label: string;
  description: string;
}

export const categories: CategoryOption[] = [
  { 
    id: 'MECHANICAL', 
    icon: <Wrench className="w-8 h-8" />, 
    label: 'Mechanical',
    description: 'Engine problems, brake issues, and general repairs'
  },
  { 
    id: 'ELECTRICAL', 
    icon: <Battery className="w-8 h-8" />, 
    label: 'Electrical',
    description: 'Battery, alternator, and electrical system issues'
  },
  { 
    id: 'TOWING', 
    icon: <Truck className="w-8 h-8" />, 
    label: 'Towing',
    description: 'Vehicle transport and recovery services'
  },
  { 
    id: 'TIRE_SERVICE', 
    icon: <Disc className="w-8 h-8" />, 
    label: 'Tire Service',
    description: 'Flat tires, punctures, and tire replacement'
  },
];