import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import type { ServiceProvider } from '../types';

interface ServiceRequestProps {
  provider?: ServiceProvider;
  estimatedTime?: number;
  onCancel: () => void;
}

export function ServiceRequest({ provider, estimatedTime = 8, onCancel }: ServiceRequestProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg transition-transform transform translate-y-0">
      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-3" />
      
      {provider ? (
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100"
                  alt="Service Provider"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Mohammed Ali</h3>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{estimatedTime} mins away</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">AED 150</div>
              <div className="text-xs text-gray-500">Estimated</div>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
              Call Provider
            </button>
            <button 
              onClick={onCancel}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200"
            >
              Cancel Request
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-gray-600" />
            <div className="text-sm text-gray-600">Searching for nearby service providers...</div>
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}