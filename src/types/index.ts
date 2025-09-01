export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description?: string;
  details?: string[];
  skills?: string[];
}

export interface Skill {
  id: string;
  name: string;
}

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  projectUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies?: string[];
  timeline?: string;
  role?: string;
  overview?: string[];
  features?: string[];
  challenges?: ProjectChallenge[];
}

export interface ContactLink {
  id: string;
  name: string;
  url: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  honors?: string[];
}

export interface PersonalInfo {
  name: string;
  profession: string;
  city: string;
  email: string;
  profileImageUrl: string;
  profileImageAlt: string;
}

export interface WebsiteData {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  contactLinks: ContactLink[];
  education?: Education[];
}

// A basic type for the Vanta effect instance
export interface VantaEffect {
  destroy: () => void;
}

// A basic type for the VANTA object
export interface Vanta {
  TOPOLOGY?: (options: {
    el: HTMLDivElement | null;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    color: number;
    backgroundColor: number;
  }) => VantaEffect;
  NET?: (options: {
    el: string;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    color: number;
    backgroundColor: number;
    points: number;
    maxDistance: number;
    spacing: number;
  }) => VantaEffect;
}
