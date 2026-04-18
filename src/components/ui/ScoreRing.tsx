interface ScoreRingProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  sublabel?: string;
}

export function ScoreRing({
  score,
  size = 120,
  strokeWidth = 10,
  color = '#0ea5e9',
  label,
  sublabel,
}: ScoreRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="-mt-[calc(50%+8px)] flex flex-col items-center justify-center" style={{ height: size / 2 }}>
        <span className="text-2xl font-bold text-slate-800">{score}</span>
        {sublabel && <span className="text-xs text-slate-500 mt-0.5">{sublabel}</span>}
      </div>
      {label && <span className="text-xs font-medium text-slate-600 mt-2 text-center">{label}</span>}
    </div>
  );
}
