export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-2xl font-bold tracking-tight ${className}`}>
      <span className="text-[#3BA4F6]">Bright</span>
      <span className="text-gray-900">Smile</span>
    </span>
  );
}
