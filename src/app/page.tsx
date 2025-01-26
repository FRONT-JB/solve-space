import { Button } from "@/components/ui/button";
import { signInWithGithub, signOut } from "@/app/lib";
import { createSupabaseServer } from "@/app/lib/supabase/server";
export default async function Home() {
  const supabase = await createSupabaseServer();

  const session = await supabase.auth.getUser();

  console.log(session);

  return (
    <div>
      {session.data.user && <Button onClick={signOut}>Sign out</Button>}

      {!session.data.user && (
        <Button onClick={signInWithGithub}>Sign in with Github</Button>
      )}
    </div>
  );
}
