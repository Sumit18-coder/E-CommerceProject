"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ReviewPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { token } = useAuth();

    const orderId = searchParams.get("orderId");
    const itemIndex = searchParams.get("item");

    const [item, setItem] = useState(null);
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");
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

                setItem(selectedOrder.items[itemIndex]);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [token, orderId, itemIndex]);

    const handleSubmitReview = async () => {
        if (!review) {
            alert("Please write a review");
            return;
        }

        alert("Review submitted successfully!");
        router.push("/orders");
    };

    if (loading) return <p className="p-10">Loading review page...</p>;
    if (!item) return <p className="p-10">Item not found</p>;

    return (
        <section className="max-w-4xl mx-auto px-4 py-12">
            {/* HEADER */}
            <h1 className="text-4xl font-bold text-gray-900 mb-10">
                Write a Review
            </h1>

            {/* PRODUCT */}
            <div className="bg-white border border-orange-100 rounded-3xl shadow-md p-6 flex gap-6 mb-10">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-36 object-contain rounded-xl bg-orange-50 p-2"
                />
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                        {item.name}
                    </h2>
                    <p className="text-gray-600 mt-2">₹{item.price}</p>
                </div>
            </div>

            {/* REVIEW CARD */}
            <div className="bg-white border border-orange-100 rounded-3xl shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                    Rate this product
                </h3>

                {/* RATING */}
                {/* STAR RATING - ECOMMERCE STYLE */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                        Overall Rating
                    </p>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className="group transition-transform duration-200 hover:scale-110 cursor-pointer"
                            >
                                <span
                                    className={`
            text-4xl
            transition-all duration-200
            ${star <= rating
                                            ? "text-orange-500 drop-shadow-[0_2px_6px_rgba(255,115,0,0.4)]"
                                            : "text-gray-300 group-hover:text-orange-300"
                                        }
          `}
                                >
                                    ★
                                </span>
                            </button>
                        ))}

                        {/* Rating Text (like Amazon) */}
                        <span className="ml-3 text-sm font-medium text-gray-600">
                            {rating} out of 5
                        </span>
                    </div>

                    {/* Rating Hint */}
                    <p className="text-xs text-gray-400 mt-2">
                        Click on the stars to rate this product
                    </p>
                </div>

                {/* TEXT REVIEW */}
                <textarea
                    placeholder="Share your experience with this product..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl p-4 h-32 mb-6 focus:ring-2 focus:ring-orange-400 outline-none"
                />

                <button
                    onClick={handleSubmitReview}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold text-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-amber-500 transition-all duration-300 cursor-pointer"
                >
                    Submit Review
                </button>
            </div>
        </section>
    );
}
