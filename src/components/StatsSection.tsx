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
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-5xl md:text-6xl font-display font-bold text-background mb-1 tracking-wider">
                {stat.value}
              </p>
              <p className="text-sm text-background/50 font-body normal-case">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
