import { Suspense } from "react";

export default function SnippetDetail() {
  return (
    <Suspense fallback="Loading">
      <div>Snippets Detail</div>
    </Suspense>
  );
}
