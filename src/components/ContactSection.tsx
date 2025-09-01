'use client';

import { PersonalInfo, ContactLink } from '@/types';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  contactLinks: ContactLink[];
}

export function ContactSection({ personalInfo, contactLinks }: ContactSectionProps) {
  return (
    <footer id="contact" className="section-bg-light mt-16 py-12 border-t border-slate-700/50">
      <div className="container mx-auto px-6 text-center">
        <div className="modern-card max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4 hero-text">Let&apos;s Connect!</h3>
          <p className="subtitle-text mb-6">Feel free to reach out for collaborations or just a friendly chat.</p>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="modern-button inline-block mb-6"
          >
            {personalInfo.email}
          </a>
          <div className="flex justify-center space-x-6">
            {contactLinks.map((link) => (
              <a 
                key={link.id}
                href={link.url}
                className="text-slate-300 hover:text-blue-400 transition-all duration-200 font-medium hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
