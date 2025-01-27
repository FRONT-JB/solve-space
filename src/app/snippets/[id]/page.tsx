import { Suspense } from "react";
import SnippetList from "../ui/SnippetList";

export default function SnippetDetail() {
  // return <div>Snippets Detail</div>;

  return (
    <Suspense fallback="Loading">
      <SnippetList />
    </Suspense>
  );
}
