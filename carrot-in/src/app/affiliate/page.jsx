import InfoPageLayout from "@/components/layouts/InfoPageLayout";

export default function AffiliatePage() {
  return (
    <InfoPageLayout
      title="Carrot-In Affiliate Program"
      subtitle="Earn commissions by promoting products from Carrot-In."
    >
      <div className="space-y-12">
        {/* HERO */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-10 md:p-14">
          <h2 className="text-3xl font-bold">
            Monetize Your Audience with Carrot-In
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Share product links, drive traffic, and earn commission on every
            successful purchase made through your referral.
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition">
            Join Affiliate Program
          </button>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            How the Affiliate Program Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Sign Up",
                desc: "Register for the affiliate program for free.",
              },
              {
                title: "Share Links",
                desc: "Promote products via blogs, social media, or websites.",
              },
              {
                title: "Earn Commission",
                desc: "Get paid for every successful referral purchase.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg text-gray-900">
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
            Affiliate Benefits
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• Competitive commission rates</li>
            <li>• Real-time tracking dashboard</li>
            <li>• Monthly payouts</li>
            <li>• Dedicated affiliate support</li>
          </ul>
        </section>
      </div>
    </InfoPageLayout>
  );
}