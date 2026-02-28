import { Beef, Sandwich, Cookie } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    icon: Beef,
    title: "Asado Completo",
    description: "Asado a domicilio con parrillero incluido. Entraña, vacío, chorizo, morcilla y provoleta.",
    items: ["Entraña premium", "Vacío de ternera", "Chorizo criollo", "Provoleta a la parrilla"],
    price: "Desde $8.500/persona",
  },
  {
    icon: Sandwich,
    title: "Sándwiches de Milanesa",
    description: "Sándwiches de milanesa para eventos con pan casero, lechuga, tomate y nuestra salsa secreta.",
    items: ["Milanga completa", "Milanga napolitana", "Milanga fugazetta", "Milanga veggie"],
    price: "Desde $4.200/persona",
  },
  {
    icon: Cookie,
    title: "Empanadas Caseras",
    description: "Empanadas caseras con masa artesanal, rellenos generosos y cocción al horno de barro.",
    items: ["Carne cortada a cuchillo", "Jamón y queso", "Humita", "Verdura"],
    price: "Desde $1.800/docena",
  },
];

const MenuSection = () => {
  return (
    <section className="section-padding" id="menu">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-widest text-primary font-semibold">
            Nuestro Menú
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Tres clásicos, un solo nivel
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Todo preparado con ingredientes frescos del día y el cariño de siempre.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="group border-border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl text-card-foreground">{cat.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">{cat.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-card-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-primary font-display font-bold text-lg">{cat.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
