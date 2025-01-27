"use server";

import { supabaseClient } from "../lib/supabase/client";

export async function getSnippets() {
  const { data: snippets } = await supabaseClient.from("snippets").select("*");

  return snippets;
}
