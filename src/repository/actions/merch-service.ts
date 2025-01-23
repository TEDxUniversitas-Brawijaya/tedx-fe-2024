"use server";

import { IRootResponse } from "@/types/general-types";
import {
  ICreateMerchOrderPayload,
  IGetMerchOrdersResponse,
} from "@/types/merch-types";
import { API_KEY, BASE_URL } from "../api";

const url = new URL(BASE_URL + "/merch");

export async function getAllMerchs(
  page = 1,
  type?: string,
  keyword?: string,
  limit = 10,
): Promise<IGetMerchOrdersResponse> {
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", limit.toString());

  if (type) url.searchParams.append("type", type);
  if (keyword) url.searchParams.append("keyword", keyword);

  const res = await fetch(url.toString(), {
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
  });

  const data = await res.json();

  return data;
}

export async function createMerchOrder(
  payload: ICreateMerchOrderPayload,
): Promise<IRootResponse> {
  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}
