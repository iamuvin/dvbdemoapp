import React from 'react';
import { CreditCard, Wallet, Shield } from 'lucide-react';
import { colors } from '../theme/colors';

interface PaymentMethodProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentMethods({ isOpen, onClose }: PaymentMethodProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary transition-colors"
                    style={{ borderColor: colors.primary }}>
              <div className="flex items-center space-x-4">
                <CreditCard className="text-gray-600" />
                <div>
                  <p className="font-medium">Credit Card</p>
                  <p className="text-sm text-gray-600">**** **** **** 4242</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                   style={{ borderColor: colors.primary }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.primary }} />
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary transition-colors">
              <div className="flex items-center space-x-4">
                <Wallet className="text-gray-600" />
                <div>
                  <p className="font-medium">Cash Payment</p>
                  <p className="text-sm text-gray-600">Pay after service</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2" />
            </button>

            <button className="w-full flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary transition-colors">
              <div className="flex items-center space-x-4">
                <Shield className="text-gray-600" />
                <div>
                  <p className="font-medium">Insurance Coverage</p>
                  <p className="text-sm text-gray-600">Policy: INS123456</p>
                </div>
              </div>
              <div className="w-6 h-6 rounded-full border-2" />
            </button>
          </div>

          <button
            className="w-full mt-6 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: colors.primary }}
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}