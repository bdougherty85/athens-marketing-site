import { Search, Tag, Users, UserCircle } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", icon: Search, label: "Explore" },
  { to: "/deals", icon: Tag, label: "Deals" },
  { to: "/social", icon: Users, label: "Social" },
  { to: "/profile", icon: UserCircle, label: "Profile" },
];

export const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-panel border-t border-white/20 z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center justify-center gap-1 text-white/70 hover:text-white transition-colors py-2 px-3"
            activeClassName="text-white"
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5", isActive && "text-accent")} />
                <span className="text-xs font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
