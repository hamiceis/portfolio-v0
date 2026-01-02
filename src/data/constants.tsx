import {
  Code2,
  Blocks,
  FileType2,
  Palette,
  Component,
  Network,
} from "lucide-react";

export const PROJECTS = [
  {
    slug: "doce-delicia",
    title: "Doce Delícia",
    href: "https://doce-delicia.vercel.app/",
    description:
      "Cardápio de Doce Delícia, bolos sobre encomenda e pedidos online",
    technologies: ["React", "TypeScript", "Tailwind"],
    image:
      "https://github.com/hamiceis/doce-delicia-cardapio/blob/main/assets/pic-project.jpg?raw=true",
  },
  {
    slug: "dashboard",
    title: "Dashboard simple",
    href: "https://github.com/hamiceis/Dashboard-NextJS",
    description: "Dashboard simple com gráficos e informações com shadcn-ui",
    technologies: ["Next.js", "React", "Tailwind", "Shadcn-ui"],
    image: "./assets/preview2.jpg",
  },
  {
    slug: "LandingPage",
    title: "AF PERSONAL TRAINER",
    href: "https://personal-trainer-puce-delta.vercel.app/",
    description: "Landing page de um personal trainer de alta conversão",
    technologies: ["React", "TailwindCSS"],
    image:
      "https://github.com/hamiceis/personal-trainer-landingpage/blob/main/assets/preview.jpg?raw=true",
  },
  {
    slug: "plann-er",
    title: "plann.er",
    description: "Planejador de viagens",
    technologies: ["React", "TypeScript", "Tailwind", "Date-fns", "axios"],
    image: "./assets/preview1.jpg",
  },
  {
    slug: "pizza-do-gordo",
    title: "Pizza do gordo",
    description: "Página de cardápio de uma pizzaria com pedidos online",
    technologies: [
      "React",
      "TailwindCSS",
      "Shadcn-ui",
      "Tanstack-router",
      "Zustand",
    ],
    href: "https://pizza-gordo.vercel.app/",
    image: "./assets/preview3.jpg",
  },
  {
    slug: "psico-serenity",
    title: "PsicoSerenity",
    description: "Landing page de um psicólogo com funcionalidade de IA",
    technologies: [
      "React19",
      "TailwindCSS",
      "Radix-ui",
      "Framer-motion",
      "Google GenAI",
    ],
    image:
      "https://github.com/hamiceis/psico-serenity/blob/main/assets/preview.jpg?raw=true",
    href: "https://psico-serenity.vercel.app/",
  },
];

export const TECHNOLOGIES = [
  {
    name: "React",
    icon: <Code2 className="w-8 h-8" />,
    description:
      "Uso React para construir interfaces rápidas, modulares e escaláveis. Priorizo componentes limpos, previsíveis e de fácil manutenção — com foco em performance, hooks, padrões de composição e controle eficiente de estado.",
  },
  {
    name: "Next.js",
    icon: <Blocks className="w-8 h-8" />,
    description:
      "Next.js é o que utilizo quando o projeto exige mais estrutura e otimização: SSR/SSG, roteamento organizado, imagens otimizadas e APIs internas. O objetivo é entregar aplicações mais rápidas, leves e melhores para SEO.",
  },
  {
    name: "TypeScript",
    icon: <FileType2 className="w-8 h-8" />,
    description:
      "TypeScript é minha base de segurança técnica. Uso tipagem para reduzir erros, aumentar legibilidade e facilitar manutenção. Modelagem de tipos, interfaces e props tipadas fazem parte do meu fluxo natural de desenvolvimento.",
  },
  {
    name: "TailwindCSS",
    icon: <Palette className="w-8 h-8" />,
    description:
      "Com Tailwind, construo interfaces modernas, responsivas e consistentes com velocidade. Cada detalhe visual é controlado com precisão, mantendo estética limpa sem acúmulo desnecessário de CSS manual.",
  },
  {
    name: "shadcn/ui",
    icon: <Component className="w-8 h-8" />,
    description:
      "Utilizo shadcn/ui para criar componentes profissionais, acessíveis e visualmente sólidos. Personalizo a UI mantendo consistência, performance e um acabamento elegante — sem reescrever tudo do zero.",
  },
  {
    name: "TanStack Router",
    icon: <Network className="w-8 h-8" />,
    description:
      "TanStack Router é a minha escolha para gerenciamento de rotas complexas em React. Oferece segurança de tipos (Type-safe) ponta a ponta, carregamento paralelo de dados e uma experiência de desenvolvedor superior para aplicações robustas.",
  },
];
