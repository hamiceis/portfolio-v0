import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Voltar ao Portfólio
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="font-heading capitalize">
              {slug?.replace(/-/g, " ")}
            </h1>
            <p className="text-xl text-muted-foreground">
              Detalhes do projeto em breve...
            </p>
          </div>

          {/* Placeholder Content Sections */}
          <div className="space-y-12 mt-12">
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-heading mb-4">Sobre o Projeto</h2>
              <p className="text-muted-foreground">
                Conteúdo será adicionado em breve.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-heading mb-4">Tecnologias Utilizadas</h2>
              <p className="text-muted-foreground">
                Conteúdo será adicionado em breve.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-heading mb-4">Galeria</h2>
              <p className="text-muted-foreground">
                Imagens serão adicionadas em breve.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
