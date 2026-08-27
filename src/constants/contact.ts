/**
 * Constantes centralizadas de contacto e información de la empresa
 * La Posta Eventos
 *
 * Este archivo contiene toda la información de contacto, datos de la empresa
 * y zonas de cobertura que se exponen en la página web.
 */

// ============================================================================
// INFORMACIÓN DE CONTACTO
// ============================================================================

export const CONTACT = {
  // Teléfono principal
  PHONE: "+54 9 11 3680-5439",
  PHONE_DISPLAY: "011 3680-5439",

  // WhatsApp
  WHATSAPP: "+54 9 11 3680-5439",
  WHATSAPP_MESSAGE: "¡Hola! Me gustaría consultar sobre los servicios de La Posta Eventos.",
  WHATSAPP_LINK: "https://wa.me/5491136805439",

  // Correo electrónico
  EMAIL: "contacto@lapostaeventos.com",
  EMAIL_SUPPORT: "soporte@lapostaeventos.com",
  EMAIL_BOOKINGS: "reservas@lapostaeventos.com",

  // Dirección física
  ADDRESS: {
    STREET: "Calle Principal 123",
    CITY: "Buenos Aires",
    PROVINCE: "Buenos Aires",
    POSTAL_CODE: "1425",
    COUNTRY: "Argentina",
    FULL: "Calle Principal 123, Buenos Aires, Buenos Aires 1425, Argentina",
  },

  // Horario de atención
  BUSINESS_HOURS: {
    MONDAY_TO_FRIDAY: "09:00 - 18:00",
    SATURDAY: "10:00 - 17:00",
    SUNDAY: "CERRADO",
    TIMEZONE: "America/Argentina/Buenos_Aires",
  },

  // Redes sociales
  SOCIAL_MEDIA: {
    INSTAGRAM: "https://instagram.com/lapostaeventos",
    FACEBOOK: "https://facebook.com/lapostaeventos",
    TIKTOK: "https://tiktok.com/@lapostaeventos",
    LINKEDIN: "https://linkedin.com/company/lapostaeventos",
  },

  // Ubicación (coordenadas para mapas)
  LOCATION: {
    LATITUDE: -34.6037,
    LONGITUDE: -58.3816,
    MAP_LINK: "https://maps.google.com/?q=-34.6037,-58.3816",
  },
} as const;

// ============================================================================
// INFORMACIÓN DE LA EMPRESA
// ============================================================================

export const COMPANY = {
  NAME: "La Posta Eventos",
  LEGAL_NAME: "La Posta Eventos S.A.",
  SHORT_DESCRIPTION: "Expertos en organización de eventos corporativos y privados",
  LONG_DESCRIPTION:
    "La Posta Eventos es una empresa especializada en la organización y planificación de eventos corporativos, bodas, cumpleaños, fiestas temáticas y eventos privados con más de 10 años de experiencia.",
  FOUNDED_YEAR: 2014,
  REGISTRATION_NUMBER: "XX-XXXXXXXX-X",
  WEBSITE: "https://lapostaeventos.com",
  LOGO_URL: "/logo.png",
  FAVICON_URL: "/favicon.ico",
  TAX_ID: "XX-XXXXXXXX-X",
} as const;

// ============================================================================
// ZONAS DE COBERTURA
// ============================================================================

export const COVERAGE_ZONES = [
  {
    id: "caba",
    name: "CABA",
    displayName: "Ciudad Autónoma de Buenos Aires",
    neighborhoods: [
      "Centro",
      "San Telmo",
      "La Boca",
      "San Isidro",
      "Recoleta",
      "Palermo",
      "Belgrano",
      "Caballito",
      "Mataderos",
      "Villa Crespo",
    ],
    description: "Cobertura completa en todos los barrios de CABA",
    delivery_time: "24-48 horas",
    surcharge: 0,
  },
  {
    id: "gran_buenos_aires_sur",
    name: "Gran Buenos Aires Sur",
    displayName: "Zona Sur (Gran Buenos Aires)",
    municipalities: [
      "Lomas de Zamora",
      "Almirante Brown",
      "Lanús",
      "Avellaneda",
      "La Plata",
      "Quilmes",
      "Berazategui",
      "Esteban Echeverría",
      "Monte Grande",
    ],
    description: "Cobertura en la zona sur del Gran Buenos Aires",
    delivery_time: "48-72 horas",
    surcharge: 10,
  },
] as const;

// ============================================================================
// TIPOS DE EVENTOS
// ============================================================================

