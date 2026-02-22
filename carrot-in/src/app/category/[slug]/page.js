"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CATEGORY_CONFIG } from "@/utils/categoryConfig";
import { PRODUCTS_BY_CATEGORY } from "@/data/productsByCategory";
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation";


const COLOR_MAP = {
  Black: "#6b7280",    // slate-500
  White: "#f9fafb",    // soft white
  Red: "#f87171",      // red-400
  Blue: "#60a5fa",     // blue-400
  Gray: "#9ca3af",     // gray-400
  Pink: "#f472b6",     // pink-400
  Green: "#4ade80",    // green-400
  Purple: "#a78bfa",   // violet-400
  Brown: "#c08457",    // warm brown
  Yellow: "#facc15",   // yellow-400
};

export default function CategoryPage() {
  const { slug } = useParams()

  const category = CATEGORY_CONFIG[slug];
  const products = Array.isArray(PRODUCTS_BY_CATEGORY[slug])
    ? PRODUCTS_BY_CATEGORY[slug]
    : [];


  if (!category) return <div className="p-6">Category not found</div>;

  const { addToCart } = useCart()
  const router = useRouter()

  const handleAddToCart = (product) => {
    addToCart(product);
    router.push("/cart");
  };

  const { min, max } = category.priceRange;


  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);


  const [price, setPrice] = useState(max);
  const [tempPrice, setTempPrice] = useState(max);

  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedRating, setSelectedRating] = useState(null);

  const [sortBy, setSortBy] = useState("relevance");


  useEffect(() => {
    const t = setTimeout(() => setPrice(tempPrice), 300);
    return () => clearTimeout(t);
  }, [tempPrice]);

  const toggleFilter = (filterName, value) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName] || [];

      return {
        ...prev,
        [filterName]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const FILTERED_PRODUCTS = products
    // Price
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)

    // Dynamic filters
    // .filter((p) =>
    //   Object.entries(selectedFilters).every(([filterName, values]) => {
    //     if (!values.length) return true;

    //     const productValue =
    //       p[filterName] ??
    //       p[filterName.charAt(0).toUpperCase() + filterName.slice(1)];

    //     // ❌ missing field → exclude
    //     if (productValue === undefined || productValue === null) return false;

    //     // ✅ array field (Sizes)
    //     if (Array.isArray(productValue)) {
    //       return values.some((v) => productValue.includes(v));
    //     }

    //     // ✅ scalar field
    //     return values.includes(productValue);
    //   })
    // )


    // Rating
    .filter((p) =>
      selectedRating ? p.rating >= selectedRating : true
    );

  // 🔍 DEBUG — add THIS block
  useEffect(() => {
    console.log("ACTIVE FILTERS:", selectedFilters);
    console.log("CURRENT CATEGORY:", slug);
    console.log("SAMPLE PRODUCT:", products?.[0]);
  }, [selectedFilters, slug, products]);

  const SORTED_PRODUCTS = [...FILTERED_PRODUCTS].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // relevance (default)
  });

  return (
    <div className="relative flex gap-6 px-6 py-8 bg-gradient-to-br from-[#f6f7fb] via-[#f3f4f8] to-[#eef1f6] min-h-screen overflow-hidden">

      {/* AI Ambient Glow (Premium ecommerce vibe) */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] bg-orange-400/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-amber-300/20 blur-3xl rounded-full" />

      {/* ================= FILTER SIDEBAR ================= */}
      <aside className="
  w-[280px]
  backdrop-blur-xl
  bg-white/70
  border border-white/40
  rounded-2xl
  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
  h-[calc(100vh-120px)]
  sticky top-24
  overflow-hidden
">
        <div className="p-5 h-full overflow-y-auto no-scrollbar">

          <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-tight">
            Smart Filters 
          </h3>
          {/* PRICE */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Price Range</h4>

            <div className="range-slider">
              {/* Track */}
              <div className="range-track" />

              {/* Fill */}
              <div
                className="range-fill"
                style={{
                  left: `${((minPrice - min) / (max - min)) * 100}%`,
                  width: `${((maxPrice - minPrice) / (max - min)) * 100}%`,
                }}
              />

              {/* MIN SLIDER */}
              <input
                type="range"
                min={min}
                max={max}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(Math.min(Number(e.target.value), maxPrice - 100))
                }
              />

              {/* MAX SLIDER */}
              <input
                type="range"
                min={min}
                max={max}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Math.max(Number(e.target.value), minPrice + 100))
                }
              />
            </div>

            <div className="flex justify-between text-sm mt-2 font-medium">
              <span>₹{minPrice}</span>
              <span>₹{maxPrice}</span>
            </div>
          </div>


          {/* DYNAMIC FILTERS */}
          {category.filters &&
            Object.entries(category.filters).map(([name, values]) => (
              <div key={name} className="mb-5">
                <h4 className="font-semibold text-sm mb-2">{name}</h4>

                {name === "Color" ? (
                  <div className="flex flex-wrap gap-2">
                    {values.map((v) => {
                      const isSelected = selectedFilters[name]?.includes(v);

                      return (
                        <button
                          key={v}
                          type="button"
                          onClick={() => toggleFilter(name, v)}
                          title={v}
                          className={`
            w-6 h-6 rounded-full
            border border-gray-300
            transition-all duration-200 ease-out
            cursor-pointer
            hover:scale-110
            hover:shadow-md
            hover:ring-2 hover:ring-orange-300
            ${isSelected ? "ring-2 ring-orange-400 scale-110" : ""}
          `}
                          style={{
                            backgroundColor: COLOR_MAP[v] || "#9ca3af",
                          }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  /* 🧾 NORMAL TEXT FILTERS */
                  values.map((v) => (
                    <label
                      key={v}
                      className="flex items-center gap-2 text-sm mb-1 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters[name]?.includes(v) || false}
                        onChange={() => toggleFilter(name, v)}
                      />
                      {v}
                    </label>
                  ))
                )}
              </div>
            ))}


          {/* RATING */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Rating</h4>
            {[4, 3, 2].map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm mb-1 cursor-pointer">
                <input type="checkbox" />
                {r}★ & above
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* ================= PRODUCT GRID ================= */}
      <main className="flex-1">

        {/* HEADER */}
        <div className="
  flex flex-col md:flex-row md:items-center md:justify-between 
  gap-4 mb-6 p-5
  rounded-2xl
  bg-white/70 backdrop-blur-xl
  border border-white/40
  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
">
          <div>
            <p className="text-sm text-gray-500">
              Showing {SORTED_PRODUCTS.length} results
            </p>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              {category.title}
            </h1>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="
    border border-gray-300
    rounded-md
    px-3 py-1.5
    text-sm font-medium
    bg-white text-gray-800

    cursor-pointer

    transition-all duration-200 ease-out

    hover:border-orange-400
    hover:text-black-600
    hover:shadow-sm

    focus:outline-none
    focus:border-orange-500
    focus:ring-2 focus:ring-orange-200
  "
          >
            <option value="relevance">Relevance</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>

        </div>

        {/* GRID */}
        <div className="
  grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4
  gap-6 xl:gap-8
">
          {SORTED_PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="
  group relative
  bg-white/80 backdrop-blur-lg
  border border-white/40
  rounded-2xl
  overflow-hidden
  transition-all duration-500 ease-out
  hover:-translate-y-2
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
  hover:border-orange-200
  cursor-pointer
"
            >
              {/* IMAGE */}
              <Link href={`/product/${p.id}`}>
                <div
                  className="
      relative
      w-full
      aspect-[3/4]
      overflow-hidden
        bg-gradient-to-br from-gray-50 to-gray-100
    "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-orange-500/10 to-transparent z-10" />

                  <img
                    src={p.image}
                    alt={p.name}
                    className="
      w-full h-full object-contain p-4
      transition-all duration-500 ease-out
      group-hover:scale-110 group-hover:rotate-[0.5deg]
    "
                  />

                  {/* RATING BADGE */}
                  <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded shadow flex items-center gap-1">
                    <span className="font-semibold">{p.rating}</span>
                    <span className="text-green-600">★</span>
                    <span className="text-gray-400">|</span>
                    <span>{p.bought}</span>
                  </div>
                </div>
              </Link>

              {/* DETAILS */}
              <div className="p-2">
                <h3 className="font-semibold text-sm truncate">
                  {p.Brand}
                </h3>

                <p className="text-gray-500 text-xs truncate">
                  {p.name}
                </p>

                {/* PRICE */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{p.price}
                  </span>

                  {p.mrp && (
                    <span className="text-sm line-through text-gray-400">
                      ₹{p.mrp}
                    </span>
                  )}

                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                    {p.discount}% OFF
                  </span>
                </div>

                {/* DELIVERY */}
                <div className="text-xs text-gray-500 mt-1">
                  {p.delivery}
                </div>

                {/* ADD TO CART */}
                <button
                  onClick={() => handleAddToCart(p)}
                  className="w-full mt-3 py-2 text-xs font-semibold tracking-wide border border-gray-300 rounded text-gray-800 bg-white transition-all duration-300 ease-out hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-[0_4px_12px_rgba(249,115,22,0.35)] hover:-translate-y-[1px] active:translate-y-0 active:shadow-none cursor-pointer"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
