import { Building2, Users, Linkedin, FileText, Star } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const targetCompanies = [
  { name: 'Orange Tunisia', type: 'Telecom/Security', why: 'Local telecom giant with growing cybersecurity needs; your CCNA and network experience align with their infrastructure security requirements.' },
  { name: 'Tunisie Telecom', type: 'Telecom', why: 'Government telecom operator with demand for network security specialists to protect national infrastructure.' },
  { name: 'Attijari Bank / Banks', type: 'Finance', why: 'Financial institutions require robust cybersecurity; your security assessment experience brings strong compliance value.' },
  { name: 'Ministry of Defense', type: 'Government', why: 'Government security roles reward leadership experience and disciplined technical expertise.' },
  { name: 'Technology Universities', type: 'Education', why: 'Academic positions in cybersecurity match your teaching experience and curriculum development strengths.' },
  { name: 'International NGOs', type: 'Non-Profit', why: 'NGOs need security expertise for sensitive data; your multilingual background is an asset.' },
];

const channels = [
  { channel: 'LinkedIn Tunisia Network', icon: Users, tip: 'Connect with local tech professionals, join cybersecurity groups, and engage with the Tunisian IT community.' },
  { channel: 'University Career Services', icon: Building2, tip: 'Use ISITCom career services and alumni networks to find roles aligned with your teaching and security experience.' },
  { channel: 'Professional Associations', icon: FileText, tip: 'Join local cybersecurity associations and attend regional events to build credibility and referrals.' },
  { channel: 'Government Job Portals', icon: Linkedin, tip: 'Monitor government listings for telecom and defense opportunities and prepare tailored applications.' },
];

export function JobSearchStrategy() {
  return (
    <section id="job-search" className="mb-8">
      <SectionHeader number={9} title="Job Search Strategy" description="A practical approach to connect with opportunity and promote your profile." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={16} className="text-slate-900" />
            <h3 className="text-sm font-semibold text-slate-900">Target organizations</h3>
          </div>
          <div className="space-y-3">
            {targetCompanies.map((co) => (
              <div key={co.name} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-slate-900">{co.name}</span>
                  <Badge label={co.type} variant="slate" size="sm" />
                </div>
                <p className="text-sm text-slate-600">{co.why}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-slate-900" />
              <h3 className="text-sm font-semibold text-slate-900">Best channels</h3>
            </div>
            <div className="space-y-3">
              {channels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.channel} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-slate-500" />
                      <span className="text-sm font-semibold text-slate-900">{ch.channel}</span>
                    </div>
                    <p className="text-sm text-slate-600">{ch.tip}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="p-5 bg-slate-50 border border-slate-200">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Search cadence</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maintain consistent outreach, follow-up, and profile updates. Treat your job search like a project by reviewing opportunities and connections each week.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
