import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin, Users, Star } from "lucide-react";
import { sampleUsers, MAIN_USER_ID, getUserFriends, sampleCheckIns } from "@/data/sampleData";

const Profile = () => {
  const currentUser = sampleUsers.find((u) => u.id === MAIN_USER_ID);
  const friends = getUserFriends(MAIN_USER_ID);
  const userCheckIns = sampleCheckIns.filter((c) => c.userId === MAIN_USER_ID);

  if (!currentUser) {
    return <div className="text-white p-4">User not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl pb-20">
      <h1 className="text-3xl font-bold text-white mb-6">Profile</h1>

      {/* Profile Header */}
      <Card className="glass-panel p-6 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl">{currentUser.displayName.charAt(0)}</span>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">{currentUser.displayName}</h2>
            <p className="text-white/70 mb-2">@{currentUser.username}</p>
            {currentUser.bio && <p className="text-white/80 text-sm italic">"{currentUser.bio}"</p>}
          </div>
        </div>

        <div className="flex items-center gap-2 text-white/70 mb-2">
          <Mail className="w-4 h-4" />
          <span className="text-sm">{currentUser.email}</span>
        </div>

        <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            <div>
              <div className="text-2xl font-bold text-white">{friends.length}</div>
              <div className="text-xs text-white/60">Friends</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <div>
              <div className="text-2xl font-bold text-white">{userCheckIns.length}</div>
              <div className="text-xs text-white/60">Check-ins</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Friends List */}
      <Card className="glass-panel p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Friends ({friends.length})
        </h3>

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span>{friend.displayName.charAt(0)}</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{friend.displayName}</p>
                <p className="text-sm text-white/60 truncate">@{friend.username}</p>
              </div>

              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                Friends
              </Badge>
            </div>
          ))}
        </div>

        {friends.length === 0 && (
          <div className="text-center text-white/60 py-8">
            <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No friends yet</p>
            <p className="text-sm mt-1">Start connecting with people!</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Profile;
