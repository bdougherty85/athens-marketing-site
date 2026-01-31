// Type definitions based on iOS Swift models

export enum BusinessCategory {
  Restaurant = "Restaurant",
  Cafe = "Cafe",
  Bar = "Bar",
  Entertainment = "Entertainment",
  Activity = "Activity",
  Shopping = "Shopping",
  Service = "Service",
  Other = "Other",
}

export enum FriendshipStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Rejected = "Rejected",
}

export interface Business {
  id: string;
  name: string;
  description: string;
  category: BusinessCategory;
  address: string;
  latitude: number;
  longitude: number;
  phoneNumber?: string;
  website?: string;
  imageURL?: string;
  averageRating: number;
  createdAt: Date;
  reviews: Review[];
  deals: Deal[];
  checkIns: CheckIn[];
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  email: string;
  bio?: string;
  profileImageURL?: string;
  createdAt: Date;
  reviews: Review[];
  checkIns: CheckIn[];
  friendships: Friendship[];
  friendOf: Friendship[];
}

export interface CheckIn {
  id: string;
  note?: string;
  createdAt: Date;
  userId: string;
  businessId: string;
  user?: User;
  business?: Business;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  discountPercentage?: number;
  originalPrice?: number;
  discountedPrice?: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  createdAt: Date;
  businessId: string;
  business?: Business;
}

export interface Review {
  id: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  businessId: string;
  userId: string;
  business?: Business;
  user?: User;
}

export interface Friendship {
  id: string;
  status: FriendshipStatus;
  createdAt: Date;
  acceptedAt?: Date;
  userId: string;
  friendId: string;
  user?: User;
  friend?: User;
}

// Helper types
export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface UserLocation {
  coordinate: Coordinate;
  timestamp: Date;
}
