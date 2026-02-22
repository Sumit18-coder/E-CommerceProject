"use client";

import { useState } from "react";
import TopHeader from "./TopHeader";
import CookieConsent from "./CookieConsent";
import PermissionModal from "./PermissionModal";
import Providers from "@/context/Providers";

export default function ClientLayout({ children }) {
  const [userLocation, setUserLocation] = useState(null);

  const handleAllow = (locationText) => {
    setUserLocation(locationText);
  };

  return (
    <Providers>
      <TopHeader locationFromModal={userLocation} />
      {children}
      <CookieConsent />
      <PermissionModal onAllow={handleAllow} />
    </Providers>
  );
}
