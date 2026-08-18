import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  heroSrc: string;
  logoSrc: string;
}

const HeroSection = ({ heroSrc, logoSrc }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroSrc}
        alt="Asado y catering para eventos familiares de La Posta Eventos en CABA"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <img
          src={logoSrc}
          alt="Logo de La Posta Eventos – Catering para eventos familiares en CABA"
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/50 shadow-2xl mx-auto mb-8 bg-background/95"
        />
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground leading-none mb-4 tracking-wider">
          La Posta <span className="text-gradient-brand">Eventos</span>
        </h1>
        <p className="font-serif text-xl md:text-2xl text-primary-foreground/80 italic max-w-2xl mx-auto mb-4 normal-case tracking-normal">
          Catering de parrilla, milanesas, empanadas y sushi para tus eventos
        </p>
        <p className="text-base md:text-lg text-primary-foreground/60 font-body max-w-xl mx-auto mb-10 normal-case">
          Parrilla · Sanguches de milanesa tucumana · Empanadas tucumanas · Sushi &amp; Sushi Burger
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/541136805439?text=Hola!%20Quiero%20cotizar%20un%20evento" target="_blank" rel="noopener noreferrer">
              <Flame className="w-5 h-5 mr-2" />
              Pedí tu presupuesto
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d] text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/541136805439" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.[...]
              Escribinos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
