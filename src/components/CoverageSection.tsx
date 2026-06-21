import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const zones = [
  "CABA",
  "Zona Sur GBA",
  "Monte Grande",
  "9 de Abril",
  "Esteban Echeverría",
  "Luis Guillón",
  "Canning",
  "Ezeiza",
];

const CoverageSection = () => {
  return (
    <section className="section-padding" id="zonas">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
          Dónde servimos
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
          Llegamos a tu zona
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        <p className="text-muted-foreground font-body mt-6 max-w-xl mx-auto normal-case">
          Hacemos catering para eventos en CABA y toda la zona sur del Gran Buenos Aires.
        </p>

        <ul className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
          {zones.map((zone) => (
            <li
              key={zone}
              className="flex items-center gap-1.5 text-sm font-body bg-card border-2 border-border text-card-foreground px-4 py-2 rounded-full normal-case"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {zone}
            </li>
          ))}
        </ul>

        <p className="text-sm text-muted-foreground font-body mb-6 normal-case">
          ¿Tu zona no está en la lista? Para localidades más alejadas puede haber un pequeño adicional de logística. Consultanos.
        </p>

        <Button
          size="lg"
          className="bg-[#25D366] text-white hover:bg-[#1ebe5d] text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
          asChild
        >
          <a
            href="https://wa.me/5491121639741?text=Hola!%20Quiero%20saber%20si%20llegan%20a%20mi%20zona"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultá por tu zona
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CoverageSection;
