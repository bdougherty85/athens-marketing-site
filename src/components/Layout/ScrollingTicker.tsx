import { useEffect, useState } from "react";

const companyLogos = [
  "🏢 TechCorp",
  "🎭 EventPro",
  "🍽️ DineElite",
  "⚽ SportZone",
  "😄 ComedyHub",
  "📰 NewsNet",
  "🎪 VenueMax",
  "🎨 CreativeSpace",
  "🎵 MusicLive",
  "🎬 ShowTime"
];

export const ScrollingTicker = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % 100);
    }, 240); // Slowed down to half speed again (was 120ms)

    return () => clearInterval(interval);
  }, []);

  const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <div className="w-full bg-gradient-to-r from-primary/80 via-accent/70 to-primary/80 backdrop-blur-sm py-3 overflow-hidden border-b border-white/20">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {duplicatedLogos.map((logo, idx) => (
          <span
            key={idx}
            className="text-white font-semibold text-lg inline-block"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};
