import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TicketEventEnum } from "./types/ticket-types";

const isValidTicketEvent = (type: string | null): type is TicketEventEnum => {
  const validTypes: TicketEventEnum[] = [
    "propa-3-day1",
    "propa-3-day2",
    "propa-3-day3",
    "main-event",
  ];
  return type !== null && validTypes.includes(type as TicketEventEnum);
};

const isValidBundle = (type: string | null) => {
  const validBundle = ["1", "2", "3"];
  return type !== null && validBundle.includes(type);
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
  if (pathname.startsWith("/form/ticket")) {
    const ticketType = searchParams.get("event");

    if (!ticketType || !isValidTicketEvent(ticketType)) {
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

    // Handle bundle specific form route
    if (pathname.startsWith("/form/ticket-bundle")) {
      const ticketBundle = searchParams.get("bundle");

      if (!ticketBundle || !isValidBundle(ticketBundle)) {
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
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
    "/admin/:path*",
  ],
};
