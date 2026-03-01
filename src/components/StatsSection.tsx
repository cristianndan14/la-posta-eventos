import { Users, CalendarCheck, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: CalendarCheck, value: "500+", label: "Eventos familiares" },
  { icon: Users, value: "15.000+", label: "Invitados felices" },
  { icon: MapPin, value: "CABA", label: "y Gran Buenos Aires" },
  { icon: Star, value: "4.9", label: "Puntuación promedio" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-5xl md:text-6xl font-display font-bold text-background mb-1 tracking-wider">
                {stat.value}
              </p>
              <p className="text-sm text-background/50 font-body normal-case">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-background/60 font-body mb-4 normal-case">
            Cumpleaños, casamientos, reuniones, fiestas de egresados y más
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741?text=Hola!%20Quiero%20cotizar%20mi%20evento%20familiar" target="_blank" rel="noopener noreferrer">
              Cotizá tu evento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
