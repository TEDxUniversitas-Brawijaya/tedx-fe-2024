"use client";

import MerengkuhKarsaPageDesktop from "@/components/merengkuh-karsa/screens/desktop";
import MerengkuhKarsaPageMobile from "@/components/merengkuh-karsa/screens/mobile";
import MediaQuerySwitcher from "@/components/shared/media-query-switcher";

export default function MerengkuhKarsaPage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<MerengkuhKarsaPageMobile />}
      desktop={<MerengkuhKarsaPageDesktop />}
    />
  );
}
