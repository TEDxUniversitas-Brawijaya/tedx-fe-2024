import Footer from "@/components/shared/footer";
import Section1 from "@/components/store/merch/sections/section-1";
import Section2 from "@/components/store/merch/sections/section-2";
import Section3 from "@/components/store/merch/sections/section-3";
import {
  merchBundlingData,
  MerchFilter,
  merchsData,
} from "@/lib/static/merchs";

export default function MerchPage({
  searchParams: { filter = "tshirt" },
}: {
  searchParams: { filter?: MerchFilter | "bundling" };
}) {
  const isBundling = filter === "bundling";

  const isValidFilter = Object.keys(merchsData).includes(filter) || isBundling;

  const selectedFilter = isValidFilter ? filter : "tshirt";

  const merchs = isBundling
    ? merchBundlingData
    : merchsData[selectedFilter as MerchFilter];

  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 merchs={merchs} filter={selectedFilter} />
      <Footer />
    </main>
  );
}
