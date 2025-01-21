import { IRootResponse } from "./general-types";

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
}

export interface IGetOrdersResponse extends IRootResponse {
  orders: IOrderDetail[];
}

export interface IUpdateOrderPayload {
  status: "pending" | "accepted" | "rejected";
}
