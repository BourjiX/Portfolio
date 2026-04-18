interface ProgressBarProps {
  value: number;
  target?: number;
  color?: 'sky' | 'emerald' | 'amber' | 'rose' | 'blue';
  showLabel?: boolean;
  height?: 'sm' | 'md' | 'lg';
}

const colorClasses: Record<string, string> = {
  sky: 'bg-gradient-to-r from-sky-500 to-cyan-500',
  emerald: 'bg-gradient-to-r from-emerald-500 to-lime-500',
  amber: 'bg-gradient-to-r from-amber-500 to-orange-400',
  rose: 'bg-gradient-to-r from-rose-500 to-fuchsia-500',
  blue: 'bg-gradient-to-r from-blue-500 to-sky-500',
};

const heightClasses: Record<string, string> = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
};

export function ProgressBar({ value, target, color = 'sky', showLabel = true, height = 'md' }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heightClasses[height]} relative`}> 
        <div
          className={`${heightClasses[height]} rounded-full transition-all duration-700 ${colorClasses[color]} shadow-sm`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
        {target && (
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-slate-400 opacity-60"
            style={{ left: `${Math.min(target, 100)}%` }}
          />
        )}
      </div>
      {showLabel && (
        <div className="flex justify-between mt-2 text-[11px] text-slate-500 tracking-[0.02em] uppercase">
          <span>Progress {Math.round(value)}%</span>
          {target && <span>Target {Math.round(target)}%</span>}
        </div>
      )}
    </div>
  );
}
