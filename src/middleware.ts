import withAuth from "./middlewares/withAuth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function mainMiddleware(request: NextRequest) {
    const res = NextResponse.next();
    return res;

    // const isLogin = true
    // if(!isLogin) {
    //     return NextResponse.redirect(new URL("/login", request.url))
    // }

    // if(request.nextUrl.pathname.startsWith("/about")){
    //     if(!isLogin) {
    //         // ketika masuk ke /about maka akan di lempar ke "/"
    //         return NextResponse.redirect(new URL("/login", request.url))
    //     }

    //     // ketika masuk ke /about maka rewrite ini seperti halam di "/"
    //     // return NextResponse.rewrite(new URL("/product", request.url))
    // }
}

export default withAuth(mainMiddleware, ["/dasboard", "/profile", "/login", "/register"]);

// export const config = {
//     // matcher: "/dashboard/product",
//     matcher: ["/dashboard/:path*", "/about/:path*"],
// };