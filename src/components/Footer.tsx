const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading text-sm text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span className="text-gradient">Jeferson de Oliveira</span>. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
