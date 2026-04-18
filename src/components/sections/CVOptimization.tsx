import { CheckCircle, AlertCircle, Linkedin, FileText } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const cvItems = [
  { category: 'Professional Summary', status: 'action', text: 'Rewrite to emphasize cybersecurity expertise, teaching experience, and practical project work.' },
  { category: 'Experience Section', status: 'action', text: 'Highlight internship projects with clear outcomes and responsibilities.' },
  { category: 'Skills Section', status: 'action', text: 'Lead with cybersecurity, network security, and practical engineering tools.' },
  { category: 'Education', status: 'done', text: 'Master\'s in Network Services and Security prominently featured.' },
  { category: 'Projects', status: 'action', text: 'Add a Projects section featuring firewall platform, IoT monitoring system, and security mini-project.' },
  { category: 'Certifications', status: 'done', text: 'CCNA and NMAP certifications listed; plan to add Security+ upon completion.' },
  { category: 'Languages', status: 'action', text: 'Emphasize multilingual capabilities for international roles.' },
  { category: 'Leadership', status: 'action', text: 'Include student organization leadership and event management experience.' },
];

const linkedinItems = [
  { section: 'Headline', action: 'Use a clear headline that balances cybersecurity engineering, teaching, and technical leadership.' },
  { section: 'About', action: 'Write a narrative that connects academic achievement with practical security experience.' },
  { section: 'Experience', action: 'Add project-focused bullet points and mention tools used in each role.' },
  { section: 'Featured', action: 'Showcase GitHub repositories, presentations, and portfolio work.' },
  { section: 'Skills', action: 'List cybersecurity, network security, teaching, and IoT skills in priority order.' },
  { section: 'Recommendations', action: 'Request recommendations from internship supervisors and professors.' },
  { section: 'Activity', action: 'Share security insights, teaching tips, and project updates regularly.' },
];

export function CVOptimization() {
  return (
    <section id="cv-linkedin" className="mb-8">
      <SectionHeader number={10} title="CV & LinkedIn Optimization" description="Tactical improvements to maximize recruiter response and clarity." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={16} className="text-slate-900" />
            <h3 className="text-sm font-semibold text-slate-900">CV Checklist</h3>
          </div>
          <div className="space-y-3">
            {cvItems.map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                {item.status === 'done' ? (
                  <CheckCircle size={16} className="text-emerald-600 mt-0.5" />
                ) : (
                  <AlertCircle size={16} className="text-slate-400 mt-0.5" />
                )}
                <div>
                  <div className="text-xs font-semibold text-slate-700">{item.category}</div>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Linkedin size={16} className="text-slate-900" />
            <h3 className="text-sm font-semibold text-slate-900">LinkedIn Recommendations</h3>
          </div>
          <div className="space-y-3">
            {linkedinItems.map((item) => (
              <div key={item.section} className="rounded-xl border border-slate-200 p-4">
                <div className="text-xs font-semibold text-slate-700 mb-1">{item.section}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.action}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
