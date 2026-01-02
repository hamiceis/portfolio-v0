import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/constants";

const Index = () => {
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
            {PROJECTS.map((project, index) => (
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
