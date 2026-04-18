import { type LucideIcon, Award, Clock, CheckCircle, Circle } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { certifications } from '../../data/profileData';

const priorityConfig: Record<string, { variant: 'rose' | 'amber' | 'blue', label: string }> = {
  critical: { variant: 'rose', label: 'Critical' },
  high: { variant: 'amber', label: 'High' },
  medium: { variant: 'blue', label: 'Medium' },
};

const statusConfig: Record<string, { icon: LucideIcon, color: string, label: string }> = {
  completed: { icon: CheckCircle, color: 'text-emerald-500', label: 'Completed' },
  'in-progress': { icon: Clock, color: 'text-sky-500', label: 'In Progress' },
  planned: { icon: Circle, color: 'text-slate-400', label: 'Planned' },
};

export function CertificationStrategy() {

  return (
    <section id="certifications" className="mb-8">
      <SectionHeader number={8} title="Certification Strategy" description="A prioritized certification roadmap aligned to your target roles and salary goals." />
      <div className="space-y-3">
        {certifications.map((cert) => {
          const priority = priorityConfig[cert.priority];
          const status = statusConfig[cert.status];
          const StatusIcon = status.icon;
          return (
            <Card key={cert.name} hover className="p-5">
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 flex-shrink-0">
                  <Award size={18} className="text-slate-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-slate-800">{cert.name}</h3>
                    <Badge label={priority.label} variant={priority.variant} size="sm" />
                  </div>
                  <div className="text-xs text-slate-500 mb-2">{cert.issuer}</div>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-slate-400" /> {cert.timeframe}
                    </span>
                    <span className="font-medium text-slate-700">{cert.cost}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className={`flex items-center gap-1.5 text-xs font-medium ${status.color}`}>
                    <StatusIcon size={13} /> {status.label}
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-slate-50">
                <div className="text-xs text-slate-500">
                  <span className="font-medium text-slate-600">Value: </span>{cert.value}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <Card className="p-5 mt-4 bg-slate-50">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-slate-800">6</div>
            <div className="text-xs text-slate-500 mt-0.5">Total Certifications Planned</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-sky-600">~$2,500</div>
            <div className="text-xs text-slate-500 mt-0.5">Estimated Investment</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-600">+$20K</div>
            <div className="text-xs text-slate-500 mt-0.5">Projected Salary Increase</div>
          </div>
        </div>
      </Card>
    </section>
  );
}
