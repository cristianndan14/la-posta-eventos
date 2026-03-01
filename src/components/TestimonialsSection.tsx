import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Martín G.",
    event: "Cumpleaños de 50",
    text: "Contratamos el asado completo para 60 personas. El parrillero llegó temprano, la carne espectacular y las empanadas tucumanas volaron. ¡Todos preguntaron por La Posta!",
    stars: 5,
  },
  {
    name: "Lucía R.",
    event: "Casamiento",
    text: "Los sanguches de milanesa tucumana fueron el hit de la noche. Servicio impecable, llegaron a tiempo y la calidad es insuperable. Ya los recomendamos a toda la familia.",
    stars: 5,
  },
  {
    name: "Diego F.",
    event: "Fiesta de egresados",
    text: "Hamburguesas y choripanes para 80 chicos. Todo perfecto, rápido y riquísimo. Los padres también quedaron encantados. Sin duda repetimos.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted" id="testimonios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
            Eventos reales
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              <p className="text-sm text-muted-foreground font-body normal-case">{t.event}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground font-body mb-4 normal-case">
            ¿Querés que tu evento sea el próximo éxito?
          </p>
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d] text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741?text=Hola!%20Vi%20los%20testimonios%20y%20quiero%20cotizar%20mi%20evento" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribinos por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
