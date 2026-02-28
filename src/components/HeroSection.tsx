import { Flame, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-asado.webp";
import logoImage from "@/assets/logo-laposta.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Parrilla completa de La Posta Eventos: sanguches de milanesa, choripán, bondiola y hamburguesas en CABA"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <img
          src={logoImage}
          alt="Logo de La Posta Eventos – Parrilla y catering en CABA"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/50 shadow-2xl mx-auto mb-8 bg-background/95"
        />
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground leading-none mb-4 tracking-wider">
          La Posta <span className="text-gradient-brand">Eventos</span>
        </h1>
        <p className="font-serif text-xl md:text-2xl text-primary-foreground/80 italic max-w-2xl mx-auto mb-4 normal-case tracking-normal">
          En el sabor, tenemos La Posta
        </p>
        <p className="text-base md:text-lg text-primary-foreground/60 font-body max-w-xl mx-auto mb-10 normal-case">
          Sanguches de milanesa · Choripán · Bondiola · Hamburguesas · Empanadas tucumanas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741" target="_blank" rel="noopener noreferrer">
              <Flame className="w-5 h-5 mr-2" />
              Pedí tu presupuesto
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="tel:+5491136805439">
              <Phone className="w-5 h-5 mr-2" />
              Llamanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
