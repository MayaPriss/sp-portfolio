import {
  Database,
  Globe,
  Server,
  Cloud,
  Terminal,
  Cpu,
} from 'lucide-react';

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const personalInfo = {
  name: 'Saravanapriya Balasubramaniam',
  role: 'System Engineer | AI Master\'s Candidate | Startup Founder',
  tagline: 'Building production systems at MTitans while founding two AI-driven startups',
  bio: 'System Engineer and AI Master\'s candidate building production systems at MTitans, while founding Vellatix Technologies (AI-powered IT solutions) and Vellaxis AgriTech (smart farming). Azure AI Engineer Associate and Alibaba Cloud Professional, seeking remote Software Engineer / AI Engineer roles centred on Python, cloud deployment, and ML integration.',
  email: 'bjspriya23@gmail.com',
  phone: '+6012-694 8207',
  github: 'https://github.com/MayaPriss',
  linkedin: 'https://www.linkedin.com/in/spriyabala',
  twitter: '',
  location: 'Petaling Jaya, Selangor, Malaysia',
  availability: 'Open to Remote Software Engineer / AI Engineer Roles',
};

export const aboutData = {
  description: [
    "I'm a System Engineer at MTitans Software, strengthening reliability across client deployments with Python-based data processing, algorithmic logic, and IoT-to-cloud integration — and a Master of Applied Computing (AI) candidate at Taylor's University, following a Bachelor of Software Engineering (AI Extension) earned across 8 Dean's List semesters.",

    "Alongside that, I'm bootstrapping two startups: Vellatix Technologies, building a full-stack AI-powered platform for IT solutions clients with FastAPI and React, and Vellaxis AgriTech, architecting an IoT sensor ingestion layer and ML crop-advisory pipeline for smart farming.",

    "My toolkit spans Python, FastAPI, React and Flutter, with hands-on AI work in computer vision, NLP, RAG pipelines, and LLM API integration — backed by Azure AI Engineer Associate and Alibaba Cloud Professional certifications.",

    "I'm looking for remote Software Engineer / AI Engineer roles where Python, cloud deployment, ML model integration, and full-stack development are the core stack.",
  ],

  stats: [
    { label: "Dean's List", value: '×8' },
    { label: 'Startups Founded', value: '2' },
    { label: 'Certifications', value: '7+' },
    { label: 'Languages Spoken', value: '4' },
  ],

  timeline: [
    {
      year: 'Apr 2026 – Present',
      title: 'Founder',
      company: 'Vellatix Technologies & Vellaxis AgriTech',
    },
    {
      year: 'Aug 2025 – Present',
      title: 'System Engineer',
      company: 'MTitans Software Sdn Bhd',
    },
    {
      year: 'Sep 2025 – Sep 2026',
      title: 'Master of Applied Computing — AI',
      company: "Taylor's University",
    },
    {
      year: 'Apr 2025 – Aug 2025',
      title: 'Software Developer Intern',
      company: 'Caction',
    },
    {
      year: 'Aug 2022 – Aug 2025',
      title: 'B.Software Engineering (Hons) — AI Extension',
      company: "Taylor's University / Univ. of West of England",
    },
  ],
};

