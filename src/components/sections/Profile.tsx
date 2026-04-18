import { profile } from '../../data/profileData';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Linkedin, Phone, Download } from 'lucide-react';
import profileImage from '../images/chiheb.png';
import { useLanguage } from '../../contexts/LanguageContext';
import cvFr from '../Files/Cv Chiheb Borji FR.pdf';
import cvEn from '../Files/Cv Chiheb Borji ANG.pdf';

export function Profile() {
  const { t, language } = useLanguage();
  return (
    <section className="py-16">
      <SectionHeader number="01" title={t('sections.profile.title')} />
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt={profile.name}
              className="w-48 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
            <p className="text-2xl text-blue-600 font-semibold mb-1">{profile.title[language]}</p>
            <p className="text-lg text-gray-600 mb-6">{profile.location}</p>

            {/* Contact Information */}
            <div className="flex flex-wrap gap-6 mb-6">
              <a
                href="mailto:cbourji122@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">cbourji122@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/chiheb-borji/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={18} />
                <span className="text-sm">{t('sections.profile.linkedinProfile')}</span>
              </a>

              <div className="flex items-center gap-2 text-gray-700">
                <Phone size={18} />
                <span className="text-sm">+216 54 652 053</span>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href={language === 'fr' ? cvFr : cvEn}
              download={language === 'fr' ? 'Cv Chiheb Borji FR.pdf' : 'Cv Chiheb Borji ANG.pdf'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
            >
              <Download size={16} />
              <span>{language === 'fr' ? 'Télécharger CV' : 'Download CV'}</span>
            </a>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('sections.profile.professionalSummary')}</h2>
          <p className="text-gray-700 leading-relaxed">{profile.summary[language]}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('sections.profile.currentRole')}</h2>
          <p className="text-gray-700">{profile.currentRole[language]}</p>
        </div>
      </div>
    </section>
  );
}
