import { IRootResponse } from "./general-types";

export interface IMerchOrderDetail {
  id: string;
  orderID: string;
  name: string;
  email: string;
  address: string;
  price: number;
  size: string;
  type: string;
}

export interface IGetMerchOrdersResponse extends IRootResponse {
  merchs: IMerchOrderDetail[];
}

export interface ICreateMerchOrderPayload {
  email: string;
  address: string;
  institution: string;
  name: string;
  phone: string;
  orderType: string;
  merchType: string;
  quantity: number;
  sizes?: string[];
  paymentProof?: string;
}

export interface IMerchData {
  name: string;
  price: number;
  image: string;
  hasSize: boolean;
}
