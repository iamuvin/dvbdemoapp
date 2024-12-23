import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Shield, Moon, Globe, Lock, 
  ChevronRight, ToggleLeft 
} from 'lucide-react';
import { colors } from '../../theme/colors';

interface SettingItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  action?: () => void;
  toggle?: boolean;
}

interface SettingsPanelProps {
  onClose: () => void;
}

export function SettingsPanel({ onClose }: SettingsPanelProps) {
  const settings: SettingItem[] = [
    {
      id: 'notifications',
      icon: <Bell size={20} />,
      label: 'Notifications',
      description: 'Manage your notification preferences',
      toggle: true
    },
    {
      id: 'privacy',
      icon: <Shield size={20} />,
      label: 'Privacy',
      description: 'Control your privacy settings'
    },
    {
      id: 'darkMode',
      icon: <Moon size={20} />,
      label: 'Dark Mode',
      description: 'Toggle dark mode theme',
      toggle: false
    },
    {
      id: 'language',
      icon: <Globe size={20} />,
      label: 'Language',
      description: 'Change app language'
    },
    {
      id: 'security',
      icon: <Lock size={20} />,
      label: 'Security',
      description: 'Update security preferences'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Settings</h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {settings.map((setting) => (
          <motion.button
            key={setting.id}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: colors.primary + '20' }}
              >
                {React.cloneElement(setting.icon as React.ReactElement, {
                  style: { color: colors.primary }
                })}
              </div>
              <div className="text-left">
                <span className="font-medium block">{setting.label}</span>
                <span className="text-sm text-gray-500">{setting.description}</span>
              </div>
            </div>
            {setting.toggle !== undefined ? (
              <ToggleLeft 
                size={24} 
                className={setting.toggle ? 'text-primary' : 'text-gray-400'} 
              />
            ) : (
              <ChevronRight size={20} className="text-gray-400" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}