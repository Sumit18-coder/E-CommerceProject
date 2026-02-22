import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ClientLayout from "@/components/common/ClientLayout";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Carrot-in",
  description: "Industry Level E-commerce app",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />

        <AuthProvider> {/* 🔥 MUST BE HERE */}
          <CartProvider>
            <ClientLayout>
              <Navbar />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </ClientLayout>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
