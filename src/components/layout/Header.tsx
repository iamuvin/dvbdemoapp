import React from 'react';
import { Menu, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';
import { useResponsive } from '../../hooks/useResponsive';

interface HeaderProps {
  onMenuClick: () => void;
  onProfileClick: () => void;
}

export function Header({ onMenuClick, onProfileClick }: HeaderProps) {
  const { isMobile } = useResponsive();

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-6 h-6" style={{ color: colors.secondary }} />
        </motion.button>
        
        <motion.h1 
          className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}
          style={{ color: colors.primary }}
        >
          Dubai Breakdown Assist
        </motion.h1>
        
        <motion.button
          onClick={onProfileClick}
          className="p-2 hover:bg-gray-100 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <User className="w-6 h-6" style={{ color: colors.secondary }} />
        </motion.button>
      </div>
    </motion.header>
  );
}