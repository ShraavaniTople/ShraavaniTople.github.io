export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#0F0F14] border border-white/[0.06] rounded-xl ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
