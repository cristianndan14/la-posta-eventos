/**
 * Utilidades para acceder a información de contacto e instancias
 * Centraliza el acceso a las constantes de contacto
 */

import { CONTACT, COVERAGE_ZONES, EVENT_TYPES, SERVICES, COMPANY } from "./contact";

/**
 * Hook/Función que retorna los datos de contacto principales
 */
export function getContactInfo() {
  return {
    phone: CONTACT.PHONE,
    phoneDisplay: CONTACT.PHONE_DISPLAY,
    whatsapp: CONTACT.WHATSAPP,
    whatsappLink: CONTACT.WHATSAPP_LINK,
    email: CONTACT.EMAIL,
    emailSupport: CONTACT.EMAIL_SUPPORT,
    emailBookings: CONTACT.EMAIL_BOOKINGS,
    address: CONTACT.ADDRESS,
    businessHours: CONTACT.BUSINESS_HOURS,
    socialMedia: CONTACT.SOCIAL_MEDIA,
    location: CONTACT.LOCATION,
  };
}

/**
 * Retorna la información de la empresa
 */
export function getCompanyInfo() {
  return {
    name: COMPANY.NAME,
    legalName: COMPANY.LEGAL_NAME,
    shortDescription: COMPANY.SHORT_DESCRIPTION,
    longDescription: COMPANY.LONG_DESCRIPTION,
    foundedYear: COMPANY.FOUNDED_YEAR,
    website: COMPANY.WEBSITE,
  };
}

/**
 * Retorna un array simple de zonas (solo nombres para mostrar)
 */
export function getCoverageZonesList(): string[] {
  return COVERAGE_ZONES.map((zone) => zone.displayName);
}

/**
 * Genera un link de WhatsApp con mensaje personalizado
 * @param customMessage - Mensaje personalizado (opcional)
 * @returns URL de WhatsApp
 */
export function generateWhatsAppLink(customMessage?: string): string {
  const message = customMessage || CONTACT.WHATSAPP_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = CONTACT.WHATSAPP.replace(/[^0-9]/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Genera un link de correo electrónico
 * @param subject - Asunto del email
 * @param body - Cuerpo del email
 * @returns URL mailto
 */
export function generateEmailLink(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);

  const queryString = params.toString();
  return `mailto:${CONTACT.EMAIL}${queryString ? "?" + queryString : ""}`;
}

/**
 * Retorna el link de teléfono
 */
export function getPhoneLink(): string {
  return `tel:${CONTACT.PHONE.replace(/\s/g, "")}`;
}

/**
 * Verifica si está dentro del horario de atención
 */
export function isBusinessHours(date: Date = new Date()): boolean {
  const dayOfWeek = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = hours + minutes / 60;

  // Domingo = 0, Lunes = 1, ..., Sábado = 6
  if (dayOfWeek === 0) return false; // Domingo

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Lunes a Viernes: 09:00 - 18:00
    return currentTime >= 9 && currentTime < 18;
  }

  if (dayOfWeek === 6) {
    // Sábado: 10:00 - 17:00
    return currentTime >= 10 && currentTime < 17;
  }

  return false;
}

// Re-exportar constantes principales para acceso directo si es necesario
export { CONTACT, COVERAGE_ZONES, EVENT_TYPES, SERVICES, COMPANY };
