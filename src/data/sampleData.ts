import {
  Business,
  BusinessCategory,
  User,
  CheckIn,
  Deal,
  Review,
  Friendship,
  FriendshipStatus,
} from "@/types";

// Use built-in crypto for UUID generation
const uuidv4 = () => crypto.randomUUID();

// Main user ID (john_doe)
export const MAIN_USER_ID = "00000000-0000-0000-0000-000000000001";

// Helper to create date with offset
const daysAgo = (days: number) => new Date(Date.now() - days * 24 * 60 * 60 * 1000);
const hoursAgo = (hours: number) => new Date(Date.now() - hours * 60 * 60 * 1000);

// Sample Users
export const sampleUsers: User[] = [
  // Main user (john_doe)
  {
    id: MAIN_USER_ID,
    username: "john_doe",
    displayName: "John Doe",
    email: "john@example.com",
    bio: "Food enthusiast and coffee lover",
    createdAt: daysAgo(365),
    reviews: [],
    checkIns: [],
    friendships: [],
    friendOf: [],
  },
  // 20 Friends
  { id: uuidv4(), username: "jane_smith", displayName: "Jane Smith", email: "jane_smith@example.com", bio: "Always exploring new restaurants", createdAt: daysAgo(300), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "mike_jones", displayName: "Mike Jones", email: "mike_jones@example.com", bio: "Fitness buff who loves healthy eats", createdAt: daysAgo(280), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "sarah_wilson", displayName: "Sarah Wilson", email: "sarah_wilson@example.com", bio: "Foodie and travel blogger", createdAt: daysAgo(250), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "alex_chen", displayName: "Alex Chen", email: "alex_chen@example.com", bio: "Coffee addict and brunch lover", createdAt: daysAgo(220), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "emma_davis", displayName: "Emma Davis", email: "emma_davis@example.com", bio: "Vegan food enthusiast", createdAt: daysAgo(200), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "chris_martin", displayName: "Chris Martin", email: "chris_martin@example.com", bio: "Craft beer connoisseur", createdAt: daysAgo(180), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "olivia_brown", displayName: "Olivia Brown", email: "olivia_brown@example.com", bio: "Dessert lover and baker", createdAt: daysAgo(160), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "ryan_taylor", displayName: "Ryan Taylor", email: "ryan_taylor@example.com", bio: "Sports fan and pub regular", createdAt: daysAgo(140), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "sophia_lee", displayName: "Sophia Lee", email: "sophia_lee@example.com", bio: "Yoga instructor and health nut", createdAt: daysAgo(120), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "lucas_anderson", displayName: "Lucas Anderson", email: "lucas_anderson@example.com", bio: "Movie buff and popcorn addict", createdAt: daysAgo(100), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "maya_patel", displayName: "Maya Patel", email: "maya_patel@example.com", bio: "Sushi lover and sake enthusiast", createdAt: daysAgo(90), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "noah_garcia", displayName: "Noah Garcia", email: "noah_garcia@example.com", bio: "BBQ master and grill expert", createdAt: daysAgo(80), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "ava_kim", displayName: "Ava Kim", email: "ava_kim@example.com", bio: "Pastry chef and sweet tooth", createdAt: daysAgo(70), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "ethan_rodriguez", displayName: "Ethan Rodriguez", email: "ethan_rodriguez@example.com", bio: "Wine connoisseur", createdAt: daysAgo(60), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "mia_nguyen", displayName: "Mia Nguyen", email: "mia_nguyen@example.com", bio: "Health food advocate", createdAt: daysAgo(50), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "jackson_white", displayName: "Jackson White", email: "jackson_white@example.com", bio: "Pizza aficionado", createdAt: daysAgo(40), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "lily_thompson", displayName: "Lily Thompson", email: "lily_thompson@example.com", bio: "Brunch queen", createdAt: daysAgo(30), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "mason_lee", displayName: "Mason Lee", email: "mason_lee@example.com", bio: "Craft cocktail enthusiast", createdAt: daysAgo(20), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "zoe_harris", displayName: "Zoe Harris", email: "zoe_harris@example.com", bio: "Farm-to-table supporter", createdAt: daysAgo(15), reviews: [], checkIns: [], friendships: [], friendOf: [] },
  { id: uuidv4(), username: "carter_brown", displayName: "Carter Brown", email: "carter_brown@example.com", bio: "Street food explorer", createdAt: daysAgo(10), reviews: [], checkIns: [], friendships: [], friendOf: [] },
];

