"use client";

import { Button } from "@/components/ui/button";
import { ClipboardCheck, ClipboardPen } from "lucide-react";
import { toast } from "sonner";

export default function CopyButton({ content }: { content: string }) {
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => {
        navigator.clipboard.writeText(content).then(() =>
          toast("클립보드에 복사되었습니다!", {
            duration: 2000,
            position: "top-right",
            icon: <ClipboardCheck className="w-5 h-5" />,
          })
        );
      }}
    >
      <ClipboardPen className="w-4 h-4" />
    </Button>
  );
}
