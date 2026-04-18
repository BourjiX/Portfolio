interface BadgeProps {
  label: string;
  variant?: 'sky' | 'emerald' | 'amber' | 'rose' | 'slate' | 'blue' | 'red';
  size?: 'sm' | 'md';
}

const variantClasses: Record<string, string> = {
  sky: 'bg-sky-50 text-sky-700 border-sky-200',
  emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  amber: 'bg-amber-50 text-amber-700 border-amber-200',
  rose: 'bg-rose-50 text-rose-700 border-rose-200',
  slate: 'bg-slate-100 text-slate-600 border-slate-200',
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  red: 'bg-red-50 text-red-700 border-red-200',
};

export function Badge({ label, variant = 'slate', size = 'md' }: BadgeProps) {
  const sizeClass = size === 'sm' ? 'text-[11px] px-2.5 py-1' : 'text-xs px-3 py-1.5';
  return (
    <span className={`inline-flex items-center rounded-full border font-semibold tracking-wide ${sizeClass} ${variantClasses[variant]}`}>
      {label}
    </span>
  );
}
