"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { CATEGORY_CONFIG } from "@/utils/categoryConfig";

const allCategories = Object.keys(CATEGORY_CONFIG);

const TopHeader = ({ locationFromModal }) => {
  const { user } = useAuth();
  const router = useRouter();

  const [location, setLocation] = useState("Select Location");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation("Geolocation not supported");
      return;
    }

    setLocation("Detecting location...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/location/reverse-geocode?lat=${latitude}&lon=${longitude}`
          );

          const data = await res.json();

          const city =
            data?.address?.city ||
            data?.address?.town ||
            data?.address?.village ||
            data?.address?.state ||
            "Your Area";

          const state = data?.address?.state || "";

          const finalLocation = `${city}${state ? `, ${state}` : ""}`;

          setLocation(finalLocation);

          // ✅ MUST be inside this block
          localStorage.setItem("userLocation", finalLocation);

        } catch (error) {
          console.error("Location fetch error:", error);
          setLocation("Location unavailable");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLocation("Permission denied");
      }
    );
  };
  useEffect(() => {
    const saved = localStorage.getItem("userLocation");
    if (saved) {
      setLocation(saved);
    }
  }, []);

  // Search state
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [history, setHistory] = useState([]);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const filteredSuggestions = allCategories.filter((key) =>
    key.toLowerCase().includes(query.toLowerCase())
  );

  const findMatchingCategory = (searchText) => {
    const lower = searchText.toLowerCase();

    return Object.keys(CATEGORY_CONFIG).find((key) => {
      const category = CATEGORY_CONFIG[key];

      // match category key
      if (key.toLowerCase().includes(lower)) return true;

      // match title
      if (category.title.toLowerCase().includes(lower)) return true;

      // match filters
      if (category.filters) {
        return Object.values(category.filters)
          .flat()
          .some((item) => item.toLowerCase().includes(lower));
      }

      return false;
    });
  };
  const handleSelect = (value) => {
    setQuery(value);

    setHistory((prev) =>
      prev.includes(value) ? prev : [value, ...prev].slice(0, 5)
    );

    setFocused(false);

    const matchedCategory = findMatchingCategory(value);

    if (matchedCategory) {
      router.push(`/category/${matchedCategory}`);
    } else {
      router.push(`/search?q=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
        {/* LOCATION */}
        <button
          onClick={getLocation}
          className="hidden md:block text-left leading-tight hover:text-orange-400 cursor-pointer"
        >
          <div className="text-xs text-gray-300">Deliver to</div>
          <div className="text-sm font-semibold">{location}</div>
        </button>

        {/* SEARCH */}
        <div className="relative flex-1 max-w-2xl z-[9999]">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSelect(query);
              }
            }}
            type="text"
            value={query}
            placeholder="Search Carrot.in"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 150)}
            className="w-full bg-white rounded-full px-5 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search
            size={16}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
          {focused && (
            <div
              className="
      absolute top-12 left-0 right-0
      bg-white text-black
      shadow-xl rounded-xl p-4
      z-[9999]

      animate-in
      fade-in
      slide-in-from-top-2
      duration-150
      ease-out
    "
            >

              {history.length > 0 && (
                <>
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    Recent Searches
                  </p>
                  {history.map((item) => (
                    <div
                      key={item}
                      onMouseDown={() => handleSelect(item)}
                      className="cursor-pointer px-2 py-1 rounded hover:bg-gray-100 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </>
              )}
              <p className="text-xs font-semibold text-gray-500 mt-3 mb-2">
                Suggestions
              </p>
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((item) => (
                  <div
                    key={item}
                    onMouseDown={() => handleSelect(item)}
                    className="cursor-pointer px-2 py-1 rounded hover:bg-orange-50 text-sm capitalize"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">No results found</p>
              )}
            </div>
          )}
        </div>

        {/* ACCOUNT */}
        {/* AMAZON STYLE ACCOUNT & LISTS */}
        {/* ACCOUNT DROPDOWN (AMAZON STYLE) */}
        <div className="relative hidden md:block group">
          {!user ? (
            <Link href="/login" className="text-sm hover:text-orange-400">
              <div>Hello, Sign in</div>
              <div className="font-semibold">Account & Lists</div>
            </Link>
          ) : (
            <>
              {/* Trigger */}
              <div className="cursor-pointer">
                <div className="text-xs text-gray-300">Hello, {user.name}</div>
                <div className="font-semibold text-sm group-hover:text-orange-400 transition">
                  Account & Lists
                </div>
              </div>

              {/* Dropdown Menu */}
              <div
                className="
          absolute right-0 mt-3 w-64
          bg-white text-black
          rounded-2xl shadow-2xl border
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all duration-200
          z-[9999] overflow-hidden
        "
              >
                {/* Top Section */}
                <div className="p-4 border-b bg-orange-50">
                  <p className="text-sm font-semibold text-gray-800">
                    Welcome, {user.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    Manage your orders & account
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-col text-sm">
                  <Link
                    href="/orders"
                    className="px-4 py-3 hover:bg-orange-50 transition cursor-pointer"
                  >
                    📦 Your Orders
                  </Link>

                  <Link
                    href="/returns"
                    className="px-4 py-3 hover:bg-orange-50 transition cursor-pointer"
                  >
                    🔁 Returns & Replacements
                  </Link>

                  <Link
                    href="/cart"
                    className="px-4 py-3 hover:bg-orange-50 transition cursor-pointer"
                  >
                    🛒 Your Cart
                  </Link>

                  <Link
                    href="/account"
                    className="px-4 py-3 hover:bg-orange-50 transition cursor-pointer"
                  >
                    👤 Your Account
                  </Link>

                  {/* Logout Button */}
                  <button
                    onClick={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("user");
                      window.location.href = "/";
                    }}
                    className="
              text-left px-4 py-3
              hover:bg-red-50 hover:text-red-600
              transition cursor-pointer border-t
            "
                  >
                    🚪 Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        {/* ORDERS */}
        <Link
          href="/orders"
          className="hidden md:block text-sm hover:text-orange-400 leading-tight"
        >
          <div className="text-xs text-gray-300">Returns</div>
          <div className="font-semibold">& Orders</div>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
