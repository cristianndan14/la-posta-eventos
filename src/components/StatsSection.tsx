import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/utils/contact";

const StatsSection = () => {
  const eventWhatsAppLink = generateWhatsAppLink("¡Hola! Quiero cotizar mi evento");

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
          <a href={eventWhatsAppLink} target="_blank" rel="noopener noreferrer">
            Cotizá tu evento
          </a>
        </Button>
      </div>
    </section>
  );
};

export default StatsSection;
