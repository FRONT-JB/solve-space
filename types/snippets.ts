import { Database } from "./supabase";

type Snippet = Database["public"]["Tables"]["snippets"]["Row"];

export type { Snippet };
