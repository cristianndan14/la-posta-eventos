import { Users, CalendarCheck, MapPin, Star } from "lucide-react";

const stats = [
  { icon: CalendarCheck, value: "500+", label: "Eventos realizados" },
  { icon: Users, value: "15.000+", label: "Invitados satisfechos" },
  { icon: MapPin, value: "48", label: "Barrios de CABA" },
  { icon: Star, value: "4.9", label: "Puntuación promedio" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-4xl md:text-5xl font-display font-bold text-background mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-background/60 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
