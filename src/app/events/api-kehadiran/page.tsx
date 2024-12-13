import ApiKehadiranPageDesktop from "@/components/api-kehadiran/screens/desktop";
import ApiKehadiranPageMobile from "@/components/api-kehadiran/screens/mobile";
import MediaQuerySwitcher from "@/components/shared/media-query-switcher";

export default function ApiKehadiranPage() {
  return (
    <MediaQuerySwitcher
      screenWidth={1024}
      mobile={<ApiKehadiranPageMobile />}
      desktop={<ApiKehadiranPageDesktop />}
    />
  );
}
