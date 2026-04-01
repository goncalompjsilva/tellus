export const TellusLogo = ({ color = 'currentColor', className = '' }: { color?: string; className?: string }) => (
  <svg viewBox="0 0 200 40" className={className} aria-label="TELLUS">
    <text
      x="0"
      y="28"
      fontFamily="'Fraunces', serif"
      fontWeight="700"
      fontSize="30"
      fill={color}
      letterSpacing="2.4"
    >
      TELLUS
    </text>
    {/* Horizon line extending past the word */}
    <line x1="-8" y1="34" x2="168" y2="34" stroke={color} strokeWidth="1.5" />
    {/* Tiny leaf accent on second L */}
    <path
      d="M95 12 Q98 6 102 10 Q99 14 95 12Z"
      fill={color}
      opacity="0.7"
    />
  </svg>
);
