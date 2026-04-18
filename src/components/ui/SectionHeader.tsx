interface SectionHeaderProps {
  number: string | number;
  title: string;
  description?: string;
}

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-semibold text-sm">
              {number}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
          </div>
          {description && <p className="max-w-2xl text-sm text-gray-600 leading-relaxed">{description}</p>}
        </div>
      </div>
    </div>
  );
}
