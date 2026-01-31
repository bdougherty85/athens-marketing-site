import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SettingsData {
  profilePicture: string;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zipCode: string;
  primaryPin: string;
  primaryRadius: string;
  locationSharing: string;
  notifications: boolean;
  subscriptions: Array<{ id: string; name: string; url: string }>;
}

const Settings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<SettingsData>({
    profilePicture: "",
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zipCode: "",
    primaryPin: "",
    primaryRadius: "10",
    locationSharing: "1",
    notifications: true,
    subscriptions: [],
  });

  const [newSub, setNewSub] = useState({ name: "", url: "" });
  const [showAddSub, setShowAddSub] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mybucket-settings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem("mybucket-settings", JSON.stringify(settings));
    toast({ title: "Settings saved successfully!" });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSettings({ ...settings, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSubscription = () => {
    if (newSub.name && newSub.url) {
      setSettings({
        ...settings,
        subscriptions: [...settings.subscriptions, { ...newSub, id: Date.now().toString() }],
      });
      setNewSub({ name: "", url: "" });
      setShowAddSub(false);
    }
  };

  const removeSubscription = (id: string) => {
    setSettings({
      ...settings,
      subscriptions: settings.subscriptions.filter((sub) => sub.id !== id),
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="glass-panel p-6 mb-6">
        <div className="flex gap-6 items-start mb-6">
          <div>
            <Label htmlFor="picture" className="text-white mb-2 block">Profile Picture</Label>
            <div className="w-24 h-24 rounded-full bg-white/20 overflow-hidden border-2 border-white/30 cursor-pointer">
              {settings.profilePicture ? (
                <img src={settings.profilePicture} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50">
                  <span className="text-xs">Upload</span>
                </div>
              )}
              <input
                id="picture"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>
          
          <div className="flex-1 grid gap-4">
            <div>
              <Label className="text-white">Username</Label>
              <Input
                value={settings.username}
                onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white">First Name</Label>
                <Input
                  value={settings.firstName}
                  onChange={(e) => setSettings({ ...settings, firstName: e.target.value })}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <Label className="text-white">Last Name</Label>
                <Input
                  value={settings.lastName}
                  onChange={(e) => setSettings({ ...settings, lastName: e.target.value })}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <Label className="text-white">Phone Number</Label>
            <Input
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Email Address</Label>
            <Input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Primary Zip Code</Label>
            <Input
              value={settings.zipCode}
              onChange={(e) => setSettings({ ...settings, zipCode: e.target.value })}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Primary Pin Location</Label>
            <Input
              value={settings.primaryPin}
              onChange={(e) => setSettings({ ...settings, primaryPin: e.target.value })}
              className="bg-white/10 border-white/20 text-white"
            />
          </div>
          <div>
            <Label className="text-white">Primary Pin Radius</Label>
            <Select value={settings.primaryRadius} onValueChange={(value) => setSettings({ ...settings, primaryRadius: value })}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["5", "10", "15", "20", "25", "50"].map((miles) => (
                  <SelectItem key={miles} value={miles}>{miles} miles</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-white">Location Sharing</Label>
            <Select value={settings.locationSharing} onValueChange={(value) => setSettings({ ...settings, locationSharing: value })}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Share All</SelectItem>
                <SelectItem value="2">Share with Connections Only</SelectItem>
                <SelectItem value="3">Do Not Share</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 p-4 bg-white/10 rounded-lg">
          <Label className="text-white">Notifications</Label>
          <Switch
            checked={settings.notifications}
            onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-white">Subscriptions</h3>
            <Button onClick={() => setShowAddSub(!showAddSub)} size="sm" className="bg-accent hover:bg-accent/80">
              <Plus className="w-4 h-4 mr-1" /> Add Subs
            </Button>
          </div>

          {showAddSub && (
            <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-white/10 rounded-lg">
              <Input
                placeholder="Name"
                value={newSub.name}
                onChange={(e) => setNewSub({ ...newSub, name: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
              <Input
                placeholder="URL"
                value={newSub.url}
                onChange={(e) => setNewSub({ ...newSub, url: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
              <Button onClick={addSubscription} className="col-span-2">Add</Button>
            </div>
          )}

          <div className="space-y-2">
            {settings.subscriptions.map((sub) => (
              <div key={sub.id} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <div className="text-white">
                  <div className="font-semibold">{sub.name}</div>
                  <div className="text-sm text-white/70">{sub.url}</div>
                </div>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeSubscription(sub.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Button onClick={saveSettings} className="w-full bg-primary hover:bg-primary/80">
          Save Settings
        </Button>
      </Card>
    </div>
  );
};

export default Settings;
