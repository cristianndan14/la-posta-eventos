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
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.22-.644.066-.297-.154-1.255-.491-2.39-1.475-1.135-1.045-1.9-2.332-2.074-2.629-.173-.297-.018-.457.13-.604.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.918-2.206-.243-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.271.297-1.036 1.011-1.036 2.463 0 1.452 1.061 2.859 1.209 3.058.149.198 2.094 3.2 5.074 4.487.709.306 1.262.489 1.694.627.71.226 1.356.194 1.865.118.569-.085 1.75-.714 1.997-1.403.248-.689.248-1.289.173-1.403-.074-.114-.272-.181-.57-.297z" />
                <path d="M20.52 3.449C18.24 1.245 15.589 0 12.765 0 6.48 0 1.231 5.228 1.231 11.524c0 2.050.533 4.063 1.544 5.834L1.07 23.798l6.3-1.653c1.712.927 3.663 1.416 5.694 1.416h.006c6.287 0 11.435-5.228 11.435-11.524 0-3.065-1.191-5.945-3.357-8.104z" />
              </svg>
              Escribinos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
