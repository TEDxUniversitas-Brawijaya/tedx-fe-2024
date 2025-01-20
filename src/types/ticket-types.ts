import { IRootResponse } from "./general-types";

export type TicketTypeEnum = "propa-3" | "main-event";
export type TicketPriceTypeEnum =
  | "early-bird"
  | "presale1"
  | "presale2"
  | "normal-price";

export interface IRootTicket {
  type: TicketTypeEnum;
  full_name: string;
  email: string;
  phone_number: string;
  institution: string;
  amount: number;
}

export interface IRootRefund {
  type: TicketTypeEnum;
  full_name: string;
  order_number: string;
  email: string;
  payment_url: string;
  payment_method: string;
  reason: string;
  bank_number: string;
  amount: number;
}

export interface ITicketResponseDetail {
  id: number;
  name: string;
  type: TicketPriceTypeEnum;
  startDate: string;
  endDate: string;
  stock: number;
  description: string;
  isExpired: boolean;
  price: number;
}

export interface ITicketResponse extends IRootResponse {
  ticketInformations: {
    mainEvent: ITicketResponseDetail[];
    propaganda3: ITicketResponseDetail[];
    ticketBundling1: ITicketResponseDetail[];
  };
}
