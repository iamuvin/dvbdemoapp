import React from 'react';
import { motion } from 'framer-motion';
import { useResponsive } from '../../hooks/useResponsive';

interface BottomSheetProps {
  children: React.ReactNode;
}

export function BottomSheet({ children }: BottomSheetProps) {
  const { isMobile } = useResponsive();

  return (
    <motion.div
      className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg 
        ${isMobile ? 'max-h-[80vh]' : 'max-h-[60vh] max-w-2xl mx-auto right-8 left-8 rounded-3xl bottom-8'}`}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25 }}
      style={{ 
        overflowY: 'auto', 
        WebkitOverflowScrolling: 'touch',
        zIndex: 30
      }}
    >
      <div className="sticky top-0 bg-white pt-3 pb-2 px-4">
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
      </div>
      <div className="overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
}