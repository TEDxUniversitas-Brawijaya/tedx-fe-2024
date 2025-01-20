"use server";

import {
  ICreateTicketRefundPayload,
  ICreateTicketRefundResponse,
  IGetTicketRefundsResponse,
  IUpdateTicketRefundPayload,
} from "@/types/refund-types";
import { BASE_URL } from "../api";
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

  const res = await fetch(url.toString());

  const data = await res.json();

  return data;
}

export async function createTicketRefund(
  payload: ICreateTicketRefundPayload,
): Promise<ICreateTicketRefundResponse> {
  const res = await fetch(url.toString(), {
    method: "POST",
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
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}
