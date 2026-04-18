import { type LucideIcon, ShieldAlert, Search, Terminal, Layers, Users, FileCheck } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { strengths } from '../../data/profileData';

const iconMap: Record<string, LucideIcon> = {
  'shield-alert': ShieldAlert,
  'search': Search,
  'terminal': Terminal,
  'layers': Layers,
  'users': Users,
  'file-check': FileCheck,
};

const levelVariant: Record<string, 'sky' | 'emerald' | 'blue'> = {
  Expert: 'sky',
  Advanced: 'emerald',
  Proficient: 'blue',
};

export function TopStrengths() {
  return (
    <section id="top-strengths" className="mb-8">
      <SectionHeader number={3} title="Top Strengths" description="Your most competitive and marketable capabilities." />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {strengths.map((s) => {
          const Icon = iconMap[s.icon] ?? ShieldAlert;
          return (
            <Card key={s.title} hover className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-50 border border-sky-100">
                  <Icon size={20} className="text-sky-600" />
                </div>
                <Badge label={s.level} variant={levelVariant[s.level]} size="sm" />
              </div>
              <h3 className="text-sm font-semibold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
