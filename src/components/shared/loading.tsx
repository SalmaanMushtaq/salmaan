export default function Loading() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center h-[100%]">
      <div className="w-40 h-40 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-32 h-32 border-4 border-transparent text-basic text-2xl animate-spin flex items-center justify-center border-t-basic rounded-full"></div>
      </div>
    </div>
  );
}
