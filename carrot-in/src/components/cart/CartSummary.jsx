"use client";

export default function CartSummary({ items, onCheckout }) {
  const subtotal = items.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  return (
    <div className="border p-4 rounded sticky top-24">
      <h2 className="font-semibold text-lg">
        Subtotal ({items.length} items):
        <span className="font-bold ml-1">₹{subtotal}</span>
      </h2>

      <button
        onClick={onCheckout}
        className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold"
      >
        Proceed to Buy
      </button>
    </div>
  );
}
