"use client";
import Image from "next/image";
import Link from "next/link";

export default function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <div className="flex gap-4 border-b py-4">
      <Link href={`/product/${item.id}`}>
        <Image
          src={item.image}
          alt={item.title}
          width={120}
          height={120}
          className="object-contain"
        />
      </Link>

      <div className="flex-1">
        <h3 className="font-semibold line-clamp-2">{item.title}</h3>

        <p className="text-green-600 text-sm">In stock</p>

        <p className="text-sm">
          <span className="font-bold">₹{item.price}</span>{" "}
          <span className="line-through text-gray-400 ml-2">
            ₹{item.mrp}
          </span>
        </p>

        <p className="text-xs text-gray-500">
          FREE delivery by {item.delivery}
        </p>

        <div className="flex items-center gap-4 mt-2">
          <select
            value={item.qty}
            onChange={(e) => onQtyChange(item.id, +e.target.value)}
            className="border px-2 py-1 rounded"
          >
            {[1,2,3,4,5].map(q => (
              <option key={q} value={q}>Qty: {q}</option>
            ))}
          </select>

          <button
            onClick={() => onRemove(item.id)}
            className="text-sm text-blue-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
