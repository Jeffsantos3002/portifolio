import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    institution: "Universidade Federal de Sergipe",
    degree: "Bacharel em Sistemas de Informação",
    period: "2021 – 2026",
  }
];

const EducationSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <SectionHeading tag="// educação" title="Formação Acadêmica" />

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {education.map((edu, idx) => (
          <ScrollReveal key={edu.institution} delay={idx * 0.1}>
            <div className="glass-card rounded-xl p-6 border-glow hover:border-primary/20 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                {edu.institution}
              </h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              <p className="text-xs text-primary font-heading mt-2">{edu.period}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
