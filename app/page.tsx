"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Gift, IceCreamBowl, MapPin, Menu, ShoppingBag, Sparkles, Store, Users, X } from "lucide-react";
import { useState } from "react";
import { ORDER_URL } from "@/lib/commerce";

const experiences = [
  {
    title: "Frozen Yogurt",
    text: "A rotating selection from a library of 129 flavours, with toppings and combinations made for discovery.",
    icon: IceCreamBowl,
    image: "/images/experience-frozen-yogurt.png",
    imageAlt: "Flavour Bites frozen yogurt with toppings",
  },
  {
    title: "Rolled Ice Cream",
    text: "More than 40 base flavours and millions of possible combinations, prepared fresh to order.",
    icon: Sparkles,
    image: "/images/experience-rolled-ice-cream.png",
    imageAlt: "Flavour Bites rolled ice cream dessert",
  },
  {
    title: "Falooda & Café Drinks",
    text: "Falooda, bubble tea, smoothies, specialty lattes, tea, coffee and café favourites.",
    icon: Coffee,
    image: "/images/experience-falooda.png",
    imageAlt: "Flavour Bites falooda and café drinks",
  },
  {
    title: "Street Food & Desserts",
    text: "Waffles, pancakes, samosa, pani puri, poutine and other sweet and savoury favourites.",
    icon: Store,
    image: "/images/experience-street-food.png",
    imageAlt: "Flavour Bites waffle and street-food-inspired desserts",
  },
];


const products = [
  ["Golden Turmeric","Latte Mix","/images/turmeric-label.png","gold","A warm premium beverage blend of turmeric, ginger, cinnamon, cardamom, saffron, black pepper and sea salt."],
  ["Matcha","Latte Mix","/images/matcha-label.png","green","Premium matcha with a smooth non-dairy creamer, natural vanilla and sea salt, with no added sugar."],
  ["Dubai Chocolate","Pistachio Kunafa","/images/chocolate-packaging.png","cocoa","Smooth chocolate with a pistachio-kunafa inspired centre and a rich contrast of flavour and texture."],
  ["Dessert Experience","Signature Gift Box","/images/gift-box-design.png","blue","A gift-ready collection bringing together our turmeric latte, matcha latte and Dubai chocolate."],
] as const;

export default function HomePage() {
  const [menuOpen,setMenuOpen]=useState(false);
  return <main id="top">
    <div className="announcement"><span>Born in Canada</span><i/><span>Serving Edmonton</span><i/><span>Growing beyond</span></div>
    <header className="siteHeader">
      <a className="brand" href="#top"><Image src="/images/logo.png" alt="Flavour Bites" width={330} height={95} priority/></a>
      <nav className={menuOpen?"nav open":"nav"}>
        <a href="#experience" onClick={()=>setMenuOpen(false)}>Experience</a>
        <a href="#story" onClick={()=>setMenuOpen(false)}>Our story</a>
        <a href="#retail" onClick={()=>setMenuOpen(false)}>Retail collection</a>
        <Link href="/franchise" onClick={()=>setMenuOpen(false)}>Franchise</Link>
        <a href="#visit" onClick={()=>setMenuOpen(false)}>Visit us</a>
      </nav>
      <div className="headerActions">
        <button className="iconButton menuButton" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
        <a className="countryLink" href="https://flavourbites.us">US</a>
        <a className="orderButton" href={ORDER_URL} target="_blank" rel="noreferrer">Order online <ArrowRight size={16}/></a>
      </div>
    </header>

    <section className="hero">
      <motion.div className="heroCopy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <p className="overline">Flavour Bites · Edmonton, Alberta</p>
        <h1>Dessert should be <span>an experience.</span></h1>
        <p className="heroLead">Frozen yogurt, rolled ice cream, street food and café creations inspired by flavours from around the world—all under one joyful roof.</p>
        <div className="heroButtons">
          <a className="primaryButton" href={ORDER_URL} target="_blank" rel="noreferrer">Order online <ShoppingBag size={17}/></a>
          <a className="textButton" href="#experience">Explore Flavour Bites <ArrowRight size={16}/></a>
        </div>
      </motion.div>
      <div className="heroMedia">
        <div className="heroImage"><Image src="/images/franchise-store.png" alt="Flavour Bites dessert café in Edmonton" fill priority sizes="(max-width:900px) 100vw, 50vw"/></div>
        <div className="heroCaption"><span>Our Edmonton café</span><strong>Mill Woods Town Centre</strong></div>
      </div>
      <div className="heroProof"><span>129 flavours in rotation</span><span>40+ rolled-ice-cream bases</span><span>Sweet + savoury café menu</span></div>
    </section>

    <section className="experienceIntro" id="experience">
      <p className="overline">One café. Many ways to enjoy it.</p>
      <h2>A world of flavour, without the menu-page overload.</h2>
      <p>Our menu changes, rotates and evolves. Explore the experience here, then use our live ordering site for today&apos;s menu, current pricing and checkout.</p>
      <a className="inlineCta" href={ORDER_URL} target="_blank" rel="noreferrer">See today&apos;s menu &amp; order online <ArrowRight size={16}/></a>
    </section>

    <section className="experienceGrid">
  {experiences.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.article
        className="experienceCard"
        key={item.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: index * 0.07, duration: 0.55 }}
      >
        <div className="experienceCardVisual">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className={`experienceCardImage experienceCardImage-${index + 1}`}
            sizes="(max-width: 760px) 100vw, 25vw"
          />

          <div className="experienceCardShade" aria-hidden="true" />

          <div className="experienceCardNumber">
            0{index + 1}
          </div>

          <div className="experienceCardIcon">
            <Icon size={21} />
          </div>
        </div>

        <div className="experienceCardBody">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </motion.article>
    );
  })}
