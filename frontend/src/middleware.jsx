import { NextResponse } from 'next/server';
import { FORGOT_PASSWORD, LOGIN_URL, SIGNUP_URL, DASHBOARD, HOME_URL, ADMIN_DASHBOARD } from '@/app/routes/route';

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === LOGIN_URL || path === SIGNUP_URL || path === FORGOT_PASSWORD;

  const token = request.cookies?.get('current_user_token');
  const admin_token = request.cookies?.get('current_admin_token');
  if (!(token || admin_token) && !(isPublicPath || path === HOME_URL)) {
    return NextResponse.redirect(new URL(HOME_URL, request.url));
  }

  if (token && isPublicPath) {
    return NextResponse.redirect(new URL(DASHBOARD, request.url));
  } else if (token && path === HOME_URL) {
    return NextResponse.redirect(new URL(DASHBOARD, request.url));
  }
  if (admin_token && isPublicPath) {
    return NextResponse.redirect(new URL(ADMIN_DASHBOARD, request.url));
  } else if (admin_token && path === HOME_URL) {
    return NextResponse.redirect(new URL(ADMIN_DASHBOARD, request.url));
  }
}

export const config = {
  runtime: 'experimental-edge',
  unstable_allowDynamic: [
    '/lib/utilities.js',
    '/node_modules/mongoose/**',
  ],
  matcher: [
    "/",
    "/login",
    "/signup",
    "/forgot_password",
    "/dashboard",
    "/admin",
    "/admin/:path*",
  ],
}