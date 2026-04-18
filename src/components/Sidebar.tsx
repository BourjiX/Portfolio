import { useState, useEffect } from 'react';
import { User, GraduationCap, Briefcase, Zap, Award, Languages, Users, Target, Lightbulb, Search, DollarSign, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'profile', label: '01 Profile', icon: User },
  { id: 'education', label: '02 Education', icon: GraduationCap },
  { id: 'experience', label: '03 Experience', icon: Briefcase },
  { id: 'skills', label: '04 Skills', icon: Zap },
  { id: 'certificates', label: '05 Certifications', icon: Award },
  { id: 'languages', label: '06 Languages', icon: Languages },
  { id: 'associative-work', label: '07 Leadership', icon: Users },
  { id: 'career-objective', label: '08 Career Objective', icon: Target },
  { id: 'cv-recommendations', label: '09 CV Recommendations', icon: Lightbulb },
  { id: 'job-search', label: '10 Job Search', icon: Search },
  { id: 'side-income', label: '11 Side Income', icon: DollarSign },
];

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="px-5 py-6 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-600">
            <User size={18} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Chiheb Borji</div>
            <div className="text-[11px] text-gray-600">Professional CV</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 text-sm ${
                isActive
                  ? 'bg-blue-100 text-blue-900 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-blue-600' : 'text-gray-500'} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-gray-200">
        <div className="text-xs text-gray-600 text-center">
          <p>Cybersecurity & Networking</p>
          <p className="font-semibold text-gray-900 mt-1">Professional</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 bg-white text-gray-900 rounded-lg shadow-md border border-gray-200"
      >
        <Menu size={18} />
      </button>

      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-64 bg-white transform transition-transform duration-300 shadow-lg ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X size={18} />
        </button>
        <NavContent />
      </aside>

      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-80 bg-white text-gray-900 shadow-lg z-40 border-r border-gray-200">
        <NavContent />
      </aside>
    </>
  );
}
