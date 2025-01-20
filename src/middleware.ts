import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TicketTypeEnum } from "./types/ticket-types";

const isValidTicketType = (type: string | null): type is TicketTypeEnum => {
  const validTypes: TicketTypeEnum[] = ["propa-3", "main-event"];
  return type !== null && validTypes.includes(type as TicketTypeEnum);
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname, searchParams } = new URL(request.url);

  if (pathname.startsWith("/admin") && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
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
