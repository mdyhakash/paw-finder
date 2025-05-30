import { clerkMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";

const isProtectedRoute = (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname;

  const publicRoutes = ["/sign-in", "/sign-up", "/api", "/favicon.ico"];
  
  return !publicRoutes.some((route) => path.startsWith(route));
};

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const url = new URL(req.url);

  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(
      new URL(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/sign-in", req.url)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};