import React from 'react';
import { motion } from 'framer-motion';
import { Car, FileText } from 'lucide-react';
import { colors } from '../../theme/colors';

interface VehicleFormProps {
  onSubmit: (data: any) => void;
}

export function VehicleForm({ onSubmit }: VehicleFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit({
      vehicleType: formData.get('vehicleType'),
      plateEmirati: formData.get('plateEmirati'),
      plateNumber: formData.get('plateNumber'),
      insurancePolicy: formData.get('insurancePolicy'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Vehicle Details</h2>
        <p className="text-gray-600">Add your vehicle information</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
          <select
            name="vehicleType"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary bg-white"
            style={{ borderColor: colors.primary }}
          >
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">License Plate</label>
          <div className="flex gap-3">
            <select 
              name="plateEmirati" 
              className="w-32 p-3 border rounded-xl bg-white"
              style={{ borderColor: colors.primary }}
            >
              <option value="dubai">Dubai</option>
              <option value="abudhabi">Abu Dhabi</option>
              <option value="sharjah">Sharjah</option>
              <option value="ajman">Ajman</option>
              <option value="rak">RAK</option>
            </select>
            <input
              type="text"
              name="plateNumber"
              placeholder="A 12345"
              className="flex-1 p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
              style={{ borderColor: colors.primary }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Insurance Policy</label>
          <input
            type="text"
            name="insurancePolicy"
            placeholder="Policy Number"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ borderColor: colors.primary }}
          />
        </div>
      </div>

      <motion.button
        type="submit"
        className="w-full py-4 rounded-xl text-white font-medium text-lg mt-6"
        style={{ backgroundColor: colors.primary }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Save Vehicle Details
      </motion.button>
    </form>
  );
}