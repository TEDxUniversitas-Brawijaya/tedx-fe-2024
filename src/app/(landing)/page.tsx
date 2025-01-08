"use client";

import HomePageDesktop from "@/components/home/screens/desktop";
import HomePageMobile from "@/components/home/screens/mobile";
import MediaQuerySwitcher from "@/components/shared/media-query-switcher";
import React from "react";

export default function HomePage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<HomePageMobile />}
      desktop={<HomePageDesktop />}
    />
  );
}
