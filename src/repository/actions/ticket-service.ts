import { ITicketResponse } from "@/types/ticket-types";
import { BASE_URL } from "../api";

const ENDPOINT = new URL(BASE_URL + "/tickets/informations");

export async function getAllTicketInfo(): Promise<ITicketResponse> {
  const res = await fetch(ENDPOINT);

  const data = await res.json();

  return data;
}
