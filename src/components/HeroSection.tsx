import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfilePhoto from "@/assets/profile.png";
import CV from "@/assets/cv.pdf";
const typingPhrases = [
  "Full-Stack Developer",
  "React & Vue Specialist",
  "Building scalable software",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < phrase.length) {
          setCharIndex(charIndex + 1);
        } else if (!isDeleting && charIndex === phrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % typingPhrases.length);
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Profile photo placeholder */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          {/* === SUBSTITUIR FOTO DE PERFIL AQUI === */}
          <div className="w-44 h-44 rounded-full border-2 border-primary glow flex items-center justify-center bg-secondary animate-pulse-glow">
            <img
              src={ProfilePhoto}
              alt="Foto de perfil"
              className="w-full rounded-full"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-heading text-primary mb-4 tracking-widest uppercase"
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
        >
          Jeferson de{" "}
          <span className="text-gradient">Oliveira</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-8 mb-8"
        >
          <span className="font-heading text-lg md:text-xl text-muted-foreground">
            {typingPhrases[phraseIndex].substring(0, charIndex)}
          </span>
          <span className="typing-cursor" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow font-heading text-sm"
          >
            <a href="#projetos">Ver Projetos</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 font-heading text-sm"
          >
            {/** === LINK DO CV AQUI === */}
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-5"
        >
          <a
            href="https://www.linkedin.com/in/jeferson-de-oliveira-santos-b149b61b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/Jeffsantos3002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:jefersondeoliveira062@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 animate-float"
        >
          <a href="#sobre" aria-label="Scroll down">
            <ChevronDown className="text-muted-foreground" size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
