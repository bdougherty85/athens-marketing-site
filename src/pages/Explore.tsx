import { useState, useMemo, lazy, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Users, Star, List, Map } from "lucide-react";
import {
  sampleBusinesses,
  sampleCheckIns,
  sampleUsers,
  MAIN_USER_ID,
  getUserFriends,
  getFriendCheckInsAtBusiness,
} from "@/data/sampleData";
import { Business, BusinessCategory } from "@/types";

// Lazy load MapView to prevent errors if leaflet isn't installed yet
const MapView = lazy(() => import("@/components/MapView").then(module => ({ default: module.MapView })).catch(() => ({
  default: () => (
    <div className="flex items-center justify-center h-[500px] text-white bg-white/5 rounded-lg">
      <div className="text-center p-8">
        <Map className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p className="text-lg mb-2">Map view is loading...</p>
        <p className="text-sm text-white/60">Installing map dependencies. Please refresh the page in a moment.</p>
      </div>
    </div>
  )
})));

type ViewMode = "list" | "map";

const Explore = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BusinessCategory | null>(null);
  const [sortByFriends, setSortByFriends] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>("list");

  const currentUser = sampleUsers.find((u) => u.id === MAIN_USER_ID);
  const friends = getUserFriends(MAIN_USER_ID);

  // Get friend count at each business
  const getFriendCount = (business: Business) => {
    const friendCheckIns = getFriendCheckInsAtBusiness(MAIN_USER_ID, business.id);
    const uniqueFriends = new Set(friendCheckIns.map((c) => c.userId));
    return uniqueFriends.size;
  };

  // Filter and sort businesses
  const displayedBusinesses = useMemo(() => {
    let filtered = sampleBusinesses;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((b) => b.category === selectedCategory);
    }

    // Filter by search text
    if (searchText) {
      const search = searchText.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.name.toLowerCase().includes(search) ||
          b.description.toLowerCase().includes(search) ||
          b.category.toLowerCase().includes(search)
      );
    }

    // Sort by friend activity
    if (sortByFriends) {
      filtered = [...filtered].sort((a, b) => {
        const countA = getFriendCount(a);
        const countB = getFriendCount(b);
        if (countA !== countB) return countB - countA;
        return a.name.localeCompare(b.name);
      });
    }

    return filtered;
  }, [searchText, selectedCategory, sortByFriends]);

  const categories = Object.values(BusinessCategory);

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl pb-20">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-white">Explore</h1>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={viewMode === "list" ? "" : "bg-white/10 text-white border-white/20"}
            >
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
            <Button
              variant={viewMode === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("map")}
              className={viewMode === "map" ? "" : "bg-white/10 text-white border-white/20"}
            >
              <Map className="w-4 h-4 mr-2" />
              Map
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
          <Input
            type="text"
            placeholder="Search businesses..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
        </div>

        {/* Show filters only in list view */}
        {viewMode === "list" && (
          <>
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "" : "bg-white/10 text-white border-white/20"}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "" : "bg-white/10 text-white border-white/20"}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort by friends */}
            <Button
              variant={sortByFriends ? "default" : "outline"}
              size="sm"
              onClick={() => setSortByFriends(!sortByFriends)}
              className={sortByFriends ? "" : "bg-white/10 text-white border-white/20"}
            >
              <Users className="w-4 h-4 mr-2" />
              {sortByFriends ? "Sorted by Friends" : "Sort by Friends"}
            </Button>
          </>
        )}
      </div>

      {/* Map View */}
      {viewMode === "map" && (
        <Suspense fallback={
          <div className="flex items-center justify-center h-[500px] text-white bg-white/5 rounded-lg">
            <div className="text-center p-8">
              <Map className="w-16 h-16 mx-auto mb-4 opacity-50 animate-pulse" />
              <p className="text-lg">Loading map...</p>
            </div>
          </div>
        }>
          <MapView businesses={displayedBusinesses} />
        </Suspense>
      )}

      {/* Business List */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {displayedBusinesses.map((business) => {
            const friendCount = getFriendCount(business);

            return (
              <Card key={business.id} className="glass-panel p-4 hover:bg-white/15 transition-all cursor-pointer">
                <div className="flex gap-4">
                  {/* Business Icon with friend badge */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">{getCategoryIcon(business.category)}</span>
                    </div>
                    {friendCount > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-0.5 text-xs">
                        {friendCount}
                      </Badge>
                    )}
                  </div>

                  {/* Business Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {business.name}
                      </h3>
                      {friendCount > 0 && (
                        <span className="text-xs text-blue-400 font-semibold whitespace-nowrap">
                          {friendCount} friend{friendCount > 1 ? "s" : ""} here
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-white/70 mb-2 line-clamp-2">
                      {business.description}
                    </p>

                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <Badge variant="outline" className="border-white/20 text-white/80">
                        {business.category}
                      </Badge>

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.round(business.averageRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-white/30"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-xs">{business.averageRating}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        {business.address.split(",")[0]}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}

          {displayedBusinesses.length === 0 && (
            <div className="text-center text-white/60 py-12">
              <p>No businesses found matching your criteria</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function getCategoryIcon(category: BusinessCategory): string {
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
  return icons[category] || "🏢";
}

export default Explore;
