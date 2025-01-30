"use server";

import { supabaseServer } from "./server";
import { Provider } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signInWith = async (provider: Provider) => {
  const supabase = await supabaseServer();

  const auth_callback_url = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: auth_callback_url,
    },
  });

  if (error) {
    console.log(error);
  }

  redirect(data.url as string);
};

export const signInWithGithub = async () => signInWith("github");

export const signOut = async () => {
  const supabase = await supabaseServer();
  await supabase.auth.signOut();
  revalidatePath("/");
};
