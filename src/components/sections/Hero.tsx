import { MapPin, Briefcase, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { profile } from '../../data/profileData';

export function Hero() {
  return (
    <section id="hero" className="mb-10">
      <Card className="overflow-hidden p-0">
        <div className="grid gap-0 lg:grid-cols-[minmax(320px,420px)_1fr]">
          <div className="relative bg-slate-950 p-8 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_25%)]" />
            <div className="relative flex flex-col h-full justify-between">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                  Premium strategy brief
                </span>
                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">{profile.name}</h1>
                <p className="max-w-xl text-base leading-8 text-slate-300">{profile.title}</p>
              </div>
              <div className="grid gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3">
                  <MapPin size={18} className="text-sky-300" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3">
                  <Briefcase size={18} className="text-slate-300" />
                  <span>{profile.experience} experience</span>
                </div>
                <div className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3">
                  <Award size={18} className="text-amber-300" />
                  <span>CCNA + NMAP mastery</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  <Badge label="Cybersecurity" variant="sky" />
                  <Badge label="Networking" variant="blue" />
                  <Badge label="Teaching" variant="emerald" />
                  <Badge label="Design" variant="amber" />
                </div>
                <p className="text-slate-600 leading-relaxed">{profile.summary}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Current Role', value: 'Teacher & Designer' },
                  { label: 'Target Role', value: 'Cybersecurity Engineer' },
                  { label: 'Timeframe', value: '6–12 months' },
                  { label: 'Focus', value: 'Network security & cloud readiness' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-2">{item.label}</div>
                    <div className="text-sm font-semibold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
