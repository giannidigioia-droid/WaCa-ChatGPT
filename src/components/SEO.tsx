import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

const DEFAULTS = {
  title: "WaCa Apulian Villa | Villa con Piscina Privata a Monopoli, Puglia",
  description:
    "WaCa Apulian Villa a Monopoli (Puglia): villa con piscina al sale e 3 appartamenti (Dream, Oasis, Heaven). A pochi minuti dal mare e dal centro storico. Prenota il tuo soggiorno.",
  canonical: "https://villawaca.it/",
  ogImage:
    "https://res.cloudinary.com/dfu9nzn8r/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1771578261/Cucinafinestraaperta_neez2f.jpg",
};

export function SEO(props: SEOProps) {
  const title = props.title ?? DEFAULTS.title;
  const description = props.description ?? DEFAULTS.description;
  const canonical = props.canonical ?? DEFAULTS.canonical;
  const ogImage = props.ogImage ?? DEFAULTS.ogImage;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "WaCa Apulian Villa",
    url: canonical,
    description,
    image: [ogImage],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monopoli",
      addressRegion: "Puglia",
      addressCountry: "IT",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscina al sale", value: true },
      { "@type": "LocationFeatureSpecification", name: "Piscina privata", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parcheggio", value: true },
    ],
  };

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:locale" content="it_IT" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WaCa Apulian Villa" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Performance hints */}
      <link rel="preconnect" href="https://res.cloudinary.com" />
      <link rel="dns-prefetch" href="https://res.cloudinary.com" />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
