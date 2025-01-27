import { Button } from "@/components/ui/button";
import { signInWithGithub, signOut } from "@/app/lib";
import { supabaseServer } from "@/app/lib/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await supabaseServer();

  const session = await supabase.auth.getUser();

  return (
    <div>
      {session.data.user && <Button onClick={signOut}>Sign out</Button>}

      {!session.data.user && (
        <Button onClick={signInWithGithub}>Sign in with Github</Button>
      )}

      <Link href="/snippets">Snippets</Link>
    </div>
  );
}
