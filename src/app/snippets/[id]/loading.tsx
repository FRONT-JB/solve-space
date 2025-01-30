export default function Loading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="space-y-4 py-4">
        <div className="flex items-start justify-between">
          <div className="h-8 bg-gray-800/30 dark:bg-gray-100/15 rounded w-1/3" />

          <div className="flex flex-col items-end gap-2">
            <div className="h-4 bg-gray-800/30 dark:bg-gray-100/15 rounded w-24" />

            <div className="flex items-center gap-2">
              <div className="h-4 bg-gray-800/30 dark:bg-gray-100/15 rounded w-20" />
              <div className="size-5 bg-gray-800/30 dark:bg-gray-100/15 rounded-full" />
            </div>
          </div>
        </div>

        <div className="mt-2 space-y-6">
          <div className="space-y-2">
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-2/4" />
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-1/4" />
          </div>

          <div className="mt-2 space-y-2">
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-3/4" />
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-2/5" />
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-1/5" />
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-3/4" />
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-4/5" />
          </div>

          <div className="space-y-2">
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-2/4" />
            <div className="h-5 bg-gray-800/30 dark:bg-gray-100/15 rounded w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
