import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Category {
  id: string;
  number: number;
  type: string;
  customName: string;
  searchDetail: string;
  days: { [key: string]: boolean };
  dayDetails: { [key: string]: { start: string; end: string; radius: string } };
  preferredVenues: string;
  newsTimeType?: string;
  newsTimeValue?: string;
}

const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Preferences = () => {
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAddCategory, setShowAddCategory] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mybucket-preferences");
    if (saved) {
      setCategories(JSON.parse(saved));
    }
  }, []);

  const savePreferences = () => {
    localStorage.setItem("mybucket-preferences", JSON.stringify(categories));
    toast({ title: "Preferences saved successfully!" });
  };

  const addCategory = () => {
    const newCategory: Category = {
      id: Date.now().toString(),
      number: categories.length + 1,
      type: "Events",
      customName: "",
      searchDetail: "",
      days: {},
      dayDetails: {},
      preferredVenues: "",
    };
    setCategories([...categories, newCategory]);
    setShowAddCategory(false);
    setSelectedCategory(newCategory.id);
  };

  const removeCategory = (id: string) => {
    setCategories(categories.filter((c) => c.id !== id));
    if (selectedCategory === id) setSelectedCategory(null);
  };

  const updateCategory = (id: string, updates: Partial<Category>) => {
    setCategories(categories.map((c) => (c.id === id ? { ...c, ...updates } : c)));
  };

  const toggleDay = (categoryId: string, dayIndex: number) => {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return;

    const dayName = dayNames[dayIndex];
    const newDays = { ...category.days, [dayName]: !category.days[dayName] };
    updateCategory(categoryId, { days: newDays });
  };

  const selected = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card className="glass-panel p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">Categories</h2>
          <Button onClick={() => setShowAddCategory(!showAddCategory)} className="bg-accent hover:bg-accent/80">
            <Plus className="w-4 h-4 mr-1" /> Add Category
          </Button>
        </div>

        <div className="space-y-3 mb-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary/80 text-white"
                  : "bg-white/10 text-white/90 hover:bg-white/20"
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span className="font-bold">{cat.number}</span>
              <Select
                value={cat.type}
                onValueChange={(value) => updateCategory(cat.id, { type: value })}
              >
                <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Events", "Dining", "Sports", "Comedy", "News", "Locator"].map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="Custom Name"
                value={cat.customName}
                onChange={(e) => updateCategory(cat.id, { customName: e.target.value })}
                className="flex-1 bg-white/10 border-white/20 text-white"
                onClick={(e) => e.stopPropagation()}
              />
              <Button
                size="sm"
                variant="destructive"
                onClick={(e) => {
                  e.stopPropagation();
                  removeCategory(cat.id);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {selected && (
          <div className="border-t border-white/20 pt-6 space-y-6">
            <div>
              <Label className="text-white mb-2 block">Search Detail</Label>
              <Input
                placeholder="Enter keywords..."
                value={selected.searchDetail}
                onChange={(e) => updateCategory(selected.id, { searchDetail: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            <div>
              <Label className="text-white mb-3 block">Days of the Week</Label>
              <div className="flex gap-4 mb-4">
                {dayLabels.map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleDay(selected.id, idx)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      selected.days[dayNames[idx]]
                        ? "bg-accent text-white border-2 border-white"
                        : "bg-white/20 text-white/50 border-2 border-white/30"
                    }`}
                  >
                    {selected.days[dayNames[idx]] ? day : <span className="relative">{day}<span className="absolute inset-0 flex items-center justify-center text-2xl">/</span></span>}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {dayNames.map((dayName) => {
                  if (!selected.days[dayName]) return null;
                  const detail = selected.dayDetails[dayName] || { start: "", end: "", radius: "5" };
                  
                  return (
                    <div key={dayName} className="bg-white/10 p-4 rounded-lg">
                      <div className="font-semibold text-white mb-2">{dayName}</div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <Label className="text-white text-xs">Start Time</Label>
                          <Input
                            type="time"
                            value={detail.start}
                            onChange={(e) =>
                              updateCategory(selected.id, {
                                dayDetails: {
                                  ...selected.dayDetails,
                                  [dayName]: { ...detail, start: e.target.value },
                                },
                              })
                            }
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white text-xs">End Time</Label>
                          <Input
                            type="time"
                            value={detail.end}
                            onChange={(e) =>
                              updateCategory(selected.id, {
                                dayDetails: {
                                  ...selected.dayDetails,
                                  [dayName]: { ...detail, end: e.target.value },
                                },
                              })
                            }
                            className="bg-white/10 border-white/20 text-white"
                          />
                        </div>
                        <div>
                          <Label className="text-white text-xs">Radius</Label>
                          <Select
                            value={detail.radius}
                            onValueChange={(value) =>
                              updateCategory(selected.id, {
                                dayDetails: {
                                  ...selected.dayDetails,
                                  [dayName]: { ...detail, radius: value },
                                },
                              })
                            }
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {["5", "10", "15", "20", "25", "50"].map((miles) => (
                                <SelectItem key={miles} value={miles}>{miles} mi</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <Label className="text-white mb-2 block">Preferred Companies/Venues</Label>
              <Input
                placeholder="Leave blank to include all"
                value={selected.preferredVenues}
                onChange={(e) => updateCategory(selected.id, { preferredVenues: e.target.value })}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            {selected.type === "News" && (
              <div className="bg-white/10 p-4 rounded-lg">
                <Label className="text-white mb-3 block">Content Time Range</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Select
                    value={selected.newsTimeType || "Days"}
                    onValueChange={(value) => updateCategory(selected.id, { newsTimeType: value })}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Days">Days</SelectItem>
                      <SelectItem value="Months">Months</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="number"
                    placeholder="Number"
                    value={selected.newsTimeValue || ""}
                    onChange={(e) => updateCategory(selected.id, { newsTimeValue: e.target.value })}
                    className="bg-white/10 border-white/20 text-white"
                    min="1"
                    max={selected.newsTimeType === "Days" ? "31" : "12"}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <Button onClick={savePreferences} className="w-full mt-6 bg-primary hover:bg-primary/80">
          Save Preferences
        </Button>
      </Card>
    </div>
  );
};

export default Preferences;