// Generate 100 unknown users
const firstNames = ["James", "Mary", "Robert", "Patricia", "Michael", "Jennifer", "William", "Linda", "David", "Elizabeth"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

for (let i = 0; i < 100; i++) {
  const firstName = firstNames[i % firstNames.length];
  const lastName = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
  sampleUsers.push({
    id: uuidv4(),
    username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}${i}`,
    displayName: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}_${lastName.toLowerCase()}${i}@example.com`,
    createdAt: daysAgo(Math.floor(Math.random() * 365)),
    reviews: [],
    checkIns: [],
    friendships: [],
    friendOf: [],
  });
}

// Sample Businesses (San Francisco area)
export const sampleBusinesses: Business[] = [
  {
    id: uuidv4(),
    name: "The Coffee Bean",
    description: "Cozy neighborhood coffee shop with amazing pastries and friendly atmosphere",
    category: BusinessCategory.Cafe,
    address: "123 Main St, Downtown",
    latitude: 37.7749,
    longitude: -122.4194,
    phoneNumber: "(555) 123-4567",
    website: "https://coffeebean.example.com",
    averageRating: 4.5,
    createdAt: daysAgo(500),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "Bella Italia",
    description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas",
    category: BusinessCategory.Restaurant,
    address: "456 Oak Ave, Little Italy",
    latitude: 37.7739,
    longitude: -122.4312,
    phoneNumber: "(555) 234-5678",
    website: "https://bellaitalia.example.com",
    averageRating: 4.8,
    createdAt: daysAgo(450),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "Green Leaf Bistro",
    description: "Farm-to-table restaurant specializing in organic, locally-sourced ingredients",
    category: BusinessCategory.Restaurant,
    address: "789 Elm St, Green District",
    latitude: 37.7759,
    longitude: -122.4094,
    phoneNumber: "(555) 345-6789",
    website: "https://greenleaf.example.com",
    averageRating: 4.6,
    createdAt: daysAgo(400),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "The Craft Bar",
    description: "Local brewery with rotating taps and live music on weekends",
    category: BusinessCategory.Bar,
    address: "321 Pine St, Arts District",
    latitude: 37.7769,
    longitude: -122.4264,
    phoneNumber: "(555) 456-7890",
    averageRating: 4.3,
    createdAt: daysAgo(350),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "Sunrise Yoga Studio",
    description: "Peaceful yoga studio offering classes for all levels",
    category: BusinessCategory.Activity,
    address: "654 Maple Dr, West End",
    latitude: 37.7729,
    longitude: -122.4154,
    phoneNumber: "(555) 567-8901",
    website: "https://sunriseyoga.example.com",
    averageRating: 4.9,
    createdAt: daysAgo(300),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "Cinema Paradiso",
    description: "Independent movie theater showing art house and classic films",
    category: BusinessCategory.Entertainment,
    address: "987 Broadway, Theater District",
    latitude: 37.7779,
    longitude: -122.4134,
    phoneNumber: "(555) 678-9012",
    website: "https://cinemaparadiso.example.com",
    averageRating: 4.7,
    createdAt: daysAgo(250),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "Urban Threads",
    description: "Trendy boutique featuring local designers and sustainable fashion",
    category: BusinessCategory.Shopping,
    address: "246 Fashion Ave, Shopping District",
    latitude: 37.7719,
    longitude: -122.4214,
    phoneNumber: "(555) 789-0123",
    averageRating: 4.4,
    createdAt: daysAgo(200),
    reviews: [],
    deals: [],
    checkIns: [],
  },
  {
    id: uuidv4(),
    name: "Quick Fix Auto",
    description: "Reliable auto repair shop with honest service",
    category: BusinessCategory.Service,
    address: "135 Mechanic St, Industrial Area",
    latitude: 37.7709,
    longitude: -122.4254,
    phoneNumber: "(555) 890-1234",
    averageRating: 4.2,
    createdAt: daysAgo(600),
    reviews: [],
    deals: [],
    checkIns: [],
  },
];

// Sample Friendships (main user friends with first 20 users)
export const sampleFriendships: Friendship[] = [];
for (let i = 1; i <= 20; i++) {
  sampleFriendships.push({
    id: uuidv4(),
    status: FriendshipStatus.Accepted,
    createdAt: daysAgo(365 - i * 10),
    acceptedAt: daysAgo(365 - i * 10),
    userId: MAIN_USER_ID,
    friendId: sampleUsers[i].id,
  });
}

