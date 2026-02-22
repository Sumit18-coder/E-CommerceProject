const mobileProducts = [
  {
    id: "mobile-1",
    Brand: "Apple",
    name: "iPhone 11 (64GB)",
    image: "/category/mobile_files/mobile1.jpg",
    price: 39999,
    rating: 4.6,
    bought: 5420,
    discount: 10,
    delivery: "Delivery by Tomorrow",

    Color: "White",
    Storage: "64GB",
    RAM: "4GB",
    Display: "6.1 inch",
    Battery: "3110mAh",

    Sizes: [],
    category: "mobile",
        about: [
      "6.1-inch Liquid Retina HD display",
      "A13 Bionic chip for fast performance",
      "Dual-camera system with 12MP lenses",
      "Up to 17 hours video playback",
      "Face ID for secure authentication"
    ]
  },
  {
    id: "mobile-2",
    Brand: "Apple",
    name: "iPhone 16e (128GB)",
    image: "/category/mobile_files/mobile2.jpg",
    price: 59900,
    rating: 4.7,
    bought: 1800,
    discount: 5,
    delivery: "Delivery in 2 days",

    Color: "Black / Midnight",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.1 inch Super Retina XDR",
    Battery: "Long battery life (up to 26 hours video)",

    Sizes: [],
    category: "mobile",
    about: [
      "A18 chip for high performance and Apple Intelligence",
      "48MP main camera with advanced features",
      "Built for Apple Intelligence features",
      "USB-C, Emergency SOS, Crash Detection",
      "Premium build and ecosystem integration"
    ]
  },
  {
    id: "mobile-3",
    Brand: "Motorola",
    name: "Moto G Series 5G (8GB/128GB)",
    image: "/category/mobile_files/mobile3.jpg",
    price: 16999,
    rating: 4.4,
    bought: 4100,
    discount: 12,
    delivery: "Delivery by Tomorrow",

    Color: "Black / Dark",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.67 inch, 120Hz",
    Battery: "5000mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Fastest 5G with 12 bands support",
      "120Hz FHD+ display",
      "50MP quad pixel main + 8MP ultrawide",
      "Snapdragon processor",
      "Clean Android experience with Dolby Atmos"
    ]
  },{
    id: "mobile-4",
    Brand: "Motorola",
    name: "Moto Edge / G Premium (12GB/256GB)",
    image: "/category/mobile_files/mobile4.jpg",
    price: 24999,
    rating: 4.5,
    bought: 2200,
    discount: 10,
    delivery: "Delivery in 2 days",

    Color: "Teal / Blue",
    Storage: "256GB",
    RAM: "12GB",
    Display: "6.7 inch pOLED, 120Hz curved",
    Battery: "5000mAh with TurboPower",

    Sizes: [],
    category: "mobile",
    about: [
      "Premium curved pOLED display",
      "50MP + ultrawide + macro + depth quad camera",
      "Powerful octa-core processor",
      "33W fast charging",
      "Gorilla Glass protection"
    ]
  },
  {
    id: "mobile-5",
    Brand: "Xiaomi",
    name: "Redmi A5 (6GB/128GB)",
    image: "/category/mobile_files/mobile5.jpg",
    price: 8499,
    rating: 4.2,
    bought: 6800,
    discount: 20,
    delivery: "Delivery by Tomorrow",

    Color: "Beige / Gold",
    Storage: "128GB",
    RAM: "6GB",
    Display: "6.88 inch HD+, 120Hz",
    Battery: "5200mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Segment's largest display with 120Hz smoothness",
      "Powerful octa-core processor",
      "32MP AI dual rear camera",
      "Large 5200mAh battery",
      "Expandable storage up to 2TB"
    ]
  },
  {
    id: "mobile-6",
    Brand: "Samsung",
    name: "Galaxy F17 5G (6GB/128GB)",
    image: "/category/mobile_files/mobile6.jpg",
    price: 15999,
    rating: 4.3,
    bought: 3200,
    discount: 15,
    delivery: "Delivery by Tomorrow",

    Color: "Violet Pop / Blue",
    Storage: "128GB",
    RAM: "6GB",
    Display: "6.7 inch Super AMOLED, 90Hz",
    Battery: "5000mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Slimmest smartphone in its segment",
      "Toughest Corning Gorilla Glass Victus+ protection",
      "50MP No Shake Cam with OIS",
      "13MP front camera",
      "Exynos 1330 processor, Android 15 with long updates",
      "25W fast charging, IP54 rating"
    ]
  },
  {
    id: "mobile-7",
    Brand: "Apple",
    name: "iPhone 16 (128GB)",
    image: "/category/mobile_files/mobile7.jpg",
    price: 59900,
    rating: 4.7,
    bought: 1800,
    discount: 5,
    delivery: "Delivery in 2 days",

    Color: "Black / Midnight",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.1 inch Super Retina XDR",
    Battery: "Long battery life (up to 26 hours video)",

    Sizes: [],
    category: "mobile",
    about: [
      "A18 chip for high performance and Apple Intelligence",
      "48MP main camera with advanced features",
      "Built for Apple Intelligence features",
      "USB-C, Emergency SOS, Crash Detection",
      "Premium build and ecosystem integration"
    ]
  },
  {
    id: "mobile-8",
    Brand: "Apple",
    name: "iPhone Fold (Conceptual/Flip Style)",
    image: "/category/mobile_files/mobile8.jpg",
    price: 149900,
    rating: 4.8,
    bought: 800,
    discount: 0,
    delivery: "Delivery in 3-5 days",

    Color: "Silver / White",
    Storage: "256GB",
    RAM: "8GB",
    Display: "Foldable inner + cover display",
    Battery: "High-capacity with fast charging",

    Sizes: [],
    category: "mobile",
    about: [
      "Innovative foldable design",
      "Premium dual-tone aesthetic",
      "Advanced camera and display tech",
      "Seamless multitasking on foldable screen",
      "Apple ecosystem with top-tier performance"
    ]
  },
  {
    id: "mobile-9",
    Brand: "Apple",
    name: "iPhone 16 Pro (256GB)",
    image: "/category/mobile_files/mobile9.jpg",
    price: 119900,
    rating: 4.8,
    bought: 2500,
    discount: 8,
    delivery: "Delivery by Tomorrow",

    Color: "White / Titanium",
    Storage: "256GB",
    RAM: "8GB",
    Display: "6.3 inch Super Retina XDR, 120Hz",
    Battery: "Up to 27 hours video playback",

    Sizes: [],
    category: "mobile",
    about: [
      "Triple 48MP camera system",
      "A18 Pro chip for pro-level performance",
      "Titanium frame, Ceramic Shield",
      "Advanced video features and ray tracing",
      "ProMotion 120Hz refresh rate"
    ]
  },
  {
    id: "mobile-10",
    Brand: "Motorola",
    name: "Moto Edge / G Premium (12GB/256GB)",
    image: "/category/mobile_files/mobile10.jpg",
    price: 24999,
    rating: 4.5,
    bought: 2200,
    discount: 10,
    delivery: "Delivery in 2 days",

    Color: "Teal / Blue",
    Storage: "256GB",
    RAM: "12GB",
    Display: "6.7 inch pOLED, 120Hz curved",
    Battery: "5000mAh with TurboPower",

    Sizes: [],
    category: "mobile",
    about: [
      "Premium curved pOLED display",
      "50MP + ultrawide + macro + depth quad camera",
      "Powerful octa-core processor",
      "33W fast charging",
      "Gorilla Glass protection"
    ]
  },
  {
    id: "mobile-11",
    Brand: "iQOO",
    name: "Z10 Lite 5G (6GB/128GB)",
    image: "/category/mobile_files/mobile11.jpg",
    price: 12999,
    rating: 4.4,
    bought: 3500,
    discount: 13,
    delivery: "Delivery by Tomorrow",

    Color: "Blue / Light Blue",
    Storage: "128GB",
    RAM: "6GB",
    Display: "6.74 inch, 1000 nits",
    Battery: "6000mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Segment's biggest 6000mAh battery",
      "50MP Sony AI main camera",
      "Dimensity 6300 5G processor",
      "IP64 dust/water resistance",
      "Military-grade shock resistance"
    ]
  },
  {
    id: "mobile-12",
    Brand: "iQOO",
    name: "Neo 10R 5G (8GB/128GB)",
    image: "/category/mobile_files/mobile12.jpg",
    price: 26998,
    rating: 4.5,
    bought: 2800,
    discount: 10,
    delivery: "Delivery by Tomorrow",

    Color: "Raging Blue",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.78 inch 1.5K AMOLED, 144Hz",
    Battery: "6400mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Snapdragon 8s Gen 3 processor for flagship gaming",
      "India's slimmest 6400mAh battery smartphone",
      "Stable 90FPS gaming for up to 5 hours",
      "50MP Sony OIS main camera with 4K 60fps",
      "80W fast charging, vapor chamber cooling"
    ]
  },
  {
    id: "mobile-13",
    Brand: "Samsung",
    name: "Galaxy Z Fold6 (12GB/256GB)",
    image: "/category/mobile_files/mobile13.jpg",
    price: 109999,
    rating: 4.7,
    bought: 1200,
    discount: 5,
    delivery: "Delivery in 2-3 days",

    Color: "Silver Shadow",
    Storage: "256GB",
    RAM: "12GB",
    Display: "7.6 inch main foldable AMOLED + 6.3 inch cover, 120Hz",
    Battery: "4400mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Premium foldable design with Galaxy AI features",
      "Snapdragon 8 Gen 3 processor",
      "50MP triple camera system",
      "Multitasking on large inner display",
      "IP48 water/dust resistance, long software support"
    ]
  },
  {
    id: "mobile-14",
    Brand: "Apple",
    name: "iPhone 16 (128GB)",
    image: "/category/mobile_files/mobile14.jpg",
    price: 59900,
    rating: 4.8,
    bought: 2200,
    discount: 5,
    delivery: "Delivery in 2 days",

    Color: "Pink",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.1 inch Super Retina XDR",
    Battery: "Long battery life (up to 26 hours video)",

    Sizes: [],
    category: "mobile",
    about: [
      "A18 chip with Apple Intelligence support",
      "48MP Fusion main camera",
      "Action button and Ceramic Shield",
      "USB-C, Emergency SOS via satellite",
      "Premium ecosystem integration"
    ]
  },
  {
    id: "mobile-15",
    Brand: "Samsung",
    name: "Galaxy A17 5G (6GB/128GB)",
    image: "/category/mobile_files/mobile15.jpg",
    price: 18999,
    rating: 4.3,
    bought: 5200,
    discount: 18,
    delivery: "Delivery by Tomorrow",

    Color: "Blue",
    Storage: "128GB",
    RAM: "6GB",
    Display: "6.7 inch Super AMOLED, FHD+",
    Battery: "5000mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Slimmest in segment at 7.5mm",
      "50MP No Shake Cam with OIS",
      "AI Assistant, Gemini Live, Circle to Search",
      "Exynos 1330 processor",
      "Corning Gorilla Glass Victus protection"
    ]
  },
  {
    id: "mobile-16",
    Brand: "OPPO",
    name: "Reno15 Pro Mini 5G (12GB/256GB)",
    image: "/category/mobile_files/mobile16.jpg",
    price: 59999,
    rating: 4.6,
    bought: 1500,
    discount: 8,
    delivery: "Delivery by Tomorrow",

    Color: "Cocoa Brown",
    Storage: "256GB",
    RAM: "12GB",
    Display: "6.32 inch AMOLED",
    Battery: "6200mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Compact 16.05cm (6.32 inch) design",
      "200MP ultra-clear main camera",
      "4K 60fps HDR video recording",
      "Dimensity 8450 processor",
      "80W fast charging, premium build"
    ]
  },
  {
    id: "mobile-17",
    Brand: "Xiaomi",
    name: "Redmi Note 14 Pro 5G (8GB/128GB)",
    image: "/category/mobile_files/mobile17.jpg",
    price: 21990,
    rating: 4.4,
    bought: 4500,
    discount: 15,
    delivery: "Delivery by Tomorrow",

    Color: "Black",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.67 inch 1.5K Curved AMOLED, 120Hz",
    Battery: "5500mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Segment's curved immersive AMOLED display",
      "50MP flagship camera with OIS",
      "Dimensity 7300 Ultra processor",
      "IP68 dust/water resistance",
      "HyperOS with AI features"
    ]
  },
  {
    id: "mobile-18",
    Brand: "Xiaomi",
    name: "Redmi Note 14 Pro 5G (8GB/128GB)",
    image: "/category/mobile_files/mobile18.jpg",
    price: 21990,
    rating: 4.4,
    bought: 4500,
    discount: 15,
    delivery: "Delivery by Tomorrow",

    Color: "Phantom Purple",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.67 inch 1.5K Curved AMOLED, 120Hz",
    Battery: "5500mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Segment's curved immersive AMOLED display",
      "50MP flagship camera with OIS",
      "Dimensity 7300 Ultra processor",
      "IP68 dust/water resistance",
      "HyperOS with AI features"
    ]
  },
  {
  id: "mobile-19",
    Brand: "OPPO",
    name: "K15 5G (8GB/128GB)",
    image: "/category/mobile_files/mobile19.jpg",
    price: 23999,
    rating: 4.4,
    bought: 4500,
    discount: 15,
    delivery: "Delivery by Tomorrow",

    Color: "Light Silver / Prism",
    Storage: "128GB",
    RAM: "8GB",
    Display: "6.7 inch FHD+ AMOLED, 120Hz",
    Battery: "7000mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Massive 7000mAh battery with 80W SUPERVOOC fast charging",
      "Snapdragon 6 Gen 4 processor with high AnTuTu score (~790K+)",
      "5-year durable battery promise",
      "Vapour cooling chamber for sustained performance",
      "50MP main camera + ultrawide, premium slim design"
    ]
  },
  {
    id: "mobile-20",
    Brand: "Samsung",
    name: "Galaxy S25+ 5G (12GB/256GB)",
    image: "/category/mobile_files/mobile20.jpg",
    price: 74994,
    rating: 4.8,
    bought: 3200,
    discount: 25,
    delivery: "Delivery by Tomorrow",

    Color: "Navy / Blue",
    Storage: "256GB",
    RAM: "12GB",
    Display: "6.7 inch QHD+ Dynamic AMOLED 2X, 120Hz",
    Battery: "4900mAh",

    Sizes: [],
    category: "mobile",
    about: [
      "Snapdragon 8 Elite processor for top-tier performance",
      "Advanced Galaxy AI features including real-time translation and photo editing",
      "50MP triple pro camera system with 8K video support",
      "7 years of OS upgrades and security patches",
      "IP68 water/dust resistance, premium build with Gorilla Glass Victus 2"
    ]
  },
];

export default mobileProducts;
