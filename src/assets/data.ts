
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "mudanzas",
    title: "Mudanzas Residenciales",
    description: "Ofrecemos servicios completos de mudanza para hogares, con embalaje profesional, transporte seguro y desembalaje en el destino.",
    icon: "home",
    image: "/src/assets/service-mudanza.jpg"
  },
  {
    id: "transporte-comercial",
    title: "Transporte Comercial",
    description: "Soluciones de transporte para empresas, con manejo especializado de equipos de oficina, archivos y mobiliario comercial.",
    icon: "building-2",
    image: "/src/assets/service-comercial.jpg"
  },
  {
    id: "logistica",
    title: "Logística y Distribución",
    description: "Servicios logísticos completos para entrega de mercancías, gestión de almacenes y distribución a nivel nacional.",
    icon: "truck",
    image: "/src/assets/service-logistica.jpg"
  },
  {
    id: "embalaje",
    title: "Embalaje Profesional",
    description: "Servicio de embalaje con materiales de alta calidad para asegurar la protección de sus pertenencias durante el traslado.",
    icon: "package",
    image: "/src/assets/service-embalaje.jpg"
  },
  {
    id: "almacenamiento",
    title: "Almacenamiento Temporal",
    description: "Espacios seguros y climatizados para el almacenamiento temporal de sus pertenencias cuando lo necesite.",
    icon: "warehouse",
    image: "/src/assets/service-almacenamiento.jpg"
  },
  {
    id: "internacional",
    title: "Mudanzas Internacionales",
    description: "Servicio de mudanzas internacionales con todos los trámites aduaneros y documentación necesaria para un traslado sin complicaciones.",
    icon: "globe",
    image: "/src/assets/service-internacional.jpg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "Cliente Residencial",
    content: "Excelente servicio de mudanza. El equipo fue muy profesional y cuidadoso con todos mis muebles. Llegaron a tiempo y completaron el trabajo rápidamente.",
    avatar: "/src/assets/avatar-1.jpg"
  },
  {
    id: 2,
    name: "María Giménez",
    role: "Gerente Comercial",
    content: "Contratamos a MC Transporte para nuestra mudanza de oficina y quedamos muy satisfechos. Todo el proceso fue organizado y sin interrupciones para nuestro negocio.",
    avatar: "/src/assets/avatar-2.jpg"
  },
  {
    id: 3,
    name: "Juan Pérez",
    role: "Propietario de Tienda",
    content: "Su servicio de logística ha mejorado nuestra operación. Las entregas son puntuales y el seguimiento es excelente. Altamente recomendable.",
    avatar: "/src/assets/avatar-3.jpg"
  }
];

export const faqs = [
  {
    question: "¿Cuál es el proceso para solicitar un servicio de mudanza?",
    answer: "Para solicitar nuestro servicio de mudanza, puede contactarnos por teléfono, WhatsApp o a través de nuestro formulario web. Un asesor le atenderá para programar una visita de evaluación gratuita donde determinamos los requisitos específicos y le proporcionamos un presupuesto detallado."
  },
  {
    question: "¿Ofrecen servicios de embalaje?",
    answer: "Sí, ofrecemos servicios completos de embalaje con materiales de alta calidad. Nuestro equipo profesional se encargará de embalar todos sus artículos de manera segura para protegerlos durante el transporte."
  },
  {
    question: "¿Cuál es su área de cobertura?",
    answer: "Operamos en todo Paraguay, con servicios especiales para Asunción y áreas metropolitanas. También ofrecemos servicios de mudanzas internacionales a países vecinos y otros destinos internacionales."
  },
  {
    question: "¿Qué tipos de vehículos utilizan para las mudanzas?",
    answer: "Contamos con una flota diversa que incluye camiones de diferentes tamaños, todos equipados con sistemas de seguridad y materiales de protección para garantizar el transporte seguro de sus pertenencias."
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
  phone: "0982530117",
  email: "info@mctransporte.com.py",
  address: "Asunción, Paraguay",
  whatsapp: "0982530117",
  socialMedia: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com"
  }
};

export const companyInfo = {
  name: "MC Transporte y Mudanzas Paraguay",
  slogan: "Moviendo Paraguay con seguridad y confianza",
  description: "En MC Transporte y Mudanzas Paraguay, nos especializamos en ofrecer soluciones completas de transporte y mudanzas para clientes residenciales y comerciales. Con años de experiencia en el mercado, nuestro equipo profesional garantiza un servicio confiable, seguro y eficiente para todas sus necesidades de movimiento.",
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
      description: "La protección de sus pertenencias es nuestra prioridad durante todo el proceso de transporte."
    },
    {
      title: "Eficiencia",
      description: "Optimizamos cada operación para ofrecer un servicio rápido sin comprometer la calidad."
    }
  ]
};
