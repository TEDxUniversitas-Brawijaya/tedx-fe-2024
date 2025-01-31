"use server";

import {
  IGetOrderDetailResponse,
  IGetOrderDiscountsResponse,
  IGetOrdersResponse,
  IUpdateOrderPayload,
} from "@/types/order-types";
import { API_KEY, BASE_URL } from "../api";
import { IRootResponse } from "@/types/general-types";

const endpoint = BASE_URL + "/orders";

export async function getAllOrders(
  page = 1,
  status?: string,
  keyword?: string,
  limit = 10,
): Promise<IGetOrdersResponse> {
  const url = new URL(endpoint);

  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", limit.toString());

  if (status) url.searchParams.append("status", status);
  if (keyword) url.searchParams.append("keyword", keyword);

  const res = await fetch(url.toString(), {
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function updateOrder(
  id: string,
  payload: IUpdateOrderPayload,
): Promise<IRootResponse> {
  const res = await fetch(`${endpoint}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}

export async function getOrderById(
  id: string,
): Promise<IGetOrderDetailResponse> {
  const res = await fetch(`${endpoint}/${id}`, {
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function getAllTicketDiscounts(): Promise<IGetOrderDiscountsResponse> {
  const res = await fetch(endpoint + "/discounts", {
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
  });

  const data = await res.json();

  return data;
}
