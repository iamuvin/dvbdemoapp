import React from 'react';
import { Menu, User } from 'lucide-react';
import { colors } from '../theme/colors';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Menu className="w-6 h-6" style={{ color: colors.secondary }} />
        </button>
        <h1 className="text-xl font-bold" style={{ color: colors.primary }}>
          Dubai Breakdown Assist
        </h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6" style={{ color: colors.secondary }} />
        </button>
      </div>
    </header>
  );
}