import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useResponsive } from '../../hooks/useResponsive';
import type { Location, ServiceProvider } from '../../types';
import { colors } from '../../theme/colors';

interface MapProps {
  userLocation: Location;
  serviceProvider?: ServiceProvider;
  isLoading?: boolean;
}

export function Map({ userLocation, serviceProvider, isLoading }: MapProps) {
  const { isMobile } = useResponsive();

  return (
    <div 
      className={`relative w-full bg-gray-100 ${
        isMobile ? 'h-[45vh]' : 'h-[calc(100vh-5rem)]'
      }`}
      style={{ zIndex: 10 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute -inset-4 rounded-full"
              style={{ backgroundColor: colors.primary }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <MapPin size={32} style={{ color: colors.primary }} className="drop-shadow-lg" />
          </div>
        </motion.div>

        {serviceProvider && (
          <motion.div 
            className="absolute top-[40%] left-[55%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', bounce: 0.5 }}
          >
            <MapPin size={32} style={{ color: colors.secondary }} className="drop-shadow-lg" />
          </motion.div>
        )}

        <motion.div 
          className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-500" size={20} />
            <span className="text-sm font-medium">
              {isLoading ? 'Locating...' : 'Dubai Marina'}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}