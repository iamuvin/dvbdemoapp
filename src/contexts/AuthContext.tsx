import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  photoUrl: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'Ahmed Mohammed',
    email: 'ahmed@example.com',
    phone: '+971 50 123 4567',
    photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200',
  });

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    setUser({
      id: '1',
      name: 'Ahmed Mohammed',
      email,
      phone: '+971 50 123 4567',
      photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200',
    });
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}