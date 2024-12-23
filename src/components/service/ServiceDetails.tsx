import React from 'react';
import { motion } from 'framer-motion';
import { Tool, Battery, Truck, Disc, Clock, DollarSign, MapPin } from 'lucide-react';
import { colors } from '../../theme/colors';

interface ServiceDetail {
  title: string;
  description: string;
  price: string;
  eta: string;
  coverage: string[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  MECHANICAL: {
    title: 'Mechanical Services',
    description: 'Professional mechanical repair services for all vehicle types',
    price: 'From AED 150',
    eta: '15-30 minutes',
    coverage: [
      'Engine diagnostics and repair',
      'Brake system service',
      'Transmission issues',
      'Cooling system repair',
      'General mechanical inspection'
    ]
  },
  ELECTRICAL: {
    title: 'Electrical Services',
    description: 'Expert electrical system diagnosis and repair',
    price: 'From AED 120',
    eta: '15-25 minutes',
    coverage: [
      'Battery replacement',
      'Alternator repair',
      'Starter motor issues',
      'Electrical diagnostics',
      'Wiring repairs'
    ]
  },
  TOWING: {
    title: 'Towing Services',
    description: '24/7 reliable towing and recovery services',
    price: 'From AED 200',
    eta: '20-40 minutes',
    coverage: [
      'Flatbed towing',
      'Motorcycle towing',
      'Long-distance towing',
      'Accident recovery',
      'Off-road recovery'
    ]
  },
  TIRE_SERVICE: {
    title: 'Tire Services',
    description: 'Quick and efficient tire repair and replacement',
    price: 'From AED 80',
    eta: '15-20 minutes',
    coverage: [
      'Tire replacement',
      'Puncture repair',
      'Tire rotation',
      'Wheel balancing',
      'Tire pressure check'
    ]
  }
};

interface ServiceDetailsProps {
  serviceType: string;
}

export function ServiceDetails({ serviceType }: ServiceDetailsProps) {
  const service = serviceDetails[serviceType];
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-xl shadow-lg"
    >
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <DollarSign size={18} style={{ color: colors.primary }} />
          <span>{service.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} style={{ color: colors.primary }} />
          <span>ETA: {service.eta}</span>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold">Service Coverage:</h4>
        <ul className="space-y-2">
          {service.coverage.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 text-gray-600"
              whileHover={{ x: 5 }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.primary }} />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}