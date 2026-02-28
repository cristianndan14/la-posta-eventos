import { Beef, Sandwich, Cookie, CircleDot } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  note?: string;
}

const categories: MenuCategory[] = [
  {
    icon: Sandwich,
    title: "Sanguches",
    items: [
      { name: "Sanguche de Milanesa", price: "$10.000" },
      { name: "Sanguche de Bondiola", price: "$10.000" },
      { name: "Sanguche de Vacío", price: "$10.000" },
      { name: "Chori-pan", price: "$5.000" },
      { name: "Chinchulín", price: "$4.500" },
    ],
    note: "En pan chico $6.000 · Adicional papas $2.000",
  },
  {
    icon: Beef,
    title: "Hamburguesas",
    subtitle: "Todas con papas fritas",
    items: [
      { name: "Simple clásica (lechuga y tomate)", price: "$6.000" },
      { name: "Simple con J, Q, H", price: "$6.800" },
      { name: "Simple con J, Q, H, Cheddar, Bacon", price: "$7.200" },
      { name: "Doble clásica", price: "$8.000" },
      { name: "Doble con J, Q, H", price: "$9.800" },
      { name: "Doble con J, Q, H, Cheddar, Bacon", price: "$10.500" },
      { name: "Triple clásica", price: "$9.800" },
      { name: "Triple con J, Q, H", price: "$10.800" },
      { name: "Triple con J, Q, H, Cheddar, Bacon", price: "$11.500" },
    ],
  },
  {
    icon: Cookie,
    title: "Consultá también",
    items: [
      { name: "Empanadas tucumanas", price: "Consultá" },
      { name: "Tequeños & Panchuques", price: "Consultá" },
      { name: "Bebidas frías", price: "Consultá" },
      { name: "Hielo", price: "Consultá" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section className="section-padding" id="menu">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
            Nuestro Menú
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
            La Carta
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-card-foreground tracking-wide">
                    {cat.title}
                  </h3>
                  {cat.subtitle && (
                    <p className="text-xs text-primary font-body font-semibold uppercase tracking-wide normal-case">
                      {cat.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-2 text-sm">
                    <span className="flex items-start gap-2 text-card-foreground/80 font-body normal-case">
                      <CircleDot className="w-3 h-3 text-primary mt-1.5 flex-shrink-0" />
                      {item.name}
                    </span>
                    <span className="font-display text-base text-primary whitespace-nowrap tracking-wide">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
              {cat.note && (
                <p className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground font-body normal-case italic">
                  {cat.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
