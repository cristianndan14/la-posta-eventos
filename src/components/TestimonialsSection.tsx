import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martín G.",
    barrio: "Palermo",
    text: "Contratamos el asado completo para 50 personas y fue un éxito. El parrillero llegó puntual, la carne espectacular. ¡Todos preguntaron por La Posta!",
    stars: 5,
  },
  {
    name: "Lucía R.",
    barrio: "Belgrano",
    text: "Los sándwiches de milanesa para el cumple de mi hijo volaron. La milanga napolitana es un manjar. Repetiría sin dudarlo.",
    stars: 5,
  },
  {
    name: "Diego F.",
    barrio: "Caballito",
    text: "Pedimos 10 docenas de empanadas para una reunión de oficina. Llegaron calentitas y la masa era increíble. Servicio impecable.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-widest text-primary font-semibold">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 font-body">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.barrio}, CABA</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
