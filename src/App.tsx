import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Map } from './components/map/Map';
import { BottomSheet } from './components/layout/BottomSheet';
import { ServiceCategorySelector } from './components/service/ServiceCategorySelector';
import { ServiceRequest } from './components/service/ServiceRequest';
import { VehicleForm } from './components/vehicle/VehicleForm';
import { UserProfile } from './components/profile/UserProfile';
import { SideMenu } from './components/navigation/SideMenu';
import { PaymentMethods } from './components/payment/PaymentMethods';
import { ServiceAlert } from './components/notifications/ServiceAlert';
import { SettingsPanel } from './components/settings/SettingsPanel';
import { MenuProvider } from './contexts/MenuContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import type { ServiceCategory, ServiceProvider } from './types';

function AppContent() {
  const { logout } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>();
  const [isSearching, setIsSearching] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [serviceProvider, setServiceProvider] = useState<ServiceProvider>();
  const [showVehicleForm, setShowVehicleForm] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Dubai Marina location
  const userLocation = {
    latitude: 25.0819,
    longitude: 55.1367
  };

  const handleRequestService = () => {
    if (!selectedCategory) return;
    setIsSearching(true);
    setShowCategories(false);
    setShowAlert(true);
    
    setTimeout(() => {
      setServiceProvider({
        id: '1',
        name: 'Mohammed Ali',
        email: 'mohammed@example.com',
        phone: '+971 50 123 4567',
        role: 'SERVICE_PROVIDER',
        rating: 4.8,
        categories: ['MECHANICAL', 'ELECTRICAL'],
        isAvailable: true,
        currentLocation: {
          latitude: 25.0825,
          longitude: 55.1371
        },
        photoUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200',
        totalRatings: 124,
        vehicleType: 'Service Truck',
        vehicleModel: 'Toyota Hilux'
      });
      setIsSearching(false);
    }, 3000);
  };

  const handleMenuAction = (section: string) => {
    switch (section) {
      case 'payments':
        setShowPayments(true);
        break;
      case 'vehicles':
        setShowVehicleForm(true);
        break;
      case 'settings':
        setShowSettings(true);
        break;
      default:
        break;
    }
    setShowMenu(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      // Add any additional cleanup or navigation logic here
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <Header 
        onMenuClick={() => setShowMenu(true)} 
        onProfileClick={() => setShowProfile(true)} 
      />
      
      <AnimatePresence>
        {showAlert && (
          <ServiceAlert
            message="Looking for nearby service providers..."
            type="info"
            onClose={() => setShowAlert(false)}
          />
        )}
      </AnimatePresence>

      <main className="h-full pt-14">
        <Map 
          userLocation={userLocation}
          serviceProvider={serviceProvider}
          isLoading={isSearching}
        />

        <AnimatePresence>
          {showProfile && (
            <UserProfile 
              isOpen={showProfile}
              onClose={() => setShowProfile(false)} 
              onPaymentClick={() => {
                setShowPayments(true);
                setShowProfile(false);
              }} 
            />
          )}

          {showSettings && (
            <SettingsPanel onClose={() => setShowSettings(false)} />
          )}
        </AnimatePresence>

        <SideMenu 
          isOpen={showMenu} 
          onClose={() => setShowMenu(false)}
          onMenuAction={handleMenuAction}
          onLogout={handleLogout}
        />
        
        <PaymentMethods 
          isOpen={showPayments} 
          onClose={() => setShowPayments(false)} 
        />

        <BottomSheet>
          {showVehicleForm ? (
            <VehicleForm 
              onSubmit={(data) => {
                console.log('Vehicle data:', data);
                setShowVehicleForm(false);
                setShowCategories(true);
              }} 
            />
          ) : showCategories ? (
            <ServiceCategorySelector
              selected={selectedCategory}
              onSelect={setSelectedCategory}
              onRequestService={handleRequestService}
              onAddVehicle={() => setShowVehicleForm(true)}
              isSearching={isSearching}
            />
          ) : (
            <ServiceRequest 
              provider={serviceProvider}
              onCancel={() => {
                setServiceProvider(undefined);
                setSelectedCategory(undefined);
                setShowCategories(true);
              }}
            />
          )}
        </BottomSheet>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <AppContent />
      </MenuProvider>
    </AuthProvider>
  );
}