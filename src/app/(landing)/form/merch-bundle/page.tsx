import ClientFormMerchBundlingPage from "@/components/form/merch-bundle/page/client-page";
import { merchBundlingData } from "@/lib/static/merchs";
import { notFound } from "next/navigation";

export default async function MerchFormPage({
  searchParams: { item },
}: {
  searchParams: { item: string };
}) {
  const selectedItem = merchBundlingData.find(
    ({ name }) => name.toLowerCase().replaceAll(" ", "-") === item,
  );

  if (!selectedItem) return notFound();

  return <ClientFormMerchBundlingPage item={item} merch={selectedItem} />;
}
