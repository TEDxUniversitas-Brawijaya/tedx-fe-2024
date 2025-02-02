import { IRootResponse } from "@/types/general-types";
import {
  ICreateTicketPayload,
  IGetTicketInfoResponse,
  IGetTicketResponse,
} from "@/types/ticket-types";
import { API_KEY, BASE_URL } from "../api";

const url = new URL(BASE_URL + "/tickets/informations");

const ticketUrl = new URL(BASE_URL + "/tickets");

export async function getAllTicketInfo(): Promise<IGetTicketInfoResponse> {
  const res = await fetch(url, {
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
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
  const url = new URL(BASE_URL + "/tickets");

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

export async function createTicket(
  payload: ICreateTicketPayload,
): Promise<IRootResponse> {
  const res = await fetch(ticketUrl.toString(), {
    method: "POST",
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
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
