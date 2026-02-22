"use client";

import ProtectedRoute from "@/components/common/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CheckoutPage() {
    const { user, loading } = useAuth();
    const { cartItems = [], totalPrice = 0, setCartItems } = useCart();
    const router = useRouter();

    const placeOrder = async () => {
        try {
            // 1️⃣ Create Razorpay order on backend
            const res = await fetch("http://localhost:5000/api/payment/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalPrice }), // totalPrice in INR
            });

            const orderData = await res.json();
            if (!res.ok) throw new Error(orderData.error || "Payment failed");

            // 2️⃣ Load Razorpay SDK
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

            // 3️⃣ Configure Razorpay options
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // frontend key
                amount: orderData.amount, // in paise
                currency: orderData.currency,
                name: "Carrot-in",
                description: "Order Payment",
                order_id: orderData.id,
                handler: async function (response) {
                    // 4️⃣ Payment successful → save order in DB
                    try {
                        const orderRes = await fetch("http://localhost:5000/api/order", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                            body: JSON.stringify({
                                cartItems,
                                total: totalPrice,
                                paymentId: response.razorpay_payment_id,
                            }),
                        });

                        if (!orderRes.ok) {
                            const data = await orderRes.json();
                            throw new Error(data.message || "Order saving failed");
                        }
                        setCartItems([]);  
                        router.push("/success"); // redirect to success page
                    } catch (err) {
                        console.error("Order saving failed:", err);
                        alert("Payment succeeded, but order saving failed");
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
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
    const [step, setStep] = useState(1)
    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.qty,
        0
    );

    useEffect(() => {
        if (loading) return;

        if (!user) {
            router.push("/login");
            return;
        }

        if (cartItems.length === 0) {
            router.push("/cart");
        }
    }, [loading, user, cartItems, router]);

    // 🛑 RENDER GUARDS (THIS IS WHAT YOU ASKED)
    if (loading) return null;
    if (!user) return null;
    if (cartItems.length === 0) return null;

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
            {/*Step indicator*/}
            <div className="lg:col-span-2 space-y-6">

                <div className="flex gap-4 text-sm font-medium">
                    <span className={step >= 1 ? "text-orange-600" : "text-gray-400"}>1. Address</span>
                    <span className={step >= 2 ? "text-orange-600" : "text-gray-400"}>2. Payment</span>
                    <span className={step >= 3 ? "text-orange-600 " : "text-gray-400"}>3. Review</span>
                </div>
                {step === 1 && <AddressStep onNext={() => setStep(2)} />}
                {step === 2 && <PaymentStep onNext={() => setStep(3)} />}
                {step === 3 &&
                    <ReviewStep
                        cartItems={cartItems}
                        total={totalPrice}
                        placeOrder={placeOrder}
                    />
                }
            </div>
            {/**right -order summary */}
            <div className="h-fit sticky top-24 bg-gray-50 p-4 rounded">
                <h3 className="font-semibold mb-3">
                    Order Summary
                </h3>

                <div className="flex justify-between text-sm mb-2">
                    <span>Items ({totalItems})</span>
                    <span>-</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                    <span>Delivery</span>
                    <span className="text-green-600">FREE</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                    <span>Order Total</span>
                    <span>₹{totalPrice}</span>
                </div>

                <p className="text-xs text-gray-500 mt-3 leading-snug">
                    By placing your order, you agree to Carrot-in's{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                        Conditions of use
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                        Privacy Notice
                    </span>
                </p>
            </div>
        </div>
    );
}
function AddressStep({ onNext }) {
    return (
        <div className="bg-white p-4 rounded">
            <h2 className="font-semibold mb-3">
                Delivery Address
            </h2>

            <input placeholder="Full name" className="border p-2 w-full mb-2" />
            <input placeholder="Street Address" className="border p-2 w-full mb-2" />
            <input placeholder="City" className="border p-2 w-full mb-2" />
            <input placeholder="Pincode" className="border p-2 w-full mb-3" />

            <button
                onClick={onNext}
                className="mt-3 bg-orange-500 text-black px-4 py-2 rounded cursor-pointer">
                Use this address
            </button>
        </div>
    )
}

function PaymentStep({ onNext }) {
    return (
        <div className="bg-white p-4 rounded">
            <h2 className="font-semibold mb-3">Payment Method</h2>

            <label className="block mb-2 cursor-pointer">
                <input type="radio" name="payment" defaultChecked />
                UPI / Credit / Debit Card
            </label>
            <label
                className="flex items-center gap-2 mb-3 text-sm cursor-pointer">
                <input type="radio" name="payment" />
                Cash on Delivery
            </label>
            <button
                onClick={onNext}
                className="mt-3 bg-orange-500 hover:bg-orange-600 
            text-white px-4 py-2 rounded
            text-sm font-semibold cursor-pointer"
            >
                Continue
            </button>
        </div>
    )
}

function ReviewStep({ cartItems, total, placeOrder }) {
    return (
        <div className="bg-white p-4 rounded">
            <h2 className="font-semibold mb-3">Review Your Order</h2>

            {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 py-2">
                    <img src={item.image} className="w-16 h-20 object-contain" />
                    <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="font-sm">₹{item.price}</p>
                    </div>
                </div>
            ))}
            <div className="font-semibold mt-4 text-lg">
                Order Total: ₹{total}
            </div>
            <button
                onClick={placeOrder}
                className="mt-4 inline-flex items-center justify-center 
                bg-green-600 hover:bg-green-700
                text-black px-6 py-3
                rounded
                text-sm font-semibold
                cursor-pointer
                transition
                "
            >
                Place Order
            </button>
        </div>
    )
}
