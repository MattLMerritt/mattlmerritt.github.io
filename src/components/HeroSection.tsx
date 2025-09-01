import { PersonalInfo } from '@/types';
import { ScrollReveal } from './ScrollReveal';
import Image from 'next/image';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <ScrollReveal>
      <section className="text-center mb-16">
        <Image 
          className="w-32 h-32 rounded-full mx-auto mb-4" 
          src={personalInfo.profileImageUrl}
          alt={personalInfo.profileImageAlt}
          width={128}
          height={128}
        />
        <h1 className="text-4xl font-bold mb-2 hero-text">
          Hi, I&apos;m {personalInfo.name}
        </h1>
        <p className="text-lg subtitle-text">
          I&apos;m a {personalInfo.profession} based in {personalInfo.city}. I love building things for the web.
        </p>
      </section>
    </ScrollReveal>
  );
}
