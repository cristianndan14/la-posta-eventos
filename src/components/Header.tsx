import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  logoSrc: string;
}

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#como-trabajamos", label: "Cómo trabajamos" },
  { href: "#zonas", label: "Zonas" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

const Header = ({ logoSrc }: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-foreground/95 backdrop-blur border-b border-background/10">
      <nav
        aria-label="Navegación principal"
        className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16"
      >
        <a href="#inicio" className="flex items-center gap-2" aria-label="La Posta Eventos - Inicio">
          <img
            src={logoSrc}
            alt="Logo de La Posta Eventos"
            width={36}
            height={36}
            className="w-9 h-9 rounded-full border border-primary/50 bg-background/95"
          />
          <span className="font-display font-bold text-xl text-background tracking-wider">
            La Posta Eventos
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-background/70 hover:text-primary transition-colors normal-case"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5491121639741?text=Hola!%20Quiero%20pedir%20un%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground hover:bg-brand-glow text-sm font-semibold px-5 py-2.5 rounded-full uppercase tracking-wide transition-colors"
          >
            Presupuesto
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-background p-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-background/10 bg-foreground px-4 pb-4">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-body text-background/80 hover:text-primary py-3 border-b border-background/5 normal-case"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5491121639741?text=Hola!%20Quiero%20pedir%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 text-center bg-primary text-primary-foreground hover:bg-brand-glow text-sm font-semibold px-5 py-3 rounded-full uppercase tracking-wide transition-colors"
            >
              Pedí tu presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
