import { Flame as FireIcon, Beef, Sandwich, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
}

const categories: MenuCategory[] = [
  {
    icon: FireIcon,
    title: "Asado Completo",
    description: "Parrilla tradicional argentina con parrillero profesional para tu evento familiar.",
    items: ["Vacío", "Entraña", "Chorizo", "Morcilla", "Tira de asado", "Pollo", "Ensaladas y guarniciones"],
    featured: true,
  },
  {
    icon: Sandwich,
    title: "Sanguches de Milanesa Tucumana",
    description: "Nuestro clásico estrella. Milanesas gigantes estilo tucumano en pan casero.",
    items: ["Milanesa completa", "Con lechuga y tomate", "Con jamón y queso", "En pan casero artesanal"],
    featured: true,
  },
  {
    icon: Cookie,
    title: "Empanadas Tucumanas",
    description: "Hechas a mano con receta tradicional del norte argentino.",
    items: ["Carne cortada a cuchillo", "Pollo", "Jamón y queso", "Verdura"],
    featured: true,
  },
  {
    icon: Beef,
    title: "Hamburguesas",
    description: "Medallones caseros a la parrilla con todas las opciones.",
    items: ["Simple", "Doble", "Triple", "Con cheddar y bacon", "Todas con papas fritas"],
    featured: true,
  },
];

const extras = ["Bondiola", "Vacío en pan", "Choripán", "Tequeños", "Panchuques", "Bebidas frías", "Hielo"];

const MenuSection = () => {
  return (
    <section className="section-padding" id="menu">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
            Para tu evento familiar
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
            Nuestro Menú
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto normal-case">
            Todo lo que necesitás para que tus invitados se vayan felices. Armamos combos a medida según la cantidad de personas.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-card-foreground tracking-wide">
                  {cat.title}
                </h3>
              </div>
              <p className="text-muted-foreground font-body text-sm mb-4 normal-case">{cat.description}</p>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-xs font-body bg-muted text-muted-foreground px-3 py-1.5 rounded-full normal-case">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 text-center mb-12">
          <h3 className="font-display text-2xl text-card-foreground tracking-wide mb-4">
            También ofrecemos
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {extras.map((item) => (
              <span key={item} className="text-sm font-body bg-muted text-muted-foreground px-4 py-2 rounded-full normal-case">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground font-body mb-4 normal-case">
            ¿Querés armar el menú perfecto para tu evento? Te hacemos un presupuesto a medida.
          </p>
          <Button
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#1ebe5d] text-base font-semibold px-8 py-6 rounded-full uppercase tracking-wide"
            asChild
          >
            <a href="https://wa.me/5491121639741?text=Hola!%20Quiero%20armar%20el%20menú%20para%20mi%20evento" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Pedí tu presupuesto
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
