"use server";

import { supabaseClient } from "../lib/supabase/client";

export async function getSnippets() {
  const { data: snippets, error: snippetsError } = await supabaseClient
    .from("snippets")
    .select("*")
    .order("created_at", { ascending: false });

  if (snippetsError) {
    throw new Error(snippetsError.message);
  }

  return snippets;
}

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

export async function createSnippet({
  title,
  content,
  username,
  avatar_url,
}: {
  title: string;
  content: string;
  username?: string | null;
  avatar_url?: string | null;
}) {
  try {
    const { data, error } = await supabaseClient
      .from("snippets")
      .insert({
        title,
        content,
        username,
        avatar_url,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating snippet:", error);
    throw error;
  }
}
