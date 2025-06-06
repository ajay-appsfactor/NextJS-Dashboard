// import { NextResponse } from "next/server";
// import { getSession } from "@/lib/auth";

// export async function middleware(request) {
//   const session = await getSession();
//   const protectedRoutes = ["/dashboard"];

//   if (
//     protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
//   ) {
//     if (!session) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }
//   return NextResponse.next();
// }