</section>

    <section className="flavourFeature">
      <div className="flavourFeatureCopy">
        <p className="overline">The flavour library</p>
        <h2>129 flavours.<br/>Always something different.</h2>
        <p>Our frozen-yogurt program is built around a large rotating flavour library. Typically 8–10 flavours are available at a time, so every visit can feel a little different.</p>
        <a className="secondaryButton" href={ORDER_URL} target="_blank" rel="noreferrer">Check today&apos;s selection <ArrowRight size={16}/></a>
      </div>
      <div className="flavourFeatureImage"><Image src="/images/franchise-product.png" alt="Flavour Bites frozen yogurt" fill sizes="(max-width:900px) 100vw, 48vw"/></div>
    </section>

    <section className="storySection" id="story">
      <div className="storyImage"><Image src="/images/franchise-storefront.png" alt="Entrance to Flavour Bites in Edmonton" fill sizes="(max-width:900px) 100vw, 48vw"/></div>
      <div className="storyCopy">
        <p className="overline">Our story</p>
        <h2>From a dessert café to a brand built around flavour.</h2>
        <p>Since 2012, our Edmonton dessert-café journey has been shaped by one constant idea: give guests more to discover. What began around frozen yogurt grew into rolled ice cream, falooda, beverages, desserts and street-food-inspired favourites.</p>
        <p>Today, Flavour Bites brings that experience together under one brand—colourful, welcoming and continually evolving. Our packaged products, gifting collection and franchise development are the next chapter.</p>
      </div>
    </section>

    <section className="retailSection" id="retail">
      <div className="sectionHeading"><div><p className="overline">From our café to your home</p><h2>The Flavour Bites retail collection.</h2></div><p>Café-inspired products designed to carry the Flavour Bites experience beyond the store.</p></div>
      <div className="retailGrid">
        {products.map(([name,sub,image,tone,copy])=><article className={`retailCard ${tone}`} key={name}>
          <div className="retailVisual"><Image src={image} alt={`${name} ${sub}`} fill sizes="(max-width:760px) 100vw, 50vw"/></div>
          <div className="retailInfo"><h3>{name}<span>{sub}</span></h3><p>{copy}</p></div>
        </article>)}
      </div>
      <div className="retailFooter"><div><strong>Shopping from the United States?</strong><span>Visit our dedicated U.S. storefront for current U.S. availability.</span></div><a href="https://flavourbites.us" className="secondaryButton">Visit flavourbites.us <ArrowRight size={16}/></a></div>
    </section>

    <section className="operationsSection">
      <div className="operationsCopy">
        <p className="overline">A real operating café</p><h2>Built around choice, visibility and hospitality.</h2>
        <p>From guest-facing toppings and frozen-yogurt machines to made-to-order drinks and desserts, the Flavour Bites environment is designed to make choosing part of the experience.</p>
        <div className="operationsPoints"><span><Sparkles size={17}/>Product discovery built into the store</span><span><Users size={17}/>Family-friendly, social café environment</span><span><Gift size={17}/>Desserts, beverages, gifting and retail products</span></div>
      </div>
      <div className="operationsImage"><Image src="/images/franchise-counter.png" alt="Flavour Bites service counter" fill sizes="(max-width:900px) 100vw, 52vw"/></div>
    </section>

    <section className="franchiseStrip">
      <div><p className="overline">Grow with Flavour Bites</p><h2>Bring the Flavour Bites experience to your market.</h2><p>We welcome conversations with qualified Canadian franchisees, multi-unit operators and select development partners.</p></div>
      <Link href="/franchise">Explore franchise opportunities <ArrowRight size={17}/></Link>
    </section>

    <section className="visitSection" id="visit">
      <div className="visitCopy">
        <p className="overline">Visit us</p><h2>Your next Flavour Bites moment is in Edmonton.</h2>
        <p>Mill Woods Town Centre<br/>413-2331 66 Street NW<br/>Edmonton, Alberta T6K 4B5</p>
        <p><a href="tel:+17807576085">(780) 757-6085</a><br/><a href="mailto:tfmillwood@gmail.com">tfmillwood@gmail.com</a></p>
        <div className="visitButtons">
          <a className="primaryButton" href={ORDER_URL} target="_blank" rel="noreferrer">Order online <ShoppingBag size={17}/></a>
          <a className="secondaryButton" href="https://www.google.com/maps/search/?api=1&query=Flavour+Bites+2331+66+Street+NW+Edmonton+AB" target="_blank" rel="noreferrer">Get directions <MapPin size={17}/></a>
        </div>
      </div>
      <div className="visitImage"><Image src="/images/franchise-storefront.png" alt="Flavour Bites Edmonton storefront" fill sizes="(max-width:900px) 100vw, 48vw"/></div>
    </section>
</main>;
}
