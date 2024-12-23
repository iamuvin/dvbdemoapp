import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { colors } from '../../theme/colors';

interface ServiceAlertProps {
  message: string;
  type?: 'info' | 'success' | 'warning';
  onClose: () => void;
}

export function ServiceAlert({ message, type = 'info', onClose }: ServiceAlertProps) {
  const getColor = () => {
    switch (type) {
      case 'success':
        return colors.success;
      case 'warning':
        return colors.accent;
      default:
        return colors.primary;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg bg-white"
        style={{ border: `2px solid ${getColor()}` }}
      >
        <Bell size={20} style={{ color: getColor() }} />
        <p className="text-gray-800">{message}</p>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>
      </div>
    </motion.div>
  );
}