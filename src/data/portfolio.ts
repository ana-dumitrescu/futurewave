import { Github, Linkedin, Mail, Twitter, ExternalLink, Code2, Globe, Cpu, Database } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Ana Andreea Dumitrescu",
    title: "Full-Stack Developer",
    tagline: "Building the digital reality of tomorrow, today.",
    email: "anaandreeadumitrescu@gmail.com",
    socials: [
      { name: "GitHub", url: "https://github.com/ana-dumitrescu", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ana-andreea-dumitrescu-2bb628143/", icon: Linkedin },
      { name: "Email", url: "mailto:anaandreeadumitrescu@gmail.com", icon: Mail },
    ],
    about: "Full-stack developer building modern web applications with React, Next.js, and TypeScript. I specialize in AI integration, gesture recognition systems, and user-focused product development. Currently focused on creating practical tools that solve real-world problems - from AI-powered goal management to hands-free productivity systems. 2 years of professional experience building scalable applications.",
  },
  skills: [
    { name: "React / Next.js", level: 95, icon: Code2, category: "Frontend" },
    { name: "TypeScript", level: 90, icon: Code2, category: "Languages" },
    { name: "Tailwind CSS", level: 95, icon: Code2, category: "Styling" },
    { name: "Supabase", level: 85, icon: Database, category: "Backend" },
    { name: "Framer Motion", level: 80, icon: Globe, category: "Animation" },
    { name: "AI Integration", level: 80, icon: Cpu, category: "AI/ML" },
  ],
  projects: [
    {
      id: "project-1",
      title: "BabyValid",
      description: "Modern parenting resource platform showcasing frontend development expertise with Next.js 14 and Tailwind CSS. Built component-driven architecture using Storybook, implemented responsive design with dark mode, and created markdown content rendering system.",
      tech: ["Next.js 14", "Supabase", "Tailwind CSS", "Storybook"],
      link: "https://babyvalid.com",
      github: "https://github.com/ana-dumitrescu/site-bebe",
      image: "/projects/babyvalid.png",
      color: "from-pink-400 to-purple-400"
    },
    {
      id: "project-2",
      title: "Humiria",
      description: "Hierarchical goal decomposition platform combining Llama 3.3 AI with gamification principles. Implements recursive task breakdown algorithms, skill-tree visualization with Framer Motion, and integrated AI chat for contextual guidance.",
      tech: ["Next.js 16", "Supabase", "Groq AI", "Framer Motion", "Tailwind 4"],
      link: "https://humiria.com",
      github: "https://github.com/ana-dumitrescu/humiria",
      image: "/projects/humiria.png",
      color: "from-blue-400 to-cyan-300"
    },
    {
      id: "project-3",
      title: "Gesture Workspace",
      description: "Full-stack gesture recognition platform combining MediaPipe AI, React/TypeScript, and real-time computer vision to enable hands-free control of productivity workflows. Implements custom gesture detection algorithms for video playback, task management, and calendar integration.",
      tech: ["React", "Vite", "TypeScript", "MediaPipe"],
      link: "https://gesture-workspace.vercel.app/",
      github: "https://github.com/ana-dumitrescu/gesture-workspace",
      image: "/projects/gesture-control.png",
      color: "from-emerald-400 to-teal-500",
      wip: true
    },
  ]
};
