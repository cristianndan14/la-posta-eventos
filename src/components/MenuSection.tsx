import { Flame as FireIcon, Fish, Sandwich, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/utils/contact";

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
    title: "Parrilla",
    description: "Asado tradicional argentino con parrillero profesional para tu evento.",
    items: ["Vacío", "Entraña", "Chorizo", "Morcilla", "Tira de asado", "Pollo", "Ensaladas y guarniciones"],
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
    icon: Fish,
    title: "Sushi & Sushi Burger",
    description: "Lo nuevo de La Posta: rolls frescos, combinados y nuestra sushi burger de autor.",
    items: ["Rolls clásicos", "Niguiri", "Combinados", "Sushi Burger", "Opciones veggie"],
    featured: true,
  },
  {
    icon: Sandwich,
    title: "Sanguches de Milanesa Tucumana",
    description: "Nuestro clásico estrella. Milanesas gigantes estilo tucumano en pan casero.",
    items: ["Milanesa completa", "Con lechuga y tomate", "Con jamón y queso", "En pan casero artesanal"],
    featured: true,
  },
];

const extras = ["Hamburguesas", "Bondiola", "Vacío en pan", "Choripán", "Tequeños", "Panchuques", "Bebidas frías", "Hielo"];

const MenuSection = () => {
  const menuWhatsAppLink = generateWhatsAppLink("¡Hola! Quiero armar el menú para mi evento");

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
            <a href={menuWhatsAppLink} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.48-1.76-.098-.145-.189-.15-.45-.052-.261.099-1.357.534-1.605.596-.248.062-.428.062-.606-.152-.178-.213-.686-.852-.84-1.143-.154-.29-.309-.25-.451-.025-1.617 1.897-1.271 3.623.098 5.07 1.369 1.447 3.8 2.951 9.267 1.336 1.05.335 1.987.251 2.731-.124.744-.374 1.148-.966 1.148-1.89 0-.524-.141-.915-.907-1.417z" />
                <path d="M20.52 3.449C18.24 1.245 15.589 0 12.765 0 6.48 0 1.231 5.228 1.231 11.524c0 2.050.533 4.063 1.544 5.834L1.07 23.798l6.3-1.653c1.712.927 3.663 1.416 5.694 1.416h.006c6.287 0 11.536-5.228 11.536-11.524 0-3.083-1.295-5.974-3.646-8.102z" />
              </svg>
              Pedí tu presupuesto
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
