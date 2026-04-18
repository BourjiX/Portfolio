import { type LucideIcon, CheckCircle, Circle, Clock } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const phases = [
  {
    phase: 1,
    label: 'Phase 1',
    title: 'Security Foundations & Certification',
    timeline: 'Months 1–3',
    status: 'active',
    color: 'sky',
    skills: [
      { name: 'CompTIA Security+ Certification', type: 'cert', done: false },
      { name: 'SIEM Fundamentals (Splunk/ELK)', type: 'hands-on', done: false },
      { name: 'Incident Response Procedures', type: 'hands-on', done: false },
    ],
    resources: ['Professor Messer Security+ Course', 'TryHackMe SOC Level 1', 'SANS Incident Response Course'],
  },
  {
    phase: 2,
    label: 'Phase 2',
    title: 'Network Security & Cloud Integration',
    timeline: 'Months 4–6',
    status: 'upcoming',
    color: 'emerald',
    skills: [
      { name: 'CCNP Enterprise Core', type: 'cert', done: false },
      { name: 'AWS Cloud Practitioner', type: 'cert', done: false },
      { name: 'Network Automation (Python)', type: 'hands-on', done: false },
    ],
    resources: ['INE CCNP Enterprise', 'AWS Free Tier Labs', 'Network Automation with Python Course'],
  },
  {
    phase: 3,
    label: 'Phase 3',
    title: 'Offensive Security & Advanced Tools',
    timeline: 'Months 7–9',
    status: 'upcoming',
    color: 'rose',
    skills: [
      { name: 'Certified Ethical Hacker (CEH)', type: 'cert', done: false },
      { name: 'Penetration Testing Labs', type: 'hands-on', done: false },
      { name: 'Vulnerability Assessment', type: 'hands-on', done: false },
    ],
    resources: ['EC-Council CEH', 'HackTheBox Pro Labs', 'OWASP Testing Guide'],
  },
  {
    phase: 4,
    label: 'Phase 4',
    title: 'Enterprise Security & Leadership',
    timeline: 'Months 10–12',
    status: 'future',
    color: 'amber',
    skills: [
      { name: 'CISSP Domains 1-3', type: 'cert', done: false },
      { name: 'Security Program Management', type: 'leadership', done: false },
      { name: 'Risk Assessment Frameworks', type: 'hands-on', done: false },
    ],
    resources: ['ISC² CISSP Study Guide', 'NIST Cybersecurity Framework', 'Security Leadership Training'],
  },
];

const statusConfig: Record<string, { icon: LucideIcon, label: string, dotColor: string }> = {
  active: { icon: Clock, label: 'In Progress', dotColor: 'bg-sky-500' },
  upcoming: { icon: Circle, label: 'Upcoming', dotColor: 'bg-slate-300' },
  future: { icon: Circle, label: 'Future', dotColor: 'bg-slate-200' },
  done: { icon: CheckCircle, label: 'Complete', dotColor: 'bg-emerald-500' },
};

const typeColors: Record<string, string> = {
  cert: 'bg-sky-100 text-sky-700',
  'hands-on': 'bg-emerald-100 text-emerald-700',
  architecture: 'bg-blue-100 text-blue-700',
  leadership: 'bg-amber-100 text-amber-700',
};

export function SkillRoadmap() {
  return (
    <section id="skill-roadmap" className="mb-8">
      <SectionHeader number={7} title="Skill Development Roadmap" description="A phased learning plan structured around your target role requirements." />
      <div className="relative">
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-sky-200 via-rose-200 via-emerald-200 to-amber-200 hidden md:block" />
        <div className="space-y-4">
          {phases.map((phase) => {
            const cfg = statusConfig[phase.status];
            return (
              <div key={phase.phase} className="relative flex gap-4">
                <div className="flex-shrink-0 hidden md:flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm ${
                    phase.color === 'sky' ? 'bg-sky-500' :
                    phase.color === 'rose' ? 'bg-rose-500' :
                    phase.color === 'emerald' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}>
                    P{phase.phase}
                  </div>
                </div>
                <Card className="flex-1 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge label={phase.label} variant={phase.color as 'sky' | 'rose' | 'emerald' | 'amber'} size="sm" />
                        <Badge label={phase.timeline} variant="slate" size="sm" />
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                          phase.status === 'active' ? 'bg-sky-50 text-sky-600' : 'bg-slate-50 text-slate-500'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotColor}`} />
                          {cfg.label}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-800">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Skills to Develop</div>
                      <div className="space-y-2">
                        {phase.skills.map((skill) => (
                          <div key={skill.name} className="flex items-center gap-2">
                            <Circle size={12} className="text-slate-300 flex-shrink-0" />
                            <span className="text-xs text-slate-600 flex-1">{skill.name}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded-md font-medium ${typeColors[skill.type] ?? 'bg-slate-100 text-slate-600'}`}>
                              {skill.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Learning Resources</div>
                      <div className="space-y-1.5">
                        {phase.resources.map((r) => (
                          <div key={r} className="flex items-start gap-1.5">
                            <span className="text-slate-300 text-xs mt-0.5">→</span>
                            <span className="text-xs text-slate-500">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
