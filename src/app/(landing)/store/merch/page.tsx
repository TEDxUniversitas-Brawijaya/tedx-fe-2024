import Footer from "@/components/shared/footer";
import Section1 from "@/components/store/merch/sections/section-1";
import Section2 from "@/components/store/merch/sections/section-2";
import Section3 from "@/components/store/merch/sections/section-3";

export default function MerchPage() {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </main>
  );
}
