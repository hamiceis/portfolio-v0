import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  href?: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectCard = ({
  slug,
  href,
  title,
  description,
  technologies,
  image,
}: ProjectCardProps) => {
  const CardContent = (
    <>
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-heading font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-secondary/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Hover Arrow */}
        <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">
          <span className="text-sm font-medium mr-2">Ver projeto</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-primary/5 blur-xl" />
      </div>
    </>
  );

  const containerClasses =
    "group relative block h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift cursor-pointer text-left";

  if (href) {
    return (
      <a
        href={href}
        className={containerClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link to={`/projects/${slug}`} className={containerClasses}>
      {CardContent}
    </Link>
  );
};

export default ProjectCard;
