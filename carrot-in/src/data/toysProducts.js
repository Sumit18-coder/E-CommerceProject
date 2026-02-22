const toysProducts = [
  {
    id: "toy-1",
    Brand: "RC Toys",
    name: "RC Stunt Car with Steering Wheel Remote",
    image: "/category/toys_files/toy1.jpg",
    price: 1499,
    rating: 4.5,
    bought: 3500,
    discount: 20,
    delivery: "Delivery by Tomorrow",

    Color: "White / Grey / Black",
    AgeGroup: "6–12 Years",
    Pieces: 2,  // Car + steering wheel controller

    Sizes: [],
    category: "toys",
    about: [
      "4WD stunt remote control car with realistic steering wheel controller",
      "Performs flips, spins, wheelies, and high-speed action",
      "Rechargeable battery for extended playtime",
      "Durable build with large rugged tires for indoor/outdoor use",
      "LED lights and cool design for exciting adventures",
      "Easy controls suitable for kids and beginners"
    ]
  },
  {
    id: "toy-2",
    Brand: "Sensory Play",
    name: "Colorful Balance Wobble Board",
    image: "/category/toys_files/toy2.jpg",
    price: 899,
    rating: 4.6,
    bought: 2800,
    discount: 25,
    delivery: "Delivery by Tomorrow",

    Color: "Multi (Red, Yellow, Green, Blue sections)",
    AgeGroup: "3–8 Years",
    Pieces: 1,  // Main board + possible balls in some variants

    Sizes: [],
    category: "toys",
    about: [
      "Round wobble balance board with colorful pie-chart style sections for fun coordination play",
      "Helps improve balance, core strength, and motor skills in a playful way",
      "Durable plastic construction with non-slip surface",
      "Great for indoor active play, sensory development, or family games",
      "Supports multiple kids or parent-child interaction",
      "Lightweight and portable for home use"
    ]
  },
  {
    id: "toy-3",
    Brand: "Hot Fire",
    name: "Hot Fire Foam Dart Blaster Gun",
    image: "/category/toys_files/toy3.jpg",
    price: 599,
    rating: 4.5,
    bought: 4800,
    discount: 18,
    delivery: "Delivery by Tomorrow",

    Color: "Blue / Orange / Black",
    AgeGroup: "5 Years",
    Pieces: "1 + darts",

    Sizes: [],
    category: "toys",
    about: [
      "Stylish foam dart blaster with quick-load magazine",
      "Shoots soft foam darts for safe indoor/outdoor battles",
      "Ergonomic grip and trigger for easy handling",
      "Includes multiple blue/orange foam darts",
      "Fun blasting action with good range",
      "Perfect for kids' play fights or target practice"
    ]
  },
  {
    id: "toy-4",
    Brand: "Portable Gaming",
    name: "Handheld Gaming Console with Controller Grip",
    image: "/category/toys_files/toy4.jpg",
    price: 2499,
    rating: 4.4,
    bought: 1500,
    discount: 35,
    delivery: "Delivery by Tomorrow",

    Color: "Black / Blue LED",
    AgeGroup: "8+ Years",
    Pieces: "1 + grip",

    Sizes: [],
    category: "toys",
    about: [
      "Portable retro-style gaming console with built-in screen",
      "Comes with attachable controller grip for better handling",
      "Pre-loaded classic games for endless entertainment",
      "Rechargeable battery and vibrant display",
      "Perfect travel companion or gift for gamers",
      "Supports multiplayer fun with grip design"
    ]
  },
  {
    id: "toy-5",
    Brand: "Speed Bikes",
    name: "Die-Cast Pull-Back Motorcycle Set",
    image: "/category/toys_files/toy5.jpg",
    price: 799,
    rating: 4.6,
    bought: 3100,
    discount: 22,
    delivery: "Delivery by Tomorrow",

    Color: "Multi (Red, Blue, Grey/Camo)",
    AgeGroup: "4–10 Years",
    Pieces: 3,

    Sizes: [],
    category: "toys",
    about: [
      "Set of stylish sport bike models with pull-back action",
      "Detailed die-cast metal and plastic construction",
      "Realistic designs with kickstands and spinning wheels",
      "Great for racing, collection, or imaginative play",
      "Bright vibrant colors and aerodynamic look",
      "Durable for everyday rough play"
    ]
  },
  {
    id: "toy-6",
    Brand: "Skillmatics",
    name: "Sizzle Magnet Game",
    image: "/category/toys_files/toy6.jpg",
    price: 699,
    rating: 4.7,
    bought: 3800,
    discount: 10,
    delivery: "Delivery by Tomorrow",

    Color: "Black / Red (with metallic pieces)",
    AgeGroup: "6+ Years",
    Pieces: "24+",

    Sizes: [],
    category: "toys",
    about: [
      "Fast-paced magnetic reaction game with sizzling fun",
      "Players connect magnetic pucks on the cord track",
      "Builds quick reflexes, strategy, and excitement",
      "Adjustable difficulty levels for all ages",
      "Portable board game for family or friends",
      "Classic twist on active tabletop play"
    ]
  },
  {
    id: "toy-7",
    Brand: "Stunt RC",
    name: "Remote Control Stunt Spider Car",
    image: "/category/toys_files/toy7.jpg",
    price: 1399,
    rating: 4.5,
    bought: 2600,
    discount: 25,
    delivery: "Delivery by Tomorrow",

    Color: "Black / Blue / Orange",
    AgeGroup: "6–12 Years",
    Pieces: 2,  // Car + remote

    Sizes: [],
    category: "toys",
    about: [
      "Unique spider-style RC stunt vehicle with multi-directional wheels",
      "Performs flips, climbs, and 360° spins",
      "Rechargeable with LED lights for cool effects",
      "Durable armored body for tough terrain",
      "2.4GHz remote control for multiple players",
      "Exciting for indoor/outdoor stunt shows"
    ]
  },
  {
    id: "toy-8",
    Brand: "Ride-On Toys",
    name: "Yellow Rocking Ride-On Toy Set",
    image: "/category/toys_files/toy8.jpg",
    price: 1299,
    rating: 4.7,
    bought: 4100,
    discount: 15,
    delivery: "Delivery by Tomorrow",

    Color: "Yellow (with multi-color variants)",
    AgeGroup: "2–5 Years",
    Pieces: 3,  // Multiple ride-ons shown

    Sizes: [],
    category: "toys",
    about: [
      "Cute animal-themed rocking ride-on toys for toddlers",
      "Encourages active play, balance, and imagination",
      "Stable curved base for safe rocking motion",
      "Bright cheerful colors to attract young kids",
      "Durable plastic construction, easy to clean",
      "Perfect for indoor playrooms or group fun"
    ]
  },
  {
    id: "toy-9",
    Brand: "Toyko",
    name: "RC Rock Crawler Monster Truck",
    image: "/category/toys_files/toy9.jpg",
    price: 1999,
    rating: 4.6,
    bought: 1900,
    discount: 28,
    delivery: "Delivery by Tomorrow",

    Color: "Black",
    AgeGroup: "8+ Years",
    Pieces: "1 + accessories",

    Sizes: [],
    category: "toys",
    about: [
      "High-performance remote control rock crawler truck",
      "4x4 with massive tires for climbing and off-road action",
      "LED lights, rechargeable battery, and detailed accessories",
      "Durable metal/plastic frame for extreme play",
      "Full-function remote with USB charging",
      "Ideal for adventure seekers and collectors"
    ]
  },
  {
    id: "toy-10",
    Brand: "EagleGrove Style",
    name: "LED Camo Sniper Rifle Toy Gun",
    image: "/category/toys_files/toy10.jpg",
    price: 999,
    rating: 4.4,
    bought: 2200,
    discount: 30,
    delivery: "Delivery by Tomorrow",

    Color: "Camouflage (Black/Green with Orange accents)",
    AgeGroup: "6+ Years",
    Pieces: 1,

    Sizes: [],
    category: "toys",
    about: [
      "Realistic sniper rifle design with LED lights and laser effect",
      "Includes bipod stand, scope, and ammo belt details",
      "Safe soft bullet or dart firing mechanism (where applicable)",
      "Battery-operated lights for night play excitement",
      "Great for role-play, battles, or outdoor adventures",
      "Durable build with adjustable features"
    ]
  },
];

export default toysProducts;