export const EVENT_TYPES = [
  {
    id: "corporate",
    name: "Eventos Corporativos",
    description: "Conferencias, seminarios, lanzamientos de productos",
    icon: "briefcase",
  },
  {
    id: "wedding",
    name: "Bodas",
    description: "Ceremonias y recepciones matrimoniales",
    icon: "heart",
  },
  {
    id: "birthdays",
    name: "Cumpleaños",
    description: "Fiestas de cumpleaños privadas",
    icon: "cake",
  },
  {
    id: "private_events",
    name: "Eventos Privados",
    description: "Reuniones familiares, aniversarios, graduaciones",
    icon: "users",
  },
  {
    id: "themed_events",
    name: "Eventos Temáticos",
    description: "Fiestas temáticas y eventos especiales",
    icon: "sparkles",
  },
  {
    id: "virtual_events",
    name: "Eventos Virtuales",
    description: "Webinars, conferencias en línea",
    icon: "video",
  },
] as const;

// ============================================================================
// SERVICIOS ADICIONALES
// ============================================================================

export const SERVICES = [
  {
    id: "catering",
    name: "Catering",
    description: "Servicios de catering gourmet y opciones customizadas",
    available: true,
  },
  {
    id: "decoration",
    name: "Decoración",
    description: "Decoración completa según tema y presupuesto",
    available: true,
  },
  {
    id: "photography",
    name: "Fotografía y Video",
    description: "Servicios profesionales de fotografía y video",
    available: true,
  },
  {
    id: "sound_lighting",
    name: "Sonido e Iluminación",
    description: "Equipos de sonido e iluminación profesional",
    available: true,
  },
  {
    id: "entertainment",
    name: "Entretenimiento",
    description: "DJ, animadores, músicos en vivo",
    available: true,
  },
  {
    id: "rentals",
    name: "Alquiler de Espacios",
    description: "Salones y espacios disponibles para eventos",
    available: true,
  },
  {
    id: "planning",
    name: "Planificación Integral",
    description: "Servicio completo de planificación de eventos",
    available: true,
  },
] as const;

// ============================================================================
// INFORMACIÓN DE PRECIOS (Valores aproximados - actualizar según corresponda)
// ============================================================================

export const PRICING = {
  CURRENCY: "ARS",
  CURRENCY_SYMBOL: "$",
  CURRENCY_DISPLAY: "Pesos Argentinos",

  PACKAGES: {
    BASIC: {
      name: "Plan Básico",
      price: 10000,
      description: "Ideal para pequeños eventos",
      features: ["Hasta 50 personas", "Decoración básica", "Coordinación"],
    },
    STANDARD: {
      name: "Plan Estándar",
      price: 25000,
      description: "Para eventos medianos",
      features: [
        "Hasta 150 personas",
        "Decoración y catering",
        "Coordinación completa",
        "Fotografía",
      ],
    },
    PREMIUM: {
      name: "Plan Premium",
      price: 50000,
      description: "Para eventos grandes y especiales",
      features: [
        "Hasta 300 personas",
        "Servicios completos",
        "Sonido e iluminación",
        "Fotografía y video",
        "DJ",
      ],
    },
    CUSTOM: {
      name: "Plan Personalizado",
      price: null,
      description: "Presupuesto a medida según tus necesidades",
    },
  },

  MINIMUM_BUDGET: 5000,
  ADVANCE_PAYMENT_PERCENTAGE: 30,
} as const;

// ============================================================================
// HELPERS Y UTILIDADES
// ============================================================================

/**
 * Obtiene un zona de cobertura por ID
 */
export function getCoverageZoneById(zoneId: string) {
  return COVERAGE_ZONES.find((zone) => zone.id === zoneId);
}

/**
 * Obtiene todas las zonas de cobertura disponibles
 */
export function getAllCoverageZones() {
  return COVERAGE_ZONES;
}

/**
 * Genera el link de WhatsApp con un mensaje predefinido
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || CONTACT.WHATSAPP_MESSAGE
  );
  return `https://wa.me/${CONTACT.WHATSAPP.replace(/[^0-9]/g, "")}?text=${message}`;
}

/**
 * Genera el link de correo electrónico
 */
export function getEmailLink(
  recipient: keyof typeof CONTACT extends "EMAIL" | "EMAIL_SUPPORT" | "EMAIL_BOOKINGS"
    ? keyof typeof CONTACT
    : never,
  subject?: string,
  body?: string
): string {
  const email = CONTACT[recipient];
  const params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);

  const queryString = params.toString();
  return `mailto:${email}${queryString ? "?" + queryString : ""}`;
}

/**
 * Obtiene un tipo de evento por ID
 */
export function getEventTypeById(eventTypeId: string) {
  return EVENT_TYPES.find((type) => type.id === eventTypeId);
}

/**
 * Obtiene un servicio por ID
 */
export function getServiceById(serviceId: string) {
  return SERVICES.find((service) => service.id === serviceId);
}

/**
 * Verifica si un horario está dentro del horario de atención
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
