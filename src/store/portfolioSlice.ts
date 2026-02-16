import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioState } from "../types";

// Initial state with your actual data
const initialState: PortfolioState = {
  personalInfo: {
    name: "Abdel-ilah Charafi",
    title: "Frontend Developer",
    email: "charafiabdellah3@gmail.com",
    phone: "+212 6 03 70 68 44",
    location: "Kenitra, Morocco",
    github: "https://github.com/DevAbdellah",
    description:
      "Results-driven Frontend Developer with 5 years building scalable web applications using React.js, Next.js, and TypeScript. Expert in state management (Redux), API integration (GraphQL/REST), and testing (Jest, Playwright).",
  },
  experiences: [
    {
      id: 1,
      title: "Frontend Developer",
      period: "2023 - Present",
      description:
        "Architected React/Next.js apps serving 10,000+ users. Implemented Redux and GraphQL. Built component library with TypeScript, reducing dev time 30%. Achieved 95+ Lighthouse scores.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      period: "2025 - 2026",
      description:
        "Built enterprise platform with Laravel/PHP, TypeScript, Next.js for 50,000+ users. Implemented Redux and Context API. Developed WCAG 2.1 AA accessible interfaces with SEO.",
    },
    {
      id: 3,
      title: "Frontend Developer",
      period: "2020 - 2020",
      description:
        "Developed React apps with TypeScript. Created modular UI with SASS. Implemented Jest/Enzyme testing. Participated in Agile sprints and code reviews.",
    },
  ],
  skills: [
    {
      id: 1,
      name: "React.js & Next.js",
      level: "expert",
      category: "Frontend",
    },
    {
      id: 2,
      name: "TypeScript & JavaScript",
      level: "expert",
      category: "Frontend",
    },
    {
      id: 3,
      name: "Redux & State Management",
      level: "expert",
      category: "Frontend",
    },
    {
      id: 4,
      name: "GraphQL & REST APIs",
      level: "expert",
      category: "Frontend",
    },
    { id: 5, name: "HTML5 & CSS3", level: "intermediate", category: "Styling" },
    {
      id: 6,
      name: "Tailwind & SASS",
      level: "intermediate",
      category: "Styling",
    },
    { id: 7, name: "Jest & Testing", level: "expert", category: "Testing" },
    { id: 8, name: "Performance & SEO", level: "expert", category: "Testing" },
    {
      id: 9,
      name: "Git & Agile/Scrum",
      level: "intermediate",
      category: "Tools",
    },
    {
      id: 10,
      name: "Docker & CI/CD",
      level: "intermediate",
      category: "Tools",
    },
  ],
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Built with React, TypeScript, and Redux. Features include product catalog, shopping cart, and payment integration.",
      technologies: ["React", "TypeScript", "Redux", "Node.js"],
      githubUrl: "https://github.com/DevAbdellah",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app with drag-and-drop functionality, built using React and Redux Toolkit.",
      technologies: ["React", "Redux Toolkit", "TypeScript", "CSS3"],
      githubUrl: "https://github.com/DevAbdellah",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather app with location-based forecasts and interactive charts.",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API"],
      githubUrl: "https://github.com/DevAbdellah",
    },
  ],
  isLoading: false,
  activeSection: "home",
};

// Create the slice
const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    // Action to set active section
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    // Action to toggle loading state
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    // Action to add a new project (for future use)
    addProject: (
      state,
      action: PayloadAction<Omit<(typeof initialState.projects)[0], "id">>
    ) => {
      const newProject = {
        ...action.payload,
        id: Date.now(), // Simple ID generation
      };
      state.projects.push(newProject);
    },
  },
});

// Export actions
export const { setActiveSection, setLoading, addProject } =
  portfolioSlice.actions;

// Export reducer
export default portfolioSlice.reducer;
