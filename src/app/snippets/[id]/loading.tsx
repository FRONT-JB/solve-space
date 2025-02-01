export default function Loading() {
  return (
    <div className="space-y-4 py-4">
      <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-gray-800/30 dark:bg-gray-100/15" />

          <div className="h-8 bg-gray-800/30 dark:bg-gray-100/15 rounded-md w-48" />
        </div>

        <div className="flex md:flex-col items-end md:self-end gap-2">
          <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-32" />

          <div className="flex items-start gap-2">
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-24" />
            <div className="size-5 bg-gray-800/30 dark:bg-gray-100/15 rounded-full" />
          </div>
        </div>
      </div>

      <div className="group relative dark:bg-black/30 bg-slate-950/90 rounded-xl overflow-hidden ring-1 ring-white/[0.05] font-mono text-sm">
        <div className="p-4 space-y-3">
          <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-3/4" />
          <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-2/3" />
          <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-1/2" />
          <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-4/5" />
          <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-3/5" />
        </div>
      </div>
    </div>
  );
}
