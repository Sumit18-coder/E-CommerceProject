"use client";

import { useState } from "react";
import InfoPageLayout from "@/components/layouts/InfoPageLayout";

const faqs = [
  {
    q: "How do I track my order?",
    a: "Go to Your Orders in your account to track shipment status.",
  },
  {
    q: "How do I return a product?",
    a: "Visit the Returns Centre and select the item you want to return.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "Yes, COD is available on eligible products.",
  },
];

export default function HelpPage() {
  const [open, setOpen] = useState(null);

  return (
    <InfoPageLayout
      title="Help & Customer Service"
      subtitle="Find answers to your questions and get support quickly."
    >
      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-5 cursor-pointer hover:border-orange-400 transition"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.q}
            </h3>

            {open === index && (
              <p className="text-gray-600 mt-2">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </InfoPageLayout>
  );
}