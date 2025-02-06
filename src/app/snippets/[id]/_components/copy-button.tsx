'use client';

import { TOAST_DURATION } from '@/app/_constants';
import { Button } from '@/components/ui/button';
import { ClipboardCheck, ClipboardPen } from 'lucide-react';
import { toast } from 'sonner';

interface Props {
  content: string;
  className?: string;
}

export default function CopyButton({ content, className }: Props) {
  return (
    <Button
      size="icon"
      variant="secondary"
      className={className}
      onClick={() => {
        navigator.clipboard.writeText(content).then(() =>
          toast('클립보드에 복사되었습니다!', {
            duration: TOAST_DURATION,
            position: 'top-right',
            icon: <ClipboardCheck className="w-5 h-5" />,
          })
        );
      }}
    >
      <ClipboardPen className="w-4 h-4" />
    </Button>
  );
}
