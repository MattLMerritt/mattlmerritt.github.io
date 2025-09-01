import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { websiteData } from '@/data/website';

export default function Home() {
  const { personalInfo, experiences, skills, projects, contactLinks, education } = websiteData;

  return (
    <>
      <Navigation personalName={personalInfo.name} />
      <main className="container mx-auto px-6 py-12">
        <HeroSection personalInfo={personalInfo} />
        <ExperienceSection experiences={experiences} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ResumeSection 
          personalInfo={personalInfo} 
          experiences={experiences} 
          skills={skills} 
          education={education} 
        />
      </main>
      <ContactSection personalInfo={personalInfo} contactLinks={contactLinks} />
    </>
  );
}
