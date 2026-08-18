import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms & Conditions | Flavour Bites",
  description: "Terms and conditions for flavourbites.ca.",
};

export default function LegalPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <Link href="/" className="legalBack">← Back to Flavour Bites</Link>
        <span>Canada</span>
      </header>
      <article className="legalDocument">
        <p className="legalEyebrow">Legal</p>
        <h1>Terms & Conditions</h1>
        <p className="legalUpdated">Effective: August 17, 2026</p>
        <section>
          <h2>1. Agreement and operator</h2>
          <p>These Terms govern flavourbites.ca and related Canadian online services operated for flavourBites Inc. (“Flavour Bites”, “we”, “us” or “our”). By using the site, following an order link, or submitting an inquiry, you agree to these Terms to the extent permitted by applicable law.</p><p>Our Edmonton café is located at 413-2331 66 Street NW, Edmonton, Alberta, Canada. Website information may be updated at any time.</p>
        </section>
        <section>
          <h2>2. Website information and availability</h2>
          <p>We try to keep menu descriptions, flavours, prices, hours, promotions, photographs and product information accurate, but they may change without notice. Images are illustrative and actual presentation, packaging, portions and colours may vary.</p><p>If website information conflicts with the live ordering system, point-of-sale information or final product packaging, rely on the information presented at the point of purchase or on the final package, subject to applicable law.</p>
        </section>
        <section>
          <h2>3. Online ordering and third-party services</h2>
          <p>“Order Online” links may open an external Talech-powered ordering service or another third-party platform. Orders are not accepted until confirmed through the applicable system. Pricing, taxes, fees, availability, pickup times, payment authorization and platform-specific terms are determined at checkout.</p><p>We may reasonably decline or cancel an order because of unavailability, suspected fraud, technical or pricing error, safety concerns or events outside our reasonable control. Third-party platforms have their own terms and privacy practices.</p>
        </section>
        <section>
          <h2>4. Food allergies and dietary restrictions</h2>
          <div className="legalImportant"><strong>Important allergy notice.</strong> Our café and products may contain or come into contact with milk, eggs, peanuts, tree nuts, wheat/gluten, soy, sesame and other allergens. Shared equipment, utensils, preparation areas, storage and supplier facilities may create cross-contact risk.</div><p>Ingredients and suppliers can change. Customers with allergies, celiac disease, intolerances, medical conditions or dietary restrictions must review current packaging and speak with staff before ordering. We cannot guarantee that restaurant-prepared food is completely free of a particular allergen unless expressly confirmed for a specific product and process.</p>
        </section>
        <section>
          <h2>5. Packaged products and food safety</h2>
          <p>The physical package and legally required label are the authoritative source for ingredients, allergens, nutrition facts, net quantity, storage and other regulated information. Do not consume a product with damaged, tampered, expired or improperly stored packaging. Follow all storage and preparation instructions and contact us promptly about any safety or quality concern.</p><p>Website statements are not medical or dietary advice.</p>
        </section>
        <section>
          <h2>6. Prices, payment, cancellations and refunds</h2>
          <p>Unless stated otherwise, Canadian prices are in Canadian dollars. Taxes and applicable fees are added as required. Obvious pricing or description errors may be corrected before fulfillment.</p><p>Many café products are made to order or perishable, so cancellation or refund options may be limited after preparation begins. Refunds, replacements and cancellations are handled according to the circumstances, applicable platform policies and consumer law. Nothing in these Terms limits a non-waivable statutory right or remedy.</p>
        </section>
        <section>
          <h2>7. Promotions and offers</h2>
          <p>Promotions, coupons, contests, gift offers and loyalty benefits may have separate rules, exclusions, expiration dates and availability requirements. Unless expressly stated, offers cannot be combined, transferred, exchanged for cash or applied retroactively.</p>
        </section>
        <section>
          <h2>8. Franchise and business opportunities</h2>
          <div className="legalImportant"><strong>No franchise offer.</strong> Franchise, territory and development information is provided only for general information and expressions of interest. It is not an offer to sell a franchise, security or investment.</div><p>Any franchise opportunity is subject to qualification, territory availability, applicable disclosure laws, contractual documentation and professional advice. We make no website promise or projection of sales, profit, return on investment, payback period or financial performance.</p>
        </section>
        <section>
          <h2>9. Intellectual property</h2>
          <p>Flavour Bites names, logos, trade dress, packaging, product names, photographs, videos, text, graphics, menu concepts and other content are owned by or licensed to us and protected by applicable law. You receive only a limited right to use the website for personal, non-commercial purposes.</p><p>You may not copy, scrape, reproduce, modify, publish, sell, frame, exploit or use our branding or content to create a competing commercial offering without prior written permission.</p>
        </section>
        <section>
          <h2>10. Acceptable use</h2>
          <p>You must not interfere with the website, attempt unauthorized access, introduce malicious code, harvest data, impersonate another person, submit fraudulent information, violate third-party rights or use the site for unlawful, abusive or deceptive activity.</p>
        </section>
        <section>
          <h2>11. Third-party links</h2>
          <p>External ordering, maps, payment, social-media and other third-party links are provided for convenience. We do not control those independent services and are not responsible for their availability, security, content or privacy practices except where responsibility cannot legally be excluded.</p>
        </section>
        <section>
          <h2>12. Disclaimer of warranties</h2>
          <p>To the maximum extent permitted by law, the website and content are provided “as is” and “as available”. We do not guarantee uninterrupted, error-free or completely secure operation or compatibility with every device.</p>
        </section>
        <section>
          <h2>13. Limitation of liability</h2>
          <p>To the maximum extent permitted by applicable law, Flavour Bites and its directors, officers, employees, affiliates and service providers are not liable for indirect, incidental, special, consequential, exemplary or punitive damages, loss of profits, data, opportunity or business interruption arising from use of the website or independent third-party services.</p><p>Nothing excludes liability or consumer, privacy, food-safety or other rights that applicable law does not permit to be waived or limited.</p>
        </section>
        <section>
          <h2>14. Indemnity</h2>
          <p>To the extent permitted by law, you are responsible for losses, claims, liabilities and reasonable costs arising from your unlawful misuse of the website, fraud, violation of these Terms or infringement of another person’s rights.</p>
        </section>
        <section>
          <h2>15. Privacy</h2>
          <p>Our handling of personal information is described in our <Link href="/privacy">Privacy Policy</Link>.</p>
        </section>
        <section>
          <h2>16. Changes</h2>
          <p>We may update these Terms as our services, technology or legal obligations change. The effective date above identifies the current version. Changes apply prospectively unless law requires otherwise.</p>
        </section>
        <section>
          <h2>17. Governing law and disputes</h2>
          <p>These Terms are governed by the laws of Alberta and applicable federal laws of Canada. Subject to mandatory consumer rights to proceed elsewhere, disputes relating to the website or these Terms are subject to the courts of Alberta.</p>
        </section>
        <section>
          <h2>18. General</h2>
          <p>If a provision is unenforceable, the remaining provisions continue in effect. Failure to enforce a provision is not a waiver. These Terms do not create an employment, agency, partnership, joint venture or franchise relationship.</p>
        </section>
        <section>
          <h2>19. Contact</h2>
          <p>flavourBites Inc.<br />413-2331 66 Street NW<br />Edmonton, Alberta, Canada<br />Email: <a href="mailto:tfmillwood@gmail.com">tfmillwood@gmail.com</a></p>
        </section>
      </article>
    </main>
  );
}
