const FlameIcon = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none">
    <path
      d="M32 4c0 0-4 12-4 20s4 12 4 12 4-4 4-12S32 4 32 4Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M24 18c0 0-6 10-6 20s8 18 14 22c-4-6-6-12-6-18s6-16 6-16-4-2-8-8Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M40 18c0 0 6 10 6 20s-8 18-14 22c4-6 6-12 6-18s-6-16-6-16 4-2 8-8Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M32 24c0 0-2 8-2 14s2 10 2 10 2-4 2-10-2-14-2-14Z"
      fill="hsl(var(--yellow-accent, 45 100% 51%))"
    />
    <path
      d="M26 28c0 0-3 6-3 12s4 10 9 14c-2-4-4-8-4-12s3-10 3-10-2-1-5-4Z"
      fill="hsl(45, 100%, 51%)"
      opacity="0.8"
    />
    <path
      d="M38 28c0 0 3 6 3 12s-4 10-9 14c2-4 4-8 4-12s-3-10-3-10 2-1 5-4Z"
      fill="hsl(45, 100%, 51%)"
      opacity="0.8"
    />
  </svg>
);

export default FlameIcon;