export const skillsData = [
  {
    category: 'Frameworks & APIs',
    icon: Globe,
    skills: [
      { name: 'FastAPI', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Flutter / Firebase', level: 80 },
      { name: 'RESTful API Design', level: 88 },
    ],
  },

  {
    category: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 78 },
      { name: 'C++ / PHP', level: 72 },
    ],
  },

  {
    category: 'AI / Machine Learning',
    icon: Cpu,
    skills: [
      { name: 'scikit-learn / CNN / LSTM', level: 85 },
      { name: 'Computer Vision (OpenCV)', level: 82 },
      { name: 'NLP (Hugging Face, spaCy)', level: 78 },
      { name: 'LLM Integration & RAG', level: 80 },
    ],
  },

  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Microsoft Azure AI', level: 88 },
      { name: 'Alibaba Cloud', level: 82 },
      { name: 'CI/CD & Git/GitHub', level: 85 },
      { name: 'MLOps Fundamentals', level: 75 },
    ],
  },

  {
    category: 'Data & Visualisation',
    icon: Database,
    skills: [
      { name: 'Power BI / Tableau', level: 82 },
      { name: 'pandas', level: 85 },
      { name: 'Hadoop (Hive, Pig, HBase)', level: 70 },
      { name: 'SHAP / XGBoost', level: 75 },
    ],
  },

  {
    category: 'Systems & Deployment',
    icon: Server,
    skills: [
      { name: 'IoT Edge-to-Cloud Pipelines', level: 82 },
      { name: 'System Design', level: 78 },
      { name: 'Model Deployment', level: 78 },
      { name: 'Async/Remote Engineering Workflows', level: 85 },
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'Vellatix Technologies',
    description:
      "Architected and shipped a full-stack web/mobile platform for IT solutions clients — FastAPI backend, React frontend, RESTful API design — now in client-facing beta. Integrated Azure AI services and LLM APIs into client prototype workflows as a bootstrapped solo founder.",
    image: 'https://picsum.photos/seed/vellatix-platform/800/600',
    techStack: ['Python', 'FastAPI', 'React', 'Azure AI', 'LLM APIs'],
    github: 'https://github.com/MayaPriss',
    live: 'https://vellatix.com',
    featured: true,
  },

  {
    id: 2,
    title: 'Vellaxis AgriTech',
    description:
      'Designing the core data architecture for an AI-driven smart farming platform — IoT sensor ingestion layer, scikit-learn crop-advisory pipeline, and farmer-facing dashboard — with an edge-to-cloud telemetry pipeline benchmarked under rural connectivity constraints.',
    image: 'https://picsum.photos/seed/vellaxis-agritech/800/600',
    techStack: ['Python', 'scikit-learn', 'IoT', 'Cloud Analytics'],
    github: 'https://github.com/MayaPriss',
    live: 'https://vellaxis.net',
    featured: true,
  },

  {
    id: 3,
    title: 'Lung X-Ray Classifier',
    description:
      'End-to-end CNN-based computer vision pipeline classifying pneumonia-affected vs. normal chest X-rays — image preprocessing, augmentation, model training, evaluation, and performance reporting, applicable to medical AI and quality-inspection domains.',
    image: 'https://picsum.photos/seed/lung-xray-classifier/800/600',
    techStack: ['Python', 'OpenCV', 'scikit-learn', 'CNN'],
    github: 'https://github.com/MayaPriss',
    live: '',
    featured: true,
  },

  {
    id: 4,
    title: 'DAML × MIRATH SW SDN BHD',
    description:
      'Industry machine-learning collaboration applying data analytics and customer behaviour modelling to a real business dataset, delivering segmentation insights that were adopted by the client team.',
    image: 'https://picsum.photos/seed/daml-mirath-analytics/800/600',
    techStack: ['Python', 'Data Analytics', 'Customer Segmentation'],
    github: '',
    live: '',
    featured: false,
  },

  {
    id: 5,
    title: 'Facial Recognition Attendance System',
    description:
      'Computer vision attendance solution automating student roll-call, designed end-to-end for non-technical operator use.',
    image: 'https://picsum.photos/seed/facial-recognition-attendance/800/600',
    techStack: ['Python', 'OpenCV', 'Computer Vision'],
    github: '',
    live: '',
    featured: false,
  },

  {
    id: 6,
    title: 'ReAirdrate',
    description:
      'Cross-platform hydration tracking app built independently with real-time sync, push notifications, and a full authentication stack.',
    image: 'https://picsum.photos/seed/reairdrate-hydration/800/600',
    techStack: ['Flutter', 'Firebase'],
    github: '',
    live: '',
    featured: false,
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/MayaPriss',
    icon: 'github',
  },

  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/spriyabala',
    icon: 'linkedin',
  },

  {
    name: 'Email',
    url: 'mailto:bjspriya23@gmail.com',
    icon: 'mail',
  },
];
