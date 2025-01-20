"use server";

import { IGetOrdersResponse, IUpdateOrderPayload } from "@/types/order-types";
import { BASE_URL } from "../api";
import { IRootResponse } from "@/types/general-types";

const url = new URL(BASE_URL + "/orders");

export async function getAllOrders(
  page = 1,
  status?: string,
  keyword?: string,
  limit = 10,
): Promise<IGetOrdersResponse> {
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", limit.toString());

  if (status) url.searchParams.append("status", status);
  if (keyword) url.searchParams.append("keyword", keyword);

  const res = await fetch(url.toString());

  const data = await res.json();

  return data;
}

export async function updateOrder(
  id: string,
  payload: IUpdateOrderPayload,
): Promise<IRootResponse> {
  const res = await fetch(`${url.toString()}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}
