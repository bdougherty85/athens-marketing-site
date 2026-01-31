import { ReactNode, useEffect, useState } from "react";
import { ScrollingTicker } from "./ScrollingTicker";
import { BottomNavigation } from "./BottomNavigation";
import { useLocation } from "react-router-dom";
import nashvilleSkyline from "@/assets/nashville-skyline.jpg";
import citySkyline1 from "@/assets/city-skyline-1.jpg";
import citySkyline2 from "@/assets/city-skyline-2.jpg";
import citySkyline3 from "@/assets/city-skyline-3.jpg";
import citySkyline4 from "@/assets/city-skyline-4.jpg";
import citySkyline5 from "@/assets/city-skyline-5.jpg";

interface PageLayoutProps {
  children: ReactNode;
}

const otherSkylines = [citySkyline1, citySkyline2, citySkyline3, citySkyline4, citySkyline5];

export const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundImage(nashvilleSkyline);
    } else {
      const randomIndex = Math.floor(Math.random() * otherSkylines.length);
      setBackgroundImage(otherSkylines[randomIndex]);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollingTicker />
        <main className="flex-1 pb-20 overflow-auto">
          {children}
        </main>
        <BottomNavigation />
      </div>
    </div>
  );
};
