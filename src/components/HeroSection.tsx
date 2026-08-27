import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink, getCompanyInfo } from "@/utils/contact";

interface HeroSectionProps {
  heroSrc: string;
  logoSrc: string;
}

const HeroSection = ({ heroSrc, logoSrc }: HeroSectionProps) => {
  const { name } = getCompanyInfo();
  const budgetWhatsAppLink = generateWhatsAppLink("¡Hola! Quiero cotizar un evento");
  const contactWhatsAppLink = generateWhatsAppLink();

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
          alt={`Logo de ${name} – Catering para eventos familiares en CABA`}
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/50 shadow-2xl mx-auto mb-8 bg-background/95"
        />
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary-foreground leading-none mb-4 tracking-wider">
          {name} <span className="text-gradient-brand">Eventos</span>
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
            <a href={budgetWhatsAppLink} target="_blank" rel="noopener noreferrer">
              <Flame className="w-5 h-5 mr-2" />
              Pedí tu presupuesto
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d] text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href={contactWhatsAppLink} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.22-.644.066-.297-.154-1.255-.491-2.39-1.475-.882-.81-1.437-1.755-1.602-2.914-.087-.657-.042-1.273.189-1.855.231-.582.662-1.089 1.289-1.52.627-.431 1.349-.548 2.154-.348.805.2 1.694.751 2.669 1.552.975.801 1.744 1.752 2.306 2.852.562 1.1.84 2.25.834 3.45-.006 1.2-.28 2.35-.82 3.45z" />
                <path d="M20.52 3.449C18.24 1.245 15.589 0 12.765 0 6.48 0 1.231 5.228 1.231 11.524c0 2.05.533 4.063 1.544 5.834L1.07 23.798l6.3-1.653c1.712.927 3.663 1.416 5.694 1.416h.006c6.287 0 11.536-5.228 11.536-11.524 0-2.973-.899-5.756-2.599-8.104zm-8.42 18.718h-.004c-1.747 0-3.437-.442-4.958-1.28l-.356-.21-3.691.969.984-3.591-.23-.365c-.876-1.39-1.34-2.996-1.34-4.723 0-5.22 4.247-9.467 9.467-9.467 2.528 0 4.9.973 6.687 2.745 1.787 1.772 2.77 4.13 2.77 6.648 0 5.22-4.247 9.467-9.467 9.467z" />
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
