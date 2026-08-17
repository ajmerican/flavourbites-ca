import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Flavour Bites Canada",
    template: "%s | Flavour Bites Canada",
  },
  description:
    "Flavour Bites Edmonton dessert café — frozen yogurt, rolled ice cream, falooda, beverages, waffles, street-food-inspired favourites and premium packaged products.",
  metadataBase: new URL("https://flavourbites.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
