"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { User, Mail, Save } from "lucide-react";

const ProfilePage = () => {
  const { user, token } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // 🔥 PREFILL USER DATA
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user, router]);

  // 🔥 UPDATE PROFILE (Frontend ready for backend API)
  const handleUpdateProfile = async () => {
    if (!name || !email) {
      alert("Name and Email cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, email }),
        }
      );

      if (!res.ok) throw new Error("Failed to update profile");

      setSuccess("Profile updated successfully 🎉");
    } catch (error) {
      console.error(error);
      alert("Profile update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Profile
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your personal information
          </p>
        </div>
      </div>

      {/* MAIN PROFILE CARD */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* LEFT SIDEBAR (AMAZON STYLE) */}
          <div className="bg-white rounded-2xl border p-6 h-fit shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-3xl font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">{user.email}</p>

              <div className="mt-6 w-full">
                <button
                  onClick={() => router.push("/orders")}
                  className="w-full py-2 rounded-lg border hover:bg-orange-50 transition text-sm font-medium"
                >
                  Your Orders
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT EDIT SECTION */}
          <div className="md:col-span-2 bg-white rounded-2xl border p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Edit Profile Details
            </h2>

            {/* NAME FIELD */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-2 relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full pl-10 pr-4 py-3 rounded-xl
                    border focus:ring-2 focus:ring-orange-400
                    outline-none transition
                  "
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div className="mb-8">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-2 relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full pl-10 pr-4 py-3 rounded-xl
                    border focus:ring-2 focus:ring-orange-400
                    outline-none transition
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-600 text-sm">
                {success}
              </div>
            )}

            {/* SAVE BUTTON (PREMIUM E-COMMERCE STYLE) */}
            <button
              onClick={handleUpdateProfile}
              disabled={loading}
              className="
                w-full flex items-center justify-center gap-2
                py-4 rounded-xl
                bg-gradient-to-r from-orange-400 to-orange-500
                text-white font-semibold text-lg
                hover:shadow-xl hover:scale-[1.02]
                active:scale-95
                transition-all duration-300
                disabled:opacity-70 cursor-pointer
              "
            >
              <Save size={20} />
              {loading ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;