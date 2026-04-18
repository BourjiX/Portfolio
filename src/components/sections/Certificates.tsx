import { certificates } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';

export function Certificates() {
  const { t } = useLanguage();
  const completed = certificates.filter(c => c.status === 'Completed');
  const targeted = certificates.filter(c => c.status.includes('Target'));

  return (
    <section className="py-16">
      <SectionHeader number="05" title={t('sections.certificates.title')} />
      <div className="max-w-4xl mx-auto space-y-8">
        {completed.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-emerald-300">{t('sections.certificates.completed')}</h3>
            <div className="space-y-3">
              {completed.map((cert, index) => (
                <div key={index} className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <p className="text-emerald-600 font-semibold text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {targeted.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-300">{t('sections.certificates.targeted')}</h3>
            <div className="space-y-3">
              {targeted.map((cert, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                  <p className="text-blue-600 font-semibold text-sm">{cert.status}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
