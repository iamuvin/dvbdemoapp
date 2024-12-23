import React, { createContext, useContext, useState } from 'react';

interface MenuContextType {
  activeSection: string;
  navigateTo: (section: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');

  const navigateTo = (section: string) => {
    setActiveSection(section);
  };

  return (
    <MenuContext.Provider value={{ activeSection, navigateTo }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}