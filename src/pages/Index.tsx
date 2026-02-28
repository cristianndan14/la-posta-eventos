import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MenuSection from "@/components/MenuSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "La Posta Eventos",
  description:
    "Catering en CABA: sanguches de milanesa, hamburguesas, choripán, bondiola y empanadas tucumanas para eventos en Buenos Aires.",
  url: "https://laposta.com.ar",
  telephone: "+54-11-2163-9741",
  email: "hola@laposta.com.ar",
  servesCuisine: "Argentine",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "City",
    name: "Buenos Aires",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
};

const Index = () => {
  useEffect(() => {
    document.title = "La Posta Eventos | Catering de Milanesas y Parrilla en CABA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Catering en CABA: asado a domicilio, sándwiches de milanesa para eventos y empanadas caseras. Pedí tu presupuesto hoy.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Catering en CABA: asado a domicilio, sándwiches de milanesa para eventos y empanadas caseras. Pedí tu presupuesto hoy.";
      document.head.appendChild(meta);
    }

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <MenuSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
