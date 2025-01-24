import Footer from "@/components/shared/footer";
import Section1 from "@/components/store/merch/sections/section-1";
import Section2 from "@/components/store/merch/sections/section-2";
import Section3 from "@/components/store/merch/sections/section-3";
import { MerchFilter, merchsData } from "@/lib/static/merchs";

export default function MerchPage({
  searchParams: { filter = "t-shirt" },
}: {
  searchParams: { filter?: MerchFilter };
}) {
  const merchs = merchsData[filter];

  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 merchs={merchs} filter={filter} />
      <Footer />
    </main>
  );
}
