"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/services/api";

export default function VerifyOtpPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const phone = searchParams.get("phone"); // from URL
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/verify-otp", {
        phone,
        otp: otp.trim(),
      });

      alert(res.data.message); // "OTP verified"
      router.push("/login"); // or home
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleVerify} className="w-96 p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>

        <p className="text-sm mb-3">
          OTP sent to <b>{phone}</b>
        </p>

        <input
          className="w-full border p-2 mb-4"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />

        <button
          className="w-full bg-orange-500 text-white py-2 rounded"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
}
