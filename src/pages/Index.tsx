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
      description: "Cardápio de Doce Delícia, bolos sobre encomenda e pedidos online",
      technologies: ["React", "TypeScript", "Tailwind"],
      image: "https://github.com/hamiceis/doce-delicia-cardapio/blob/main/assets/pic-project.jpg?raw=true",
    },
    {
      slug: "projeto-2",
      title: "Projeto 2",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "React", "CSS"],
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-3",
      title: "Projeto 3",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-4",
      title: "Projeto 4",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Vue", "TypeScript", "Tailwind"],
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-5",
      title: "Projeto 5",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-6",
      title: "Projeto 6",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-7",
      title: "Projeto 7",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Redux", "Styled Components"],
      
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-8",
      title: "Projeto 8",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "GraphQL", "Apollo"],
      
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-9",
      title: "Projeto 9",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Framer Motion", "Tailwind"],
      
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-10",
      title: "Projeto 10",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["Next.js", "TypeScript", "Supabase"],
      
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-11",
      title: "Projeto 11",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
      technologies: ["React", "Three.js", "WebGL"],
      
      image: "/placeholder.svg",
    },
    {
      slug: "projeto-12",
      title: "Projeto 12",
      description: "Descrição breve do projeto destacando seu propósito e objetivos principais.",
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
          <p className="font-body">© 2026 Portfolio. Desenvolvido com React e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
