import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken')?.value;
  const { pathname } = request.nextUrl;

  // Protect the home page and recipe detail pages
  const isProtectedRoute = pathname === '/' || pathname.startsWith('/recipe');

  if (isProtectedRoute && !token) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect authenticated users away from the login page
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Define which paths this middleware applies to
  matcher: ['/', '/login', '/recipe/:path*'],
};
