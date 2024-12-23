import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Star, Calendar, Shield, CreditCard } from 'lucide-react';
import { colors } from '../theme/colors';

interface UserProfileProps {
  onClose: () => void;
  onPaymentClick: () => void;
}

export function UserProfile({ onClose, onPaymentClick }: UserProfileProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white rounded-xl shadow-xl overflow-hidden max-w-md w-full"
    >
      {/* Header with gradient background */}
      <div 
        className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600 p-6"
        style={{ 
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full"
        >
          ×
        </button>
        
        <div className="absolute -bottom-16 left-6 flex items-end space-x-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"
              alt="Profile"
              className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-lg"
            />
            <button 
              className="absolute bottom-2 right-2 p-2 rounded-full bg-white shadow-lg"
              style={{ color: colors.primary }}
            >
              <Camera size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-6 pb-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Ahmed Mohammed</h2>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">Dubai Marina, Dubai</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 rounded-xl" style={{ backgroundColor: colors.background }}>
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>4.8</div>
            <div className="text-sm text-gray-600 flex items-center justify-center">
              <Star size={14} className="mr-1" />
              Rating
            </div>
          </div>
          <div className="text-center p-3 rounded-xl" style={{ backgroundColor: colors.background }}>
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>12</div>
            <div className="text-sm text-gray-600 flex items-center justify-center">
              <Calendar size={14} className="mr-1" />
              Trips
            </div>
          </div>
          <div className="text-center p-3 rounded-xl" style={{ backgroundColor: colors.background }}>
            <div className="text-2xl font-bold" style={{ color: colors.primary }}>3</div>
            <div className="text-sm text-gray-600 flex items-center justify-center">
              <Shield size={14} className="mr-1" />
              Cars
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <button
            onClick={onPaymentClick}
            className="w-full flex items-center justify-between p-4 rounded-xl transition-colors"
            style={{ backgroundColor: colors.background }}
          >
            <div className="flex items-center">
              <CreditCard size={20} style={{ color: colors.secondary }} />
              <span className="ml-3 font-medium">Payment Methods</span>
            </div>
            <span className="text-sm text-gray-500">3 cards</span>
          </button>

          <button
            className="w-full flex items-center justify-between p-4 rounded-xl transition-colors"
            style={{ backgroundColor: colors.background }}
          >
            <div className="flex items-center">
              <Shield size={20} style={{ color: colors.secondary }} />
              <span className="ml-3 font-medium">Insurance Details</span>
            </div>
            <span className="text-sm text-gray-500">View Policy</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}