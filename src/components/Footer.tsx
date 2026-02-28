import { Flame, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 section-padding !py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-primary" />
          <span className="font-display font-bold text-xl text-background">La Posta</span>
        </div>
        <p className="text-sm text-center">
          Catering en CABA · Asado a domicilio · Sándwiches de milanesa · Empanadas caseras
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="tel:+5491100000000" aria-label="Teléfono" className="hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:hola@laposta.com.ar" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-background/10 text-center text-xs text-background/40">
        © {new Date().getFullYear()} La Posta Catering. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
