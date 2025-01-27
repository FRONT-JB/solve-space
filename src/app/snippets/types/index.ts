import { Database } from "../../../../types/supabase";

type Snippet = Database["public"]["Tables"]["snippets"]["Row"];

export type { Snippet };
