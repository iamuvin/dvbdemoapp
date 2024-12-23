import React from 'react';
import { Car, FileText } from 'lucide-react';
import { colors } from '../theme/colors';

interface VehicleFormProps {
  onSubmit: (data: any) => void;
}

export function VehicleForm({ onSubmit }: VehicleFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({
      vehicleType: e.currentTarget.vehicleType.value,
      plateNumber: e.currentTarget.plateNumber.value,
      insurancePolicy: e.currentTarget.insurancePolicy.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
        <select
          name="vehicleType"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ borderColor: colors.primary }}
        >
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="luxury">Luxury</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Plate Number</label>
        <div className="flex gap-2">
          <select 
            name="plateEmirati" 
            className="w-24 p-3 border border-gray-300 rounded-lg"
            style={{ borderColor: colors.primary }}
          >
            <option value="dubai">Dubai</option>
            <option value="abudhabi">Abu Dhabi</option>
            <option value="sharjah">Sharjah</option>
          </select>
          <input
            type="text"
            name="plateNumber"
            placeholder="A 12345"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
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
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ borderColor: colors.primary }}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg text-white font-medium"
        style={{ backgroundColor: colors.primary }}
      >
        Save Vehicle Details
      </button>
    </form>
  );
}