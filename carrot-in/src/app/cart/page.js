"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CartLayout from "@/components/cart/CartLayout";

export default function CartPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="p-6">
      <CartLayout />
    </div>
  );
}
