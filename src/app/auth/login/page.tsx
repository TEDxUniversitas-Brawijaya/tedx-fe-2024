"use client";

import { Button } from "@/components/shared/button";
import { LogInIcon } from "lucide-react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-tedx-black">
      <div className="w-full max-w-md rounded-xl bg-white p-5 shadow-md">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
          Login
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Silakan masuk dengan akun Google yang sudah terdaftar sebagai admin.
        </p>
        <Button
          onClick={() =>
            signIn("google", { callbackUrl: "/admin/dashboard/transaction" })
          }
          className="mt-5 w-full"
        >
          <LogInIcon />
          <span>Masuk</span>
        </Button>
      </div>
    </main>
  );
}
