"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const heroImages = [
  "/banner/hero1.png",
  "/banner/hero2.png",
  "/banner/hero3.png",
  "/banner/hero4.png",
  "/banner/hero5.png",
  "/banner/hero6.png",
];

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto infinite slider (smooth premium timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-black">
      {/* AI GLOW BACKGROUND (Premium Feel) */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl animate-pulse" />

      {/* SLIDER */}
      <div className="relative h-[65vh] min-h-[520px] w-full">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* IMAGE WRAPPER (NO CUT + CENTERED) */}
            <div className="relative h-full w-full flex items-center justify-center bg-black">
              <Image
                src={img}
                alt={`Carrot hero ${index + 1}`}
                fill
                priority={index === 0}
                className="object-contain scale-[1.02]" // slight zoom = premium
                sizes="100vw"
              />
            </div>

            {/* AI STYLE OVERLAY (Depth + Contrast) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(249,115,22,0.25),transparent_55%)]" />
          </div>
        ))}
      </div>

      {/* CONTENT LAYER (FIXES HIDDEN BUTTON ISSUE) */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full">
          <div className="max-w-xl ml-2 sm:ml-4 md:ml-6 lg:ml-10">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-2 text-white text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.9)]" />
              AI-Powered Smart Shopping
            </div>

            {/* Heading */}
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Shop Smarter with
              <span className="text-orange-400"> Carrot.in</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
              Discover fashion, electronics, and essentials with a modern,
              intelligent shopping experience built for speed, style, and trust.
            </p>

            {/* CTA BUTTONS (NOW ALWAYS VISIBLE) */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/category/men"
                className="
                  px-8 py-3 rounded-xl
                  bg-gradient-to-r from-orange-500 to-amber-400
                  text-white font-semibold text-sm md:text-base
                  shadow-xl shadow-orange-500/30
                  hover:shadow-orange-500/50
                  hover:scale-[1.04]
                  active:scale-95
                  transition-all duration-300
                "
              >
                Shop Now 🛒
              </Link>

              <Link
                href="/category/mobile"
                className="
                  px-8 py-3 rounded-xl
                  border border-white/30
                  text-white font-semibold text-sm md:text-base
                  backdrop-blur-md bg-white/10
                  hover:bg-white/20
                  transition-all duration-300
                "
              >
                Explore Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PREMIUM DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${current === index
              ? "w-8 h-2 bg-gradient-to-r from-orange-500 to-amber-400 shadow-md"
              : "w-2.5 h-2.5 bg-white/40 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;