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

export interface ITicketInfoDetail {
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

export interface IGetTicketInfoResponse extends IRootResponse {
  ticketInformations: {
    mainEvent: ITicketInfoDetail[];
    propaganda3: ITicketInfoDetail[];
    ticketBundling1: ITicketInfoDetail[];
  };
}

export interface ITicketDetail {
  id: number;
  orderID: string;
  name: string;
  email: string;
  number: string;
  isCheckedIn: boolean;
  event: string;
  type: string;
  price: number;
}

export interface IGetTicketResponse extends IRootResponse {
  tickets: ITicketDetail[];
}

export interface ICreateTicketPayload {
  name: string;
  email: string;
  phone: string;
  quantity: number;
  institution: string;
  paymentProof: string;
  orderType: string;
  ticketType?: string;
  ticketEvent: string;
}
