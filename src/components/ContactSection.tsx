import { useState, FormEvent } from "react";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulated send
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada com sucesso!");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading tag="// contato" title="Vamos Conversar?" />

        <ScrollReveal>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Vamos construir algo incrível juntos? Entre em contato e vamos transformar ideias em
            realidade.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-heading text-muted-foreground mb-1 block">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-heading text-muted-foreground mb-1 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-heading text-muted-foreground mb-1 block">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground text-sm font-body focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow font-heading"
              >
                {sending ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-6 justify-center">
              <a
                href="mailto:jefersondeoliveira062@gmail.com"
                className="glass-card rounded-xl p-4 border-glow flex items-center gap-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    jefersondeoliveira062@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+5579998340459"
                className="glass-card rounded-xl p-4 border-glow flex items-center gap-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Telefone</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    (79) 99834-0459
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Jeffsantos3002"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border-glow flex items-center gap-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    /Jeffsantos3002
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jeferson-de-oliveira-santos-b149b61b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border-glow flex items-center gap-4 hover:border-primary/30 transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                    jeferson-de-oliveira-santos
                  </p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
