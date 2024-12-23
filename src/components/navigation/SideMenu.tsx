import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, Car, Clock, CreditCard, Shield, 
  MessageSquare, HelpCircle, Settings, LogOut 
} from 'lucide-react';
import { colors } from '../../theme/colors';
import { useMenu } from '../../contexts/MenuContext';
import { useResponsive } from '../../hooks/useResponsive';

interface MenuItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuAction: (section: string) => void;
  onLogout: () => void;
}

export function SideMenu({ isOpen, onClose, onMenuAction, onLogout }: SideMenuProps) {
  const { activeSection, navigateTo } = useMenu();
  const { isMobile } = useResponsive();

  const menuItems: MenuItem[] = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'vehicles', icon: <Car size={20} />, label: 'My Vehicles' },
    { id: 'history', icon: <Clock size={20} />, label: 'Trip History' },
    { id: 'payments', icon: <CreditCard size={20} />, label: 'Payment Methods' },
    { id: 'insurance', icon: <Shield size={20} />, label: 'Insurance' },
    { id: 'messages', icon: <MessageSquare size={20} />, label: 'Messages' },
    { id: 'support', icon: <HelpCircle size={20} />, label: 'Help & Support' },
    { id: 'settings', icon: <Settings size={20} />, label: 'Settings' },
  ];

  const handleMenuClick = (itemId: string) => {
    navigateTo(itemId);
    onMenuAction(itemId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className={`fixed top-0 left-0 h-full bg-white shadow-xl z-50 
              ${isMobile ? 'w-[280px]' : 'w-[320px]'}`}
          >
            <div className="flex flex-col h-full">
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

                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                        ${activeSection === item.id 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'}`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span style={{ color: activeSection === item.id ? colors.primary : colors.secondary }}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-6 border-t">
                <motion.button
                  onClick={onLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </motion.button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}