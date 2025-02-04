import ClientFormMerchPage from "@/components/form/merch/page/client-page";
import { merchsData } from "@/lib/static/merchs";
import { notFound } from "next/navigation";

export default async function MerchFormPage({
  searchParams,
}: {
  searchParams: { item: string };
}) {
  const [category, index] = searchParams.item.split("-");
  const selectedItem =
    merchsData[category as keyof typeof merchsData]?.[parseInt(index) - 1];

  if (!selectedItem) return notFound();

  return <ClientFormMerchPage item={searchParams.item} merch={selectedItem} />;
}
