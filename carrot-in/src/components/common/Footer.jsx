"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-gray-300 mt-12">

      {/* Back to top */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-[#37475A] text-center py-3 cursor-pointer hover:bg-[#485769] text-sm"
      >
        Back to top
      </div>

      {/* Top links */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">

        <div>
          <h4 className="text-white font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/press">Press Releases</Link></li>
            <li><Link href="/science">Carrot-In Science</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Connect with Us</h4>
          <ul className="space-y-2">
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">Instagram</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Make Money with Us</h4>
          <ul className="space-y-2">
            <li><Link href="/sell">Sell on Carrot-In</Link></li>
            <li><Link href="/advertise">Advertise Your Products</Link></li>
            <li><Link href="/affiliate">Affiliate Program</Link></li>
            <li><Link href="/fulfillment">Fulfillment by Carrot-In</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Let Us Help You</h4>
          <ul className="space-y-2">
            <li><Link href="/account">Your Account</Link></li>
            <li><Link href="/returns">Returns Centre</Link></li>
            <li><Link href="/protection">100% Purchase Protection</Link></li>
            <li><Link href="/help">Help</Link></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-600" />

      {/* Bottom branding */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <img
          src="/logos/carrot-in1.png"
          alt="carrot-in logo"
          className="h-8"
        />

        <div className="flex flex-wrap gap-4 text-gray-400">
          <span>English</span>
          <span>India</span>
          <span>₹ INR</span>
        </div>
      </div>

      {/* Legal */}
      <div className="bg-[#131A22] text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} Carrot-In.com, Inc. or its affiliates
      </div>
    </footer>
  );
};

export default Footer;
