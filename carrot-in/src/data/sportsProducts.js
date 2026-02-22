const sportsProducts = [
  {
    id: "sports-1",
    Brand: "Cosco",
    name: "Fly Disc (Frisbee)",
    image: "/category/sports_files/sports1.jpg",
    price: 499,
    rating: 4.4,
    bought: 1800,
    discount: 15,
    delivery: "Delivery in 2 days",
    Color: "Orange",
    Material: "Premium durable plastic",
    SportsSize: "Standard 175g class",
    Sizes: [],
    category: "sports",
    about: [
      "Bright orange disc with dynamic black swirl graphic for excellent visibility",
      "Aerodynamic design ensures stable, long-distance flights",
      "Great for casual toss, ultimate frisbee, beach games, or park fun",
      "Flexible and impact-resistant for all skill levels",
      "Suitable for kids, adults, and group activities",
      "Weather-resistant and easy to grip"
    ]
  },
  {
    id: "sports-2",
    Brand: "HALOHOP",
    name: "Digital Smart Jump Rope with LCD Counter",
    image: "/category/sports_files/sports2.jpg",
    price: 1199,
    rating: 4.6,
    bought: 2900,
    discount: 28,
    delivery: "Delivery in 2 days",

    Color: "Black",
    Material: "PVC cable with ABS + TPE handles",
    SportsSize: "Adjustable length (up to 300 cm)",

    Sizes: [],
    category: "sports",
    about: [
      "Built-in backlit LCD display tracks jumps, time, calories burned, and more",
      "Adjustable rope length to suit all heights and users",
      "Ergonomic non-slip textured handles for comfortable, secure grip during intense sessions",
      "Tangle-free design with smooth rotation bearings for consistent skipping",
      "Ideal for cardio workouts, HIIT, boxing training, weight loss, and endurance building",
      "Portable and lightweight – perfect for home, gym, or travel use"
    ]
  },
  {
    id: "sports-3",
    Brand: "Training Gear",
    name: "Agility Training Cones Set (50 Pack)",
    image: "/category/sports_files/sports3.jpg",
    price: 899,
    rating: 4.6,
    bought: 3200,
    discount: 25,
    delivery: "Delivery in 2 days",
    Color: "Multi (Yellow, Orange, Green, Blue, White)",
    Material: "Durable PVC",
    SportsSize: "Standard 2-inch height",
    Sizes: [],
    category: "sports",
    about: [
      "50-piece set of vibrant disc cones for agility, speed, and sports drills",
      "Lightweight, flexible, and safe for high-impact training",
      "Stackable with built-in handle for easy storage and transport",
      "Perfect for soccer, football, basketball, hockey, and field exercises",
      "Weather-resistant for indoor and outdoor use",
      "Bright multi-colors improve visibility during training sessions"
    ]
  },
  {
    id: "sports-4",
    Brand: "Bodymatics",
    name: "Textured Foam Roller with Massage Balls Set",
    image: "/category/sports_files/sports4.jpg",
    price: 999,
    rating: 4.7,
    bought: 4800,
    discount: 30,
    delivery: "Delivery in 2 days",

    Color: "Black (Roller) + Green & Red (Balls)",
    Material: "High-density EVA foam",
    SportsSize: "Standard roller ~33cm length; Balls ~6-8cm diameter",

    Sizes: [],
    category: "sports",
    about: [
      "High-density textured foam roller for deep tissue massage and myofascial release",
      "Multi-zone ridges target knots, sore muscles, back, legs, IT bands, and more",
      "Includes two spiky massage balls (green for medium pressure, red for intense trigger point therapy)",
      "Helps relieve muscle soreness, improve flexibility, boost circulation, and speed recovery after workouts",
      "Durable, lightweight, and portable – ideal for home, gym, yoga, or post-exercise use",
      "Easy to clean; maintains shape under heavy pressure for long-lasting performance"
    ]
  },
  {
    id: "sports-5",  // Adjust as needed (e.g., sports-7 or next in your array)
    Brand: "DULTER",
    name: "Agility Training Marker Cones Set (6 Pack) with Drawstring Bag",
    image: "/category/sports_files/sports5.jpg",
    price: 499,
    rating: 4.5,
    bought: 4200,
    discount: 20,
    delivery: "Delivery in 2 days",

    Color: "Multi (Yellow, Orange, Red, Green, Blue)",
    Material: "Durable flexible PVC plastic",
    SportsSize: "Approx. 9-12 inch height cones; Standard base",

    Sizes: [],
    category: "sports",
    about: [
      "Set of 6 vibrant colored cones for marking boundaries, drills, and agility training",
      "Flexible and impact-resistant PVC – safe if stepped on or kicked during play",
      "Bright multi-colors for high visibility on any field or indoor surface",
      "Includes black drawstring carry bag for convenient storage and portability",
      "Ideal for soccer, football, basketball, cricket, field hockey, kids' games, or fitness drills",
      "Lightweight, stackable design – easy setup and cleanup for coaches and players"
    ]
  },
  {
    id: "sports-6",
    Brand: "BOLDFIT",
    name: "Compression Arm Sleeves (Pair)",
    image: "/category/sports_files/sports6.jpg",
    price: 599,
    rating: 4.6,
    bought: 3800,
    discount: 25,
    delivery: "Delivery in 2 days",
    Color: "Black",
    Material: "Nylon-spandex blend",
    SportsSize: "One size fits most (adjustable)",
    Sizes: [],
    category: "sports",
    about: [
      "Graduated compression supports muscles and improves circulation",
      "UV protection and moisture-wicking fabric for outdoor activities",
      "Reduces fatigue, swelling, and recovery time",
      "Perfect for running, cycling, basketball, cricket, or gym use",
      "Flatlock seams prevent chafing and irritation",
      "Breathable, quick-dry, and lightweight design"
    ]
  },
  {
    id: "sports-7",
    Brand: "Bodymatics",
    name: "Textured Foam Roller for Muscle Recovery",
    image: "/category/sports_files/sports7.jpg",
    price: 799,
    rating: 4.7,
    bought: 4800,
    discount: 30,
    delivery: "Delivery in 2 days",
    Color: "Black",
    Material: "High-density EVA foam",
    SportsSize: "Standard 33cm length",
    Sizes: [],
    category: "sports",
    about: [
      "Deep tissue massage roller with multi-zone ridges for trigger point release",
      "Helps reduce muscle soreness, improve flexibility, and speed up recovery",
      "Ideal for back, legs, IT bands, calves, and full-body myofascial release",
      "Durable, lightweight, and portable for home, gym, or travel use",
      "High-density foam maintains shape under heavy pressure",
      "Easy to clean and built for long-term use"
    ]
  },
  {
    id: "sports-8",
    Brand: "AIRST",
    name: "Air Cushion Running Shoes",
    image: "/category/sports_files/sports8.jpg",
    price: 2499,
    rating: 4.5,
    bought: 1500,
    discount: 35,
    delivery: "Delivery in 2 days",
    Color: "White / Mint Green / Orange",
    Material: "Breathable mesh upper",
    SportsSize: "UK 6-11 (standard sizing)",
    Sizes: ["6", "7", "8", "9", "10", "11"],
    category: "sports",
    about: [
      "Advanced air-cushioned midsole absorbs shock and provides bounce",
      "Lightweight mesh upper for breathability and comfort during runs",
      "Responsive sole with good traction for road, gym, or casual jogging",
      "Stylish color-block design with secure lace-up closure",
      "Suitable for daily training, walking, or light workouts",
      "Cushioned insole reduces fatigue on longer sessions"
    ]
  },
  {
    id: "sports-9",
    Brand: "Athletic",
    name: "Performance Gym Shorts",
    image: "/category/sports_files/sports9.jpg",
    price: 699,
    rating: 4.5,
    bought: 4100,
    discount: 20,
    delivery: "Delivery in 2 days",
    Color: "Grey",
    Material: "Quick-dry polyester blend",
    SportsSize: "M, L, XL",
    Sizes: ["M", "L", "XL", "XXL"],
    category: "sports",
    about: [
      "Breathable, lightweight fabric for unrestricted movement",
      "Elastic waistband with drawstring for custom secure fit",
      "Side pockets for convenience during workouts",
      "Great for gym sessions, running, training, or casual active wear",
      "Moisture-wicking technology keeps you dry",
      "Modern athletic cut with subtle logo detailing"
    ]
  },
  {
    id: "sports-10",
    Brand: "BOLDFIT",
    name: "Compression Arm Sleeves (Pair)",
    image: "/category/sports_files/sports10.jpg",
    price: 599,
    rating: 4.6,
    bought: 3800,
    discount: 25,
    delivery: "Delivery in 2 days",
    Color: "Black",
    Material: "Nylon-spandex blend",
    SportsSize: "One size fits most (adjustable)",
    Sizes: [],
    category: "sports",
    about: [
      "Graduated compression supports muscles and improves circulation",
      "UV protection and moisture-wicking fabric for outdoor activities",
      "Reduces fatigue, swelling, and recovery time",
      "Perfect for running, cycling, basketball, cricket, or gym use",
      "Flatlock seams prevent chafing and irritation",
      "Breathable, quick-dry, and lightweight design"
    ]
  },

];

export default sportsProducts;
