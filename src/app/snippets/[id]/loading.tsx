export default function Loading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-4 bg-gray-800/30 rounded w-3/4" />
      <div className="h-4 bg-gray-800/30 rounded w-1/2" />
      <div className="h-4 bg-gray-800/30 rounded w-5/6" />
      <div className="h-4 bg-gray-800/30 rounded w-2/3" />
    </div>
  );
}
