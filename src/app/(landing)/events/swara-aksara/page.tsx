"use client";

import MediaQuerySwitcher from "@/components/shared/media-query-switcher";
import SwaraAksaraPageDesktop from "@/components/swara-aksara/screens/desktop";
import SwaraAksaraPageMobile from "@/components/swara-aksara/screens/mobile";
import "swiper/css";

export default function SwaraAksaraPage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<SwaraAksaraPageMobile />}
      desktop={<SwaraAksaraPageDesktop />}
    />
  );
}
