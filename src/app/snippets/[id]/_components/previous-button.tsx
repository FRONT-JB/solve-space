"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const { back: routeBack } = useRouter();

  return (
    <Button size="icon" variant="ghost" onClick={() => routeBack()}>
      <ChevronLeft className="size-4" />
    </Button>
  );
}
