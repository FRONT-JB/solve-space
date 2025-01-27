import { supabaseClient } from "@/app/lib/supabase/client";

import { Snippet } from "../types";

export default async function SnippetList() {
  const { data: snippetList } = (await supabaseClient
    .from("snippets")
    .select("*")) as { data: Snippet[] };

  console.log(snippetList);

  if (snippetList.length === 0) {
    return <div>No snippets found</div>;
  }

  return <pre>{snippetList[0]?.content}</pre>;
}
