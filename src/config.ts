export type Lang = "en" | "pt" | "es";

export const langMeta: Record<Lang, { label: string; href: string }> = {
  en: { label: "EN", href: "/" },
  pt: { label: "PT", href: "/pt/" },
  es: { label: "ES", href: "/es/" },
};

export const siteConfig = {
  name: "Fortino",
  accentColor: "#1d4ed8",
  social: {
    linkedin: "https://www.linkedin.com/in/vinicius-fortino/",
    medium: "https://medium.com/fortino-lab",
    github: "https://github.com/viniciusfortino",
  },
  content: {
    en: {
      title: "Fintech Tech Lead · AI, Quantum Computing & Cybersecurity Researcher",
      description:
        "Personal site of Vinicius Fortino — Tech Lead at Mercado Livre and MSc candidate in Cybersecurity.",
      greeting: "Hello! 👋",
      intro: "I'm",
      aboutHeading: "About Me",
      aboutMe:
        "Tech Lead at Mercado Livre and MSc candidate in Cybersecurity at the University of London / Royal Holloway. I work at the intersection of front-end engineering, security research, and quantum computing.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Cybersecurity", "Quantum Computing"],
      nav: { about: "About" },
      footer: { rights: "All rights reserved." },
      latestArticle: "Latest Article",
      readMore: "Read on Medium →",
    },
    pt: {
      title: "Fintech Tech Lead · Pesquisador em IA, Computação Quântica & Cibersegurança",
      description:
        "Site pessoal de Vinicius Fortino — Tech Lead no Mercado Livre e mestrando em Cibersegurança.",
      greeting: "Olá! 👋",
      intro: "Sou",
      aboutHeading: "Sobre Mim",
      aboutMe:
        "Tech Lead no Mercado Livre e mestrando em Cibersegurança pela University of London / Royal Holloway. Trabalho na interseção entre engenharia front-end, pesquisa em segurança e computação quântica.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Cibersegurança", "Computação Quântica"],
      nav: { about: "Sobre" },
      footer: { rights: "Todos os direitos reservados." },
      latestArticle: "Último Artigo",
      readMore: "Ler no Medium →",
    },
    es: {
      title: "Fintech Tech Lead · Investigador en IA, Computación Cuántica & Ciberseguridad",
      description:
        "Sitio personal de Vinicius Fortino — Tech Lead en Mercado Libre e investigador en Ciberseguridad.",
      greeting: "¡Hola! 👋",
      intro: "Soy",
      aboutHeading: "Sobre Mí",
      aboutMe:
        "Tech Lead en Mercado Libre y candidato a MSc en Ciberseguridad en la University of London / Royal Holloway. Trabajo en la intersección entre ingeniería front-end, investigación en seguridad y computación cuántica.",
      skills: ["JavaScript", "TypeScript", "React", "Node.js", "Ciberseguridad", "Computación Cuántica"],
      nav: { about: "Sobre" },
      footer: { rights: "Todos los derechos reservados." },
      latestArticle: "Último Artículo",
      readMore: "Leer en Medium →",
    },
  },
  projects: [] as Array<{ name: string; description: string; link: string; skills: string[] }>,
  experience: [] as Array<{ company: string; title: string; dateRange: string; bullets: string[] }>,
  education: [] as Array<{ school: string; degree: string; dateRange: string; achievements: string[] }>,
};
