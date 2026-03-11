import { MapPin, Briefcase, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const infoCards = [
  { icon: MapPin, label: "Localização", value: "Aracaju/SE" },
  { icon: Briefcase, label: "Experiência", value: "3+ anos" },
  { icon: Code2, label: "Foco", value: "Full-Stack" },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 relative">
    <div className="container mx-auto px-4">
      <SectionHeading tag="// sobre mim" title="Quem sou eu" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: photo + info cards */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col items-center gap-6">


            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="glass-card rounded-lg p-3 text-center border-glow"
                >
                  <card.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">{card.label}</p>
                  <p className="text-sm font-heading font-semibold text-foreground">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: text */}
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Desenvolvedor full-stack com mais de 3 anos de experiência, apaixonado por construir
            aplicações escaláveis e robustas. Trabalho com JavaScript, TypeScript, React, Vue,
            Java/Spring e muito mais. Focado em qualidade de código, clean architecture e
            experiências de usuário excepcionais.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mt-4">
            Atualmente na <span className="text-primary font-semibold">SoftGreen</span>, liderando
            projetos de IoT e monitoramento industrial. Proativo e adaptável, busco um ambiente
            que incentive a inovação e a colaboração.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
