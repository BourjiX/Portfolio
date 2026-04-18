import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { careerPaths } from '../../data/profileData';
import { ProgressBar } from '../ui/ProgressBar';

export function CareerPaths() {
  return (
    <section id="career-paths" className="mb-10">
      <SectionHeader number={5} title="Career Path Matches" description="Premium career opportunities ranked by fit and readiness." />
      <div className="grid gap-6 xl:grid-cols-2">
        {careerPaths.map((path) => (
          <Card key={path.title} className="p-6 hover:border-slate-300 hover:shadow-xl">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 mb-2">{path.timeToCompetitive}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{path.title}</h3>
                </div>
                <Badge label={path.highlight ? 'Best fit' : path.difficulty} variant={path.highlight ? 'emerald' : 'sky'} />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{path.description}</p>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Profile match</div>
                    <div className="text-2xl font-semibold text-slate-900">{path.match}%</div>
                  </div>
                  <Badge
                    label={path.match >= 85 ? 'Excellent' : path.match >= 70 ? 'Strong' : 'Good'}
                    variant={path.match >= 85 ? 'emerald' : path.match >= 70 ? 'sky' : 'amber'}
                  />
                </div>
                <ProgressBar value={path.match} color={path.match >= 85 ? 'emerald' : path.match >= 70 ? 'sky' : 'amber'} showLabel={false} height="lg" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-600">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.18em] mb-1">Why it fits</div>
                  <p className="leading-relaxed">{path.whyItFits}</p>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-[0.18em] mb-1">What's already strong</div>
                  <p className="leading-relaxed">{path.whatsStrong}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 pt-4 border-t border-slate-200 text-sm text-slate-600">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-1">Focus area</div>
                  <p className="leading-relaxed">{path.needsImprovement}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Timeline</div>
                  <div className="text-sm font-medium text-slate-900">{path.timeToCompetitive}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
