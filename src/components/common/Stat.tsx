import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';

interface StatProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

export function Stat({ value, label, icon }: StatProps) {
  return (
    <motion.div 
      className="p-4 rounded-xl bg-gray-50"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <motion.div 
        className="text-2xl font-bold mb-1"
        style={{ color: colors.primary }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {value}
      </motion.div>
      <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
        {icon}
        {label}
      </div>
    </motion.div>
  );
}