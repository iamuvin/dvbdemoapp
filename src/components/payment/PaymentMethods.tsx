import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet, Shield } from 'lucide-react';
import { colors } from '../../theme/colors';

interface PaymentMethodProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentMethods({ isOpen, onClose }: PaymentMethodProps) {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl w-full max-w-md"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Payment Methods</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            <motion.button 
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 hover:border-primary transition-colors"
              style={{ borderColor: colors.primary }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <CreditCard className="text-gray-600" />
                <div>
                  <p className="font-medium">Credit Card</p>
                  <p className="text-sm text-gray-600">**** **** **** 4242</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                   style={{ borderColor: colors.primary }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.primary }} />
              </div>
            </motion.button>

            <motion.button 
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 hover:border-primary transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <Wallet className="text-gray-600" />
                <div>
                  <p className="font-medium">Cash Payment</p>
                  <p className="text-sm text-gray-600">Pay after service</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2" />
            </motion.button>

            <motion.button 
              className="w-full flex items-center justify-between p-4 rounded-xl border-2 hover:border-primary transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-4">
                <Shield className="text-gray-600" />
                <div>
                  <p className="font-medium">Insurance Coverage</p>
                  <p className="text-sm text-gray-600">Policy: INS123456</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2" />
            </motion.button>
          </div>

          <motion.button
            className="w-full mt-6 py-3 rounded-xl text-white font-medium"
            style={{ backgroundColor: colors.primary }}
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Done
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}