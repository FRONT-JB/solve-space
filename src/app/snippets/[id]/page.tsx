import Image from "next/image";
import { getSnippetById } from "../action";

import { INITIAL_AVARTAR_URL } from "./_constants";
import { CopyButton } from "./_components";
import { Snippet } from "../../../../types";

export default async function SnippetDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 이미 resolved된 값이지만 await을 사용하지 않으면 Nextjs 타입시스템에서 Promise일 것으로 예상해 에러가 발생함
  const { id: snippetId } = await params;

  const snippet = (await getSnippetById(snippetId)) as Snippet;

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  return (
    <div className="space-y-4 py-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold dark:text-white text-slate-800 cursor-default">
            {snippet.title}
          </p>

          <CopyButton content={snippet.content} />
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400 cursor-default">
            {new Date(snippet.created_at).toLocaleDateString()}
          </span>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300 cursor-default">
              {snippet.username}
            </span>

            <Image
              src={snippet.avatar_url || INITIAL_AVARTAR_URL}
              alt="user avatar"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="relative bg-slate-950 rounded-xl overflow-hidden ring-1 ring-white/[0.05] font-mono text-sm">
        <pre className="p-4 overflow-auto">
          <code className="text-white/80">{snippet.content}</code>
        </pre>
      </div>
    </div>
  );
}
