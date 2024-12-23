import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconButton({ 
  icon, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = ''
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: colors.primary, color: 'white' };
      case 'secondary':
        return { backgroundColor: colors.secondary, color: 'white' };
      case 'ghost':
        return { backgroundColor: 'transparent', color: colors.primary };
    }
  };

  return (
    <motion.button
      onClick={onClick}
      className={`rounded-full ${sizeClasses[size]} ${className}`}
      style={getVariantStyles()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.button>
  );
}