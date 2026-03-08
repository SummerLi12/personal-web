
export interface SkillSet {
  frontend: string[];
  backend: string[];
  ai: string[];
  tools: string[];
  programming: string[];
  databases: string[];
  devops: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  impact: string;
  imageUrl: string;
  details?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  highlights: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  profileImage: string;
  socials: {
    github: string;
    linkedin: string;
  };
  education: {
    school: string;
    degree: string;
    location: string;
    graduation: string;
    coursework: string[];
  };
  skills: SkillSet;
  projects: Project[];
  experience: Experience[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
