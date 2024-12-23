import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md overflow-hidden ${className} ${
        hoverable ? 'cursor-pointer' : ''
      }`}
      whileHover={hoverable ? { scale: 1.02, y: -2 } : undefined}
      whileTap={hoverable ? { scale: 0.98 } : undefined}
      style={{ backgroundColor: colors.background }}
    >
      {children}
    </motion.div>
  );
}