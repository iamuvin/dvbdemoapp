import React from 'react';
import { MapPin, Navigation2 } from 'lucide-react';
import type { Location, ServiceProvider } from '../types';

interface MapProps {
  userLocation: Location;
  serviceProvider?: ServiceProvider;
  isLoading?: boolean;
}

export function Map({ userLocation, serviceProvider, isLoading }: MapProps) {
  return (
    <div className="relative w-full h-[100vh] bg-gray-100">
      {/* Map placeholder with gradient background for better visual */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
        {/* User location marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full animate-ping" />
            <div className="relative w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
          </div>
        </div>

        {/* Service provider marker (if available) */}
        {serviceProvider && (
          <div className="absolute top-[40%] left-[55%]">
            <Navigation2 className="w-6 h-6 text-yellow-500" />
          </div>
        )}

        {/* Location info card */}
        <div className="absolute bottom-24 right-4 bg-white p-3 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-500" size={20} />
            <span className="text-sm font-medium">
              {isLoading ? 'Locating...' : 'Dubai Marina'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}