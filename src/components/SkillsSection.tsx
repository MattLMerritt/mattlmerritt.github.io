import { Skill } from '@/types';
import { ScrollReveal } from './ScrollReveal';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <ScrollReveal>
      <section id="skills" className="mb-20 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 hero-text">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <span key={skill.id} className="skill-badge">
              {skill.name}
            </span>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
