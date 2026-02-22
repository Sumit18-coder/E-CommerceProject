const booksProducts = [
  {
    id: "book-1",
    Brand: "P Publishing",
    name: "Read People Like a Book",
    image: "/category/books_files/book1.jpg",
    price: 150,
    rating: 4.3,
    bought: 18000,
    discount: 91,
    delivery: "Delivery by Tomorrow",

    Author: "Patrick King",
    Language: "English",
    Pages: 278,
    Format: "Paperback",

    Sizes: [],
    category: "books",
  },
  {
    id: "book-2",
    Brand: "PW OnlyIAS",
    name: "31 Years PYQs UPSC Civil Services GS Topicwise Solutions (1995-2025)",
    image: "/category/books_files/book2.jpg",
    price: 590,
    rating: 4.5,
    bought: 3200,
    discount: 30,
    delivery: "Delivery by Tomorrow",

    Author: "PW OnlyIAS Team",
    Language: "English",
    Pages: 800,  // Approximate for topicwise compilation
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Comprehensive GS topicwise solved papers for UPSC Prelims & Mains",
      "Over 3600+ MCQs with detailed explanations and trends",
      "Ideal for 2026 UPSC Civil Services preparation",
      "Includes previous year questions analysis",
      "High-quality printing, useful for self-study"
    ]
  },
  {
    id: "book-3",
    Brand: "CFA Institute",
    name: "Sustainable Investing Certificate Curriculum 2025",
    image: "/category/books_files/book3.jpg",
    price: 2699,
    rating: 4.7,
    bought: 450,
    discount: 10,
    delivery: "Delivery in 3-5 days",

    Author: "CFA Institute",
    Language: "English",
    Pages: 400,  // Approximate for official curriculum manual
    Format: "Paperback/Spiral",

    Sizes: [],
    category: "books",
    about: [
      "Official training manual for CFA Institute Sustainable Investing Certificate (formerly ESG Investing)",
      "Covers ESG market, environmental/social/governance factors, integration, and portfolio construction",
      "Essential for investment professionals integrating sustainability",
      "Includes worked examples, key facts, self-assessment questions",
      "Updated 2025 edition with latest syllabus"
    ]
  },
  {
    id: "book-4",
    Brand: "Universities Press",
    name: "Wings of Fire: An Autobiography",
    image: "/category/books_files/book4.jpg",
    price: 226,
    rating: 4.6,
    bought: 50000,
    discount: 45,
    delivery: "Delivery by Tomorrow",

    Author: "APJ Abdul Kalam, Arun Tiwari",
    Language: "English",
    Pages: 180,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Inspiring autobiography of Dr. APJ Abdul Kalam",
      "Journey from humble beginnings to India's Missile Man and President",
      "Insights on science, leadership, and perseverance",
      "Motivational classic for students and dreamers",
      "Iconic Indian success story"
    ]
  },
  {
    id: "book-5",
    Brand: "Fingerprint! Publishing",
    name: "Pisces: The Creator (19 February - 20 March)",
    image: "/category/books_files/book5.jpg",
    price: 199,
    rating: 4.4,
    bought: 1500,
    discount: 20,
    delivery: "Delivery by Tomorrow",

    Author: "Fingerprint Editorial",
    Language: "English",
    Pages: 200,  // Approximate zodiac series book
    Format: "Hardcover",

    Sizes: [],
    category: "books",
    about: [
      "Zodiac personality guide for Pisces: imaginative, empathetic, creative",
      "Insights into traits, strengths, love, career",
      "Beautiful gold-embossed cover design",
      "Perfect gift for astrology enthusiasts",
      "Explore the dreamy world of Pisces"
    ]
  },
  {
    id: "book-6",
    Brand: "Om Books / Rupa",
    name: "Develop Self-Confidence and Improve Public Speaking",
    image: "/category/books_files/book6.jpg",
    price: 106,
    rating: 4.4,
    bought: 12000,
    discount: 46,
    delivery: "Delivery by Tomorrow",

    Author: "Dale Carnegie",
    Language: "English",
    Pages: 256,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Practical guide to building confidence and mastering speeches",
      "Techniques to overcome fear, win arguments, hold attention",
      "Classic from the author of How to Win Friends and Influence People",
      "Timeless advice for personal and professional growth",
      "Essential for leaders, students, and communicators"
    ]
  },
  {
    id: "book-7",
    Brand: "Jaico Publishing House",
    name: "The Monk Who Sold His Ferrari",
    image: "/category/books_files/book7.jpg",
    price: 239,
    rating: 4.5,
    bought: 30000,
    discount: 76,
    delivery: "Delivery by Tomorrow",

    Author: "Robin Sharma",
    Language: "English",
    Pages: 224,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Fable about finding true happiness and purpose",
      "Lessons from ancient wisdom in modern life",
      "Transformative story of success, balance, and fulfillment",
      "Timeless bestseller on personal growth",
      "Ideal for self-discovery and life change"
    ]
  },
  {
    id: "book-8",
    Brand: "General Press / Fingerprint",
    name: "How to Use Your Healing Power",
    image: "/category/books_files/book8.jpg",
    price: 152,
    rating: 4.3,
    bought: 8000,
    discount: 25,
    delivery: "Delivery by Tomorrow",

    Author: "Dr. Joseph Murphy",
    Language: "English",
    Pages: 128,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Classic on mind power and spiritual healing",
      "Techniques to harness subconscious for health and well-being",
      "Practical affirmations and visualization methods",
      "Timeless wisdom from New Thought philosophy",
      "Inspirational for self-healing journeys"
    ]
  },
  {
    id: "book-9",
    Brand: "Hind Yugm",
    name: "Deewar Mein Ek Khidki Rahti Thi",
    image: "/category/books_files/book9.jpg",
    price: 230,
    rating: 4.4,
    bought: 4000,
    discount: 23,
    delivery: "Delivery by Tomorrow",

    Author: "Vinod Kumar Shukla",
    Language: "Hindi",
    Pages: 248,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Poetic Hindi novel exploring everyday life and subtle emotions",
      "Simple yet profound narrative style",
      "Celebrated for its lyrical prose and depth",
      "Sahitya Akademi award-winning author's work",
      "Beautiful reflection on human connections"
    ]
  },
  {
    id: "book-10",
    Brand: "Jaico / HarperCollins",
    name: "The 5 AM Club: Own Your Morning, Elevate Your Life",
    image: "/category/books_files/book10.jpg",
    price: 239,
    rating: 4.5,
    bought: 25000,
    discount: 60,
    delivery: "Delivery by Tomorrow",

    Author: "Robin Sharma",
    Language: "English",
    Pages: 336,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Bestselling guide to mastering your morning routine for peak productivity",
      "20/20/20 formula: Move, Reflect, Grow",
      "Inspirational story with practical habits to own your day",
      "Transform life through discipline and mindset",
      "Millions sold worldwide"
    ]
  },
  {
    id: "book-11",
    Brand: "Penguin Business",
    name: "Human Edge in the AI Age: Eight Timeless Mantras for Success",
    image: "/category/books_files/book11.jpg",
    price: 542,
    rating: 4.8,
    bought: 774,
    discount: 32,
    delivery: "Delivery in 2-3 days",

    Author: "Nitin Seth",
    Language: "English",
    Pages: 496,
    Format: "Hardcover",

    Sizes: [],
    category: "books",
    about: [
      "Bestselling guide on thriving in AI-driven world",
      "Eight mantras for human strengths: creativity, empathy, learning",
      "Practical strategies for relevance and success",
      "Insights from global tech leader",
      "Must-read for professionals in digital age"
    ]
  },
  {
    id: "book-12",
    Brand: "Jaico / Harriman House",
    name: "The Art of Spending Money: Simple Choices for a Richer Life",
    image: "/category/books_files/book12.jpg",
    price: 329,
    rating: 4.6,
    bought: 5200,
    discount: 34,
    delivery: "Delivery by Tomorrow",

    Author: "Morgan Housel",
    Language: "English",
    Pages: 256,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "From the bestselling author of The Psychology of Money and Same as Ever",
      "Explores how to use money wisely for happiness, not just accumulation",
      "Lessons on balancing saving, spending, and life fulfillment",
      "Practical insights into avoiding common money pitfalls",
      "New York Times bestseller praised for relatable storytelling"
    ]
  },
  {
    id: "book-13",
    Brand: "Ramakrishna Reddy (Self-Published)",
    name: "Connect Using Humor and Story: How I Got 18 Laughs & 3 Applauses in a 7-Minute Persuasive Speech",
    image: "/category/books_files/book13.jpg",
    price: 499,
    rating: 4.5,
    bought: 2800,
    discount: 20,
    delivery: "Delivery in 2-3 days",

    Author: "Ramakrishna Reddy",
    Language: "English",
    Pages: 110,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Award-winning public speaking guide from multiple contest winner",
      "Secrets to blending humor and storytelling for engagement",
      "Real techniques used to deliver high-impact 7-minute speeches",
      "Builds trust, connection, and persuasion through laughs and stories",
      "Practical for speeches, presentations, and communication skills"
    ]
  },
  {
    id: "book-14",
    Brand: "Generic / Independently Published",
    name: "Dopamine Detox: A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things",
    image: "/category/books_files/book14.jpg",
    price: 299,
    rating: 4.4,
    bought: 15000,
    discount: 63,
    delivery: "Delivery by Tomorrow",

    Author: "Thibaut Meurisse",
    Language: "English",
    Pages: 126,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Simple guide to resetting dopamine levels and boosting focus",
      "Techniques to eliminate distractions, procrastination, and overstimulation",
      "Step-by-step detox method for better motivation and productivity",
      "Ideal for reclaiming control in a digital world",
      "Bestselling self-help on building discipline and mental clarity"
    ]
  },
  {
    id: "book-16",
    Brand: "Penguin Business",
    name: "The Monk in the Corner Office: Work Life Wisdom for the 21st Century",
    image: "/category/books_files/book16.jpg",
    price: 319,
    rating: 4.6,
    bought: 1200,
    discount: 20,
    delivery: "Delivery by Tomorrow",

    Author: "Gopi Krishnaswamy",
    Language: "English",
    Pages: 304,
    Format: "Paperback",

    Sizes: [],
    category: "books",
    about: [
      "Modern fable blending mindfulness and emotional intelligence for workplace success",
      "Follows young professional Sid's journey from corporate burnout to finding balance and purpose",
      "Practical wisdom on mindful living, growth mindset, and adding meaning to work life",
      "Ideal for young professionals navigating early-career pressures and seeking steadiness",
      "Thought-provoking read from a former executive turned mindfulness coach"
    ]
  }
];

export default booksProducts;
