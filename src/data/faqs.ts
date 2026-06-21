export interface FAQ {
  q: string;
  a: string;
}

// Fuente única de verdad: usado por FAQSection.tsx (UI) y Layout.astro (FAQPage schema).
export const faqs: FAQ[] = [
  {
    q: "¿Qué tipo de eventos cubren?",
    a: "Cumpleaños, casamientos, bautismos, comuniones, fiestas de egresados, reuniones familiares, eventos corporativos y cualquier celebración donde quieras comer rico. Nos adaptamos a tu evento.",
  },
  {
    q: "¿Hacen sushi para eventos?",
    a: "Sí, sumamos sushi y sushi burger a nuestro catering. Armamos tablas de rolls, niguiris y combinados, con opciones veggie. Lo podés combinar con la parrilla o las milanesas para tener variedad en tu evento.",
  },
  {
    q: "¿Incluyen parrillero y equipamiento para el asado?",
    a: "Sí, para el servicio de parrilla incluimos parrillero profesional, parrilla portátil, carbón y todos los utensilios. Vos solo ponés el espacio y los invitados.",
  },
  {
    q: "¿Cuántas personas mínimo para contratar?",
    a: "Trabajamos desde eventos de 20 personas en adelante. Para eventos más chicos, consultanos por WhatsApp y vemos cómo ayudarte.",
  },
  {
    q: "¿En qué zonas hacen catering?",
    a: "Cubrimos CABA y la zona sur del Gran Buenos Aires: Monte Grande, 9 de Abril, Esteban Echeverría y alrededores. Para zonas más alejadas puede haber un pequeño adicional de logística; consultanos por WhatsApp.",
  },
  {
    q: "¿Cuánto tiempo antes debo reservar?",
    a: "Recomendamos reservar con al menos 48 a 72 horas de anticipación, especialmente para parrilla y eventos grandes. Contactanos lo antes posible para asegurar tu fecha.",
  },
  {
    q: "¿Cómo pido un presupuesto?",
    a: "Escribinos por WhatsApp al 11-2163-9741, contanos la fecha, cantidad de personas y qué te gustaría servir. Te armamos el presupuesto en el momento.",
  },
];
