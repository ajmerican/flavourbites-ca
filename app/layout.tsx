import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

import SiteFooter from "@/components/SiteFooter";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flavourbites.ca"),

  title: {
    default: "Flavour Bites Edmonton | Dessert Café, Frozen Yogurt & More",
    template: "%s | Flavour Bites Canada",
  },

  description:
    "Flavour Bites is an Edmonton dessert café serving frozen yogurt, rolled ice cream, falooda, café drinks, waffles, street-food-inspired favourites and premium packaged products.",

  applicationName: "Flavour Bites Canada",

  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "/",
      "en-US": "https://flavourbites.us",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.flavourbites.ca",
    siteName: "Flavour Bites Canada",

    title: "Flavour Bites Edmonton | Dessert Café, Frozen Yogurt & More",

    description:
      "A Canadian dessert-café experience built around frozen yogurt, rolled ice cream, falooda, café drinks, desserts and street-food-inspired favourites.",

    images: [
      {
        url: "/images/franchise-store.png",
        width: 1200,
        height: 630,
        alt: "Flavour Bites dessert café in Edmonton, Alberta",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Flavour Bites Edmonton",

    description:
      "Frozen yogurt, rolled ice cream, falooda, café drinks, desserts and street-food-inspired favourites in Edmonton.",

    images: ["/images/franchise-store.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />

        {children}

        <SiteFooter />
      </body>

      <GoogleAnalytics gaId="G-E01CLYD585" />
    </html>
  );
}