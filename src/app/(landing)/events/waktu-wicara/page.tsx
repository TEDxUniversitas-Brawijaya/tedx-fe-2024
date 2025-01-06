"use client";

import MediaQuerySwitcher from "@/components/shared/media-query-switcher";
import WaktuWicaraPageDesktop from "@/components/waktu-wicara/screens/desktop";
import WaktuWicaraPageMobile from "@/components/waktu-wicara/screens/mobile";

export default function WaktuWicaraPage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<WaktuWicaraPageMobile />}
      desktop={<WaktuWicaraPageDesktop />}
    />
  );
}
