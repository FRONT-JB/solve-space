"use server";

import { supabaseClient } from "../lib/supabase/client";

export async function getSnippetById(snippetId: string) {
  const { data: snippetById, error: snippetError } = await supabaseClient
    .from("snippets")
    .select("*")
    .eq("id", parseInt(snippetId)) // 문자열을 숫자로 변환
    .single();

  if (snippetError) {
    // 데이터가 없는 경우
    if (snippetError.code === "PGRST116") {
      return null;
    }

    throw new Error(snippetError.message);
  }

  return snippetById;
}
