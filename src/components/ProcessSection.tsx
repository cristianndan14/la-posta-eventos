import { MessageCircle, FileText, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Escribinos",
    description: "Contanos la fecha, el lugar y cuántos invitados son. Por WhatsApp, rápido y sin vueltas.",
  },
  {
    icon: FileText,
    title: "Recibí tu presupuesto",
    description: "Te lo pasamos cerrado por WhatsApp en minutos, sin compromiso y sin sorpresas en la factura.",
  },
  {
    icon: PartyPopper,
    title: "Disfrutá tu evento",
    description: "Llegamos, cocinamos y dejamos todo listo. Vos solo te ocupás de recibir a tus invitados.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-muted" id="como-trabajamos">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-body uppercase tracking-[0.2em] text-primary font-semibold normal-case">
            Simple y sin vueltas
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mt-3">
            Cómo trabajamos
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <ol className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="relative bg-background border-2 border-border rounded-2xl p-8 text-center">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-display text-lg flex items-center justify-center">
                {i + 1}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground tracking-wide mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm normal-case">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
