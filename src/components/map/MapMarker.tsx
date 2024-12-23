import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { colors } from '../../theme/colors';

interface MapMarkerProps {
  type: 'user' | 'provider';
  pulse?: boolean;
}

export function MapMarker({ type, pulse = false }: MapMarkerProps) {
  const color = type === 'user' ? colors.primary : colors.secondary;

  return (
    <div className="relative">
      {pulse && (
        <motion.div
          className="absolute -inset-4 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <MapPin size={32} style={{ color }} className="drop-shadow-lg" />
      </motion.div>
    </div>
  );
}