import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <SectionHeader number="08" title={t('sections.contact.title')} />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('sections.contact.getInTouch')}</h2>
            <p className="text-gray-600">Feel free to reach out for opportunities or collaborations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('sections.contact.email')}</h3>
                <a href="mailto:cbourji122@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  cbourji122@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('sections.contact.linkedin')}</h3>
                <a
                  href="https://www.linkedin.com/in/chiheb-borji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  linkedin.com/in/chiheb-borji
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t('sections.contact.phone')}</h3>
                <a href="tel:+21654652053" className="text-green-600 hover:text-green-800 transition-colors">
                  +216 54 652 053
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-purple-600">Tunisia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}