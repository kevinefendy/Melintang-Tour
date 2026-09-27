export type Region =
  | "Indonesia"
  | "Asia"
  | "Europe"
  | "Middle East"
  | "Australia & New Zealand"
  | "America";

export interface Destination {
  slug: string;
  name: string;
  region: Region;
  tagline: string;
  description: string;
  image: string;
  cities: string[];
  thingsToDo: string[];
  bestTime: string;
  popular?: boolean;
  rating: number;
}

export interface Tour {
  slug: string;
  title: string;
  destinationSlug: string;
  duration: string;
  days: number;
  nights: number;
  route: string[];
  price: number;
  originalPrice?: number;
  image: string;
  type: ("Domestic" | "International" | "Private" | "Group" | "Family" | "Honeymoon")[];
  departure: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  itinerary: { day: string; title: string; desc: string; meals: string; hotel: string }[];
  included: string[];
  excluded: string[];
  departures: { date: string; seatsLeft: number; price: number }[];
}

export interface Experience {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export interface Deal {
  slug: string;
  title: string;
  category: "Flash Sale" | "Early Bird" | "Seasonal" | "Family" | "Honeymoon" | "Group";
  tourSlug: string;
  originalPrice: number;
  finalPrice: number;
  discount: string;
  validUntil: string;
  terms: string[];
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  category: "Destination" | "Travel Tips" | "Food" | "Culture" | "Visa" | "Checklist" | "Seasonal Guide";
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const destinations: Destination[] = [
  {
    slug: "bali",
    name: "Bali",
    region: "Indonesia",
    tagline: "Island of Gods — surf, temples & sunsets",
    description:
      "Bali memadukan pantai kelas dunia, budaya Hindu yang hidup, dan hospitality terbaik Indonesia. Cocok untuk honeymoon, family trip, maupun solo escape.",
    image: img("photo-1537996194471-e657df975ab4"),
    cities: ["Denpasar", "Ubud", "Canggu", "Uluwatu", "Nusa Penida"],
    thingsToDo: ["Surfing di Canggu", "Sunrise di Mt Batur", "Temple hopping Uluwatu", "Snorkeling Nusa Penida"],
    bestTime: "April – Oktober (dry season)",
    popular: true,
    rating: 4.9,
  },
  {
    slug: "japan",
    name: "Japan",
    region: "Asia",
    tagline: "Explore Tokyo, Kyoto & Osaka",
    description:
      "Dari neon Tokyo sampai kuil Kyoto yang tenang — Jepang adalah perpaduan sempurna antara futuristik dan tradisi.",
    image: img("photo-1493976040374-85c8e12f0c0e"),
    cities: ["Tokyo", "Kyoto", "Osaka", "Hokkaido", "Mt Fuji"],
    thingsToDo: ["Shibuya crossing", "Fushimi Inari Kyoto", "Street food Osaka", "Mt Fuji day trip"],
    bestTime: "Maret – Mei (sakura) & Okt – Nov (autumn)",
    popular: true,
    rating: 4.9,
  },
  {
    slug: "korea",
    name: "Korea",
    region: "Asia",
    tagline: "K-culture, food & neon Seoul nights",
    description:
      "Seoul yang dinamis, Busan yang santai, dan Jeju yang eksotis. Surga K-pop, skincare, dan street food.",
    image: img("photo-1538669715315-155098f0fb1d"),
    cities: ["Seoul", "Busan", "Jeju", "Incheon"],
    thingsToDo: ["Gyeongbokgung Palace", "Myeongdong food street", "Gamcheon Village", "Jeju waterfalls"],
    bestTime: "April – Juni & Sep – Nov",
    popular: true,
    rating: 4.8,
  },
  {
    slug: "thailand",
    name: "Thailand",
    region: "Asia",
    tagline: "Temples, islands & legendary street food",
    description:
      "Bangkok yang hiruk-pikuk, Chiang Mai yang sejuk, dan Phuket yang memukau. Value terbaik di Asia Tenggara.",
    image: img("photo-1552465011-b4e21bf6e79a"),
    cities: ["Bangkok", "Chiang Mai", "Phuket", "Krabi"],
    thingsToDo: ["Grand Palace", "Phi Phi island hopping", "Floating market", "Thai cooking class"],
    bestTime: "November – Februari",
    popular: true,
    rating: 4.7,
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "Asia",
    tagline: "The Lion City — clean, modern & family-ready",
    description:
      "Destinasi paling ramah keluarga: Universal Studios, Gardens by the Bay, dan food hawker legendaris.",
    image: img("photo-1525625293386-3f8f99389edd"),
    cities: ["Marina Bay", "Sentosa", "Orchard", "Chinatown"],
    thingsToDo: ["Marina Bay Sands", "Universal Studios", "Gardens by the Bay", "Hawker hopping"],
    bestTime: "Sepanjang tahun",
    popular: true,
    rating: 4.8,
  },
  {
    slug: "raja-ampat",
    name: "Raja Ampat",
    region: "Indonesia",
    tagline: "The last paradise on earth",
    description:
      "Gugusan karst dan laut sebening kaca dengan biodiversity terkaya di dunia. Sekali seumur hidup wajib ke sini.",
    image: img("photo-1570789210967-2cac24afeb00"),
    cities: ["Waisai", "Misool", "Wayag", "Piaynemo"],
    thingsToDo: ["Diving & snorkeling", "Wayag viewpoint", "Manta watching", "Island hopping"],
    bestTime: "Oktober – April",
    rating: 5.0,
  },
  {
    slug: "europe",
    name: "Europe",
    region: "Europe",
    tagline: "Paris, Rome, Swiss & beyond",
    description:
      "Satu benua, sejuta cerita. Rute klasik Europe Highlights cocok untuk first-timer maupun honeymoon.",
    image: img("photo-1467269204594-9661b134dd2b"),
    cities: ["Paris", "Rome", "Amsterdam", "Swiss Alps", "Barcelona"],
    thingsToDo: ["Eiffel Tower", "Colosseum", "Swiss panoramic train", "Canal cruise Amsterdam"],
    bestTime: "Mei – September",
    popular: true,
    rating: 4.9,
  },
  {
    slug: "turkiye",
    name: "Türkiye",
    region: "Middle East",
    tagline: "Where East meets West",
    description:
      "Balon udara Cappadocia, Hagia Sophia Istanbul, dan pantai Antalya. Eksotis dan ramah di kantong.",
    image: img("photo-1524231757912-21f4fe3a7200"),
    cities: ["Istanbul", "Cappadocia", "Antalya", "Pamukkale"],
    thingsToDo: ["Hot air balloon Cappadocia", "Bosphorus cruise", "Pamukkale travertines", "Grand Bazaar"],
    bestTime: "April – Juni & Sep – Okt",
    popular: true,
    rating: 4.8,
  },
];

export const tours: Tour[] = [
  {
    slug: "japan-golden-route",
    title: "Japan Golden Route",
    destinationSlug: "japan",
    duration: "8 Days / 6 Nights",
    days: 8,
    nights: 6,
    route: ["Tokyo", "Mt Fuji", "Kyoto", "Osaka"],
    price: 24900000,
    originalPrice: 27900000,
    image: img("photo-1493976040374-85c8e12f0c0e"),
    type: ["International", "Group", "Family"],
    departure: "Jakarta",
    rating: 4.9,
    reviews: 214,
    featured: true,
    itinerary: [
      { day: "DAY 01", title: "Jakarta → Tokyo", desc: "Arrival at Tokyo. Airport transfer. Hotel check-in.", meals: "Dinner", hotel: "Shinjuku Washington Hotel" },
      { day: "DAY 02", title: "Tokyo City Tour", desc: "Shibuya, Asakusa, Tokyo Tower &teamLab.", meals: "Breakfast + Lunch", hotel: "Shinjuku Washington Hotel" },
      { day: "DAY 03", title: "Tokyo → Mt Fuji", desc: "Mt Fuji 5th station, Lake Kawaguchi, Oshino Hakkai.", meals: "Breakfast + Lunch", hotel: "Fuji Area Hotel" },
      { day: "DAY 04", title: "Mt Fuji → Kyoto", desc: "Bullet train experience. Fushimi Inari & Gion.", meals: "Breakfast", hotel: "Kyoto Hotel" },
      { day: "DAY 05", title: "Kyoto → Osaka", desc: "Kinkakuji, Arashiyama, Dotonbori night walk.", meals: "Breakfast + Dinner", hotel: "Osaka Hotel" },
      { day: "DAY 06", title: "Osaka Free Day", desc: "Optional: Universal Studios Japan.", meals: "Breakfast", hotel: "Osaka Hotel" },
      { day: "DAY 07", title: "Osaka → Jakarta", desc: "Last-minute shopping then fly home.", meals: "Breakfast", hotel: "Onboard" },
      { day: "DAY 08", title: "Arrival Jakarta", desc: "Welcome home. End of tour.", meals: "-", hotel: "-" },
    ],
    included: ["Hotel", "Breakfast", "Airport transfer", "Transportation", "Tour guide", "Entrance tickets"],
    excluded: ["Personal expenses", "Travel insurance", "Visa", "Optional activities"],
    departures: [
      { date: "2027-03-12", seatsLeft: 8, price: 24900000 },
      { date: "2027-04-09", seatsLeft: 14, price: 25400000 },
      { date: "2027-05-21", seatsLeft: 4, price: 24900000 },
    ],
  },
  {
    slug: "bali-escape",
    title: "Bali Escape",
    destinationSlug: "bali",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    route: ["Uluwatu", "Ubud", "Nusa Penida"],
    price: 3999000,
    originalPrice: 4699000,
    image: img("photo-1537996194471-e657df975ab4"),
    type: ["Domestic", "Family", "Honeymoon", "Group"],
    departure: "Jakarta",
    rating: 4.8,
    reviews: 486,
    featured: true,
    itinerary: [
      { day: "DAY 01", title: "Arrival Bali", desc: "Airport pickup, Uluwatu sunset & Kecak dance.", meals: "Dinner", hotel: "Kuta Resort" },
      { day: "DAY 02", title: "Ubud Explorer", desc: "Tegalalang rice terrace, Tirta Empul, monkey forest.", meals: "Breakfast + Lunch", hotel: "Kuta Resort" },
      { day: "DAY 03", title: "Nusa Penida", desc: "Kelingking beach, Angel's Billabong, snorkeling.", meals: "Breakfast + Lunch", hotel: "Kuta Resort" },
      { day: "DAY 04", title: "Departure", desc: "Souvenir shopping & transfer to airport.", meals: "Breakfast", hotel: "-" },
    ],
    included: ["Hotel", "Breakfast", "Airport transfer", "Transportation", "Tour guide", "Entrance tickets"],
    excluded: ["Personal expenses", "Travel insurance", "Optional activities"],
    departures: [
      { date: "2027-02-14", seatsLeft: 20, price: 3999000 },
      { date: "2027-03-06", seatsLeft: 12, price: 3999000 },
    ],
  },
  {
    slug: "korea-experience",
    title: "Korea Experience",
    destinationSlug: "korea",
    duration: "6 Days / 4 Nights",
    days: 6,
    nights: 4,
    route: ["Seoul", "Busan"],
    price: 15900000,
    image: img("photo-1538669715315-155098f0fb1d"),
    type: ["International", "Group", "Private"],
    departure: "Jakarta",
    rating: 4.8,
    reviews: 167,
    featured: true,
    itinerary: [
      { day: "DAY 01", title: "Jakarta → Seoul", desc: "Arrival, Myeongdong night food tour.", meals: "Dinner", hotel: "Seoul Hotel" },
      { day: "DAY 02", title: "Seoul City", desc: "Gyeongbokgung, Bukchon, Hongdae.", meals: "Breakfast + Lunch", hotel: "Seoul Hotel" },
      { day: "DAY 03", title: "Nami + Busan", desc: "Nami island then KTX to Busan.", meals: "Breakfast", hotel: "Busan Hotel" },
      { day: "DAY 04", title: "Busan", desc: "Gamcheon village, Haeundae beach.", meals: "Breakfast + Lunch", hotel: "Busan Hotel" },
      { day: "DAY 05", title: "Busan → Jakarta", desc: "Jagalchi market, fly home.", meals: "Breakfast", hotel: "Onboard" },
      { day: "DAY 06", title: "Arrival Jakarta", desc: "End of tour.", meals: "-", hotel: "-" },
    ],
    included: ["Hotel", "Breakfast", "Airport transfer", "Transportation", "Tour guide", "Entrance tickets"],
    excluded: ["Personal expenses", "Travel insurance", "Visa"],
    departures: [{ date: "2027-04-02", seatsLeft: 10, price: 15900000 }],
  },
  {
    slug: "europe-highlights",
    title: "Europe Highlights",
    destinationSlug: "europe",
    duration: "12 Days / 10 Nights",
    days: 12,
    nights: 10,
    route: ["Paris", "Amsterdam", "Swiss", "Rome"],
    price: 49900000,
    image: img("photo-1467269204594-9661b134dd2b"),
    type: ["International", "Honeymoon", "Group"],
    departure: "Jakarta",
    rating: 4.9,
    reviews: 98,
    featured: true,
    itinerary: [
      { day: "DAY 01-03", title: "Paris", desc: "Eiffel, Louvre, Seine cruise.", meals: "Breakfast", hotel: "Paris Hotel" },
      { day: "DAY 04-05", title: "Amsterdam", desc: "Canal cruise, Zaanse Schans.", meals: "Breakfast", hotel: "Amsterdam Hotel" },
      { day: "DAY 06-08", title: "Swiss Alps", desc: "Mt Titlis, Lucerne, panoramic train.", meals: "Breakfast", hotel: "Lucerne Hotel" },
      { day: "DAY 09-11", title: "Rome", desc: "Colosseum, Vatican, Trevi.", meals: "Breakfast", hotel: "Rome Hotel" },
      { day: "DAY 12", title: "Home", desc: "Fly back to Jakarta.", meals: "Breakfast", hotel: "-" },
    ],
    included: ["Hotel", "Breakfast", "Airport transfer", "Transportation", "Tour guide", "Entrance tickets"],
    excluded: ["Personal expenses", "Travel insurance", "Visa Schengen"],
    departures: [{ date: "2027-06-10", seatsLeft: 16, price: 49900000 }],
  },
  {
    slug: "explore-raja-ampat",
    title: "Explore Raja Ampat",
    destinationSlug: "raja-ampat",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    route: ["Waisai", "Wayag", "Piaynemo", "Misool"],
    price: 12900000,
    image: img("photo-1570789210967-2cac24afeb00"),
    type: ["Domestic", "Private", "Group"],
    departure: "Sorong",
    rating: 5.0,
    reviews: 64,
    featured: true,
    itinerary: [
      { day: "DAY 01", title: "Sorong → Waisai", desc: "Ferry crossing, resort check-in.", meals: "Lunch + Dinner", hotel: "Waisai Resort" },
      { day: "DAY 02", title: "Wayag", desc: "Wayag viewpoint trek & snorkeling.", meals: "Breakfast + Lunch + Dinner", hotel: "Waisai Resort" },
      { day: "DAY 03", title: "Piaynemo", desc: "Star lagoon, manta point.", meals: "Breakfast + Lunch + Dinner", hotel: "Waisai Resort" },
      { day: "DAY 04", title: "Misool loop", desc: "Hidden lagoons & sandbank.", meals: "Breakfast + Lunch + Dinner", hotel: "Waisai Resort" },
      { day: "DAY 05", title: "Return", desc: "Back to Sorong.", meals: "Breakfast", hotel: "-" },
    ],
    included: ["Resort", "All meals", "Speedboat", "Guide", "Snorkel gear"],
    excluded: ["Flights to Sorong", "Personal expenses", "Dive gear"],
    departures: [{ date: "2027-05-02", seatsLeft: 6, price: 12900000 }],
  },
  {
    slug: "thailand-adventure",
    title: "Thailand Adventure",
    destinationSlug: "thailand",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    route: ["Bangkok", "Phuket", "Phi Phi"],
    price: 8900000,
    image: img("photo-1552465011-b4e21bf6e79a"),
    type: ["International", "Family", "Group"],
    departure: "Jakarta",
    rating: 4.7,
    reviews: 189,
    itinerary: [
      { day: "DAY 01", title: "Arrival Bangkok", desc: "Grand Palace & Chao Phraya cruise.", meals: "Dinner", hotel: "Bangkok Hotel" },
      { day: "DAY 02", title: "Bangkok → Phuket", desc: "Fly to Phuket, Patong night.", meals: "Breakfast", hotel: "Phuket Hotel" },
      { day: "DAY 03", title: "Phi Phi", desc: "Island hopping Maya Bay.", meals: "Breakfast + Lunch", hotel: "Phuket Hotel" },
      { day: "DAY 04", title: "Free day", desc: "Optional: Big Buddha, beach club.", meals: "Breakfast", hotel: "Phuket Hotel" },
      { day: "DAY 05", title: "Home", desc: "Fly back.", meals: "Breakfast", hotel: "-" },
    ],
    included: ["Hotel", "Breakfast", "Airport transfer", "Transportation", "Tour guide"],
    excluded: ["Personal expenses", "Travel insurance"],
    departures: [{ date: "2027-03-20", seatsLeft: 18, price: 8900000 }],
  },
];

export const experiences: Experience[] = [
  { slug: "bali-sunset-sailing", title: "Bali Sunset Sailing", location: "Bali, Indonesia", duration: "2 Hours", price: 650000, image: img("photo-1544551763-46a013bb70d5", 800), category: "Cruise", rating: 4.9 },
  { slug: "tokyo-food-tour", title: "Tokyo Night Food Tour", location: "Tokyo, Japan", duration: "4 Hours", price: 1200000, image: img("photo-1554797589-7241bb691973", 800), category: "Food", rating: 4.9 },
  { slug: "ubud-cooking-class", title: "Ubud Cooking Class", location: "Bali, Indonesia", duration: "5 Hours", price: 450000, image: img("photo-1556910103-1c02745aae4d", 800), category: "Culture", rating: 4.8 },
  { slug: "cappadocia-balloon", title: "Cappadocia Sunrise Balloon", location: "Cappadocia, Türkiye", duration: "3 Hours", price: 4500000, image: img("photo-1570939274717-7eda259b50ed", 800), category: "Adventure", rating: 5.0 },
  { slug: "nami-day-pass", title: "Nami Island Day Pass", location: "Seoul, Korea", duration: "8 Hours", price: 750000, image: img("photo-1517154421773-0529f29ea451", 800), category: "City Tour", rating: 4.7 },
  { slug: "swiss-alps-rail", title: "Swiss Panoramic Rail", location: "Lucerne, Switzerland", duration: "Full Day", price: 3200000, image: img("photo-1531366936337-7c912a4589a7", 800), category: "City Tour", rating: 4.9 },
];

export const deals: Deal[] = [
  {
    slug: "bali-escape-15",
    title: "Bali Escape — Save up to 15%",
    category: "Seasonal",
    tourSlug: "bali-escape",
    originalPrice: 4699000,
    finalPrice: 3999000,
    discount: "15%",
    validUntil: "2027-04-30",
    terms: ["Valid for departures before 30 Apr 2027", "Cannot combine with other promos", "Min. 2 travelers"],
    image: img("photo-1537996194471-e657df975ab4"),
  },
  {
    slug: "japan-early-bird",
    title: "Japan Golden Route Early Bird",
    category: "Early Bird",
    tourSlug: "japan-golden-route",
    originalPrice: 27900000,
    finalPrice: 24900000,
    discount: "11%",
    validUntil: "2027-02-28",
    terms: ["Book 60 days in advance", "Free visa assistance", "Min. deposit 30%"],
    image: img("photo-1493976040374-85c8e12f0c0e"),
  },
  {
    slug: "honeymoon-europe",
    title: "Honeymoon Europe Bonus Night",
    category: "Honeymoon",
    tourSlug: "europe-highlights",
    originalPrice: 52900000,
    finalPrice: 49900000,
    discount: "6%",
    validUntil: "2027-06-30",
    terms: ["Free 1-night upgrade", "Couple dinner included", "Valid with marriage cert"],
    image: img("photo-1467269204594-9661b134dd2b"),
  },
  {
    slug: "flash-thailand",
    title: "Flash Sale Thailand Adventure",
    category: "Flash Sale",
    tourSlug: "thailand-adventure",
    originalPrice: 9900000,
    finalPrice: 8900000,
    discount: "10%",
    validUntil: "2027-02-10",
    terms: ["48-hour sale only", "Limited 20 seats", "Non-refundable deposit"],
    image: img("photo-1552465011-b4e21bf6e79a"),
  },
];

export const articles: Article[] = [
  {
    slug: "best-time-to-visit-japan",
    title: "10 Things You Should Know Before Visiting Japan",
    category: "Destination",
    excerpt: "Sakura timing, JR Pass hacks, etiquette & budget breakdown for first-timers.",
    image: img("photo-1493976040374-85c8e12f0c0e", 800),
    date: "2026-11-02",
    readTime: "8 min",
  },
  {
    slug: "bali-budget-guide",
    title: "Bali on Any Budget: The Complete 2027 Guide",
    category: "Travel Tips",
    excerpt: "From backpacker warungs to luxury cliff resorts — plan Bali without overpaying.",
    image: img("photo-1537996194471-e657df975ab4", 800),
    date: "2026-10-18",
    readTime: "6 min",
  },
  {
    slug: "japan-visa-checklist",
    title: "Japan Visa Checklist for Indonesians",
    category: "Visa",
    excerpt: "Documents, e-passport waiver, fees & common rejection reasons.",
    image: img("photo-1480796927426-f609979314bd", 800),
    date: "2026-09-30",
    readTime: "5 min",
  },
  {
    slug: "korea-food-map",
    title: "Seoul Food Map: 12 Dishes You Can't Miss",
    category: "Food",
    excerpt: "Tteokbokki to hanwoo — where locals actually eat in Seoul.",
    image: img("photo-1538669715315-155098f0fb1d", 800),
    date: "2026-09-12",
    readTime: "7 min",
  },
  {
    slug: "packing-checklist-long-haul",
    title: "Long-Haul Packing Checklist That Actually Works",
    category: "Checklist",
    excerpt: "Carry-on only? Europe winter? Print this before you zip your bag.",
    image: img("photo-1488646953014-85cb44e25828", 800),
    date: "2026-08-25",
    readTime: "4 min",
  },
  {
    slug: "cappadocia-seasonal-guide",
    title: "Cappadocia by Season: When Balloons Fly Best",
    category: "Seasonal Guide",
    excerpt: "Wind patterns, crowds & prices month by month.",
    image: img("photo-1524231757912-21f4fe3a7200", 800),
    date: "2026-08-02",
    readTime: "6 min",
  },
];

export const navLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Tours", href: "/tours" },
  { label: "Experiences", href: "/experiences" },
  { label: "Deals", href: "/deals" },
  { label: "Travel Guide", href: "/travel-guide" },
  { label: "Custom Trip", href: "/custom-trip" },
];

export const regions: Region[] = [
  "Indonesia",
  "Asia",
  "Europe",
  "Middle East",
  "Australia & New Zealand",
  "America",
];
