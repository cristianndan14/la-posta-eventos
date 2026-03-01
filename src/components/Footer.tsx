import { Instagram, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/logo-laposta.jpg";
import FlameIcon from "@/components/FlameIcon";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 section-padding !py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo de La Posta Eventos – Catering CABA" className="w-10 h-10 rounded-full" />
          <div className="flex items-center gap-1">
            <FlameIcon className="w-5 h-5" />
            <span className="font-display text-2xl text-background">La Posta Eventos</span>
          </div>
        </div>
        <p className="text-sm text-center font-hand">
          Asado · Milanesas Tucumanas · Empanadas · Hamburguesas · Catering en CABA
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="tel:+5491121639741" aria-label="Teléfono" className="hover:text-primary transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a href="mailto:hola@laposta.com.ar" aria-label="Email" className="hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-background/10 text-center text-xs text-background/40">
        <p className="mb-1 font-hand">Pedidos: 11-2163-9741 / 11-3680-5439</p>
        <p>© {new Date().getFullYear()} La Posta Eventos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
