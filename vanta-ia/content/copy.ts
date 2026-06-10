// ─── content/copy.ts ──────────────────────────────────────────────────────────
// Centraliza todo el texto de la landing. Editá aquí sin tocar los componentes.

export const WA_LINK =
  "https://api.whatsapp.com/send/?phone=5492226486414&text&type=phone_number&app_absent=0";

export const brand = {
  name: "OctoFlow",
  tagline: "Tecnología para que tu negocio crezca",
} as const;

export const nav = {
  brand: { prefix: "Octo", suffix: "Flow" },
  links: [
    { label: "Soluciones", href: "#soluciones" },
    { label: "Proceso",    href: "#proceso"    },
    { label: "Clientes",   href: "#clientes"   },
    { label: "Contacto",   href: "#contacto"   },
  ],
  cta: "Contactar",
} as const;

export const hero = {
  badge:   "✦ Automatización con Inteligencia Artificial",
  h1Line1: "Tu negocio,",
  h1Line2: "trabajando solo.",
  subtitle:
    "Implementamos agentes de IA que atienden a tus clientes, recuperan ventas y te dan el control de tu negocio — sin que muevas un dedo.",
  ctaPrimary:   "Quiero automatizar mi negocio",
  ctaSecondary: "Ver soluciones",
  // Stats con prueba social (contadores animados)
  stats: [
    { to: 10, suffix: "x",  label: "más probable cerrar una venta si respondés en menos de 5 minutos" },
    { to: 24, suffix: "/7", label: "atención, también fuera del horario del local" },
    { to: 3,  suffix: "x",  label: "mejor rendimiento decidiendo con datos" },
    { to: 90, suffix: "%",  label: "de las pymes con IA aumentaron su facturación" },
  ],
} as const;

export const problema = {
  label: "· El problema",
  h2: {
    prefix: "Lo que te está",
    strong: "costando dinero",
    suffix: "todos los días",
  },
  cards: [
    {
      icon:        "Clock",
      title:       "Clientes que no esperan",
      description:
        "Te escriben y, si no respondés en los primeros minutos, ya se fueron con la competencia.",
    },
    {
      icon:        "RefreshCw",
      title:       "Ventas que se enfrían",
      description:
        "Consultaron, no compraron y nadie volvió a contactarlos. Ese lead se perdió.",
    },
    {
      icon:        "BarChart2",
      title:       "Decisiones a ojo",
      description:
        "Sin datos a mano sobre stock, ventas y movimientos, las decisiones se toman a las apuradas.",
    },
    {
      icon:        "TrendingUp",
      title:       "Tareas que no escalan",
      description:
        "Tu equipo repite lo mismo todos los días. Para crecer, hoy necesitás contratar más gente.",
    },
  ],
} as const;

/* ─── Soluciones (orbital) ───────────────────────────────────────────────── */
export const soluciones = {
  label: "· Nuestras soluciones",
  h2: {
    prefix: "Cuatro brazos para",
    strong: "automatizar tu negocio",
    suffix: "con IA",
  },
  intro:
    "Como un pulpo: cada brazo resuelve algo distinto, todos coordinados para que tu negocio fluya.",
  cards: [
    {
      id:          "atencion",
      number:      "01",
      icon:        "MessageSquare",
      pose:        "headset",
      title:       "Agente de Atención con IA",
      description:
        "Implementamos un Agente de Atención con IA conectado a tu información, que responde las consultas de tus clientes al instante.",
      tags:        ["Velocidad", "Disponibilidad", "Cercanía"],
    },
    {
      id:          "leads",
      number:      "02",
      icon:        "RefreshCw",
      pose:        "idle",
      title:       "Recuperación de Leads",
      description:
        "Implementamos un agente que detecta a los clientes que consultaron y no compraron, y retoma el contacto en el momento oportuno.",
      tags:        ["Oportunidad", "Seguimiento", "Activación"],
    },
    {
      id:          "asistente",
      number:      "03",
      icon:        "BarChart2",
      pose:        "chart",
      title:       "Asistente del Negocio IA",
      description:
        "Implementamos un Asistente con IA que responde al instante tus consultas de stock, ventas y movimientos, sin abrir planillas.",
      tags:        ["Visibilidad", "Facilidad", "Control"],
    },
    {
      id:          "automatizacion",
      number:      "04",
      icon:        "Zap",
      pose:        "search",
      title:       "Automatización Integral de Procesos",
      description:
        "Revisamos tu negocio a fondo, detectamos qué te hace perder tiempo y automatizamos tus procesos de punta a punta.",
      tags:        ["Claridad", "Foco", "Ejecución"],
    },
  ],
} as const;

