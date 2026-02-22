"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();
  return (
    <div className="bg-white">
      {/* HERO SECTION (Brand Story Style) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold text-orange-500 tracking-wide">
              About Carrot-In
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Building the Future of
              <span className="text-orange-500"> Smart Shopping</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Carrot-In is a next-generation e-commerce platform designed to make
              online shopping faster, smarter, and more personalized. From
              fashion to electronics and daily essentials, we deliver a seamless
              shopping experience built on technology, trust, and customer-first
              innovation.
            </p>
          </div>
        </div>

        {/* soft brand glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full" />
      </section>

      {/* WHO WE ARE (Clean Story Section) */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="w-full h-80 rounded-3xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center shadow-inner">
          <span className="text-orange-400 font-semibold text-lg">
            Carrot-In Marketplace
          </span>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            We are a customer-centric e-commerce brand focused on delivering
            high-quality products with a smooth and intuitive shopping
            experience. Our platform combines modern design, intelligent search,
            and secure systems to ensure every purchase feels effortless and
            reliable.
          </p>
        </div>
      </section>

      {/* TRUST METRICS (Very Production Feel) */}
      <section className="bg-orange-50/60">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <p className="text-4xl font-extrabold text-orange-500">10K+</p>
              <p className="mt-2 text-gray-600 text-sm">
                Happy Customers
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-orange-500">5K+</p>
              <p className="mt-2 text-gray-600 text-sm">
                Products Available
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-orange-500">99%</p>
              <p className="mt-2 text-gray-600 text-sm">
                Secure Transactions
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold text-orange-500">24/7</p>
              <p className="mt-2 text-gray-600 text-sm">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION SECTION (Brand Philosophy) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Vision
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Our vision is to redefine online shopping by blending intelligent
            technology, fast logistics, and a delightful user experience. We aim
            to become a trusted digital marketplace where customers can discover
            quality products with confidence and convenience.
          </p>
        </div>
      </section>

      {/* WHY TRUST CARROT (Premium E-commerce Section) */}
      <section className="bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Why Customers Trust Carrot-In
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Secure & Reliable
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Advanced security systems and trusted payment integrations
                ensure every transaction is safe and protected.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Optimized logistics and fulfillment systems enable faster
                shipping and a smooth delivery experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Customer-First Experience
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                From easy returns to responsive support, every feature is
                designed to prioritize customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA (Very Modern Touch) */}
      <section className="text-center py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Shop Smarter with Carrot-In 🥕
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Experience a modern, fast, and intelligent way to shop online.
        </p>

        <button 
        onClick={() => router.push("/category")}
        className="mt-8 px-10 py-4 rounded-2xl bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 hover:shadow-xl transition-all duration-300 cursor-pointer">
          Explore Products
        </button>
      </section>
    </div>
  );
}