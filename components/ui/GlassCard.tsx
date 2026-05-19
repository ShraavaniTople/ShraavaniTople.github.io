export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card ${className ?? ""}`}
      style={{ background: "#151517", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16 }}
    >
      {children}
    </div>
  );
}
