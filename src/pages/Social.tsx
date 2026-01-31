import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users } from "lucide-react";
import {
  sampleUsers,
  sampleCheckIns,
  sampleBusinesses,
  MAIN_USER_ID,
  getUserFriends,
} from "@/data/sampleData";

const Social = () => {
  const currentUser = sampleUsers.find((u) => u.id === MAIN_USER_ID);
  const friends = getUserFriends(MAIN_USER_ID);

  // Get recent check-ins from friends (last 24 hours)
  const friendCheckIns = sampleCheckIns
    .filter((checkIn) => {
      const friendIds = new Set(friends.map((f) => f.id));
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      return friendIds.has(checkIn.userId) && checkIn.createdAt > oneDayAgo;
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const getTimeAgo = (date: Date) => {
    const minutes = Math.floor((Date.now() - date.getTime()) / (1000 * 60));
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl pb-20">
      <h1 className="text-3xl font-bold text-white mb-6">Social Feed</h1>

      {/* Friends Summary */}
      <Card className="glass-panel p-4 mb-6">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-accent" />
          <div>
            <h2 className="text-white font-semibold">Your Friends</h2>
            <p className="text-sm text-white/70">{friends.length} friends connected</p>
          </div>
        </div>
      </Card>

      {/* Recent Activity Feed */}
      <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {friendCheckIns.map((checkIn) => {
          const user = sampleUsers.find((u) => u.id === checkIn.userId);
          const business = sampleBusinesses.find((b) => b.id === checkIn.businessId);

          if (!user || !business) return null;

          return (
            <Card key={checkIn.id} className="glass-panel p-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">
                    {user.displayName.charAt(0)}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="text-white font-semibold">{user.displayName}</p>
                      <p className="text-sm text-white/70">checked in at {business.name}</p>
                    </div>
                    <span className="text-xs text-white/60 whitespace-nowrap">
                      {getTimeAgo(checkIn.createdAt)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{business.address.split(",")[0]}</span>
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {business.category}
                    </Badge>
                  </div>

                  {checkIn.note && (
                    <p className="text-sm text-white/90 italic mt-2">"{checkIn.note}"</p>
                  )}
                </div>
              </div>
            </Card>
          );
        })}

        {friendCheckIns.length === 0 && (
          <div className="text-center text-white/60 py-12">
            <p>No recent activity from your friends</p>
            <p className="text-sm mt-2">Check back later to see what they're up to!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
