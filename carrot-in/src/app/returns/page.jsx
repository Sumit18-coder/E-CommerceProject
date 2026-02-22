"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ReturnsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { token } = useAuth();

    const orderId = searchParams.get("orderId");
    const itemIndex = searchParams.get("item");

    const [order, setOrder] = useState(null);
    const [item, setItem] = useState(null);
    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);

    // 🔥 FETCH ORDER DETAILS
    useEffect(() => {
        if (!token || !orderId) return;

        const fetchOrder = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/order/my-orders`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

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
    }, [orderId, itemIndex, token]);

    // 🔥 SUBMIT RETURN REQUEST
    const handleReturnSubmit = async () => {
        if (!reason) {
            alert("Please select a return reason");
            return;
        }

        try {
            const res = await fetch(
                "http://localhost:5000/api/returns",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        orderId,
                        item,
                        reason,
                        description,
                    }),
                }
            );

            if (!res.ok) throw new Error("Return failed");

            alert("Return request submitted successfully!");
            router.push("/orders");
        } catch (err) {
            console.error(err);
            alert("Failed to submit return");
        }
    };

    if (loading) return <p className="p-10">Loading return details...</p>;
    if (!item) return <p className="p-10">Item not found</p>;

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">

                {/* TOP BAR */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            Return / Replace Item
                        </h1>
                        <p className="text-gray-500 mt-1">
                            Submit a return request for your order item
                        </p>
                    </div>

                    <button
                        onClick={() => router.push("/orders")}
                        className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-orange-300 transition shadow-sm cursor-pointer"
                    >
                        ← Back to Orders
                    </button>
                </div>

                {/* LOADING STATE */}
                {loading && (
                    <div className="bg-white rounded-2xl shadow p-10 text-center">
                        <p className="text-gray-500 text-lg animate-pulse">
                            Loading return details...
                        </p>
                    </div>
                )}

                {/* ITEM NOT FOUND */}
                {!loading && !item && (
                    <div className="bg-white rounded-2xl shadow p-10 text-center">
                        <p className="text-red-500 text-lg font-medium">
                            Item not found in this order
                        </p>
                    </div>
                )}

                {!loading && item && (
                    <>
                        {/* PRODUCT CARD */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col md:flex-row gap-6 mb-10 hover:shadow-lg transition">
                            <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-40 object-contain"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {item.name}
                                </h2>

                                <p className="text-2xl font-bold text-orange-500 mt-2">
                                    ₹{item.price}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                        Size: {item.selectedSize}
                                    </span>
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">
                                        Quantity: {item.qty}
                                    </span>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                                        Return Eligible
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RETURN FORM CARD */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Why are you returning this item?
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Select a reason so we can improve your shopping experience
                            </p>

                            {/* REASON DROPDOWN */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Return Reason *
                            </label>
                            <select
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                className="w-full border border-gray-300 p-3 rounded-xl mb-6 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition cursor-pointer"
                            >
                                <option value="">Select a reason</option>
                                <option value="Wrong Size">Wrong Size</option>
                                <option value="Damaged Product">Damaged Product</option>
                                <option value="Not as described">Not as described</option>
                                <option value="Quality not good">Quality not good</option>
                                <option value="Ordered by mistake">Ordered by mistake</option>
                            </select>

                            {/* DESCRIPTION BOX */}
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Details (Optional)
                            </label>
                            <textarea
                                placeholder="Tell us more about the issue (helps faster resolution)"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border border-gray-300 p-4 rounded-xl mb-6 h-32 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition resize-none"
                            />

                            {/* POLICY / TRUST BOX */}
                            <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 mb-8">
                                <h4 className="font-semibold text-orange-600 mb-2">
                                    Return Policy
                                </h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Eligible for return within 7 days of delivery</li>
                                    <li>• Refund will be processed to original payment method</li>
                                    <li>• Pickup will be arranged after approval</li>
                                </ul>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                onClick={handleReturnSubmit}
                                disabled={!reason}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 cursor-pointer ${reason
                                    ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:scale-[1.02] hover:shadow-lg"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    }`}
                            >
                                Submit Return Request
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}