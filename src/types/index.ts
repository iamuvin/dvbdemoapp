export type UserRole = 'VEHICLE_OWNER' | 'SERVICE_PROVIDER';

export type ServiceCategory = 'MECHANICAL' | 'ELECTRICAL' | 'TOWING' | 'TIRE_SERVICE';

export interface Location {
  latitude: number;
  longitude: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  rating: number;
  location?: Location;
}

export interface Vehicle {
  id: string;
  ownerId: string;
  make: string;
  model: string;
  year: string;
  plateNumber: string;
  insurancePolicy: string;
  insuranceCompany: string;
}

export interface ServiceProvider extends User {
  categories: ServiceCategory[];
  isAvailable: boolean;
  currentLocation: Location;
}

export interface ServiceRequest {
  id: string;
  vehicleOwnerId: string;
  serviceProviderId?: string;
  location: Location;
  category: ServiceCategory;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED';
  description: string;
  createdAt: Date;
}