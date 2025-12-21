import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  // 12 projetos com slugs padronizados
  const projects = [
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
      description:
        "Landing page de um psicólogo com funcionalidade de IA",
      technologies: ["React19", "TailwindCSS", "Radix-ui", "Framer-motion", "Google GenAI"],
      image: "https://github.com/hamiceis/psico-serenity/blob/main/assets/preview.jpg?raw=true",
      href: "https://psico-serenity.vercel.app/",
    },
    {
      slug: "projeto-7",
      title: "Projeto 7",
      description:
        "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Redux", "Styled Components"],

      image: "/placeholder.svg",
    },
    {
      slug: "projeto-8",
      title: "Projeto 8",
      description:
        "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "GraphQL", "Apollo"],

      image: "/placeholder.svg",
    },
    {
      slug: "projeto-9",
      title: "Projeto 9",
      description:
        "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Framer Motion", "Tailwind"],

      image: "/placeholder.svg",
    },
    {
      slug: "projeto-10",
      title: "Projeto 10",
      description:
        "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "TypeScript", "Supabase"],

      image: "/placeholder.svg",
    },
    {
      slug: "projeto-11",
      title: "Projeto 11",
      description:
        "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Three.js", "WebGL"],

      image: "/placeholder.svg",
    },
    {
      slug: "projeto-12",
      title: "Projeto 12",
      description:
        "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "Vercel", "Tailwind"],

      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Grid Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="font-heading text-gradient">Projetos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </div>

          {/* Grid 3x4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
          <p className="font-body">
            © 2026 Portfolio. Desenvolvido com React e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
