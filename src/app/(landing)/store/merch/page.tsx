import Footer from "@/components/shared/footer";
import Section1 from "@/components/store/merch/sections/section-1";
import Section2 from "@/components/store/merch/sections/section-2";
import Section3 from "@/components/store/merch/sections/section-3";
import { MerchFilter, merchsData } from "@/lib/static/merchs";

export default function MerchPage({
  searchParams: { filter = "tshirt" },
}: {
  searchParams: { filter?: MerchFilter };
}) {
  const isValidFilter = Object.keys(merchsData).includes(filter);

  const selectedFilter = isValidFilter ? filter : "tshirt";

  const merchs = merchsData[selectedFilter];

  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 merchs={merchs} filter={selectedFilter} />
      <Footer />
    </main>
  );
}
