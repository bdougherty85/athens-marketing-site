import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  url: string;
  keywords: string[];
  date: string;
}

const sampleNews: NewsItem[] = [
  { id: "1", title: "Breaking: Tech Innovation Summit Announced", url: "#", keywords: ["technology", "innovation"], date: "2024-01-15" },
  { id: "2", title: "Local Sports Team Wins Championship", url: "#", keywords: ["sports", "championship"], date: "2024-01-14" },
  { id: "3", title: "New Restaurant Opens Downtown", url: "#", keywords: ["dining", "downtown"], date: "2024-01-14" },
  { id: "4", title: "Comedy Festival Coming This Summer", url: "#", keywords: ["comedy", "festival"], date: "2024-01-13" },
  { id: "5", title: "City Council Approves Infrastructure Plan", url: "#", keywords: ["local", "infrastructure"], date: "2024-01-13" },
];

const News = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>("all");

  const allKeywords = Array.from(new Set(sampleNews.flatMap((item) => item.keywords)));

  const filteredNews = selectedKeyword === "all" 
    ? sampleNews 
    : sampleNews.filter((item) => item.keywords.includes(selectedKeyword));

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="glass-panel p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white">News Feed</h2>
          
          <div className="w-64">
            <Select value={selectedKeyword} onValueChange={setSelectedKeyword}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Filter by keyword" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Keywords</SelectItem>
                {allKeywords.map((keyword) => (
                  <SelectItem key={keyword} value={keyword}>{keyword}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-3">
          {filteredNews.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all group"
            >
              <div className="flex-1 text-white">
                <div className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </div>
                <div className="text-sm text-white/70">
                  {item.keywords.map((kw) => (
                    <span key={kw} className="inline-block mr-2 px-2 py-1 bg-white/10 rounded text-xs">
                      {kw}
                    </span>
                  ))}
                  <span className="ml-2">{item.date}</span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-accent transition-colors" />
            </a>
          ))}

          {filteredNews.length === 0 && (
            <div className="text-center text-white/50 py-8">
              No news articles found for this keyword
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default News;
