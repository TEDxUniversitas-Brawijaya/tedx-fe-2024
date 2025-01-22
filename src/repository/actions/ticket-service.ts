"use server";

import { IRootResponse } from "@/types/general-types";
import {
  ICreateTicketPayload,
  IGetTicketInfoResponse,
  IGetTicketResponse,
} from "@/types/ticket-types";
import { BASE_URL } from "../api";

const url = new URL(BASE_URL + "/tickets/informations");

const ticketUrl = new URL(BASE_URL + "/tickets");

export async function getAllTicketInfo(): Promise<IGetTicketInfoResponse> {
  const res = await fetch(url, {
    cache: "no-store",
  });

  const data = await res.json();

  return data;
}

export async function getAllTickets(
  page = 1,
  status?: string,
  keyword?: string,
  limit = 10,
): Promise<IGetTicketResponse> {
  url.searchParams.append("page", page.toString());
  url.searchParams.append("limit", limit.toString());

  if (status) url.searchParams.append("status", status);
  if (keyword) url.searchParams.append("keyword", keyword);

  const res = await fetch(url.toString());

  const data = await res.json();

  return data;
}

export async function createTicket(
  payload: ICreateTicketPayload,
): Promise<IRootResponse> {
  const res = await fetch(ticketUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const response = await res.json();
    throw new Error(response.message);
  }

  const data = await res.json();

  return data;
}
