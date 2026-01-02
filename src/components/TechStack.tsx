import { TECHNOLOGIES } from "@/data/constants";

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const TechCard = ({ icon, name, description }: TechCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover-lift">
      {/* Icon Container */}
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-2xl font-heading font-semibold group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-2xl" />
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="font-heading text-gradient">
            Tecnologias que utilizo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ferramentas que domino para criar experiências digitais modernas,
            rápidas e escaláveis
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={tech.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TechCard {...tech} />
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm font-medium">
              Stack em constante evolução
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
