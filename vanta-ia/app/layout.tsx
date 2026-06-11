import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = "https://octoflowlabs.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Agentes de IA para Empresas en Argentina | OctoFlow",
  description:
    "Implementamos agentes de IA que atienden a tus clientes, recuperan ventas y te dan el control de tu negocio. Soluciones de IA para PYMEs y empresas medianas en Argentina y LATAM.",
  keywords: [
    "agentes de IA para empresas",
    "automatización con inteligencia artificial",
    "chatbot de ventas Argentina",
    "agente de atención al cliente IA",
    "automatización empresarial Argentina",
    "IA para PYMEs",
    "inteligencia artificial para empresas LATAM",
    "chatbot WhatsApp empresa",
    "reportería automatizada IA",
    "implementación IA Argentina",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Agentes de IA para Empresas en Argentina | OctoFlow",
    description:
      "Implementamos agentes de IA que atienden a tus clientes, recuperan ventas y te dan el control de tu negocio. Para PYMEs y empresas medianas en Argentina y LATAM.",
    url: BASE_URL,
    siteName: "OctoFlow",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de IA para Empresas | OctoFlow",
    description:
      "Automatizá tu empresa con agentes de IA para ventas, atención al cliente y reportería. Implementación en días.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "OctoFlow",
      url: BASE_URL,
      description:
        "Agencia especializada en implementación de agentes de inteligencia artificial para PYMEs y empresas medianas en Argentina y LATAM.",
      areaServed: ["Argentina", "México", "Colombia", "LATAM"],
      knowsAbout: [
        "Inteligencia Artificial",
        "Automatización Empresarial",
        "Chatbots",
        "Agentes de IA",
        "Procesamiento de Lenguaje Natural",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "OctoFlow",
      publisher: { "@id": `${BASE_URL}/#organization` },
      inLanguage: "es-AR",
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Agentes de IA para Empresas en Argentina | OctoFlow",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#organization` },
      description:
        "Implementamos agentes de IA que atienden a tus clientes, recuperan ventas y te dan el control de tu negocio para PYMEs y empresas medianas en Argentina y LATAM.",
      inLanguage: "es-AR",
    },
    {
      "@type": "Service",
      name: "Agente de Atención con IA",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Implementamos un Agente de Atención con IA conectado a tu información, que responde las consultas de tus clientes al instante.",
      serviceType: "Atención al Cliente Automatizada",
      areaServed: "Argentina",
    },
    {
      "@type": "Service",
      name: "Recuperación de Leads",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Implementamos un agente que detecta a los clientes que consultaron y no compraron, y retoma el contacto en el momento oportuno.",
      serviceType: "Automatización de Ventas",
      areaServed: "Argentina",
    },
    {
      "@type": "Service",
      name: "Asistente del Negocio IA",
      provider: { "@id": `${BASE_URL}/#organization` },
      description:
        "Implementamos un Asistente con IA que responde al instante tus consultas de stock, ventas y movimientos, sin abrir planillas.",
      serviceType: "Business Intelligence Automatizado",
      areaServed: "Argentina",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <head>
        <meta name="facebook-domain-verification" content="fdh49aycjotx00ccbusbe5s64j0gr0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
