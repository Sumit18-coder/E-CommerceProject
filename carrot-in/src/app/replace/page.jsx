"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ReplacePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { token } = useAuth();

  const orderId = searchParams.get("orderId");
  const itemIndex = searchParams.get("item");

  const [item, setItem] = useState(null);
  const [order, setOrder] = useState(null);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !orderId) return;

    const fetchOrder = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/my-orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        const selectedOrder = data.find((o) => o._id === orderId);

        if (!selectedOrder) return;

        setOrder(selectedOrder);
        setItem(selectedOrder.items[itemIndex]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [token, orderId, itemIndex]);

  const handleReplaceSubmit = async () => {
    if (!reason) {
      alert("Please select a reason for replacement");
      return;
    }

    alert("Replacement request submitted!");
    router.push("/orders");
  };

  if (loading) return <p className="p-10">Loading replacement details...</p>;
  if (!item) return <p className="p-10">Item not found</p>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Replace Item
        </h1>
        <p className="text-gray-500 mt-2">
          Request a replacement for your purchased item
        </p>
      </div>

      {/* PRODUCT CARD */}
      <div className="bg-white border border-orange-100 rounded-3xl shadow-md p-6 flex gap-6 mb-10">
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-40 object-contain rounded-xl bg-orange-50 p-2"
        />

        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">
            {item.name}
          </h2>
          <p className="text-gray-600 mt-2">₹{item.price}</p>
          <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
          <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
        </div>
      </div>

      {/* REPLACEMENT FORM */}
      <div className="bg-white border border-orange-100 rounded-3xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">
          Why do you want a replacement?
        </h3>

        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border border-gray-200 p-4 rounded-xl mb-6 focus:ring-2 focus:ring-orange-400 outline-none cursor-pointer"
        >
          <option value="">Select a reason</option>
          <option value="Damaged Product">Damaged Product</option>
          <option value="Wrong Item Received">Wrong Item Received</option>
          <option value="Size Issue">Size Issue</option>
          <option value="Defective Product">Defective Product</option>
        </select>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-sm text-gray-600 mb-6">
          Replacement is eligible within 7 days of delivery. A new item will be
          shipped after pickup verification.
        </div>

        <button
          onClick={handleReplaceSubmit}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-500 transition-all duration-300 cursor-pointer"
        >
          Confirm Replacement
        </button>
      </div>
    </section>
  );
}