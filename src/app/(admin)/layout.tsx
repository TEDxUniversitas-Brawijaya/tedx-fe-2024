import Sidebar from "@/components/admin/shared/sidebar";
import Topbar from "@/components/admin/shared/topbar";
import SessionWrapper from "@/components/shared/session-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | TEDxUniversitasBrawijaya 2025",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <div className="z-0 flex h-screen w-full bg-neutral-100">
        <Sidebar />
        <div className="z-10 h-full w-full space-y-3 overflow-scroll p-3">
          <Topbar />
          {children}
        </div>
      </div>
    </SessionWrapper>
  );
}
