import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

interface Experience {
  company: string;
  role: string;
  description: string;
  stack: string[];
}

const experiences: Experience[] = [
  {
    company: "SoftGreen",
    role: "Desenvolvedor de Software",
    description:
      "Dashboards, sistemas IoT, arquitetura SOLID, APIs REST. Líder técnico no projeto Cubee de monitoramento industrial.",
    stack: ["React.js", "React Native", "Next.js", "Vue.js", "TypeScript", "Spring", "Tailwind"],
  },
  {
    company: "FANESE",
    role: "Desenvolvedor Web",
    description:
      "Sistemas institucionais, portais, novas funcionalidades. Integração de APIs com múltiplos frameworks.",
    stack: ["TypeScript", "React.js", "Vue.js", "Vuetify", "Node.js", "PHP"],
  },
  {
    company: "UFS",
    role: "Desenvolvedor de Software (Bolsista)",
    description:
      "Sistema AdminDep, metodologia Scrum, API Laravel + Vue.js, Docker, CI/CD.",
    stack: ["Laravel", "Vue.js", "Docker", "CI/CD"],
  },
  {
    company: "UFS",
    role: "Pesquisador e Desenvolvedor Web (Voluntário)",
    description:
      "Software de objetos de aprendizagem, full-stack do zero. Modelagem de banco de dados e desenvolvimento completo.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL"],
  },
  {
    company: "Softeam",
    role: "Desenvolvedor Web (Voluntário)",
    description:
      "Sites WordPress, apps mobile. Desenvolvimento front-end e mobile com React Native.",
    stack: ["React.js", "React Native", "Firebase", "Redux", "Expo"],
  },
];

const ExperienceSection = () => (
  <section id="experiencia" className="py-24 relative">
    <div className="container mx-auto px-4">
      <SectionHeading tag="// carreira" title="Experiência Profissional" />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, idx) => (
          <ScrollReveal key={`${exp.company}-${exp.role}`} delay={idx * 0.1}>
            <div className="relative pl-12 md:pl-16 pb-12 last:pb-0">
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary glow border-2 border-background" />

              <div className="glass-card rounded-xl p-5 border-glow hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {exp.company}
                  </h3>
                  <span className="text-primary font-heading text-sm">— {exp.role}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-heading px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
