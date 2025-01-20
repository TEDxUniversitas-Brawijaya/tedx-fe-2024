import { IRootResponse } from "./general-types";

export interface ITicketRefundDetail {
  id: string;
  requesterName: string;
  requesterEmail: string;
  cancellationReason: string;
  event: string;
  refundedTickets: number;
  orderNumber: string;
  paymentProof: string;
  paymentMethod: string;
  paymentNumber: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IGetTicketRefundsResponse extends IRootResponse {
  ticketRefunds: ITicketRefundDetail[];
}

export interface ICreateTicketRefundPayload {
  requesterName: string;
  requesterEmail: string;
  refundedTickets: number;
  paymentProof: string;
  paymentNumber: string;
  paymentMethod: string;
  cancellationReason: string;
  event: string;
  orderNumber: string;
}

export interface ICreateTicketRefundResponse extends IRootResponse {
  id: string;
}

export interface IUpdateTicketRefundPayload {
  status: string;
  rejectedReason: string;
}
