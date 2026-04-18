import { associativeWork } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';

export function AssociativeWork() {
  const { t } = useLanguage();
  return (
    <section className="py-16">
      <SectionHeader number="07" title={t('sections.associativeWork.title')} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <ul className="space-y-3">
            {associativeWork.map((work, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-900 font-medium">{work.role}</span>
                <span className="text-gray-600 text-sm font-semibold">{work.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
