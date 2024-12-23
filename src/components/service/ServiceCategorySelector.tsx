import React from 'react';
import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import { useResponsive } from '../../hooks/useResponsive';
import { Button } from '../common/Button';
import { serviceCategories } from './categories/data';
import { CategoryIcon } from './categories/CategoryIcon';
import type { ServiceCategory } from '../../types';
import { colors } from '../../theme/colors';

interface Props {
  selected?: ServiceCategory;
  onSelect: (category: ServiceCategory) => void;
  onRequestService: () => void;
  onAddVehicle: () => void;
  isSearching: boolean;
}

export function ServiceCategorySelector({ 
  selected, 
  onSelect, 
  onRequestService,
  onAddVehicle,
  isSearching 
}: Props) {
  const { isMobile } = useResponsive();

  return (
    <div className={`p-4 ${isMobile ? 'space-y-4' : 'space-y-6'}`}>
      <div>
        <h2 className={`font-bold ${isMobile ? 'text-xl' : 'text-2xl'} mb-2`}>
          What's the issue?
        </h2>
        <p className="text-gray-600">Select the type of service you need</p>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
        {serviceCategories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`flex items-center p-4 rounded-xl border-2 transition-colors
              ${selected === category.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200 hover:border-primary/30'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              borderColor: selected === category.id ? colors.primary : undefined,
              color: selected === category.id ? colors.primary : undefined
            }}
          >
            <div className="mr-4">
              <CategoryIcon 
                icon={category.icon} 
                size={isMobile ? 20 : 24}
                className={selected === category.id ? 'text-primary' : 'text-gray-600'} 
              />
            </div>
            <div className="text-left flex-1">
              <span className="font-semibold block mb-1">{category.label}</span>
              <span className="text-sm text-gray-500">{category.description}</span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="space-y-3 pt-4">
        <Button
          variant="outline"
          fullWidth
          size={isMobile ? "md" : "lg"}
          onClick={onAddVehicle}
          icon={<Truck size={20} />}
        >
          Add Vehicle Details
        </Button>

        <Button
          variant="primary"
          fullWidth
          size={isMobile ? "md" : "lg"}
          onClick={onRequestService}
          disabled={!selected}
          isLoading={isSearching}
        >
          {isSearching ? 'Finding Service Provider...' : 'Request Service'}
        </Button>
      </div>
    </div>
  );
}