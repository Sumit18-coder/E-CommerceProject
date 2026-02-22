"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartLayout() {

  const { cartItems = [], removeFromCart, totalPrice, updateQty } = useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty 🛒</h2>
        <p className="text-gray-600">
          Add some products to proceed to checkout
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT — CART ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="
  flex flex-col sm:flex-row gap-6 p-5
  bg-gradient-to-r from-orange-50/60 to-white
  rounded-2xl border border-orange-100
  shadow-sm hover:shadow-lg
  hover:scale-[1.01]
  transition-all duration-300
"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="
                w-28 h-36 object-contain rounded
                hover:scale-105 transition-transform duration-300
              "
            />

            {/* INFO */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Size: <span className="font-medium text-gray-700">{item.selectedSize}</span>
                </p>

                <p className="text-green-600 text-xs mt-1 font-medium">
                  ✔ In stock
                </p>

                <p className="mt-2 text-xl font-bold text-gray-900">
                  ₹{item.price}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between mt-4">
                {/* QTY STEPPER HERE (paste stepper code) */}

                {/* QTY STEPPER - PLUS MINUS */}
                <div className="flex items-center gap-3 bg-orange-50 px-3 py-1 rounded-xl border border-orange-100">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="
      w-9 h-9 flex items-center justify-center
      rounded-lg bg-white shadow-sm
      text-orange-500 text-xl font-bold
      hover:bg-orange-100 transition
      active:scale-95 cursor-pointer
    "
                  >
                    −
                  </button>

                  <span className="font-semibold text-gray-800 w-6 text-center text-lg">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="
      w-9 h-9 flex items-center justify-center
      rounded-lg bg-white shadow-sm
      text-orange-500 text-xl font-bold
      hover:bg-orange-100 transition
      active:scale-95 cursor-pointer
    "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT — SUMMARY */}
      <div
        className="
  h-fit p-6 rounded-2xl
  bg-gradient-to-b from-orange-50 to-white
  border border-orange-100
  shadow-lg
  sticky top-24
"
      >
        <h2 className="text-lg font-semibold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Items ({cartItems.length})</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>


        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>

        <button
          onClick={() => router.push("/checkout")}
          className="
  w-full py-3 rounded-2xl
  bg-gradient-to-r from-orange-500 to-amber-400
  text-white font-bold text-sm tracking-wide
  shadow-md shadow-orange-200
  hover:shadow-lg hover:scale-[1.02]
  transition-all duration-300
  cursor-pointer
"
        >
          Proceed to Buy
        </button>

        <p className="text-xs text-gray-500 mt-3 leading-snug">
          Secure checkout · Easy returns · Fast delivery
        </p>
      </div>
    </div>
  );
}
