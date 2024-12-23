import React, { createContext, useContext, useState } from 'react';

interface MenuContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  navigateTo: (section: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (section: string) => {
    setActiveSection(section);
    // Add navigation logic here
  };

  return (
    <MenuContext.Provider value={{ activeSection, setActiveSection, navigateTo }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}