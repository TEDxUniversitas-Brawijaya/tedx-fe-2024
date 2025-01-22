import { IRootResponse } from "./general-types";

export type TicketEventEnum =
  | "propa-3-day1"
  | "propa-3-day2"
  | "propa-3-day3"
  | "main-event";
export type TicketOrderTypeEnum =
  | "ticket-regular"
  | "ticket-bundling1-day1"
  | "ticket-bundling1-day2"
  | "ticket-bundling1-day3";
export type TicketPriceTypeEnum =
  | "early-bird"
  | "presale1"
  | "presale2"
  | "normal-price";

export interface IRootTicket {
  type: TicketEventEnum;
  full_name: string;
  email: string;
  phone_number: string;
  institution: string;
  amount: number;
}

export interface IRootRefund {
  type: TicketEventEnum;
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
  type: TicketPriceTypeEnum | string;
  startDate: string;
  endDate: string;
  stock: number;
  description: string;
  isExpired: boolean;
  price: number;
}

export interface ITicketInformation {
  mainEvent: ITicketInfoDetail[];
  propaganda3: ITicketInfoDetail[];
  ticketBundling1: ITicketInfoDetail[];
}

export interface IGetTicketInfoResponse extends IRootResponse {
  ticketInformations: ITicketInformation;
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
  paymentProof?: string;
  orderType: string;
  ticketType?: string;
  ticketEvent: string;
  merchSize?: string;
}
