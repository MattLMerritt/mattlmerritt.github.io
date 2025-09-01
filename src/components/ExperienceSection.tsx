import { Experience } from '@/types';
import { ScrollReveal } from './ScrollReveal';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <ScrollReveal>
      <section id="experience" className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 hero-text">My Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-[-0.5rem] before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-500 before:shadow-sm">
          {experiences.map((experience) => (
            <div key={experience.id} className="modern-card relative">
              <div className="absolute -left-6 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg"></div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {experience.title} at {experience.company}
              </h3>
              <p className="text-sm muted-text mb-3 font-medium">{experience.period}</p>
              
              {experience.description && (
                <p className="subtitle-text leading-relaxed mb-4">{experience.description}</p>
              )}
              
              {experience.details && experience.details.length > 0 && (
                <ul className="subtitle-text leading-relaxed mb-4 space-y-2">
                  {experience.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-sm">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
