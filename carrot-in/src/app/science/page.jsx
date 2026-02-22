"use client";

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-50 to-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Science Behind Carrot
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            At Carrot, we combine data, technology, and intelligent systems to
            deliver a smarter, faster, and more personalized shopping
            experience for every customer.
          </p>
        </div>
      </div>

      {/* CORE INNOVATION SECTION */}
      <div className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Our Innovation Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {/* AI Recommendations */}
            <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Smart Recommendations
              </h3>
              <p className="mt-3 text-gray-600">
                Our intelligent algorithms analyze user behavior to recommend
                products tailored to individual preferences and shopping
                patterns.
              </p>
            </div>

            {/* Logistics Optimization */}
            <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Logistics Optimization
              </h3>
              <p className="mt-3 text-gray-600">
                Advanced routing and fulfillment systems ensure faster delivery,
                reduced delays, and efficient inventory management.
              </p>
            </div>

            {/* Data Driven UX */}
            <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Data-Driven Experience
              </h3>
              <p className="mt-3 text-gray-600">
                We continuously improve our platform using analytics to create a
                seamless, user-friendly, and responsive shopping journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TECHNOLOGY SECTION */}
      <div className="bg-orange-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 bg-white rounded-3xl flex items-center justify-center shadow-md">
            <span className="text-orange-400 text-xl font-semibold">
              Innovation & Technology
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Powered by Modern Technology
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              From intelligent search systems to scalable cloud infrastructure,
              Carrot is built using modern technologies that ensure speed,
              security, and reliability across every interaction.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• High-performance architecture</li>
              <li>• Secure payment & data protection</li>
              <li>• Scalable cloud infrastructure</li>
              <li>• Real-time analytics & insights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* VISION SECTION */}
      <div className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Vision for the Future of Commerce
        </h2>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          We believe the future of e-commerce lies in intelligent automation,
          predictive personalization, and seamless digital experiences. Our
          science-driven approach helps us innovate continuously and deliver
          excellence at scale.
        </p>

        <button className="mt-10 px-10 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
          Explore Our Technology
        </button>
      </div>
    </div>
  );
}