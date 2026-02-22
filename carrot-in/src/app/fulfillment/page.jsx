"use client";

export default function FulfillmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-orange-50 to-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fulfillment by Carrot
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Store, pack, and ship your products with our advanced logistics
              network. Focus on growing your business while we handle delivery
              and returns.
            </p>

            <button className="mt-8 px-8 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          <div className="w-full h-80 bg-orange-50 rounded-3xl flex items-center justify-center">
            <span className="text-orange-400 text-xl font-semibold">
              Fast Warehousing & Shipping
            </span>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Use Carrot Fulfillment?
          </h2>
          <p className="mt-4 text-gray-600">
            Built for speed, reliability, and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-600">
                Nationwide shipping with optimized delivery routes for faster
                customer satisfaction.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Smart Warehousing
              </h3>
              <p className="mt-3 text-gray-600">
                Secure storage facilities with real-time inventory tracking and
                automation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900">
                Easy Returns
              </h3>
              <p className="mt-3 text-gray-600">
                Hassle-free return management system to improve buyer trust and
                retention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="bg-orange-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How Fulfillment Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14 text-center">
            <div className="p-6">
              <div className="w-14 h-14 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">
                Send Inventory
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Ship your products to our warehouse.
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">
                We Store & Pack
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Safe storage and professional packaging.
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">
                Ship to Customers
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Fast and reliable delivery nationwide.
              </p>
            </div>

            <div className="p-6">
              <div className="w-14 h-14 mx-auto bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h4 className="mt-4 font-semibold text-gray-900">
                Manage Returns
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                Seamless return and replacement handling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Scale Your Business with Carrot Fulfillment
        </h2>
        <p className="mt-4 text-gray-600">
          Let us handle logistics while you focus on sales and growth.
        </p>

        <button className="mt-8 px-10 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
          Start Using Fulfillment
        </button>
      </div>
    </div>
  );
}