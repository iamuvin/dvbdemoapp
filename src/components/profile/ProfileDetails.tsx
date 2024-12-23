import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { colors } from '../../theme/colors';

interface ProfileDetailsProps {
  name: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
}

export function ProfileDetails({ name, email, phone, location, joinDate }: ProfileDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <div className="space-y-3">
          <motion.div 
            className="flex items-center gap-3 text-gray-600"
            whileHover={{ x: 5 }}
          >
            <Mail size={18} />
            <span>{email}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 text-gray-600"
            whileHover={{ x: 5 }}
          >
            <Phone size={18} />
            <span>{phone}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 text-gray-600"
            whileHover={{ x: 5 }}
          >
            <MapPin size={18} />
            <span>{location}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 text-gray-600"
            whileHover={{ x: 5 }}
          >
            <Calendar size={18} />
            <span>Member since {joinDate}</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}