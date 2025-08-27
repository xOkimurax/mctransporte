import mudanzasResidenciales from "./mudanzas-residenciales.png";
import fletesComercial from "./fletes-comercial.png";
import logisticaDistribucion from "./logística-distribución.png";
import embalajeProfesional from "./embalaje-profesional.jpeg";
import almacenamientoTemporal from "./almacenamiento-temporal.jpeg";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
}

export const services: Service[] = [
  {
    id: "mudanzas",
    title: "Mudanzas Residenciales",
    description: "Ofrecemos servicios completos de mudanza para hogares, con embalaje profesional, Fletes seguro y desembalaje en el destino.",
    icon: "home",
    image: mudanzasResidenciales,
    alt: "Mudanzas residenciales en Asunción Paraguay - Servicio profesional de mudanzas de casas"
  },
  {
    id: "Fletes-comercial",
    title: "Fletes Comercial",
    description: "Soluciones de Fletes para empresas, con manejo especializado de equipos de oficina, archivos y mobiliario comercial.",
    icon: "building-2",
    image: fletesComercial,
    alt: "Fletes comerciales en Paraguay - Transporte profesional para empresas en Asunción"
  },
  {
    id: "logistica",
    title: "Logística y Distribución",
    description: "Servicios logísticos completos para entrega de mercancías, gestión de almacenes y distribución a nivel nacional.",
    icon: "truck",
    image: logisticaDistribucion,
    alt: "Logística y distribución Paraguay - Servicios de transporte y entrega nacional"
  },
  {
    id: "embalaje",
    title: "Embalaje Profesional",
    description: "Servicio de embalaje con materiales de alta calidad para asegurar la protección de sus pertenencias durante el traslado.",
    icon: "package",
    image: embalajeProfesional,
    alt: "Embalaje profesional Paraguay - Servicio seguro de empaque para mudanzas"
  },
  {
    id: "almacenamiento",
    title: "Almacenamiento Temporal",
    description: "Espacios seguros y climatizados para el almacenamiento temporal de sus pertenencias cuando lo necesite.",
    icon: "warehouse",
    image: almacenamientoTemporal,
    alt: "Almacenamiento temporal Paraguay - Depósitos seguros para guardar pertenencias"
  },
];

export const faqs = [
  {
    question: "¿Cuál es el proceso para solicitar un servicio de mudanza?",
    answer: "Para solicitar nuestro servicio de mudanza, puede contactarnos por teléfono, WhatsApp u otra red social. Un asesor le atenderá para programar una visita de evaluación gratuita donde determinamos los requisitos específicos y le proporcionamos un presupuesto detallado."
  },
  {
    question: "¿Ofrecen servicios de embalaje?",
    answer: "Sí, ofrecemos servicios completos de embalaje con materiales de alta calidad. Nuestro equipo profesional se encargará de embalar todos sus artículos de manera segura para protegerlos durante el Fletes."
  },
  {
    question: "¿Cuál es su área de cobertura?",
    answer: "Operamos en todo Paraguay, con servicios especiales para Asunción y áreas metropolitanas."
  },
  {
    question: "¿Qué tipos de vehículos utilizan para las mudanzas?",
    answer: "Contamos con una flota diversa que incluye camiones de diferentes tamaños, todos equipados con sistemas de seguridad y materiales de protección para garantizar el Fletes seguro de sus pertenencias."
  },
  {
    question: "¿Cuánto tiempo toma completar una mudanza?",
    answer: "El tiempo varía según el volumen de artículos, la distancia y los servicios adicionales requeridos. Una mudanza residencial típica puede llevar de 4 a 8 horas, mientras que mudanzas más grandes o comerciales pueden requerir más tiempo."
  },
  {
    question: "¿Ofrecen seguro para los artículos transportados?",
    answer: "Sí, todos nuestros servicios incluyen un seguro básico. También ofrecemos opciones de cobertura adicional para mayor tranquilidad, especialmente para artículos de alto valor."
  }
];

export const contactInfo = {
  phone: "0982 530 117",
  email: "alcidesmartinez0404@gmail.com",
  address: "Asunción, Paraguay",
  whatsapp: "595982530117",
  socialMedia: {
    facebook: "https://www.facebook.com/mcfletesymudanzas",
    instagram: "https://www.instagram.com/mcfletesymudanzas"
  }
};

export const companyInfo = {
  name: "MC Fletes y Mudanzas Paraguay",
  slogan: "Moviendo Paraguay con seguridad y confianza",
  description: "En MC Fletes y Mudanzas Paraguay, nos especializamos en ofrecer soluciones completas de Fletes y mudanzas para clientes residenciales y comerciales. Con años de experiencia en el mercado, nuestro equipo profesional garantiza un servicio confiable, seguro y eficiente para todas sus necesidades de movimiento.",
  founded: "2010",
  values: [
    {
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la confianza y el cumplimiento de nuestros compromisos."
    },
    {
      title: "Profesionalismo",
      description: "Nuestro equipo está altamente capacitado y dedicado a ofrecer un servicio excelente en cada proyecto."
    },
    {
      title: "Seguridad",
      description: "La protección de sus pertenencias es nuestra prioridad durante todo el proceso de Fletes."
    },
    {
      title: "Eficiencia",
      description: "Optimizamos cada operación para ofrecer un servicio rápido sin comprometer la calidad."
    }
  ]
};
