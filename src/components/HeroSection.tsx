import { Flame, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-asado.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Asado argentino premium con chorizo, carne y empanadas caseras – Catering La Posta en CABA"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-foreground/10 backdrop-blur-sm px-4 py-2 mb-8">
          <Flame className="w-4 h-4 text-primary" />
          <span className="text-sm font-body text-primary-foreground tracking-wide uppercase">
            Catering en CABA
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6">
          En el sabor, tenemos{" "}
          <span className="text-gradient-brand">La Posta</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Asado a domicilio, sándwiches de milanesa para eventos y empanadas caseras.
          Llevamos el mejor catering argentino a tu fiesta en Buenos Aires.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full">
            <Flame className="w-5 h-5 mr-2" />
            Pedí tu presupuesto
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-full"
          >
            <Phone className="w-5 h-5 mr-2" />
            Llamanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
