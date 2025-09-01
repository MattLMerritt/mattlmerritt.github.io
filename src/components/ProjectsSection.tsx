'use client';

import { Project } from '@/types';
import { ScrollReveal } from './ScrollReveal';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <ScrollReveal>
      <section id="projects" className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 hero-text">Interesting Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <Image 
                src={project.imageUrl} 
                alt={project.imageAlt}
                className="w-full h-48 object-cover"
                width={600}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 hero-text">{project.title}</h3>
                <p className="subtitle-text mb-6 leading-relaxed">{project.description}</p>
                <Link 
                  href={project.projectUrl || `/projects/${project.slug}`}
                  className="modern-button inline-block"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
