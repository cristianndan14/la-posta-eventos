import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿En qué zonas de CABA hacen delivery?",
    a: "Cubrimos los 48 barrios de CABA. Desde Palermo hasta La Boca, de Belgrano a Barracas. También llegamos a zona norte y oeste de GBA con un pequeño adicional de logística.",
  },
  {
    q: "¿Cuánto tiempo antes debo hacer el pedido?",
    a: "Recomendamos reservar con al menos 48 horas de anticipación para eventos grandes. Para pedidos más chicos (sanguches, hamburguesas, empanadas) podemos aceptar con 24 horas según disponibilidad.",
  },
  {
    q: "¿Incluyen parrillero para eventos?",
    a: "Sí, para eventos grandes incluimos parrillero profesional, carbón, parrilla portátil y todos los utensilios. Vos solo ponés el espacio y los invitados.",
  },
  {
    q: "¿Tienen opciones además de carne?",
    a: "Sí. Tenemos empanadas de verdura, hamburguesas con opciones personalizables y tequeños. Consultanos por opciones vegetarianas.",
  },
  {
    q: "¿Cómo hago un pedido?",
    a: "Podés contactarnos por WhatsApp al 11-2163-9741 o llamarnos al 11-3680-5439. Te armamos el presupuesto en el momento.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
            FAQ
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border-2 border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold text-card-foreground hover:no-underline py-5 tracking-wide">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 font-body normal-case">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
