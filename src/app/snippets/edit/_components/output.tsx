import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import OutputSkeleton from "./output-skeleton";

interface Props {
  isRunning: boolean;
  output: string;
  error: string | null;
}

export default function Output({ isRunning, output, error }: Props) {
  return (
    <div
      className="h-full relative bg-slate-900 backdrop-blur-sm
        rounded-xl p-4 overflow-auto font-mono text-sm"
    >
      {isRunning ? (
        <OutputSkeleton />
      ) : error ? (
        <div className="flex items-start gap-3 text-red-400">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-1" />

          <div className="space-y-1">
            <div className="font-medium">Execution Error</div>
            <pre className="whitespace-pre-wrap text-red-400/80">{error}</pre>
          </div>
        </div>
      ) : output ? (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 mb-3">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Execution Successful</span>
          </div>

          <pre className="whitespace-pre-wrap text-gray-300">{output}</pre>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-500">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-800/50 ring-1 ring-gray-700/50 mb-4">
            <Clock className="w-6 h-6" />
          </div>

          <p className="text-center">Run your code to see the output here...</p>
        </div>
      )}
    </div>
  );
}
