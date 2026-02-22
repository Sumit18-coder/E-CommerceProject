import InfoPageLayout from "@/components/layouts/InfoPageLayout";

export default function ProtectionPage() {
  return (
    <InfoPageLayout
      title="100% Purchase Protection"
      subtitle="Shop confidently with secure payments and guaranteed protection."
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Secure Payments
          </h2>
          <p className="text-gray-600 mt-2">
            All transactions on Carrot-In are protected with advanced encryption.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Easy Refunds
          </h2>
          <p className="text-gray-600 mt-2">
            Get quick refunds for eligible returns with zero hassle.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Customer Support Guarantee
          </h2>
          <p className="text-gray-600 mt-2">
            Our support team is available 24/7 to resolve any issue.
          </p>
        </div>
      </div>
    </InfoPageLayout>
  );
}