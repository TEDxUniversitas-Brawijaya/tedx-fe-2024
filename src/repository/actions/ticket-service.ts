"use server";

import { IRootResponse } from "@/types/general-types";
import {
  ICreateTicketPayload,
  IGetTicketInfoResponse,
  IGetTicketResponse,
} from "@/types/ticket-types";
import { BASE_URL } from "../api";

const url = new URL(BASE_URL + "/tickets/informations");

export async function getAllTicketInfo(): Promise<IGetTicketInfoResponse> {
  const res = await fetch(url);

  const data = await res.json();

  return data;
}

export async function getAllTickets(
  page = 1,
  status?: string,
  keyword?: string,
  limit = 10,
): Promise<IGetTicketResponse> {
  const url = new URL(BASE_URL + "/tickets");

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
  const res = await fetch(url.toString(), {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  return data;
}
