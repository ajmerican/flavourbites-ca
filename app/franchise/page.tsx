import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Check, Network, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Flavour Bites Franchise Opportunities Canada",
  description:
    "Explore Flavour Bites franchise opportunities in Canada, including single-unit, multi-unit and select development opportunities with our Canadian dessert café brand.",
  alternates: {
    canonical: "/franchise",
  },
  openGraph: {
    title: "Flavour Bites Franchise Opportunities Canada",
    description:
      "Explore franchise and development opportunities with Flavour Bites, a Canadian dessert café brand built from real operating experience.",
    url: "https://www.flavourbites.ca/franchise",
    images: [
      {
        url: "/images/franchise-store.png",
        width: 1200,
        height: 630,
        alt: "Flavour Bites franchise opportunity in Canada",
      },
    ],
  },
};

export default function FranchisePage() {
  return <main className="franchisePage">
    <header className="franchiseHeader">
      <div className="franchiseHeaderLeft">
        <Link href="/" className="franchiseBack"><ArrowLeft size={15}/><span>Back to site</span></Link>
        <Link href="/" aria-label="Flavour Bites Canada home"><Image src="/images/logo.png" alt="Flavour Bites" width={260} height={76} priority/></Link>
      </div>
      <a className="franchiseHeaderCta" href="#inquire">Start a conversation <ArrowRight size={16}/></a>
    </header>

    <section className="franchiseHero">
      <div className="franchiseHeroCopy">
        <p className="overline">Franchise Flavour Bites</p>
        <h1>Build the next <span>Flavour Bites</span> in your market.</h1>
        <p>Flavour Bites is growing from a real Canadian dessert-café operating experience. We are beginning conversations with qualified operators who share our commitment to hospitality, product discovery and disciplined brand growth.</p>
        <a className="primaryButton" href="#inquire">Request franchise information <ArrowRight size={17}/></a>
      </div>
      <div className="franchiseHeroImage"><Image src="/images/franchise-store.png" alt="Flavour Bites operating café in Canada" fill priority sizes="(max-width:900px) 100vw, 50vw"/></div>
    </section>

    <section className="franchiseProof">
      <div><strong>Since 2012</strong><span>Canadian dessert-café experience</span></div>
      <div><strong>Multi-category</strong><span>Desserts, beverages & street-food-inspired favourites</span></div>
      <div><strong>Flexible formats</strong><span>Opportunities evaluated by market and site</span></div>
      <div><strong>Growing brand</strong><span>Café, retail products and gifting</span></div>
    </section>

    <section className="franchiseStory">
      <div>
        <p className="overline">A concept already in operation</p>
        <h2>Not a rendering. Not a theory. A real guest experience.</h2>
        <p>Our Edmonton café brings together frozen yogurt, rolled ice cream, falooda, beverages, premium desserts and street-food-inspired favourites. That breadth creates a concept built around discovery, repeat visits and multiple dayparts.</p>
      </div>
      <div className="franchiseStoryImage"><Image src="/images/franchise-storefront.png" alt="Flavour Bites Edmonton storefront" fill sizes="(max-width:900px) 100vw, 50vw"/></div>
    </section>

    <section className="franchiseOpportunity" id="opportunities">
      <div className="franchiseSectionHeading">
        <p className="overline">Partnership opportunities</p>
        <h2>Different paths. One brand standard.</h2>
        <p>We welcome exploratory conversations with qualified prospective operators and development partners.</p>
      </div>
      <div className="franchiseOpportunityGrid">
        <article><span>01</span><Store size={27}/><h3>Single-unit franchise</h3><p>For qualified owner-operators interested in developing and operating one approved Flavour Bites location.</p><ul><li><Check size={15}/>Owner-operator and investor inquiries</li><li><Check size={15}/>Site and market qualification</li><li><Check size={15}/>Subject to applicable franchise documentation</li></ul></article>
        <article><span>02</span><Building2 size={27}/><h3>Multi-unit development</h3><p>For experienced groups interested in discussing multiple locations within an agreed Canadian market.</p><ul><li><Check size={15}/>Multi-site operating capability</li><li><Check size={15}/>Phased development discussions</li><li><Check size={15}/>Territory subject to availability</li></ul></article>
        <article><span>03</span><Network size={27}/><h3>Area / development partnerships</h3><p>Select larger-market or regional development structures may be considered for experienced operators.</p><ul><li><Check size={15}/>Select opportunities only</li><li><Check size={15}/>Capability and experience review</li><li><Check size={15}/>Availability varies by jurisdiction</li></ul></article>
      </div>
    </section>

    <section className="franchiseOperations">
      <div className="franchiseOperationsImage"><Image src="/images/franchise-counter.png" alt="Flavour Bites service counter" fill sizes="(max-width:900px) 100vw, 52vw"/></div>
      <div className="franchiseOperationsCopy">
        <p className="overline">Built by operators</p>
        <h2>Hospitality, systems and brand discipline matter equally.</h2>
        <p>Flavour Bites has been shaped through day-to-day retail experience: serving guests, refining products, operating a physical café and learning what makes the concept memorable.</p>
        <p>We are looking for partners who value execution and long-term brand building—not simply a logo and a lease.</p>
      </div>
    </section>

    <section className="franchiseInquiry" id="inquire">
      <div className="franchiseInquiryCopy">
        <p className="overline">Start a conversation</p>
        <h2>Tell us where you see Flavour Bites growing.</h2>
        <p>Introduce yourself, your market and your operating background. Our franchise development team will review the inquiry and follow up where there may be a fit.</p>
      </div>
      <div className="franchiseContactPanel">
        <div><span>Current franchise contact</span><strong>tfmillwood@gmail.com</strong></div>
        <a className="primaryButton" href="mailto:tfmillwood@gmail.com?subject=Flavour%20Bites%20Franchise%20Inquiry">Email franchise development <ArrowRight size={17}/></a>
        <p>Please include your city/province, restaurant or retail experience, preferred market and whether you are interested in a single-unit or multi-unit opportunity.</p>
      </div>
    </section>

    <section className="franchiseLegal">
      <strong>Important franchise notice</strong>
      <p>This website is for general information and expressions of interest only and is not an offer to sell a franchise. Any franchise offering will be made only in compliance with applicable laws and required disclosure obligations. Availability is subject to qualification, market availability and applicable legal requirements. Nothing on this website is a representation of actual or potential sales, profits or financial performance.</p>
    </section>

    <footer className="franchiseFooter">
      <Image src="/images/logo.png" alt="Flavour Bites" width={220} height={65}/>
  
    </footer>
  </main>
}
