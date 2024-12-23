import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
}

export function AnimatedButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '',
  disabled = false 
}: AnimatedButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary,
          color: 'white',
        };
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
          color: 'white',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors.primary,
          border: `2px solid ${colors.primary}`,
        };
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`py-3 px-6 rounded-lg font-medium transition-colors ${className}`}
      style={{
        ...getStyles(),
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </motion.button>
  );
}