import { NextResponse ,NextRequest} from "next/server";
import type {  } from "next/server";

export async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/page2', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/courses/arbitrator",
};