export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "DessertShop"],
    "@id": "https://www.flavourbites.ca/#business",
    name: "Flavour Bites",
    url: "https://www.flavourbites.ca",
    telephone: "+1-780-757-6085",
    image: "https://www.flavourbites.ca/images/franchise-store.png",
    logo: "https://www.flavourbites.ca/images/logo.png",
    priceRange: "$$",
    servesCuisine: [
      "Desserts",
      "Frozen Yogurt",
      "Rolled Ice Cream",
      "Falooda",
      "Cafe Drinks",
      "Street Food",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "413-2331 66 Street NW",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      postalCode: "T6K 4B5",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "City",
      name: "Edmonton",
    },
    sameAs: ["https://flavourbites.us"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
