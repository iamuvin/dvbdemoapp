import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, MessageSquare, Star } from 'lucide-react';
import { Button } from '../common/Button';
import type { ServiceProvider } from '../../types';
import { colors } from '../../theme/colors';

interface ServiceRequestProps {
  provider?: ServiceProvider;
  onCancel: () => void;
}

export function ServiceRequest({ provider, onCancel }: ServiceRequestProps) {
  if (!provider) return null;

  return (
    <div className="p-6 space-y-6">
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={provider.photoUrl}
              alt={provider.name}
              className="w-20 h-20 rounded-2xl object-cover border-2"
              style={{ borderColor: colors.primary }}
            />
            <div>
              <h3 className="text-xl font-bold mb-1">{provider.name}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} />
                <span>8 mins away</span>
                <span className="text-gray-300">•</span>
                <Star size={16} className="text-yellow-400 fill-current" />
                <span>{provider.rating}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>
              AED 150
            </div>
            <div className="text-sm text-gray-500">Estimated</div>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            variant="secondary"
            fullWidth
            icon={<Phone size={18} />}
          >
            Call
          </Button>
          
          <Button
            variant="outline"
            fullWidth
            icon={<MessageSquare size={18} />}
          >
            Message
          </Button>
        </div>
      </motion.div>

      <Button
        variant="ghost"
        fullWidth
        onClick={onCancel}
      >
        Cancel Request
      </Button>
    </div>
  );
}