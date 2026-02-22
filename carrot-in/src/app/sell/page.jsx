import InfoPageLayout from "@/components/layouts/InfoPageLayout";

export default function SellPage() {
  return (
    <InfoPageLayout
      title="Sell on Carrot-In"
      subtitle="Reach thousands of customers and grow your business with Carrot-In."
    >
      <div className="space-y-12">
        {/* HERO CTA */}
        <section className="bg-orange-500 text-white rounded-2xl p-10 md:p-14">
          <h2 className="text-3xl font-bold">
            Start Selling on Carrot-In Today
          </h2>
          <p className="mt-4 text-orange-100 max-w-2xl">
            Join our marketplace and showcase your products to a growing
            customer base across India with secure payments and fast delivery.
          </p>
          <button className="mt-6 bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition">
            Register as a Seller
          </button>
        </section>

        {/* STEPS SECTION (Amazon Style) */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Register",
                desc: "Create your seller account in minutes.",
              },
              {
                step: "2",
                title: "List Products",
                desc: "Upload your products with images and pricing.",
              },
              {
                step: "3",
                title: "Start Selling",
                desc: "Receive orders and grow your business.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 hover:shadow-md transition"
              >
                <span className="text-orange-500 font-bold text-2xl">
                  {item.step}
                </span>
                <h4 className="font-semibold text-lg text-gray-900 mt-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="border-t pt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Why Sell on Carrot-In?
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Access to a large customer base</li>
            <li>• Secure and fast payments</li>
            <li>• Marketing & promotion support</li>
            <li>• Easy product management dashboard</li>
          </ul>
        </section>
      </div>
    </InfoPageLayout>
  );
}