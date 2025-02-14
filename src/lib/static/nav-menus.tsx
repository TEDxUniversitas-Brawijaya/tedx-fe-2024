import {
  ArrowDownLeft,
  ArrowUpRight,
  ScanQrCodeIcon,
  TicketIcon,
} from "lucide-react";
import { ReactNode } from "react";

interface INavMenu {
  label: string;
  href: string | null;
  icon?: ReactNode;
}

export const eventMenus: INavMenu[] = [
  {
    label: "Propaganda 1",
    href: "/events/waktu-wicara",
  },
  {
    label: "Pre-Event",
    href: "/events/swara-aksara",
  },
  {
    label: "Propaganda 2",
    href: "/events/api-kehadiran",
  },
  {
    label: "Propaganda 3",
    href: "/events/merengkuh-karsa",
  },
  {
    label: "Main Event",
    href: "/events/mantra-diri",
  },
];

export const adminNavMenus: INavMenu[] = [
  {
    label: "Transaksi",
    href: "/admin/dashboard/transaction",
    icon: <ArrowDownLeft />,
  },
  {
    label: "Pengajuan Refund",
    href: "/admin/dashboard/refund",
    icon: <ArrowUpRight />,
  },
  {
    label: "Tiket Terjual",
    href: "/admin/dashboard/ticket",
    icon: <TicketIcon />,
  },
  {
    label: "Check In",
    href: "/admin/dashboard/check-in",
    icon: <ScanQrCodeIcon />,
  },
];
