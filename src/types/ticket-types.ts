export type TicketTypeEnum = "propa-3" | "main-event";

export interface IRootTicket {
  type: TicketTypeEnum;
  full_name: string;
  email: string;
  phone_number: string;
  institution: string;
  amount: number;
}
