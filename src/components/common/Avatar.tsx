import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';

interface AvatarProps {
  src: string;
  size?: 'sm' | 'md' | 'lg';
  showStatus?: boolean;
  editable?: boolean;
  onEdit?: () => void;
}

export function Avatar({ 
  src, 
  size = 'md', 
  showStatus = false, 
  editable = false,
  onEdit 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-32 h-32'
  };

  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: editable ? 1.05 : 1 }}
    >
      <img
        src={src}
        alt="Avatar"
        className={`${sizeClasses[size]} rounded-full object-cover border-2`}
        style={{ borderColor: colors.primary }}
      />
      
      {showStatus && (
        <div 
          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white"
        />
      )}

      {editable && (
        <motion.button 
          onClick={onEdit}
          className="absolute bottom-0 right-0 p-2 rounded-full bg-white shadow-lg"
          style={{ color: colors.primary }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Camera size={18} />
        </motion.button>
      )}
    </motion.div>
  );
}