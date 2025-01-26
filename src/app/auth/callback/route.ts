import { createSupabaseServer } from "@/app/lib";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  // URL의 code 파라미터는 인증을 위해 사용한다.
  const code = searchParams.get("code");
  // URL의 next 파라미터는 인증 후 이동할 페이지가 되는데, 이 파라미터가 없으면 루트 페이지로 이동한다.
  const next = searchParams.get("next") ?? "/";

  if (code) {
    // 인증 코드를 사용하여 세션을 교환한다.
    const supabase = await createSupabaseServer();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      const forwardedHost = request.headers.get("x-forwarded-host");

      const isLocalEnv = process.env.NODE_ENV === "development";

      if (isLocalEnv) {
        // 로컬 환경에서는 현재 페이지로 이동한다.
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        // 커스텀 도메인이라 프록시된 호스트를 사용한다.
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
