import { Card } from "@/components/ui/card";
import { MapPin, User } from "lucide-react";

interface Friend {
  id: string;
  name: string;
  location: string;
  distance: string;
  status: "online" | "offline";
}

const sampleFriends: Friend[] = [
  { id: "1", name: "John Smith", location: "Downtown Nashville", distance: "2.3 miles", status: "online" },
  { id: "2", name: "Sarah Johnson", location: "Green Hills", distance: "5.7 miles", status: "online" },
  { id: "3", name: "Mike Davis", location: "East Nashville", distance: "3.1 miles", status: "offline" },
  { id: "4", name: "Emily Brown", location: "The Gulch", distance: "1.8 miles", status: "online" },
];

const Locator = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="glass-panel p-6">
        <h2 className="text-2xl font-semibold text-white mb-6">Friend Locator</h2>
        
        <div className="mb-6 p-4 bg-primary/20 rounded-lg border border-primary/30">
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5 text-accent" />
            <div>
              <div className="font-semibold">Your Location</div>
              <div className="text-sm text-white/70">Nashville, TN</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {sampleFriends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    friend.status === "online" ? "bg-green-500" : "bg-gray-500"
                  }`}
                />
              </div>

              <div className="flex-1 text-white">
                <div className="font-semibold">{friend.name}</div>
                <div className="text-sm text-white/70 flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  {friend.location}
                </div>
              </div>

              <div className="text-right text-white">
                <div className="text-sm font-medium text-accent">{friend.distance}</div>
                <div className="text-xs text-white/70 capitalize">{friend.status}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white/5 rounded-lg text-center text-white/70 text-sm">
          Location sharing must be enabled in Settings to see friends' locations
        </div>
      </Card>
    </div>
  );
};

export default Locator;
