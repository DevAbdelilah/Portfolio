// Basic types for our portfolio app

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  description: string;
}

export interface Experience {
  id: number;
  title: string;
  period: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  level: "beginner" | "intermediate" | "expert";
  category: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Redux state types
export interface PortfolioState {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  isLoading: boolean;
  activeSection: string;
}
