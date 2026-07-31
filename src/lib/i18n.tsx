import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "es" | "en";

export const content = {
  es: {
    nav: { services: "Servicios", about: "Nosotros", gallery: "Trabajos", contact: "Contacto" },
    callNow: "Llamar ahora",
    hero: {
      eyebrow: "Plainfield, Indiana · Con licencia y asegurado",
      title: "Cuidado profesional de árboles y jardinería",
      sub: "Poda, remoción de árboles, limpieza de terrenos y mantenimiento de jardines para hogares y negocios en Plainfield y todo el centro de Indiana.",
      cta: "Presupuesto gratis",
      cta2: "Ver servicios",
      rating: "5.0 estrellas · 29 reseñas en Google",
    },
    servicesTitle: "Nuestros servicios",
    welcomeEyebrow: "Bienvenido",
    welcomeTitle: "¡Bienvenido a Olivos Tree Service Plus Landscaping LLC!",
    welcomeBody:
      "Sus expertos locales en cuidado profesional de árboles. Desde la remoción segura de árboles y la poda precisa hasta la limpieza de emergencia por tormentas y la trituración de tocones, nuestro equipo mantiene su jardín seguro y hermoso. ¡También ofrecemos servicios de paisajismo!",
    welcomeBody2:
      "Atendemos con orgullo el condado de Hendricks y las áreas cercanas de Indiana con servicio confiable y precios honestos. Deje que nuestro equipo con experiencia haga realidad el espacio exterior de sus sueños. ¡Trabajamos con propiedades residenciales y comerciales! Llámenos hoy para más información.",
    welcomePoints: [
      "Propiedades residenciales y comerciales",
      "Condado de Hendricks y alrededores",
      "Precios honestos y presupuestos gratis",
      "Limpieza de emergencia por tormentas",
    ],
    servicesSub: "Todo lo que su propiedad necesita, hecho por un solo equipo.",
    services: [
      { t: "Poda y recorte", d: "Poda técnica que mejora la salud, la forma y la seguridad de sus árboles." },
      { t: "Remoción de árboles", d: "Remoción segura de árboles peligrosos, dañados o muertos, con equipo adecuado." },
      { t: "Remoción de tocones", d: "Trituramos el tocón y dejamos el terreno listo para césped o jardín." },
      { t: "Servicio de emergencia", d: "Respuesta rápida por tormentas, ramas caídas o daños en la propiedad." },
      { t: "Jardinería y paisajismo", d: "Mantillo, arbustos, bordes de piedra, plantación y limpieza de temporada." },
      { t: "Limpieza de terrenos", d: "Despeje de maleza y lotes para construcción o nuevos proyectos." },
    ],
    whyTitle: "Por qué elegirnos",
    why: [
      { t: "5.0 en Google", d: "29 reseñas de vecinos satisfechos en el área de Plainfield." },
      { t: "Equipo local", d: "Negocio familiar que responde el teléfono y llega a tiempo." },
      { t: "Trabajo limpio", d: "Dejamos su propiedad más limpia de como la encontramos." },
      { t: "Precio claro", d: "Presupuesto por escrito, sin cargos sorpresa." },
    ],
    aboutTitle: "Sobre Olivos Tree Services",
    aboutBody:
      "Somos un equipo local de arboricultura y paisajismo con base en Plainfield, Indiana. Trabajamos con equipo profesional y prácticas seguras para cuidar los árboles y jardines de familias y negocios del área. Hablamos español e inglés.",
    galleryTitle: "Nuestro trabajo",
    gallerySub: "Fotos reales de proyectos terminados en el área de Plainfield.",
    galleryCaptions: [
      "Bordes de piedra y mantillo fresco",
      "Preparación de terreno y tierra nueva",
      "Jardín frontal con mantillo y arbustos",
      "Limpieza de lote: antes y después",
      "Remoción de árbol: antes y después",
      "Renovación de jardín: antes y después",
    ],
    contactTitle: "Solicite su presupuesto gratis",
    contactSub: "Llame o escriba y le respondemos el mismo día.",
    hoursLabel: "Horario",
    hours: "Lunes a sábado · 7 a.m. – 7 p.m.",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    directions: "Cómo llegar",
    rights: "Todos los derechos reservados.",
    langLabel: "English",
  },
  en: {
    nav: { services: "Services", about: "About", gallery: "Our Work", contact: "Contact" },
    callNow: "Call now",
    hero: {
      eyebrow: "Plainfield, Indiana · Licensed & insured",
      title: "Professional tree care & landscaping",
      sub: "Trimming, tree removal, lot clearing and full landscape maintenance for homes and businesses across Plainfield and central Indiana.",
      cta: "Get a free estimate",
      cta2: "See services",
      rating: "5.0 stars · 29 Google reviews",
    },
    servicesTitle: "Our services",
    welcomeEyebrow: "Welcome",
    welcomeTitle: "Welcome to Olivos Tree Service Plus Landscaping LLC!",
    welcomeBody:
      "Your local experts in professional tree care. From safe tree removal and precise pruning to emergency storm clean-up and stump grinding, our team keeps your yard safe and beautiful. Also offering landscaping services!",
    welcomeBody2:
      "We proudly serve Hendricks County and surrounding areas in Indiana with reliable service and honest pricing. Let our experienced team bring your dream outdoor living space to life. We do business with residential and commercial properties! Call us today for more information!",
    welcomePoints: [
      "Residential & commercial properties",
      "Hendricks County & surrounding areas",
      "Honest pricing, free estimates",
      "Emergency storm clean-up",
    ],
    servicesSub: "Everything your property needs, handled by one crew.",
    services: [
      { t: "Trimming & pruning", d: "Skilled pruning that improves the health, shape and safety of your trees." },
      { t: "Tree removal", d: "Safe removal of hazardous, damaged or dead trees with the right equipment." },
      { t: "Stump grinding", d: "We grind the stump down and leave the ground ready for sod or beds." },
      { t: "Emergency service", d: "Fast response after storms, fallen limbs or property damage." },
      { t: "Landscaping", d: "Mulch, shrubs, stone edging, planting and seasonal cleanups." },
      { t: "Lot clearing", d: "Brush and lot clearing for construction or new projects." },
    ],
    whyTitle: "Why homeowners choose us",
    why: [
      { t: "5.0 on Google", d: "29 reviews from happy neighbors around Plainfield." },
      { t: "Local crew", d: "Family-run business that answers the phone and shows up on time." },
      { t: "Clean job sites", d: "We leave your property cleaner than we found it." },
      { t: "Clear pricing", d: "Written estimates with no surprise charges." },
    ],
    aboutTitle: "About Olivos Tree Services",
    aboutBody:
      "We're a local tree care and landscaping crew based in Plainfield, Indiana. We use professional equipment and safe climbing practices to care for the trees and yards of families and businesses across the area. We speak both English and Spanish.",
    galleryTitle: "Our work",
    gallerySub: "Real photos from completed projects around Plainfield.",
    galleryCaptions: [
      "Stone edging and fresh mulch",
      "Grading and fresh topsoil",
      "Front yard mulch and shrub beds",
      "Lot clearing: before & after",
      "Tree removal: before & after",
      "Landscape refresh: before & after",
    ],
    contactTitle: "Request your free estimate",
    contactSub: "Call or message us and we'll get back to you the same day.",
    hoursLabel: "Hours",
    hours: "Monday to Saturday · 7 a.m. – 7 p.m.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    directions: "Get directions",
    rights: "All rights reserved.",
    langLabel: "Español",
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof content)["es"] };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] as (typeof content)["es"] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}