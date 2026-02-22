"use client";

import Link from "next/link";

const InfoPageLayout = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-[#EAEDED]">
      {/* TOP HEADER STRIP (Amazon style) */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>{" "}
            / <span className="text-gray-700">{title}</span>
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-600 mt-2 max-w-3xl text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* MAIN CONTENT (Wide like Amazon, not boxed cards) */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow-sm border p-8 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoPageLayout;