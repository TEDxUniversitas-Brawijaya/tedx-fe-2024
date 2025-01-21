import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { TicketTypeEnum } from "./types/ticket-types";
import { getToken } from "next-auth/jwt";

const isValidTicketType = (type: string | null): type is TicketTypeEnum => {
  const validTypes: TicketTypeEnum[] = ["propa-3", "main-event"];
  return type !== null && validTypes.includes(type as TicketTypeEnum);
};

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = new URL(request.url);

  // Check if the user is authenticated
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Redirect authenticated users from `/auth` routes
  if (pathname.startsWith("/auth") && token) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard/transaction";
    return NextResponse.redirect(url);
  }

  // Restrict access to `/admin` routes for unauthenticated users
  if (pathname.startsWith("/admin") && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // Handle ticket form route
  if (pathname.startsWith("/form")) {
    const ticketType = searchParams.get("type");

    if (!ticketType || !isValidTicketType(ticketType)) {
      const notFoundUrl = new URL("/not-found", request.url);

      // keep the url same
      return NextResponse.rewrite(notFoundUrl, {
        request: {
          headers: new Headers({
            "x-middleware-rewrite": request.url,
          }),
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
    "/admin/:path*",
  ],
};
