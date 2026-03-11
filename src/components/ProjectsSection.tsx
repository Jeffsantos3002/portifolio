import { useState } from "react";
import { ExternalLink, Github, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import cubeeImg from "@/assets/cubee-screenshot.png";
import hiporepoImg from "@/assets/hiporepo-screenshot.png";
import connectapetImg from "@/assets/connectapet-screenshot.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

/* === ADICIONAR NOVOS PROJETOS AQUI === */
const projects: Project[] = [
  {
    title: "Cubee — Monitoramento Industrial",
    description:
      "Plataforma de monitoramento industrial em tempo real para a Indústria 5.0. Atuei como líder técnico, construindo a infraestrutura de nuvem escalável e todos os componentes da aplicação. O sistema permite visualização de dados de sensores em tempo real, alertas configuráveis e relatórios detalhados para otimização de processos fabris.",
    image: cubeeImg,
    tags: ["React.js", "IoT", "AWS", "Spring", "TypeScript", "Real-time"],
  },
  {
    title: "HipoRepo — Gestão Documental",
    description:
      "Infraestrutura para gerenciamento centralizado de documentos institucionais, com suporte a organogramas hierárquicos complexos, setores e bibliotecas digitais. A solução inclui controle de versionamento, permissões granulares de acesso e busca avançada, facilitando a organização e recuperação de informações críticas.",
    image: hiporepoImg,
    tags: ["Vue.js", "Node.js", "MySQL", "Docker"],
  },
  {
    title: "ConnectaPet — Plataforma Social Animal",
    description:
      "Aplicativo mobile de impacto social para conectar comunidades em prol do bem-estar animal, com alertas geolocalizados e feed comunitário em tempo real. Os usuários podem reportar animais perdidos, encontrar serviços veterinários próximos e interagir com outros tutores de pets na região.",
    image: connectapetImg,
    tags: ["React Native", "Firebase", "Geolocalização", "Node.js"],
  },
];

const statusColors: Record<string, string> = {
  "Em produção": "bg-primary/10 text-primary border-primary/20",
  "Open Source": "bg-blue-500/10 text-blue-400 border-blue-400/20",
  Case: "bg-amber-500/10 text-amber-400 border-amber-400/20",
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading tag="// projetos" title="Trabalhos em Destaque" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.1}>
              <div
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-xl overflow-hidden border-glow group hover:border-primary/30 transition-all duration-300 cursor-pointer h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-heading px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.demo && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-heading"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" /> Ver Detalhes
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 text-xs font-heading"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" /> GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">{selectedProject.title}</DialogTitle>
                <div className="flex gap-2 mt-2">
                  <span
                    className={`text-xs font-heading px-2 py-1 rounded-full border w-fit ${statusColors[selectedProject.status]}`}
                  >
                    {selectedProject.status}
                  </span>
                </div>
              </DialogHeader>

              <div className="mt-4 space-y-6">
                <div className="relative rounded-lg overflow-hidden aspect-video w-full border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-2">
                    Sobre o Projeto
                  </h4>
                  <DialogDescription className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                    {selectedProject.description}
                  </DialogDescription>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-2">
                    Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-heading px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {selectedProject.demo && (
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Visualizar Aplicação
                      </a>
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button asChild variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-heading">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Ver Código no GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
