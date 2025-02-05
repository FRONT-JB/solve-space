"use server";

import { redirect } from "next/navigation";
import { supabaseServer } from "../lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getSnippets() {
  const supabase = await supabaseServer();

  const { data: snippets, error: snippetsError } = await supabase
    .from("snippets")
    .select("*");

  if (snippetsError) {
    throw new Error(snippetsError.message);
  }

  return snippets;
}

export async function getSnippetById(snippetId: string) {
  const supabase = await supabaseServer();

  const { data: snippetById, error: snippetError } = await supabase
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
  link,
  title,
  content,
}: {
  link: string;
  title: string;
  content: string;
}) {
  const supabase = await supabaseServer();

  // 현재 인증된 사용자 정보 가져오기
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("User not authenticated");
  }

  try {
    // 먼저 users 테이블에서 사용자 확인
    const { error: userDbError } = await supabase
      .from("users")
      .select("id")
      .eq("id", user.id)
      .single();

    if (userDbError) {
      throw new Error("User not found in database");
    }

    // snippet 생성
    const { data, error } = await supabase
      .from("snippets")
      .insert({
        title,
        content,
        link,
        user_id: user.id, // 현재 인증된 사용자의 ID
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating snippet:", error);
    throw error;
  } finally {
    revalidatePath("/snippets");
    redirect("/snippets");
  }
}
