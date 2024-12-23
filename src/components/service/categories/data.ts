import { Wrench, Battery, Truck, Disc } from 'lucide-react';
import type { CategoryOption } from './types';

export const serviceCategories: CategoryOption[] = [
  { 
    id: 'MECHANICAL', 
    icon: Wrench,
    label: 'Mechanical',
    description: 'Engine problems, brake issues, and general repairs'
  },
  { 
    id: 'ELECTRICAL', 
    icon: Battery,
    label: 'Electrical',
    description: 'Battery, alternator, and electrical system issues'
  },
  { 
    id: 'TOWING', 
    icon: Truck,
    label: 'Towing',
    description: 'Vehicle transport and recovery services'
  },
  { 
    id: 'TIRE_SERVICE', 
    icon: Disc,
    label: 'Tire Service',
    description: 'Flat tires, punctures, and tire replacement'
  }
];