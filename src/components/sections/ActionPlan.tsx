import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { actionPlan } from '../../data/profileData';

const categoryConfig: Record<string, { bg: string; text: string; dot: string }> = {
  skill: { bg: 'bg-sky-50', text: 'text-sky-700', dot: 'bg-sky-500' },
  cert: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500' },
  network: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  apply: { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  brand: { bg: 'bg-rose-50', text: 'text-rose-700', dot: 'bg-rose-500' },
};

export function ActionPlan() {
  return (
    <section id="action-plan" className="mb-10">
      <SectionHeader number={12} title="12-Month Career Timeline" description="A structured timeline that turns strategy into monthly milestones." />
      <div className="relative pl-8 before:absolute before:top-10 before:bottom-0 before:left-4 before:w-px before:bg-slate-200">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {actionPlan.map((month) => (
            <div key={month.month} className="relative">
              <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-600/20">
                {month.month}
              </div>
              <Card className="pl-14 pr-6 py-6 hover:shadow-xl">
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500 mb-2">{month.label}</div>
                    <div className="text-base font-semibold text-slate-900">{month.focus}</div>
                  </div>
                  <div className="space-y-3">
                    {month.tasks.map((task, index) => {
                      const cfg = categoryConfig[task.category];
                      return (
                        <div key={index} className="flex items-start gap-3">
                          <span className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${cfg.dot}`} />
                          <span className="text-sm text-slate-600 leading-relaxed">{task.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
