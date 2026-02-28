import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martín G.",
    barrio: "Palermo",
    text: "Pedimos sanguches de milanesa y hamburguesas para 40 personas. Llegaron en tiempo, calentitos, y volaron en 20 minutos. ¡Todos preguntaron por La Posta!",
    stars: 5,
  },
  {
    name: "Lucía R.",
    barrio: "Belgrano",
    text: "El choripán y la bondiola son de otro nivel. Lo contratamos para un cumple y ya estamos reservando para el próximo evento. Servicio impecable.",
    stars: 5,
  },
  {
    name: "Diego F.",
    barrio: "Caballito",
    text: "Las hamburguesas dobles con cheddar y bacon son adictivas. Y las empanadas tucumanas de postre... Precio justo y calidad top.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
            Testimonios
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
            Nuestros Clientes
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-8 border-2 border-border hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 font-body normal-case">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-lg text-foreground tracking-wide">{t.name}</p>
              <p className="text-sm text-muted-foreground font-body normal-case">{t.barrio}, CABA</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