/* ─── Detalle por solución (secciones alternadas) ────────────────────────── */
export const detalle = {
  label: "· En detalle",
  h2: {
    prefix: "Cada solución,",
    strong: "explicada",
  },
  items: [
    {
      id:    "atencion",
      pose:  "headset",
      title: "Agente de Atención con IA",
      stat: {
        to: 10, suffix: "x",
        text: "Es 10 veces más probable que se cierre una venta si se responde antes de los 5 minutos.",
        source: "Harvard Business Review",
      },
      benefits: [
        { key: "VELOCIDAD",     text: "Responde cada consulta al instante, con precio, stock y disponibilidad actualizados." },
        { key: "DISPONIBILIDAD", text: "Atiende las 24 horas, también fuera del horario del local." },
        { key: "CERCANÍA",      text: "Mantiene un trato natural y cercano en cada conversación." },
      ],
    },
    {
      id:    "leads",
      pose:  "idle",
      title: "Recuperación de Leads",
      stat: {
        metric: "1 de 4",
        text: "Hasta 1 de cada 4 leads que no concretaron la compra se pueden recuperar.",
        source: "ATTN Agency",
      },
      benefits: [
        { key: "OPORTUNIDAD", text: "Identifica a los clientes que consultaron y no concretaron la compra." },
        { key: "SEGUIMIENTO", text: "Retoma el contacto de forma automática en el momento oportuno." },
        { key: "ACTIVACIÓN",  text: "Avisa cuando vuelve el stock o llega un producto de interés." },
      ],
    },
    {
      id:    "asistente",
      pose:  "chart",
      title: "Asistente del Negocio IA",
      stat: {
        to: 3, suffix: "x",
        text: "Los negocios que deciden con datos mejoran su rendimiento hasta 3 veces más que los que van a ojo.",
        source: "PwC",
      },
      benefits: [
        { key: "VISIBILIDAD", text: "Te responde al instante consultas sobre stock, ventas y movimientos del negocio." },
        { key: "FACILIDAD",   text: "Da la información que necesitás sin tener que revisar planillas ni sistemas." },
        { key: "CONTROL",     text: "Responde a tus consultas y deja las decisiones en tus manos." },
      ],
    },
    {
      id:    "automatizacion",
      pose:  "search",
      title: "Automatización Integral de Procesos",
      stat: {
        metric: "9 de 10",
        text: "9 de cada 10 pymes que usan IA dicen que les aumentó la facturación.",
        source: "Salesforce",
      },
      benefits: [
        { key: "CLARIDAD",  text: "Revisa el negocio a fondo para detectar qué le hace perder tiempo y ventas." },
        { key: "FOCO",      text: "Define un plan de automatización concreto, priorizado por impacto." },
        { key: "EJECUCIÓN", text: "Automatiza los procesos de punta a punta y los deja listos para escalar." },
      ],
    },
  ],
} as const;

