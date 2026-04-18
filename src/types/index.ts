export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: { en: string; fr: string };
  location: string;
  summary: { en: string; fr: string };
  currentRole: { en: string; fr: string };
}

export interface Education {
  degree: { en: string; fr: string };
  field: { en: string; fr: string };
  institution: string;
  year: string;
  details: { en: string; fr: string };
}

export interface Experience {
  title: { en: string; fr: string };
  company: string;
  period: string;
  description: { en: string; fr: string };
}

export interface SkillGroup {
  category: { en: string; fr: string };
  items: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  status: string;
  date: string | null;
}

export interface Language {
  language: string;
  proficiency: string;
  description: { en: string; fr: string };
}

export interface AssociativeRole {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface CareerObjective {
  title: string;
  targetRoles: string[];
  perspective: string;
  timeline: string;
}

export interface Recommendation {
  title: string;
  description: string;
  priority?: string;
}

export interface JobRecommendation {
  title: string;
  description: string;
  timeframe: string;
  focus: string[];
}

export interface SideIncome {
  title: string;
  income: string;
  effort: string;
  type: string;
  description: string;
}
