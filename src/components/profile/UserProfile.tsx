import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Star, Calendar, Shield, CreditCard, ChevronRight } from 'lucide-react';
import { colors } from '../../theme/colors';
import { useResponsive } from '../../hooks/useResponsive';
import { Button } from '../common/Button';
import { Stat } from '../common/Stat';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentClick: () => void;
}

export function UserProfile({ isOpen, onClose, onPaymentClick }: UserProfileProps) {
  const { isMobile } = useResponsive();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-h-[90vh] overflow-y-auto
              ${isMobile ? 'max-w-[95%]' : 'max-w-md'}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Gradient Header */}
            <div 
              className="relative h-48 p-6"
              style={{ 
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
              }}
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                ×
              </button>
              
              <div className="absolute -bottom-16 left-6">
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"
                    alt="Profile"
                    className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg"
                  />
                  <motion.button 
                    className="absolute bottom-2 right-2 p-2 rounded-full bg-white shadow-lg opacity-0 group-hover:opacity-100"
                    style={{ color: colors.primary }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Camera size={18} />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-20 px-6 pb-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Ahmed Mohammed</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">Dubai Marina, Dubai</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <Stat 
                  value={4.8} 
                  label="Rating" 
                  icon={<Star size={14} className="text-yellow-400" />} 
                />
                <Stat 
                  value={12} 
                  label="Trips" 
                  icon={<Calendar size={14} />} 
                />
                <Stat 
                  value={3} 
                  label="Cars" 
                  icon={<Shield size={14} />} 
                />
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <motion.button
                  onClick={onPaymentClick}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: colors.primary + '20' }}>
                      <CreditCard size={20} style={{ color: colors.primary }} />
                    </div>
                    <div>
                      <span className="font-medium">Payment Methods</span>
                      <p className="text-sm text-gray-500">Manage your payment options</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </motion.button>

                <motion.button
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: colors.secondary + '20' }}>
                      <Shield size={20} style={{ color: colors.secondary }} />
                    </div>
                    <div>
                      <span className="font-medium">Insurance Details</span>
                      <p className="text-sm text-gray-500">View your policy information</p>
                    </div>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </motion.button>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={onClose}
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}