import { generateEmailLink, generateWhatsAppLink, getContactInfo, getCompanyInfo } from "@/utils/contact";

interface FooterProps {
  logoSrc: string;
}

const Footer = ({ logoSrc }: FooterProps) => {
  const { email, phoneDisplay, socialMedia } = getContactInfo();
  const { name } = getCompanyInfo();

  return (
    <footer className="bg-foreground text-background/70 section-padding !py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt={`Logo de ${name} – Catering CABA`} width={40} height={40} className="w-10 h-10 rounded-full bg-background/95" />
          <span className="font-display font-bold text-2xl text-background tracking-wider">{name}</span>
        </div>
        <p className="text-sm text-center normal-case">
          Parrilla · Empanadas · Sushi &amp; Sushi Burger · Milanesas · Catering en CABA y zona sur
        </p>
        <div className="flex items-center gap-4">
          <a href={socialMedia.INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.203 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
          </a>
          <a href={`tel:${phoneDisplay}`} aria-label="Teléfono" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.707 12.293a.999.999 0 0 0-1.414 0L15.586 13.414a.999.999 0 0 0 0 1.414l1.414 1.414a.999.999 0 1 0 1.414-1.414l-1.414-1.414a.999.999 0 0 0 0-1.414zM7.707 12.293a.999.999 0 0 0-1.414 0L4.879 14.12a.999.999 0 1 0 1.414 1.414l1.414-1.414a.999.999 0 0 0 0-1.414zM6.121 4.879a.999.999 0 1 0-1.414-1.414L2.293 6.293a.999.999 0 1 0 1.414 1.414l1.414-1.414zM3 11a8 8 0 0 0 8 8 8.008 8.008 0 0 0 5.584-2.189l1.414-1.414a.999.999 0 1 0-1.414-1.414l-1.414 1.414A6.016 6.016 0 0 1 11 17a6 6 0 1 1 0-12 6.016 6.016 0 0 1 4.17 1.586l1.414-1.414a.999.999 0 1 0-1.414-1.414L15.584 5.189A8.008 8.008 0 0 0 11 3a8 8 0 0 0-8 8z"/>
            </svg>
          </a>
          <a href={generateEmailLink()} aria-label="Email" className="hover:text-primary transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-background/10 text-center text-xs text-background/40 normal-case">
        <p className="mb-1">Pedidos: {phoneDisplay}</p>
        <p>© {new Date().getFullYear()} {name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
