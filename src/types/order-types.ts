import { IRootResponse } from "./general-types";

export interface IOrderDetail {
  id: string;
  email: string;
  status: string;
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
  status: string;
}
