import React from 'react';
import { Home, Car, Clock, CreditCard, Shield, MessageSquare, HelpCircle, Settings, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../theme/colors';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const menuItems: MenuItem[] = [
    { icon: <Home size={20} />, label: 'Home', onClick: () => {} },
    { icon: <Car size={20} />, label: 'My Vehicles', onClick: () => {} },
    { icon: <Clock size={20} />, label: 'Trip History', onClick: () => {} },
    { icon: <CreditCard size={20} />, label: 'Payment Methods', onClick: () => {} },
    { icon: <Shield size={20} />, label: 'Insurance', onClick: () => {} },
    { icon: <MessageSquare size={20} />, label: 'Messages', onClick: () => {} },
    { icon: <HelpCircle size={20} />, label: 'Help & Support', onClick: () => {} },
    { icon: <Settings size={20} />, label: 'Settings', onClick: () => {} },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50"
          >
            <div className="p-6">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover border-2"
                    style={{ borderColor: colors.primary }}
                  />
                  <div 
                    className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Ahmed Mohammed</h2>
                  <p className="text-sm text-gray-600">+971 50 123 4567</p>
                </div>
              </motion.div>

              <nav className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={item.onClick}
                    className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span style={{ color: colors.secondary }}>{item.icon}</span>
                    <span className="text-gray-700">{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="w-full flex items-center space-x-4 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors mt-8"
                style={{ color: colors.error }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LogOut size={20} />
                <span>Logout</span>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}