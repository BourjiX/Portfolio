import { DollarSign, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { sideOpportunities } from '../../data/profileData';

const effortVariant: Record<string, 'emerald' | 'amber' | 'rose'> = {
  Low: 'emerald',
  Medium: 'amber',
  High: 'rose',
};

const typeVariant: Record<string, 'sky' | 'blue' | 'amber' | 'emerald' | 'slate'> = {
  Freelance: 'sky',
  Consulting: 'blue',
  Content: 'amber',
  Training: 'emerald',
  Mentorship: 'slate',
};

const readinessLabel = (value: number) => {
  if (value >= 80) return 'Ready to launch';
  if (value >= 60) return 'Strong potential';
  return 'Needs refinement';
};

export function SideIncome() {
  return (
    <section id="side-income" className="mb-8">
      <SectionHeader number={11} title="Side Income Opportunities" description="Monetize your expertise alongside your main career path." />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
        {sideOpportunities.map((opp) => (
          <Card key={opp.title} className="p-5">
            <div className="mb-3">
              <div className="flex flex-wrap gap-1.5 mb-3">
                <Badge label={opp.type} variant={typeVariant[opp.type] ?? 'slate'} size="sm" />
                <Badge label={`${opp.effort} effort`} variant={effortVariant[opp.effort]} size="sm" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{opp.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">{opp.description}</p>
            <div className="text-xs text-slate-500">
              <strong>Readiness:</strong> {readinessLabel(opp.readiness)}
            </div>
          </Card>
        ))}
      </div>
      <Card className="p-5 bg-slate-50 border border-slate-200">
        <div className="flex items-start gap-3">
          <TrendingUp size={18} className="text-slate-900 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">Supplemental revenue strategy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Start with lower-effort consulting and coaching engagements, then scale to training packages and security assessments as your main role stabilizes.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
