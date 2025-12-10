import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    window.location.href = "mailto:hamiceis@gmail.com";
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="font-heading">
            <span className="block text-muted-foreground text-xl md:text-2xl mb-2 font-normal">
              Olá, eu sou
            </span>
            <span className="text-gradient">Hamiceis Pereira</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Front-End Developer especializado em{" "}
            <span className="text-primary font-medium">React</span>,{" "}
            <span className="text-primary font-medium">Next.js</span> e{" "}
            <span className="text-primary font-medium">interfaces modernas</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-8 py-6 rounded-xl transition-all hover:scale-105 glow-effect"
          >
            Ver Projetos
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <Button
            onClick={handleContact}
            variant="outline"
            size="lg"
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading text-lg px-8 py-6 rounded-xl transition-all hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contato
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
