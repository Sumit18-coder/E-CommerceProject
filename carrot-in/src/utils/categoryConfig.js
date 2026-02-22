import { Battery } from "lucide-react";
import electronicsProducts from "@/data/electronicsProducts";

export const CATEGORY_CONFIG = {
    men: {
        title: "Men's Fashion",
        priceRange: { min: 500, max: 5000 },
        filters: {
            Brand: ["Nike", "Puma", "Levis", "H&M", "Snitch"],
            Size: ["S", "M", "L", "XL"],
            Color: ["Black", "White", "Red", "Blue", "Gray", "Pink", "Green", "Purple"],
            Type: ["Cotton", "Fleece", "Wool", "Art Silk", "Chiffon", "Coroduroy", "Crepe"],
        },
        products: "/data/menProducts.js",
    },

    women: {
        title: "Women's Fashion",
        priceRange: { min: 500, max: 6000 },
        filters: {
            Brand: ["Zara", "H&M", "Mango", "Roadster", "Anouk", "Only", "Biba"],
            Category: ["Top", "Shirts", "Tshirts", "Track Pants", "Skirts", "Capris", "Lounge Pants", "Lounge Shorts"],
            Size: ["S", "M", "L", "XL"],
            Color: ["Black", "White", "Red", "Blue", "Gray", "Pink", "Green", "Purple"],
            Type: ["Cotton", "Fleece", "Wool", "Art Silk", "Chiffon", "Coroduroy", "Crepe"],
        },
        products: "/data/womenProducts.js",
    },

    electronics: {
        title: "Electronics",
        priceRange: { min: 100, max: 100000 },
        filters: {
            Brand: ["Jabra", "pTron", "Amazon Basics", "Fire-Boltt", "TurboBlow", "Soundcore", "Webcom", "Atom", "Qubo"],
            Warranty: ["1 Year", "2 Years", "3 Year"],
            Category: ["Headphones", "Earbuds", "Home Theater", "Tv & Video", "Wearable Technology", "Computer Accessories"]
        },
        products: "/data/electronicsProducts.js",
    },

    mobile: {
        title: "Mobiles",
        priceRange: { min: 5000, max: 180000 },
        filters: {
            Brand: ["Apple", "Samsung", "Google", "Oppo", "Redmi", "IQOO", "Motorola"],
            RAM: ["6 GB", "8 GB", "12 GB", "16 GB"],
            Storage: ["64 GB", "128 GB", "256 GB", "512 GB"],
            Battery: ["4000maH", "5000maH", "6000maH"],
        },
        products: "/data/mobileProducts",
    },

    computers: {
        title: "Computers",
        priceRange: { min: 5000, max: 100000 },
        filters: {
            Brand: ["HP", "Dell", "Acer", "MSI", "Lenovo"],
            Processor: ["intel i3", "intel i5", "intel i7", "Ryzen 3", "Ryzen 5", "Ryzen 7"],
            Storage: ["256 GB", "512 GB", "1TB"],
            RAM: ["8 GB", "16 GB", "24 GB"],
        },
        products: "/data/computerProducts",
    },
    books: {
        title: "Books",
        priceRange: { min: 100, max: 5000 },
        filters: {
            Author: [
                "APJ Abdul Kalam",
                "Robin Sharma",
                "Dale Carnegie",
                "Dr. Joseph Murphy",
                "Thibaut Meurisse",
            ],
            Publication: [
                "Penguin",
                "CreateSpace",
                "Rajneesh Foundation",
                "McGraw Hill",
                "Scholastic",
            ],
            Language: ["English", "Hindi", "Marathi", "Tamil", "Telugu"],
            Format: ["Paperback", "Hardcover", "eBook", "Audiobook"],
        },
        products: "/data/booksProducts.js",
    },
    home: {
        title: "Home & Living",
        priceRange: { min: 500, max: 5000 },
        filters: {
            Type: [
                "Furniture",
                "Decor",
                "Lighting",
                "Storage",
                "Bedding",
            ],
            Material: [
                "Wood",
                "Plastic",
                "Metal",
                "Glass",
                "Fabric",
            ],
            Color: [
                "White",
                "Brown",
                "Black",
                "Grey",
                "Blue",
            ],
            Room: [
                "Living Room",
                "Bedroom",
                "Kitchen",
                "Bathroom",
            ],
            Brand: [
                "IKEA",
                "HomeTown",
                "Godrej",
                "Nilkamal",
            ],
        },
        products: "/data/homeProducts.js",
    },
    kitchen: {
        title: "Kitchen & Dining",
        priceRange: { min: 100, max: 5000 },
        filters: {
            Category: [
                "Cookware",
                "Dinnerware",
                "Storage",
                "Appliances",
                "Tools",
            ],
            Material: ["ABS Plastic", "Stainless Steel", "Food-Grade Plastic"],
            Brand: ["Godrej", "Pigeon", "Milton"],
            Capacity: [
                "1 Litre",
                "2 Litre",
                "3 Litre",
                "5 Litre",
            ],
            Usage: [
                "Gas Stove",
                "Induction",
                "Microwave Safe",
            ],
        },
        products: "/data/kichenProducts.js",

    },
    sports: {
        title: "Sports & Fitness",
        priceRange: { min: 500, max: 10000 },
        filters: {
            Sport: [
                "Cricket",
                "Football",
                "Badminton",
                "Gym",
                "Yoga",
            ],
            Brand: [
                "Adidas",
                "Nike",
                "Puma",
                "Yonex",
                "SG",
            ],
            Size: [
                "S",
                "M",
                "L",
                "XL",
                "Free Size",
            ],
            Material: [
                "Polyester",
                "Cotton",
                "Rubber",
                "Leather",
            ],
            Gender: [
                "Men",
                "Women",
                "Unisex",
            ],
        },
        products: "/data/sportsProducts.js",

    },
    toys: {
        title: "Toys & Games",
        priceRange: { min: 500, max: 10000 },
        filters: {
            AgeGroup: [
                "0–2 Years",
                "3–5 Years",
                "6–8 Years",
                "9–12 Years",
                "13+ Years",
            ],
            Category: [
                "Educational",
                "Action Figures",
                "Board Games",
                "Remote Control",
                "Soft Toys",
            ],
            Material: [
                "Plastic",
                "Wood",
                "Fabric",
                "Metal",
            ],
            Brand: [
                "RC Toys",
                "Sensory Play",
                "Stunt RC",
                "Speed Bike",
                "Skillmatics",
            ],
            BatteryRequired: [
                "Yes",
                "No",
            ],
        },
        products: "/data/toysProducts.js",

    },
}

