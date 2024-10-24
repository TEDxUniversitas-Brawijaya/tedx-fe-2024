"use client";

import VolunteerPageDesktop from "@/components/pencarian-volunteer/screens/desktop";
import VolunteerPageMobile from "@/components/pencarian-volunteer/screens/mobile";
import MediaQuerySwitcher from "@/components/shared/media-query-switcher";

export default function VolunteerPage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<VolunteerPageMobile />}
      desktop={<VolunteerPageDesktop />}
    />
  );
}
