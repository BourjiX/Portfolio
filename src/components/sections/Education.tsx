import { education } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../contexts/LanguageContext';

export function Education() {
  const { t, language } = useLanguage();
  return (
    <section className="py-16">
      <SectionHeader number="02" title={t('sections.education.title')} />
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6 py-4">
            <h3 className="text-2xl font-bold text-gray-900">{edu.degree[language]}</h3>
            <p className="text-lg text-blue-600 font-semibold mt-1">{edu.field[language]}</p>
            <p className="text-gray-600 mt-1">{edu.institution}</p>
            <p className="text-gray-600 text-sm font-semibold mt-1">{t('sections.education.graduated')}: {edu.year}</p>
            <p className="text-gray-700 mt-3">{edu.details[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
