import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿En qué zonas de CABA hacen delivery de catering?",
    a: "Cubrimos los 48 barrios de la Ciudad Autónoma de Buenos Aires. Desde Palermo hasta La Boca, de Belgrano a Barracas. También llegamos a zona norte y oeste de GBA con un pequeño adicional de logística.",
  },
  {
    q: "¿Cuánto tiempo antes debo hacer el pedido?",
    a: "Recomendamos reservar con al menos 72 horas de anticipación para asados completos. Para empanadas y sándwiches de milanesa, podemos aceptar pedidos con 48 horas de anticipación según disponibilidad.",
  },
  {
    q: "¿El asado incluye parrillero?",
    a: "Sí, nuestro servicio de asado a domicilio incluye parrillero profesional, carbón, parrilla portátil y todos los utensilios necesarios. Vos solo ponés el espacio y los invitados.",
  },
  {
    q: "¿Tienen opciones vegetarianas o veganas?",
    a: "Por supuesto. Ofrecemos empanadas de humita y verdura, milanesas de berenjena y opciones de provoleta y ensaladas para complementar cualquier menú.",
  },
  {
    q: "¿Cuál es el mínimo de personas para contratar?",
    a: "Para asados completos el mínimo es de 15 personas. Para sándwiches de milanesa y empanadas, no hay mínimo — podés pedir desde una docena.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-widest text-primary font-semibold">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Preguntas frecuentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold text-card-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
