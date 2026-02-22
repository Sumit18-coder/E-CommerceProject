"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import allProducts from "@/data/allProducts";

export default function ProductClient({ productId }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const product = allProducts.find((p) => p.id === productId);
  if (!product) return <div className="p-6">Product not found</div>;

  const [activeImg, setActiveImg] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(
    product.Sizes ? product.Sizes[0] : null
  );

  const related = allProducts.filter(
    (p) => p.id !== product.id && p.Brand === product.Brand
  );

  return (
    <div className="bg-white px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= IMAGE SECTION ================= */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {[product.image].map((img, i) => (
              <img
                key={i}
                src={img}
                onMouseEnter={() => setActiveImg(img)}
                className="
                  w-14 h-20 object-contain
                  cursor-pointer
                  hover:scale-105
                  transition
                "
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={activeImg}
              alt={product.name}
              className="
                w-full h-[420px]
                object-contain
                transition-transform duration-300
                hover:scale-105
                cursor-zoom-in
              "
            />
          </div>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div>
          <h1 className="text-xl font-medium leading-snug">
            {product.Brand} {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="text-orange-500 font-semibold">
              ★ {product.rating}
            </span>
            <span className="text-gray-600">
              ({product.bought}+ ratings)
            </span>
          </div>

          {/* Price */}
          <div className="mt-3">
            <span className="text-3xl font-medium text-red-600">
              ₹{product.price}
            </span>
            <span className="ml-2 text-sm text-green-700">
              ({product.discount}% off)
            </span>
          </div>
          {/* SIZE SELECTION */}
          {product.Sizes && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2">Select Size</h3>

              <div className="flex gap-3">
                {product.Sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
            px-3 py-1 border rounded text-sm cursor-pointer
            ${selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300"
                      }
          `}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="text-sm text-gray-700 mt-2">
            Inclusive of all taxes
          </p>

          <p className="text-sm mt-3">
            🚚 <span className="font-medium">{product.delivery}</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => {
                addToCart({ ...product, selectedSize }, 1);
                router.push("/cart");
              }}
              className="
                px-4 py-2 text-sm font-semibold
                bg-orange-500 text-white
                rounded
                cursor-pointer
                hover:bg-orange-600
                transition
              "
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart({ ...product, selectedSize }, 1);
                router.push("/checkout");
              }}
              className="
    px-4 py-2 text-sm font-semibold
    bg-yellow-400 text-black
    rounded
    cursor-pointer
    hover:bg-yellow-500
    transition
  "
            >
              Buy Now
            </button>

          </div>
        </div>

        {/* ================= BUY BOX (MINIMAL) ================= */}
        <div className="text-sm">
          <p className="mt-1 text-green-700">
            {product.delivery}
          </p>
          <p className="mt-2">
            Sold by <span className="text-blue-600 cursor-pointer">Carrot-in</span>
          </p>
        </div>
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-lg font-semibold mb-3">
          Product Details
        </h2>

        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Brand:</strong> {product.Brand}</p>
          <p><strong>Color:</strong> {product.Color}</p>
          <p><strong>Fit Type:</strong> Regular</p>
        </div>
      </div>

      {/* ================= ABOUT THIS ITEM ================= */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-lg font-semibold mb-3">
          About this item
        </h2>

        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          {product.about?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* ================= RELATED PRODUCTS ================= */}
      <div className="max-w-7xl mx-auto mt-14">
        <h2 className="text-lg font-semibold mb-4">
          Related Products
        </h2>

        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {related.map((p) => (
            <div
              key={p.id}
              onClick={() => router.push(`/product/${p.id}`)}
              className="
                min-w-[160px]
                cursor-pointer
              "
            >
              <img
                src={p.image}
                className="w-full h-40 object-contain hover:scale-105 transition"
              />
              <p className="text-sm truncate mt-2">{p.name}</p>
              <p className="text-sm font-medium">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
