"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function OrdersPage() {
  const { token, user } = useAuth();
  const { setCartItems } = useCart();
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const placeOrder = async ({ cartItems, total }) => {
    try {
      if (!cartItems || cartItems.length === 0) {
        alert("No items to place order");
        return;
      }

      const res = await fetch("http://localhost:5000/api/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
      });

      const orderData = await res.json();
      if (!res.ok) throw new Error(orderData.error || "Payment failed");

      const loadRazorpay = () =>
        new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });

      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        alert("Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Carrot-in",
        description: "Order Payment",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const orderRes = await fetch("http://localhost:5000/api/order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                cartItems,
                total,
                paymentId: response.razorpay_payment_id,
              }),
            });

            if (!orderRes.ok) {
              const data = await orderRes.json();
              throw new Error(data.message || "Order saving failed");
            }

            alert("Order placed successfully!");
            router.push("/success");
          } catch (err) {
            console.error("Order saving failed:", err);
            alert("Payment succeeded, but order saving failed");
          }
        },
        prefill: {
          name: user?.name,
          email: user?.email,
        },
        theme: { color: "#F97316" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/order/my-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) throw new Error("Failed to fetch orders");

        setOrders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token, router]);

  const handleRemoveItem = (orderId, itemIndex) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order._id === orderId) {
          const newItems = [...order.items];
          newItems.splice(itemIndex, 1); // remove item
          return { ...order, items: newItems };
        }
        return order;
      })
    );
  };

  const handleQtyChange = (orderId, itemIndex, delta) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order._id === orderId) {
          const newItems = [...order.items];
          const item = { ...newItems[itemIndex] };
          item.qty = Math.max(1, item.qty + delta); // minimum 1
          newItems[itemIndex] = item;
          return { ...order, items: newItems };
        }
        return order;
      })
    );
  };

  const handleBuyNow = (order) => {
    setCartItems(order.items.map(i => ({
      ...i,
      selectedSize: i.size || i.selectedSize || "M",
    })));
    router.push("/checkout");
  };

  if (!token) return null;
  if (loading) return <p className="p-6">Loading orders...</p>;

  return (
    <ProtectedRoute>
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Your Orders
            <span className="ml-3 text-orange-500">🥕</span>
          </h1>
          <p className="text-gray-500 mt-2">
            All your carrot-powered purchases in one place
          </p>
        </div>
        {/* FILTER + SEARCH (AMAZON STYLE) */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <select className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer">
            <option>Last 30 days</option>
            <option>Last 6 months</option>
            <option>2026</option>
            <option>2025</option>
          </select>

          <input
            type="text"
            placeholder="Search your orders..."
            className="border px-4 py-2 rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {orders.length === 0 && (
          <div className="flex flex-col items-center py-40 text-gray-400">
            <p className="text-xl font-semibold">No orders yet</p>
            <p className="text-sm mt-1">
              Your future style upgrades will appear here
            </p>
          </div>
        )}

        <div className="space-y-12">
          {orders.map((order, idx) => {
            const orderTotal = order.items.reduce(
              (sum, item) => sum + item.price * item.qty,
              0
            );

            return (
              <div
                key={order._id}
                className="
                relative rounded-3xl overflow-hidden
                bg-white
                border border-orange-100
                shadow-[0_20px_50px_rgba(255,115,0,0.08)]
                hover:shadow-[0_25px_60px_rgba(255,115,0,0.15)]
                transition-all duration-500 
              "
              >
                {/* ORANGE TOP STRIP */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500" />

                <div className="p-8">
                  {/* HEADER ROW */}
                  {/* AMAZON STYLE ORDER HEADER */}
                  <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-8 pb-6">
                    {/* LEFT DETAILS */}
                    <div className="flex gap-12 flex-wrap">
                      <div>
                        <p className="text-xs text-gray-400">ORDER PLACED</p>
                        <p className="font-semibold text-gray-800">
                          {new Date(order.createdAt || Date.now()).toLocaleDateString()}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">TOTAL</p>
                        <p className="font-bold text-gray-900">₹{orderTotal}</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">PAYMENT</p>
                        <p className="font-medium text-gray-800">
                          {order.paymentMethod || "Online Payment"}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT ORDER ID */}
                    <div className="text-right">
                      <p className="text-xs text-gray-400">ORDER ID</p>
                      <p className="text-sm font-medium text-gray-700 break-all">
                        {order._id}
                      </p>
                    </div>
                  </div>

                  {/* ITEMS */}
                  <div className="space-y-6">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="
                        flex gap-6 items-center p-5 rounded-2xl
                        bg-orange-50/40
                        hover:bg-orange-50
                        transition-all duration-300
                      "
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="
                          w-28 h-36 object-contain rounded-xl
                          transition-transform duration-500
                          hover:scale-110
                        "
                        />

                        <div className="flex-1">
                          <p className="font-semibold leading-snug line-clamp-2 text-gray-900">
                            {item.name}
                          </p>

                          <div className="mt-3 text-sm text-gray-600 space-y-1">
                            <p>₹{item.price}</p>
                            <p>Size: {item.selectedSize}</p>
                            <p>Qty: {item.qty}</p>
                          </div>
                        </div>
                        {/* AMAZON STYLE ACTION BUTTONS */}
                        {/* MODERN E-COMMERCE ACTION BUTTONS */}
                        <div className="mt-5 flex flex-wrap gap-3">

                          {/* RETURN BUTTON - PRIMARY (Carrot Theme) */}
                          <button
                            onClick={() =>
                              router.push(`/returns?orderId=${order._id}&item=${index}`)
                            }
                            className="
      px-5 py-2.5
      rounded-xl
      bg-gradient-to-r from-orange-500 to-amber-400
      text-white text-sm font-semibold tracking-wide
      shadow-sm shadow-orange-200
      hover:shadow-md hover:from-orange-600 hover:to-amber-500
      transition-all duration-300 ease-out
      border border-orange-400/20
      cursor-pointer
    "
                          >
                            Return Item
                          </button>

                          {/* REPLACE BUTTON - SOFT SECONDARY */}
                          <button
                            className="
      px-5 py-2.5
      rounded-xl
      bg-orange-50
      text-orange-700 text-sm font-semibold
      border border-orange-200
      hover:bg-orange-100 hover:border-orange-300
      hover:shadow-sm
      transition-all duration-300 ease-out
      cursor-pointer
    "
                            onClick={() =>
                              router.push(`/replace?orderId=${order._id}&item=${index}`)
                            }
                          >
                            Replace Item
                          </button>

                          {/* REVIEW BUTTON - PREMIUM NEUTRAL */}
                          <button
                            className="
      px-5 py-2.5
      rounded-xl
      bg-white
      text-gray-800 text-sm font-semibold
      border border-gray-200
      hover:border-gray-300 hover:bg-gray-50
      hover:shadow-sm
      transition-all duration-300 ease-out
      cursor-pointer
    "
                            onClick={() =>
                              router.push(`/review?orderId=${order._id}&item=${index}`)
                            }
                          >
                            Write Review
                          </button>

                        </div>
                      </div>
                    ))}
                  </div>
                  {/* ORDER SUMMARY (AMAZON STYLE) */}
                  <div className="mt-10 bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                    <h3 className="font-bold mb-4 text-lg">Order Summary</h3>

                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Items Total</span>
                      <span>₹{orderTotal}</span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Delivery Charges</span>
                      <span className="text-green-600">FREE</span>
                    </div>

                    <div className="flex justify-between font-bold text-xl mt-3">
                      <span>Grand Total</span>
                      <span>₹{orderTotal}</span>
                    </div>
                  </div>

                  {/* ACTION BUTTON */}
                  <div className="mt-10 flex justify-end">
                    <button
                      onClick={() => {
                        setCartItems(
                          order.items.map((i) => ({
                            ...i,
                            selectedSize:
                              i.selectedSize || i.size || "M",
                          }))
                        );
                        router.push("/checkout");
                      }}
                      className="
                      px-8 py-4 rounded-2xl
                      bg-gradient-to-r from-orange-400 to-orange-500
                      text-white font-bold tracking-wide
                      shadow-lg shadow-orange-300/40
                      hover:shadow-orange-400/50
                      hover:scale-105
                      active:scale-95
                      transition-all duration-300 cursor-pointer
                    "
                    >
                      Buy Again 🛒
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </ProtectedRoute>
  );
}
