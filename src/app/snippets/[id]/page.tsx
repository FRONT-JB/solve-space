import { Suspense } from "react";
import { getSnippets } from "../action";
import { Snippet } from "../edit/_types";

export default async function SnippetDetail({
  params,
}: {
  params: Readonly<{ id: string }>;
}) {
  // 이미 resolved된 값이지만 await을 사용하지 않으면 Nextjs 타입시스템에서 Promise일 것으로 예상해 에러가 발생함
  const { id: snippetId } = await params;

  const snippets = (await getSnippets()) as Snippet[];

  const snippet = snippets?.find(({ id }) => id === Number(snippetId));

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  return (
    <Suspense fallback="Loading">
      <pre>{snippet.content}</pre>
    </Suspense>
  );
}
