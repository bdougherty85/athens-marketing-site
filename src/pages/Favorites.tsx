import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface FavoriteItem {
  id: string;
  title: string;
  url: string;
  category: string;
  venue: string;
}

const Favorites = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVenue, setSelectedVenue] = useState<string>("all");
  const [shareDialog, setShareDialog] = useState<{ open: boolean; item: FavoriteItem | null }>({
    open: false,
    item: null,
  });
  const [shareMethod, setShareMethod] = useState("");
  const [shareRecipient, setShareRecipient] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("mybucket-favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    } else {
      // Sample data
      const sampleFavorites: FavoriteItem[] = [
        { id: "1", title: "Concert at Ryman", url: "#", category: "Events", venue: "Ryman Auditorium" },
        { id: "2", title: "Downtown Food Festival", url: "#", category: "Dining", venue: "Public Square" },
        { id: "3", title: "Titans vs Chiefs", url: "#", category: "Sports", venue: "Nissan Stadium" },
      ];
      setFavorites(sampleFavorites);
      localStorage.setItem("mybucket-favorites", JSON.stringify(sampleFavorites));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("mybucket-favorites", JSON.stringify(updated));
    toast({ title: "Removed from favorites" });
  };

  const handleShare = () => {
    if (!shareRecipient || !shareMethod) {
      toast({ title: "Please select a method and enter recipient", variant: "destructive" });
      return;
    }
    toast({ title: `Shared via ${shareMethod} to ${shareRecipient}` });
    setShareDialog({ open: false, item: null });
    setShareMethod("");
    setShareRecipient("");
  };

  const filteredFavorites = favorites.filter((fav) => {
    const categoryMatch = selectedCategory === "all" || fav.category === selectedCategory;
    const venueMatch = selectedVenue === "all" || fav.venue === selectedVenue;
    return categoryMatch && venueMatch;
  });

  const uniqueVenues = Array.from(new Set(favorites.map((f) => f.venue)));

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="glass-panel p-6">
        <h2 className="text-2xl font-semibold text-white mb-6">My Favorites</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-white text-sm mb-2 block">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Events">Events</SelectItem>
                <SelectItem value="Dining">Dining</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Comedy">Comedy</SelectItem>
                <SelectItem value="News">News</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-white text-sm mb-2 block">Company/Venue</label>
            <Select value={selectedVenue} onValueChange={setSelectedVenue}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Venues</SelectItem>
                {uniqueVenues.map((venue) => (
                  <SelectItem key={venue} value={venue}>{venue}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          {filteredFavorites.map((fav) => (
            <div key={fav.id} className="flex items-center gap-3 p-4 bg-white/10 rounded-lg">
              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeFavorite(fav.id)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              
              <div className="flex-1 text-white">
                <div className="font-semibold">{fav.title}</div>
                <div className="text-sm text-white/70">
                  {fav.category} • {fav.venue}
                </div>
              </div>

              <Button
                size="sm"
                onClick={() => setShareDialog({ open: true, item: fav })}
                className="bg-accent hover:bg-accent/80"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          ))}

          {filteredFavorites.length === 0 && (
            <div className="text-center text-white/50 py-8">
              No favorites found
            </div>
          )}
        </div>
      </Card>

      <Dialog open={shareDialog.open} onOpenChange={(open) => setShareDialog({ open, item: null })}>
        <DialogContent className="glass-panel border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white">Share Item</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-white text-sm mb-2 block">Share via</label>
              <Select value={shareMethod} onValueChange={setShareMethod}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="notification">In-App Notification</SelectItem>
                  <SelectItem value="text">Text Message</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-white text-sm mb-2 block">Recipient</label>
              <Input
                placeholder={shareMethod === "email" ? "Email address" : shareMethod === "text" ? "Phone number" : "Username"}
                value={shareRecipient}
                onChange={(e) => setShareRecipient(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <Button onClick={handleShare} className="w-full">Send</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Favorites;
