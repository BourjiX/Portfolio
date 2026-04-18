import { AlertTriangle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { weaknesses } from '../../data/profileData';

const levelVariant: Record<string, 'sky' | 'emerald' | 'amber' | 'rose'> = {
  Expert: 'sky',
  Advanced: 'emerald',
  Proficient: 'amber',
  Beginner: 'rose',
};

export function Weaknesses() {
  return (
    <section id="weaknesses" className="mb-8">
      <SectionHeader number={2.5} title="Weaknesses & Recruiter Concerns" description="Areas for improvement and potential concerns hiring managers may have." />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {weaknesses.map((weakness) => {
          return (
            <Card key={weakness.title} className="p-5 border-amber-100 bg-amber-50/50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 border border-amber-200">
                  <AlertTriangle size={20} className="text-amber-600" />
                </div>
                <Badge label={weakness.level} variant={levelVariant[weakness.level]} size="sm" />
              </div>
              <h3 className="text-sm font-semibold text-slate-800 mb-2">{weakness.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{weakness.description}</p>
            </Card>
          );
        })}
      </div>
      <Card className="p-5 mt-4 bg-amber-50 border-amber-200">
        <p className="text-sm text-amber-800 font-medium mb-2">Strategic Mitigation</p>
        <p className="text-xs text-amber-700 leading-relaxed">
          Address these concerns proactively in applications and interviews. Focus on demonstrating your academic excellence,
          practical project experience, and rapid learning ability. Your teaching background shows strong communication skills
          that compensate for limited full-time industry experience.
        </p>
      </Card>
    </section>
  );
}