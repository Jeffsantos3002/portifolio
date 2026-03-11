import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  tag: string;
  title: string;
}

const SectionHeading = ({ tag, title }: SectionHeadingProps) => (
  <ScrollReveal className="mb-12 text-center">
    <p className="font-heading text-sm text-primary tracking-widest uppercase mb-2">
      {tag}
    </p>
    <h2 className="text-3xl md:text-4xl font-heading font-bold">
      {title}
    </h2>
    <div className="w-16 h-0.5 bg-primary mx-auto mt-4 rounded-full glow" />
  </ScrollReveal>
);

export default SectionHeading;
