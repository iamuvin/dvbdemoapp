import React from 'react';
import { Star, Phone, MessageSquare } from 'lucide-react';
import { colors } from '../theme/colors';
import type { ServiceProvider } from '../types';

interface ServiceProviderCardProps {
  provider: ServiceProvider;
  onCall: () => void;
  onMessage: () => void;
}

export function ServiceProviderCard({ provider, onCall, onMessage }: ServiceProviderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-start space-x-4">
        <img
          src={provider.photoUrl || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200"}
          alt={provider.name}
          className="w-16 h-16 rounded-full object-cover border-2"
          style={{ borderColor: colors.primary }}
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{provider.name}</h3>
              <div className="flex items-center space-x-1 text-sm">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="font-medium">{provider.rating}</span>
                <span className="text-gray-500">({provider.totalRatings || '124'} reviews)</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium" style={{ color: colors.primary }}>
                {provider.distance || '0.8'} km away
              </p>
              <p className="text-xs text-gray-500">
                {provider.estimatedArrival || '8'} mins
              </p>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-600">Specializes in {provider.categories.join(', ')}</p>
            <p className="text-sm text-gray-600">Vehicle: Toyota Hilux (Service Truck)</p>
          </div>

          <div className="flex space-x-2 mt-4">
            <button
              onClick={onCall}
              className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg text-white"
              style={{ backgroundColor: colors.secondary }}
            >
              <Phone size={16} />
              <span>Call</span>
            </button>
            <button
              onClick={onMessage}
              className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-lg"
              style={{ backgroundColor: colors.background, color: colors.secondary, border: `1px solid ${colors.secondary}` }}
            >
              <MessageSquare size={16} />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}