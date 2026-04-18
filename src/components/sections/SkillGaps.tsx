import { TrendingUp, Minus } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { skills } from '../../data/profileData';

const gapPriority = (gap: number) => {
  if (gap >= 20) return { label: 'High', variant: 'rose' as const };
  if (gap >= 10) return { label: 'Medium', variant: 'amber' as const };
  return { label: 'Maintain', variant: 'emerald' as const };
};

export function SkillGaps() {
  const sorted = [...skills].sort((a, b) => (b.target - b.level) - (a.target - a.level));

  return (
    <section id="skill-gaps" className="mb-10">
      <SectionHeader number={4} title="Skill Development" description="Progress bars and priority guidance for your core strengths." />
      <div className="grid gap-5 xl:grid-cols-2">
        {sorted.map((skill) => {
          const gap = skill.target - skill.level;
          const priority = gapPriority(gap);
          return (
            <Card key={skill.name} className="p-6 hover:shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold text-slate-900">{skill.name}</div>
                    <div className="text-xs text-slate-500 mt-1">{skill.category}</div>
                  </div>
                  <Badge label={priority.label} variant={priority.variant} size="sm" />
                </div>
                <ProgressBar value={skill.level} target={skill.target} color={skill.category === 'Security' ? 'rose' : skill.category === 'Infrastructure' ? 'sky' : 'emerald'} height="lg" showLabel />
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    {skill.trend === 'up' ? <TrendingUp size={12} /> : <Minus size={12} />}
                    {skill.trend === 'up' ? 'Improving' : 'Stable'}
                  </span>
                  <span>{gap > 0 ? `Gap +${gap}%` : 'At target'}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {gap > 0 ? `Focus on labs, certifications, or project work to close the ${gap}% gap.` : 'This skill is aligned with your target level and ready to support transition goals.'}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
      <Card className="p-6 mt-6 border border-slate-200 bg-slate-50">
        <p className="text-sm font-semibold text-slate-900 mb-2">Recommended development strategy</p>
        <p className="text-sm text-slate-600 leading-relaxed">
          Prioritize cloud security and infrastructure certifications first, while maintaining strong networking and IoT skills for a balanced cybersecurity roadmap.
        </p>
      </Card>
    </section>
  );
}
