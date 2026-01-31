import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Tag, Calendar } from "lucide-react";
import { sampleDeals, sampleBusinesses } from "@/data/sampleData";

const DealsPage = () => {
  const activeDeals = sampleDeals.filter((deal) => {
    const now = new Date();
    return deal.isActive && now >= deal.startDate && now <= deal.endDate;
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl pb-20">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Nearby Deals</h1>
        <p className="text-white/70">Special offers from local businesses</p>
      </div>

      <div className="space-y-4">
        {activeDeals.map((deal) => {
          const business = sampleBusinesses.find((b) => b.id === deal.businessId);
          if (!business) return null;

          return (
            <Card key={deal.id} className="glass-panel p-5 hover:bg-white/15 transition-all cursor-pointer">
              {/* Deal Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Tag className="w-4 h-4 text-accent" />
                    <h3 className="text-lg font-semibold text-white">{deal.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-2">{deal.description}</p>
                </div>

                {deal.discountPercentage && (
                  <Badge className="bg-accent text-white px-3 py-1 text-lg font-bold">
                    {deal.discountPercentage}% OFF
                  </Badge>
                )}
              </div>

              {/* Price Info */}
              {deal.originalPrice && deal.discountedPrice && (
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white/50 line-through text-sm">
                    ${deal.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-accent font-bold text-xl">
                    ${deal.discountedPrice.toFixed(2)}
                  </span>
                </div>
              )}

              {/* Business Info */}
              <div className="border-t border-white/10 pt-3 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{business.name}</span>
                    <span className="text-white/60">•</span>
                    <Badge variant="outline" className="border-white/20 text-white/70">
                      {business.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-white/60">
                    <Calendar className="w-3 h-3" />
                    <span>Until {formatDate(deal.endDate)}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        {activeDeals.length === 0 && (
          <div className="text-center text-white/60 py-12">
            <Tag className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No active deals at the moment</p>
            <p className="text-sm mt-2">Check back soon for new offers!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealsPage;
