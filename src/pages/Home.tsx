import { useState } from "react";
import { Card } from "@/components/ui/card";

const newsTopics = [
  { id: 1, title: "Breaking News", detail: "Latest updates on global events and happenings around the world." },
  { id: 2, title: "Technology", detail: "Innovations, startups, and the latest in tech industry developments." },
  { id: 3, title: "Sports", detail: "Scores, highlights, and stories from the world of sports." },
  { id: 4, title: "Entertainment", detail: "Movies, music, celebrities, and entertainment news." },
  { id: 5, title: "Business", detail: "Market trends, finance updates, and business insights." },
  { id: 6, title: "Health", detail: "Medical breakthroughs, wellness tips, and health news." },
];

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState(newsTopics[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
        MyBucket News
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Topics List */}
        <Card className="glass-panel p-6 overflow-auto max-h-[70vh]">
          <h2 className="text-2xl font-semibold text-white mb-4">News Topics</h2>
          <div className="space-y-3">
            {newsTopics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  selectedTopic.id === topic.id
                    ? "bg-primary/80 text-white shadow-lg"
                    : "bg-white/10 text-white/90 hover:bg-white/20"
                }`}
              >
                <h3 className="font-semibold">{topic.title}</h3>
              </button>
            ))}
          </div>
        </Card>

        {/* Topic Details */}
        <Card className="glass-panel p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Details</h2>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-3">{selectedTopic.title}</h3>
            <p className="text-white/90 leading-relaxed">{selectedTopic.detail}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
