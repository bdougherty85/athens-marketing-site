import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, MapPin, Users, Building2 } from "lucide-react";
import { Business, BusinessCategory } from "@/types";
import {
  sampleUsers,
  sampleCheckIns,
  MAIN_USER_ID,
  getUserFriends,
} from "@/data/sampleData";

interface MapViewProps {
  businesses: Business[];
}

export const MapView = ({ businesses }: MapViewProps) => {
  const [showBusinesses, setShowBusinesses] = useState(true);
  const [showFriends, setShowFriends] = useState(true);
  const [showNonFriends, setShowNonFriends] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const currentUser = sampleUsers.find((u) => u.id === MAIN_USER_ID);
  const friends = getUserFriends(MAIN_USER_ID);
  const friendIds = new Set(friends.map((f) => f.id));

  // Default location (San Francisco)
  const defaultCenter: [number, number] = [37.7749, -122.4194];

  // Get recent check-ins (last 2 hours)
  const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
  const recentCheckIns = sampleCheckIns.filter((c) => c.createdAt > twoHoursAgo);

  const friendCheckIns = recentCheckIns.filter((c) => friendIds.has(c.userId));
  const nonFriendCheckIns = recentCheckIns.filter(
    (c) => !friendIds.has(c.userId) && c.userId !== MAIN_USER_ID
  );

  // Get category color
  const getCategoryColor = (category: BusinessCategory): string => {
    const colors: Record<BusinessCategory, string> = {
      [BusinessCategory.Restaurant]: "#ef4444",
      [BusinessCategory.Cafe]: "#92400e",
      [BusinessCategory.Bar]: "#a855f7",
      [BusinessCategory.Entertainment]: "#f97316",
      [BusinessCategory.Activity]: "#3b82f6",
      [BusinessCategory.Shopping]: "#ec4899",
      [BusinessCategory.Service]: "#14b8a6",
      [BusinessCategory.Other]: "#6b7280",
    };
    return colors[category];
  };

  // Get user color (consistent hash-based)
  const getUserColor = (userId: string): string => {
    const colors = [
      "#10b981",
      "#3b82f6",
      "#a855f7",
      "#ec4899",
      "#f97316",
      "#ef4444",
      "#06b6d4",
      "#6366f1",
      "#8b5cf6",
      "#14b8a6",
    ];
    // Simple hash function
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = (hash << 5) - hash + userId.charCodeAt(i);
      hash = hash & hash;
    }
    return colors[Math.abs(hash) % colors.length];
  };

  // Create custom icons
  const createBusinessIcon = (category: BusinessCategory) => {
    const color = getCategoryColor(category);
    return divIcon({
      className: "custom-icon",
      html: `
        <div style="
          width: 32px;
          height: 32px;
          background-color: ${color};
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">
          ${getCategoryIcon(category)}
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    });
  };

  const createFriendIcon = (userId: string) => {
    const color = getUserColor(userId);
    return divIcon({
      className: "custom-icon",
      html: `
        <div style="
          width: 28px;
          height: 28px;
          background-color: ${color};
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        ">
          👤
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
  };

  const createUserIcon = () => {
    return divIcon({
      className: "custom-icon",
      html: `
        <div style="
          width: 36px;
          height: 36px;
          background-color: #fbbf24;
          border: 3px solid #f97316;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
        ">
          👑
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });
  };

  const createNonFriendIcon = () => {
    return divIcon({
      className: "custom-icon",
      html: `
        <div style="
          width: 20px;
          height: 20px;
          background-color: rgba(107, 114, 128, 0.7);
          border: 2px solid white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        ">
          👤
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  const getCategoryIcon = (category: BusinessCategory): string => {
    const icons: Record<BusinessCategory, string> = {
      [BusinessCategory.Restaurant]: "🍽️",
      [BusinessCategory.Cafe]: "☕",
      [BusinessCategory.Bar]: "🍷",
      [BusinessCategory.Entertainment]: "🎭",
      [BusinessCategory.Activity]: "🏃",
      [BusinessCategory.Shopping]: "🛍️",
      [BusinessCategory.Service]: "🔧",
      [BusinessCategory.Other]: "🏢",
    };
    return icons[category];
  };

  return (
    <div className="relative h-[calc(100vh-200px)] min-h-[500px]">
      {/* Map Container */}
      <MapContainer
        center={defaultCenter}
        zoom={13}
        className="h-full w-full rounded-lg overflow-hidden"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User's current location */}
        <Marker position={defaultCenter} icon={createUserIcon()}>
          <Popup>
            <div className="text-center">
              <strong>You are here</strong>
              <br />
              <span className="text-sm text-gray-600">San Francisco, CA</span>
            </div>
          </Popup>
        </Marker>

        {/* Business markers */}
        {showBusinesses &&
          businesses.map((business) => (
            <Marker
              key={business.id}
              position={[business.latitude, business.longitude]}
              icon={createBusinessIcon(business.category)}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <strong className="text-lg">{business.name}</strong>
                  <br />
                  <Badge className="mt-1 mb-2">{business.category}</Badge>
                  <br />
                  <p className="text-sm text-gray-600 mb-2">{business.description}</p>
                  <div className="text-xs text-gray-500">{business.address}</div>
                </div>
              </Popup>
            </Marker>
          ))}

        {/* Friend check-in markers */}
        {showFriends &&
          friendCheckIns.map((checkIn) => {
            const user = sampleUsers.find((u) => u.id === checkIn.userId);
            const business = businesses.find((b) => b.id === checkIn.businessId);
            if (!user || !business) return null;

            return (
              <Marker
                key={checkIn.id}
                position={[business.latitude, business.longitude]}
                icon={createFriendIcon(user.id)}
              >
                <Popup>
                  <div className="min-w-[150px]">
                    <strong>{user.displayName}</strong>
                    <br />
                    <span className="text-sm text-gray-600">checked in at</span>
                    <br />
                    <strong>{business.name}</strong>
                    {checkIn.note && (
                      <>
                        <br />
                        <span className="text-sm italic">"{checkIn.note}"</span>
                      </>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          })}

        {/* Non-friend check-in markers */}
        {showNonFriends &&
          nonFriendCheckIns.map((checkIn) => {
            const business = businesses.find((b) => b.id === checkIn.businessId);
            if (!business) return null;

            return (
              <Marker
                key={checkIn.id}
                position={[business.latitude, business.longitude]}
                icon={createNonFriendIcon()}
              >
                <Popup>
                  <div>
                    <span className="text-sm text-gray-600">Someone checked in here</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>

      {/* Filter Button */}
      <div className="absolute top-4 right-4 z-[1000]">
        <Button
          onClick={() => setShowFilters(!showFilters)}
          size="sm"
          className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <Card className="absolute top-16 right-4 z-[1000] glass-panel p-4 w-64">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Map Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(false)}
              className="h-6 w-6 p-0 text-white hover:text-white/80"
            >
              ✕
            </Button>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showBusinesses}
                onChange={(e) => setShowBusinesses(e.target.checked)}
                className="w-4 h-4"
              />
              <Building2 className="w-4 h-4 text-white" />
              <span className="text-white text-sm">Show Businesses</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showFriends}
                onChange={(e) => setShowFriends(e.target.checked)}
                className="w-4 h-4"
              />
              <Users className="w-4 h-4 text-white" />
              <span className="text-white text-sm">Show Friends</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showNonFriends}
                onChange={(e) => setShowNonFriends(e.target.checked)}
                className="w-4 h-4"
              />
              <MapPin className="w-4 h-4 text-white" />
              <span className="text-white text-sm">Show Other Users</span>
            </label>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="text-xs text-white/70">
              <div className="flex items-center gap-2 mb-1">
                <span>👑</span>
                <span>Your location</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getUserColor("sample") }}></div>
                <span>Friend check-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                <span>Other users</span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