/* ─── Plan de Implementación (timeline 5 pasos) ──────────────────────────── */
export const proceso = {
  label: "· Plan de implementación",
  h2: {
    prefix: "De la idea a",
    strong: "producción",
    suffix: "en pocos días",
  },
  steps: [
    {
      number:      "01",
      title:       "Relevamiento",
      description: "Entendemos tu negocio, tus procesos y dónde está el cuello de botella.",
      duration:    "Día 1",
    },
    {
      number:      "02",
      title:       "Propuesta",
      description: "Te presentamos el plan de automatización, priorizado por impacto.",
      duration:    "+2 días",
    },
    {
      number:      "03",
      title:       "Desarrollo",
      description: "Construimos e integramos tu agente con las herramientas que ya usás.",
      duration:    "+5 días",
    },
    {
      number:      "04",
      title:       "Implementación",
      description: "Lo ponemos en producción y lo probamos junto a vos.",
      duration:    "+1 día",
    },
    {
      number:      "05",
      title:       "Mantenimiento",
      description: "Medimos resultados, ajustamos y mejoramos mes a mes.",
      duration:    "Mensual",
    },
  ],
  note: "Para el Asistente del Negocio IA los plazos son +3 días de propuesta, +10 días de desarrollo y +2 días de implementación.",
} as const;

export const clientes = {
  label:     "· Empresas que confían en nosotros",
  h2: {
    prefix: "Clientes que ya",
    strong: "trabajan con IA",
  },
  subtitle:
    "Desde PYMEs hasta empresas medianas — distintas industrias, el mismo resultado.",
  stats: [
    { value: "6+",   label: "empresas"    },
    { value: "5",    label: "industrias"  },
    { value: "AR",   label: "mercados"    },
  ],
  items: [
    { initials: "SA", name: "Somos Argentina", industry: "Turismo",    color: "#5F9ED2", logo: "/logos/somosargentina.png" },
    { initials: "EQ", name: "Equitur SRL",     industry: "Turismo",    color: "#E040A0", logo: "/logos/equitur.jpg"        },
    { initials: "MF", name: "Mau Fragance",    industry: "Perfumería", color: "#C8A97E", logo: "/logos/maufragance.webp"   },
    { initials: "HY", name: "hereyoutravel",   industry: "Viajes",     color: "#FF3B30", logo: "/logos/hereyoutravel.jpg"  },
    { initials: "ED", name: "EduMed",          industry: "Educación",  color: "#5F9ED2", logo: "/logos/edumed.png"         },
    { initials: "CL", name: "Clamaco",         industry: "Construcción", color: "#F5A623", logo: "/logos/clamaco.jpg"      },
  ],
} as const;

export const diferenciadores = {
  label: "· Por qué nosotros",
  h2: {
    line1: "No vendemos software.",
    strong: "Implementamos resultados.",
  },
  items: [
    {
      title:       "Implementación en días, no meses",
      description: "Sin proyectos eternos. Tu agente está operativo rápido.",
    },
    {
      title:       "Se integra con lo que ya usás",
      description: "WhatsApp, Google Sheets, tu sistema. No cambiamos tu stack, lo potenciamos.",
    },
    {
      title:       "Soporte y mejora continua",
      description: "No desaparecemos después de entregar. Medimos, ajustamos y optimizamos.",
    },
    {
      title:       "Precio justo para PYMEs",
      description: "Soluciones de nivel enterprise al alcance de empresas medianas en Argentina y LATAM.",
    },
  ],
} as const;

export const ctaFinal = {
  label: "· Empezá hoy",
  h2: {
    prefix: "¿Listo para que tu negocio",
    strong: "crezca con IA?",
  },
  subtitle:
    "Contactanos por WhatsApp. Sin compromiso, sin tecnicismos.",
  ctaPrimary:        "Quiero automatizar mi negocio",
} as const;

export const footer = {
  brand: { prefix: "Octo", suffix: "Flow" },
  tagline: "Tecnología para que tu negocio crezca.",
  navLabel: "Navegación",
  socialsLabel: "Seguinos",
  links: [
    { label: "Soluciones", href: "#soluciones" },
    { label: "Proceso",    href: "#proceso"    },
    { label: "Clientes",   href: "#clientes"   },
    { label: "Contacto",   href: "#contacto"   },
  ],
  socials: [
    { label: "LinkedIn",  href: "#" },
    { label: "Instagram", href: "https://instagram.com/octoflowlabs" },
  ],
  copy: "© 2025 · Hecho en Argentina",
} as const;
