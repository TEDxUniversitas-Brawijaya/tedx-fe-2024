import { IRootResponse } from "./general-types";
import { ITicketDetail } from "./ticket-types";

export interface IOrderDetail {
  id: string;
  email: string;
  status: "pending" | "accepted" | "rejected";
  name: string;
  phone: string;
  institution: string;
  type: string;
  quantity: number;
  totalPrice: number;
  paymentProof: string;
  tickets?: Omit<ITicketDetail, "name">[];
}

export interface IGetOrdersResponse extends IRootResponse {
  orders: IOrderDetail[];
}

export interface IUpdateOrderPayload {
  status: "pending" | "accepted" | "rejected";
}

export interface IGetOrderDetailResponse extends IRootResponse {
  order: IOrderDetail;
}
