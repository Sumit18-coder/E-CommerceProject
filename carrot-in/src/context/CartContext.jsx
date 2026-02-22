"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage (optional)
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  // Save to localStorage (optional)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART
  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, { ...product, qty }];
    });
  };

  // ✅ REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ UPDATE QTY
  // ✅ UPDATE QTY (FIXED)
const updateQty = (id, newQty) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item // ✅ FIX
    )
  );
};

  // ✅ TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,   // 🔥 THIS WAS MISSING
        addToCart,
        removeFromCart,
        updateQty,      // 🔥 THIS WAS MISSING
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
