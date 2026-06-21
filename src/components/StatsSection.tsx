import { Button } from "@/components/ui/button";

const StatsSection = () => {
  return (
    <section className="section-padding bg-foreground !py-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif text-2xl md:text-3xl text-background italic mb-3 normal-case tracking-normal">
          Cumpleaños, casamientos, reuniones, egresados y más
        </p>
        <p className="text-background/60 font-body mb-8 normal-case">
          Armamos el menú a medida según tu evento y la cantidad de invitados.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
          asChild
        >
          <a href="https://wa.me/5491121639741?text=Hola!%20Quiero%20cotizar%20mi%20evento" target="_blank" rel="noopener noreferrer">
            Cotizá tu evento
          </a>
        </Button>
      </div>
    </section>
  );
};

export default StatsSection;
