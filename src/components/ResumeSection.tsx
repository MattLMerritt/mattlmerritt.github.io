'use client';

import { ScrollReveal } from './ScrollReveal';
import { Experience, Skill, PersonalInfo } from '@/types';

interface ResumeSectionProps {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skills: Skill[];
  education?: Education[];
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  honors?: string[];
}

export function ResumeSection({ personalInfo, experiences, skills, education }: ResumeSectionProps) {
  const handleDownloadResume = () => {
    // This would typically link to a PDF file in the public folder
    window.open('/matthew-merritt-resume.pdf', '_blank');
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="hero-text mb-4">Resume</h2>
            <p className="subtitle-text mb-8">
              A comprehensive overview of my professional experience and qualifications
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Download PDF
              </button>
              <button
                onClick={handlePrintResume}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Print Resume
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Personal Information Header */}
          <ScrollReveal>
            <div className="text-center mb-12 p-8 bg-slate-900/60 rounded-xl border border-slate-700/50">
              <h3 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h3>
              <p className="text-xl text-blue-400 mb-2">{personalInfo.profession}</p>
              <div className="flex justify-center items-center gap-6 text-slate-400">
                <span>{personalInfo.city}</span>
                <span>•</span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Experience Section */}
          <ScrollReveal>
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-6 border-b border-blue-400 pb-2">
                Professional Experience
              </h4>
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <div key={experience.id} className="p-6 bg-slate-900/40 rounded-lg border border-slate-700/30">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h5 className="text-xl font-semibold text-white">{experience.title}</h5>
                        <p className="text-blue-400 font-medium">{experience.company}</p>
                      </div>
                      <span className="text-slate-400 text-sm font-medium bg-slate-800 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    {experience.details && (
                      <ul className="space-y-2 text-slate-300">
                        {experience.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {experience.skills && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Education Section */}
          {education && education.length > 0 && (
            <ScrollReveal>
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-white mb-6 border-b border-blue-400 pb-2">
                  Education
                </h4>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id} className="p-6 bg-slate-900/40 rounded-lg border border-slate-700/30">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="text-xl font-semibold text-white">{edu.degree}</h5>
                          <p className="text-blue-400">{edu.institution}</p>
                        </div>
                        <span className="text-slate-400 text-sm font-medium bg-slate-800 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      {edu.gpa && (
                        <p className="text-slate-300 mb-2">GPA: {edu.gpa}</p>
                      )}
                      {edu.honors && edu.honors.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm border border-green-700/30"
                            >
                              {honor}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Technical Skills Section */}
          <ScrollReveal>
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white mb-6 border-b border-blue-400 pb-2">
                Technical Skills
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="px-4 py-2 bg-slate-900/40 rounded-lg border border-slate-700/30 text-center"
                  >
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
