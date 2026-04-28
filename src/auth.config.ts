import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const protectedRoutes = [
  "/dashboard",
  "/projects",
  "/leads",
  "/settings",
  "/admin",
];

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isAuthenticated = Boolean(auth?.user);
      const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route),
      );

      if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")) {
        return isAuthenticated
          ? Response.redirect(new URL("/dashboard", request.nextUrl))
          : true;
      }

      if (pathname.startsWith("/admin") && auth?.user?.role !== "ADMIN") {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }

      if (isProtectedRoute && !isAuthenticated) {
        const signInUrl = new URL("/sign-in", request.nextUrl);
        signInUrl.searchParams.set("callbackUrl", request.nextUrl.href);
        return Response.redirect(signInUrl);
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
