"use server";

import {
  ICreateTicketRefundPayload,
  ICreateTicketRefundResponse,
  IGetTicketRefundsResponse,
  IUpdateTicketRefundPayload,
} from "@/types/refund-types";
import { API_KEY, BASE_URL } from "../api";
import { IRootResponse } from "@/types/general-types";

const url = new URL(BASE_URL + "/tickets/refund");

export async function getAllTicketRefunds(
  page = 1,
  status?: string,
  keyword?: string,
  limit = 10,
): Promise<IGetTicketRefundsResponse> {
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

export async function createTicketRefund(
  payload: ICreateTicketRefundPayload,
): Promise<ICreateTicketRefundResponse> {
  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}

export async function updateTicketRefund(
  id: string,
  payload: IUpdateTicketRefundPayload,
): Promise<IRootResponse> {
  const res = await fetch(`${url.toString()}/${id}`, {
    method: "PATCH",
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}
