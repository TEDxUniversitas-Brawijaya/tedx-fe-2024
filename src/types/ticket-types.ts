export type TicketTypeEnum = "propa-3" | "main-event";

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
