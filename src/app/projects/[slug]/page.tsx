import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { websiteData } from '@/data/website';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { Metadata } from 'next';

// Generate static params for all projects
export function generateStaticParams() {
  const { projects } = websiteData;
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = params;
  const { projects } = websiteData;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} - Your Name`,
    description: project.description,
    keywords: project.technologies?.join(', '),
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { personalInfo, projects } = websiteData;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation personalName={personalInfo.name} />
      <main className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <ScrollReveal>
          <Link 
            href="/#projects" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </ScrollReveal>

        {/* Project Header */}
        <ScrollReveal>
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4 hero-text">{project.title}</h1>
            <p className="text-xl subtitle-text mb-6">{project.description}</p>
            
            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 mb-8">
              {project.technologies?.map((tech) => (
                <span key={tech} className="skill-badge text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modern-button"
                >
                  View Live Site →
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modern-button bg-gray-700 hover:bg-gray-600"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Image */}
        <ScrollReveal>
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Project Details */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ScrollReveal>
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 hero-text">Project Overview</h2>
                <div className="space-y-4 subtitle-text leading-relaxed">
                  {project.overview?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {project.features && (
              <ScrollReveal>
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 hero-text">Key Features</h2>
                  <ul className="space-y-3 subtitle-text">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            )}

            {project.challenges && (
              <ScrollReveal>
                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 hero-text">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="modern-card">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">{challenge.title}</h3>
                        <p className="subtitle-text leading-relaxed">{challenge.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <div className="modern-card sticky top-24">
                <h3 className="text-xl font-bold mb-6 hero-text">Project Info</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Timeline</h4>
                    <p className="muted-text">{project.timeline || 'Not specified'}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-400 mb-2">Role</h4>
                    <p className="muted-text">{project.role || 'Full Stack Developer'}</p>
                  </div>
                  
                  {project.technologies && (
                    <div>
                      <h4 className="font-medium text-blue-400 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* More Projects */}
        <ScrollReveal>
          <section className="mt-20 pt-12 border-t border-slate-700">
            <h2 className="text-3xl font-bold mb-8 hero-text text-center">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects
                .filter(p => p.slug !== slug)
                .slice(0, 2)
                .map((otherProject) => (
                  <Link key={otherProject.id} href={`/projects/${otherProject.slug}`}>
                    <div className="project-card cursor-pointer">
                      <Image
                        src={otherProject.imageUrl}
                        alt={otherProject.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 hero-text">{otherProject.title}</h3>
                        <p className="subtitle-text leading-relaxed">{otherProject.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
