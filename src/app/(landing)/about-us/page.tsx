"use client";

import AboutUsPageDesktop from "@/components/about-us/screens/desktop";
import AboutUsPageMobile from "@/components/about-us/screens/mobile";
import MediaQuerySwitcher from "@/components/shared/media-query-switcher";

export default function AboutUsPage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<AboutUsPageMobile />}
      desktop={<AboutUsPageDesktop />}
    />
  );
}
