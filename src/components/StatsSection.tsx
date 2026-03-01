import { Users, CalendarCheck, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlameIcon from "@/components/FlameIcon";

const stats = [
  { icon: CalendarCheck, value: "500+", label: "Eventos familiares" },
  { icon: Users, value: "15.000+", label: "Invitados felices" },
  { icon: MapPin, value: "CABA", label: "y Gran Buenos Aires" },
  { icon: Star, value: "4.9", label: "Puntuación promedio" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Decorative flames */}
      <div className="absolute top-4 left-8 opacity-10">
        <FlameIcon className="w-24 h-24" />
      </div>
      <div className="absolute bottom-4 right-8 opacity-10">
        <FlameIcon className="w-20 h-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-5xl md:text-6xl font-display text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="font-hand text-xl text-white/70 mb-4">
            Cumpleaños, casamientos, reuniones, fiestas de egresados y más
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-brand-glow text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741?text=Hola!%20Quiero%20cotizar%20mi%20evento%20familiar" target="_blank" rel="noopener noreferrer">
              🔥 Cotizá tu evento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
