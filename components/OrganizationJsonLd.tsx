export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.flavourbites.ca/#organization",
    name: "flavourBites Inc.",
    alternateName: "Flavour Bites",
    url: "https://www.flavourbites.ca",
    logo: "https://www.flavourbites.ca/images/logo.png",
    email: "tfmillwood@gmail.com",
    telephone: "+1-780-757-6085",
    address: {
      "@type": "PostalAddress",
      streetAddress: "413-2331 66 Street NW",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      postalCode: "T6K 4B5",
      addressCountry: "CA",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
