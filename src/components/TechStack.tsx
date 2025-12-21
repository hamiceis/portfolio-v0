import {
  Code2,
  Blocks,
  FileType2,
  Palette,
  Component,
  Network,
} from "lucide-react";

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
  const technologies = [
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
          {technologies.map((tech, index) => (
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
