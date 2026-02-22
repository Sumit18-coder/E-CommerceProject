"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { navLinks } from "@/constants";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { cartItems } = useCart(); // 🔥 ADD THIS


  // Entrance animation (fade + slide)
  useEffect(() => setMounted(true), []);
  // Scroll glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!mounted) return null; // 🔥 KEY FIX

  // Neon orange underline link style (REPLACEMENT)
  const neonOrangeLink =
    "relative text-sm font-semibold uppercase tracking-wide " +
    "text-black/80 hover:text-black transition-colors duration-200 " +
    // underline base
    "after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full " +
    "after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 " +
    "after:bg-gradient-to-r after:from-orange-400 after:via-orange-500 after:to-amber-300 " +
    // glow layer
    "before:absolute before:left-0 before:-bottom-2 before:h-[2px] before:w-full " +
    "before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 " +
    "before:bg-orange-500/70 before:blur-[7px] " +
    // tiny extra glow
    "hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.35)]";

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "transition-all duration-300",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="flex items-center px-6 py-4 gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 group">
          <img
            src="/logos/carrot-in1.png"
            alt="logo"
            width={140}
            height={40}
            className="transition duration-300 group-hover:drop-shadow-[0_0_14px_rgba(249,115,22,0.35)]"
          />
        </Link>

        {/* DESKTOP: full nav links */}
        <nav className="hidden lg:flex flex-1 items-center">
          <ul className="flex gap-6">
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <Link href={link} className={neonOrangeLink}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* AUTH SECTION (desktop) */}
          {/* RIGHT SECTION (Cart + Auth) */}
          <div className="hidden md:flex items-center gap-6 ml-auto">

            {/* 🛒 CART BUTTON (CARROT-IN STYLE) */}
            <Link
              href="/cart"
              className="
      relative flex items-center gap-2
      px-4 py-2 rounded-2xl
      bg-orange-50/80 backdrop-blur
      border border-orange-200
      hover:bg-orange-100
      transition-all duration-300
      hover:shadow-[0_0_18px_rgba(249,115,22,0.25)]
      group
    "
            >
              <span className="text-lg group-hover:scale-110 transition">
                🛒
              </span>
              <span className="text-sm font-semibold text-black/80">
                Cart
              </span>

              {/* CART COUNT BADGE */}
              {cartItems.length > 0 && (
                <span
                  className="
          absolute -top-2 -right-2
          bg-gradient-to-r from-orange-500 to-amber-400
          text-white text-xs font-bold
          w-6 h-6 flex items-center justify-center
          rounded-full shadow-md
          animate-pulse
        "
                >
                  {cartItems.length}
                </span>
              )}
            </Link>

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="text-sm font-semibold uppercase tracking-wide text-black/75 hover:text-orange-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-semibold uppercase tracking-wide text-black/75 hover:text-orange-600 transition"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <span className="text-sm font-semibold text-black/70">
                  Hello, {user?.name}
                </span>
                <Link
                  href="/orders"
                  className="
      relative flex items-center gap-2
      px-4 py-2 rounded-2xl
      bg-orange-50/80 backdrop-blur
      border border-orange-200
      hover:bg-orange-100
      transition-all duration-300
      hover:shadow-[0_0_18px_rgba(249,115,22,0.25)]
      group
    "
                >
                  My Orders
                </Link>
                <button
                  onClick={logout}
                  className="
      relative flex items-center gap-2
      px-4 py-2 rounded-2xl
      bg-orange-50/80 backdrop-blur
      border border-orange-200
      hover:bg-orange-100
      transition-all duration-300
      hover:shadow-[0_0_18px_rgba(249,115,22,0.25)]
      group cursor-pointer
    "
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>

        {/* MEDIUM: truncate nav links */}
        <nav className="hidden md:flex lg:hidden flex-1">
          <ul className="flex gap-6 items-center w-full">
            {navLinks.slice(0, 5).map(({ name, link }) => (
              <li key={name}>
                <Link href={link} className={neonOrangeLink}>
                  {name}
                </Link>
              </li>
            ))}

            {/* More dropdown */}
            <li className="relative group ml-1">
              <button className="text-sm font-semibold uppercase tracking-wide text-black/80 hover:text-black transition">
                More
              </button>

              <ul
                className={[
                  "absolute left-0 mt-3 w-44 rounded-xl",
                  "border border-black/10 bg-white/90 backdrop-blur-xl",
                  "shadow-[0_18px_50px_rgba(0,0,0,0.12)]",
                  "opacity-0 translate-y-2 pointer-events-none",
                  "transition duration-200",
                  "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                ].join(" ")}
              >
                {navLinks.slice(5).map(({ name, link }) => (
                  <li key={name} className="p-1">
                    <Link
                      href={link}
                      className="block rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wide text-black/75 hover:text-black
                                 hover:bg-black/[0.04] transition"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* AUTH SECTION for medium screens */}
            <li className="ml-auto flex items-center gap-4">
              {!user ? (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-semibold uppercase tracking-wide text-black/75 hover:text-orange-600 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm font-semibold uppercase tracking-wide text-black/75 hover:text-orange-600 transition"
                  >
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <span className="text-sm font-semibold text-black/70">
                    Hi, {user?.name}
                  </span>

                  <Link
                    href="/orders"
                    className="text-sm font-semibold uppercase tracking-wide text-black/75 hover:text-orange-600 transition"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="text-sm font-semibold uppercase tracking-wide text-black/70 hover:text-red-600 transition"
                  >
                    Logout
                  </button>
                </>
              )}
            </li>
          </ul>
        </nav>

        {/* MOBILE: hamburger (animated icon) */}
        <button
          className="md:hidden ml-auto inline-flex h-11 w-11 items-center justify-center rounded-xl
                     border border-black/10 bg-white/70 text-black/90 backdrop-blur
                     transition hover:bg-white active:scale-[0.98]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={[
                "absolute left-0 top-0 h-[2px] w-full bg-black transition duration-200",
                open ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[7px] h-[2px] w-full bg-black transition duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-[14px] h-[2px] w-full bg-black transition duration-200",
                open ? "translate-y-[-7px] -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU (animated open/close) */}
      <div
        className={[
          "md:hidden overflow-hidden border-t border-black/10",
          "bg-white/90 backdrop-blur-xl",
          "transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-6 py-4">
          {navLinks.map(({ name, link }, idx) => (
            <Link
              key={name}
              href={link}
              className={[
                "block py-3 rounded-xl px-3",
                "text-base font-semibold uppercase tracking-wide",
                "text-black/80 hover:text-black hover:bg-black/[0.04]",
                "transition duration-200",
                open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0",
              ].join(" ")}
              style={{ transitionDelay: open ? `${idx * 35}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}

          {/* Mobile Auth */}
          <div className="mt-4 pt-4 border-t border-black/10">
            {!user ? (
              <>
                {/* 🛒 MOBILE CART */}
                <Link
                  href="/cart"
                  className="flex items-center justify-between py-3 rounded-xl px-3 text-base font-semibold uppercase text-black/80 hover:bg-black/[0.04] transition"
                  onClick={() => setOpen(false)}
                >
                  <span>My Cart 🛒</span>
                  {cartItems.length > 0 && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
                <Link
                  href="/login"
                  className="block py-3 rounded-xl px-3 text-base font-semibold uppercase text-black/80 hover:bg-black/[0.04] transition"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block py-3 rounded-xl px-3 text-base font-semibold uppercase text-black/80 hover:bg-black/[0.04] transition"
                  onClick={() => setOpen(false)}
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <div className="py-2 px-3 font-semibold text-black/70">
                  Hello, {user?.name}
                </div>

                <Link
                  href="/orders"
                  className="block py-3 rounded-xl px-3 text-base font-semibold uppercase text-black/80 hover:bg-black/[0.04] transition"
                  onClick={() => setOpen(false)}
                >
                  My Orders
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="block w-full text-left py-3 rounded-xl px-3 text-base font-semibold uppercase text-red-600 hover:bg-black/[0.04] transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom neon orange accent line */}
      <div className="h-px w-full bg-gradient-to-r from-orange-500/50 via-transparent to-amber-400/50" />
    </header>
  );
};

export default Navbar;
