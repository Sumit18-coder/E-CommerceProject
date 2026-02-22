import { defaults } from "autoprefixer";
import Link from "next/link";

export default function ProductCard({ product }) {
  const p = product;

  return (
    <div className="bg-white rounded shadow-sm p-3 hover:shadow-md transition">
      {/* IMAGE → PRODUCT PAGE */}
      <Link href={`/product/${p.id}`}>
        <img
          src={p.image}
          alt={p.name}
          className="h-36 w-full object-contain mb-2 cursor-pointer"
        />
      </Link>

      <h3 className="text-sm font-medium line-clamp-2 min-h-[40px]">
        {p.name}
      </h3>

      <div className="text-xs text-yellow-600 mt-1">
        ⭐ {p.rating} | {p.bought}+ bought
      </div>

      <div className="mt-1">
        <span className="font-bold text-lg">₹{p.price}</span>
        <span className="text-green-600 text-xs ml-2">
          {p.discount}% off
        </span>
      </div>

      <div className="text-xs text-green-700 mt-1">
        Bank Offer Available
      </div>

      <div className="text-xs text-gray-600">
        {p.delivery}
      </div>

      {/* AMAZON-STYLE BUTTON */}
      <div className="mt-2">
        <button
          className="
            mt-3
            inline-flex items-center justify-center
            px-3 py-1.5
            text-xs font-semibold
            bg-orange-500 text-white
            rounded-md
            transition-all duration-200
            hover:bg-orange-600
            hover:shadow-[0_4px_10px_rgba(249,115,22,0.45)]
            active:scale-95
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}