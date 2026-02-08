
export type Role = 'user' | 'bot';

export const Role = {
  USER: 'user' as const,
  BOT: 'bot' as const
};

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
}

export interface CivicResource {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
