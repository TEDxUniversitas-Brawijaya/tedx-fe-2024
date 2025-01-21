"use server";

import { IUploadResponse } from "@/types/upload-type";
import { BASE_URL } from "../api";

const url = new URL(BASE_URL + "/uploads");
export async function uploadFile(formData: FormData): Promise<IUploadResponse> {
  const res = await fetch(url.toString(), {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Upload failed");
  }

  const data: IUploadResponse = await res.json();

  return data;
}
