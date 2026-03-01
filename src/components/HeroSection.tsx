import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-asado.webp";
import logoImage from "@/assets/logo-laposta.jpg";
import FlameIcon from "@/components/FlameIcon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Asado y catering para eventos familiares de La Posta Eventos en CABA"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <img
          src={logoImage}
          alt="Logo de La Posta Eventos – Catering para eventos familiares en CABA"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-2xl mx-auto mb-8"
        />

        <div className="flex items-center justify-center gap-2 mb-4">
          <FlameIcon className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-wide">
            La Posta <span className="text-primary">Eventos</span>
          </h1>
          <FlameIcon className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        <p className="font-hand text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto mb-4">
          Catering de asado y milanesas tucumanas para tus eventos familiares
        </p>
        <p className="text-base md:text-lg text-white/60 font-body max-w-xl mx-auto mb-10">
          Asado completo · Sanguches de milanesa tucumana · Empanadas tucumanas · Hamburguesas
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741?text=Hola!%20Quiero%20cotizar%20un%20evento" target="_blank" rel="noopener noreferrer">
              🔥 Pedí tu presupuesto
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d] text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
