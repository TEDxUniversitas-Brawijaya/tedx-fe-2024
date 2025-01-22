"use client";

import { Button } from "@/components/shared/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const params = useSearchParams();
  const router = useRouter();

  const errorMessages: Record<string, string> = {
    AccessDenied:
      "Akun Anda tidak terdaftar. Silahkan gunakan akun yang terdaftar",
    default: "Terjadi kesalahan saat login.",
  };

  const error = params.get("error") as string | undefined;
  return (
    <main className="flex min-h-screen items-center justify-center bg-tedx-black">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Login
        </h1>
        {error && (
          <p className="mt-2 rounded-lg bg-rose-100 p-5 text-center text-rose-600">
            {errorMessages[error] || errorMessages.default}
          </p>
        )}
        <Button
          onClick={() => router.push("/auth/login")}
          className="mt-4 w-full"
        >
          Kembali
        </Button>
      </div>
    </main>
  );
}