// Sample Check-Ins (friends at various businesses in the last 2 hours)
export const sampleCheckIns: CheckIn[] = [];
// Add some recent check-ins from friends
for (let i = 1; i <= 10; i++) {
  const businessIndex = Math.floor(Math.random() * sampleBusinesses.length);
  sampleCheckIns.push({
    id: uuidv4(),
    note: Math.random() > 0.5 ? "Great place!" : undefined,
    createdAt: hoursAgo(Math.random() * 2),
    userId: sampleUsers[i].id,
    businessId: sampleBusinesses[businessIndex].id,
  });
}

// Add some check-ins from non-friends
for (let i = 0; i < 20; i++) {
  const userIndex = 21 + Math.floor(Math.random() * 100);
  const businessIndex = Math.floor(Math.random() * sampleBusinesses.length);
  sampleCheckIns.push({
    id: uuidv4(),
    note: Math.random() > 0.7 ? "Nice spot" : undefined,
    createdAt: hoursAgo(Math.random() * 2),
    userId: sampleUsers[userIndex].id,
    businessId: sampleBusinesses[businessIndex].id,
  });
}

// Sample Deals
export const sampleDeals: Deal[] = [
  {
    id: uuidv4(),
    title: "Happy Hour Special",
    description: "50% off all draft beers",
    discountPercentage: 50,
    originalPrice: 8,
    discountedPrice: 4,
    startDate: new Date(),
    endDate: daysAgo(-30),
    isActive: true,
    createdAt: daysAgo(7),
    businessId: sampleBusinesses[3].id, // The Craft Bar
  },
  {
    id: uuidv4(),
    title: "Lunch Combo",
    description: "Pasta + Salad + Drink for $15",
    discountPercentage: 25,
    originalPrice: 20,
    discountedPrice: 15,
    startDate: new Date(),
    endDate: daysAgo(-14),
    isActive: true,
    createdAt: daysAgo(14),
    businessId: sampleBusinesses[1].id, // Bella Italia
  },
  {
    id: uuidv4(),
    title: "Morning Yoga Class",
    description: "First class free for new members",
    discountPercentage: 100,
    originalPrice: 25,
    discountedPrice: 0,
    startDate: new Date(),
    endDate: daysAgo(-60),
    isActive: true,
    createdAt: daysAgo(60),
    businessId: sampleBusinesses[4].id, // Sunrise Yoga
  },
];

// Sample Reviews
export const sampleReviews: Review[] = [
  {
    id: uuidv4(),
    rating: 5,
    title: "Amazing coffee!",
    comment: "Best latte in town. The atmosphere is perfect for working or catching up with friends.",
    createdAt: daysAgo(5),
    updatedAt: daysAgo(5),
    businessId: sampleBusinesses[0].id,
    userId: sampleUsers[1].id,
  },
  {
    id: uuidv4(),
    rating: 5,
    title: "Authentic Italian",
    comment: "The pasta is homemade and absolutely delicious. Feels like being in Italy!",
    createdAt: daysAgo(10),
    updatedAt: daysAgo(10),
    businessId: sampleBusinesses[1].id,
    userId: sampleUsers[2].id,
  },
];

// Helper function to get friends of a user
export const getUserFriends = (userId: string): User[] => {
  const friendships = sampleFriendships.filter(
    (f) =>
      f.status === FriendshipStatus.Accepted &&
      (f.userId === userId || f.friendId === userId)
  );

  return friendships.map((f) => {
    const friendId = f.userId === userId ? f.friendId : f.userId;
    return sampleUsers.find((u) => u.id === friendId)!;
  }).filter(Boolean);
};

// Helper function to get check-ins at a business from user's friends
export const getFriendCheckInsAtBusiness = (userId: string, businessId: string): CheckIn[] => {
  const friends = getUserFriends(userId);
  const friendIds = new Set(friends.map((f) => f.id));
  const twoHoursAgo = hoursAgo(2);

  return sampleCheckIns.filter(
    (checkIn) =>
      checkIn.businessId === businessId &&
      friendIds.has(checkIn.userId) &&
      checkIn.createdAt > twoHoursAgo
  );
};
