"use server";

import { IUploadResponse } from "@/types/upload-types";
import { API_KEY, BASE_URL } from "../api";

const url = new URL(BASE_URL + "/uploads");
export async function uploadFile(formData: FormData): Promise<IUploadResponse> {
  const res = await fetch(url.toString(), {
    headers: {
      "TEDXUB25-API-KEY": `${API_KEY}`,
    },
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const response = await res.json();
    throw new Error(response.message);
  }

  const data: IUploadResponse = await res.json();

  return data;
}
