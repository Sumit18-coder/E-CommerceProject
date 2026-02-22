"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  Package,
  RotateCcw,
  ShoppingCart,
  User,
  LogOut,
  ChevronRight,
} from "lucide-react";

const AccountPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  const sections = [
    {
      title: "Orders & Purchases",
      items: [
        {
          label: "Your Orders",
          desc: "Track, return, or buy items again",
          icon: Package,
          path: "/orders",
        },
        {
          label: "Returns & Replacements",
          desc: "Manage returns and replacements",
          icon: RotateCcw,
          path: "/returns",
        },
      ],
    },
    {
      title: "Shopping",
      items: [
        {
          label: "Your Cart",
          desc: "View and manage items in your cart",
          icon: ShoppingCart,
          path: "/cart",
        },
      ],
    },
    {
      title: "Account Settings",
      items: [
        {
          label: "Your Profile",
          desc: "Edit personal information and details",
          icon: User,
          path: "/profile",
        },
      ],
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Please login to access your account.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* TOP ACCOUNT HEADER (PRODUCTION STYLE) */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* LEFT: USER INFO */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-md">
              {user.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                Your Account
              </h1>
              <p className="text-gray-500 mt-1 text-sm">
                Manage your orders, profile and preferences
              </p>
              <p className="text-sm text-gray-700 mt-1 font-medium">
                {user.name} • {user.email}
              </p>
            </div>
          </div>

          {/* RIGHT: QUICK ACTION */}
          <button
            onClick={() => router.push("/orders")}
            className="
              px-6 py-3 rounded-xl
              bg-gradient-to-r from-orange-500 to-orange-400
              text-white font-semibold
              hover:shadow-lg hover:scale-[1.02]
              active:scale-95
              transition-all duration-300 cursor-pointer
            "
          >
            View Your Orders
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {sections.map((section, idx) => (
          <div key={idx}>
            {/* SECTION TITLE */}
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>

            {/* SECTION CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {section.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    onClick={() => router.push(item.path)}
                    className="
                      flex items-center justify-between
                      px-6 py-5 cursor-pointer
                      hover:bg-orange-50/60
                      transition-colors duration-200
                      last:border-b-0
                    "
                  >
                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-orange-50 text-orange-500">
                        <Icon size={22} />
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT ARROW */}
                    <ChevronRight
                      size={20}
                      className="text-gray-400"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* SECURITY / LOGOUT SECTION (PRODUCTION UX) */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Security
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold text-gray-900">
                Logout from your account
              </p>
              <p className="text-sm text-gray-500">
                You will be signed out from this device
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="
                flex items-center gap-2
                px-6 py-3 rounded-xl
                border border-red-200
                text-red-600 font-semibold
                hover:bg-red-50 hover:border-red-300
                transition-all duration-200 cursor-pointer
              "
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;