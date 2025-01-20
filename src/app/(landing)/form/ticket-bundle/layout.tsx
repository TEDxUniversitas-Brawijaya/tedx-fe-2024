import { Suspense } from "react";

export default function FormTicketBundleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
