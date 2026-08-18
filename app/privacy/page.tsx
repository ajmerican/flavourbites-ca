import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy | Flavour Bites",
  description: "Privacy policy for flavourbites.ca.",
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
        <h1>Privacy Policy</h1>
        <p className="legalUpdated">Effective: August 17, 2026</p>
        <section>
          <h2>1. Privacy commitment</h2>
          <p>This Policy explains how flavourBites Inc. collects, uses, discloses, protects and retains personal information in connection with flavourbites.ca and related Canadian business interactions. Our practices are intended to reflect applicable private-sector privacy requirements, including Alberta’s Personal Information Protection Act (PIPA) and, where applicable, federal requirements.</p>
        </section>
        <section>
          <h2>2. Information we may collect</h2>
          <p>Depending on how you interact with us, we may collect contact information; order and transaction information; franchise, business or employment inquiry information; communications and customer-service records; technical data such as IP address, browser and device information; and communication or consent preferences.</p><p>We do not intentionally collect full payment-card numbers through flavourbites.ca itself where payment is handled by an external ordering/payment provider.</p>
        </section>
        <section>
          <h2>3. How we collect information</h2>
          <p>We may collect information directly from you, automatically from your browser or device, through our café/POS or ordering systems, and from service providers that help us operate the website, process transactions or communicate with you.</p>
        </section>
        <section>
          <h2>4. Purposes of use</h2>
          <p>We may use personal information to provide products and services; support orders; answer questions, complaints and franchise inquiries; operate and secure systems; detect fraud or misuse; maintain business, safety, tax and legal records; send transactional communications; send marketing where permitted and appropriately consented to; and comply with law, recalls, food-safety obligations or legal process.</p>
        </section>
        <section>
          <h2>5. Consent and choices</h2>
          <p>Where consent is required, we seek consent appropriate to the sensitivity and context. You may withdraw consent to optional uses subject to legal or contractual restrictions and reasonable notice. Transactional or legally required communications may still be sent where permitted.</p>
        </section>
        <section>
          <h2>6. Cookies and similar technologies</h2>
          <p>The website may use essential cookies or similar technologies for security, performance and core functionality. If we introduce analytics, advertising or other non-essential tracking, we will update this Policy and provide consent or preference controls where required. Third-party sites reached through our links may use their own technologies under their own policies.</p>
        </section>
        <section>
          <h2>7. Service providers and disclosures</h2>
          <p>We may disclose information to providers of hosting, cloud infrastructure, email, ordering/POS technology, payment processing, communications, security, professional advice and data storage. We may also disclose information where required or permitted by law, including to regulators, courts, law enforcement, insurers, auditors or advisers, or in connection with a business financing, reorganization, merger or sale subject to applicable protections.</p><p>We do not sell personal information for money.</p>
        </section>
        <section>
          <h2>8. Cross-border processing</h2>
          <p>Some service providers may process or store information outside Alberta or Canada. Information in another jurisdiction may be subject to that jurisdiction’s laws and lawful access requirements. We use reasonable safeguards appropriate to the circumstances.</p>
        </section>
        <section>
          <h2>9. Retention</h2>
          <p>We retain information only as long as reasonably necessary for the identified purpose, legitimate business needs or legal requirements. When no longer required, we take reasonable steps to delete, destroy or anonymize it.</p>
        </section>
        <section>
          <h2>10. Security</h2>
          <p>We use administrative, technical and physical safeguards appropriate to the sensitivity of information, including access controls, reputable service providers, secure connections and account controls. No system can be guaranteed completely secure.</p>
        </section>
        <section>
          <h2>11. Access and correction</h2>
          <p>Subject to legal exceptions, you may ask for access to personal information we hold about you and request correction of inaccurate or incomplete information. We may verify your identity before responding.</p>
        </section>
        <section>
          <h2>12. Privacy questions and complaints</h2>
          <p>Contact our privacy contact for questions, access/correction requests or complaints:</p><p>flavourBites Inc.<br />413-2331 66 Street NW, Edmonton, Alberta, Canada<br />Email: <a href="mailto:tfmillwood@gmail.com">tfmillwood@gmail.com</a><br />Subject line: Privacy Request</p>
        </section>
        <section>
          <h2>13. Children and minors</h2>
          <p>The website is intended for a general audience and is not designed to knowingly collect personal information directly from children without appropriate authorization. Contact us if you believe a child has provided information improperly.</p>
        </section>
        <section>
          <h2>14. Third-party sites</h2>
          <p>External ordering, map, payment and social-media services are governed by their own privacy policies, not this Policy.</p>
        </section>
        <section>
          <h2>15. Changes</h2>
          <p>We may update this Policy as laws, technology, services or practices change. The effective date above identifies the current version. Material changes will be communicated appropriately where required.</p>
        </section>
        <section>
          <h2>16. Related terms</h2>
          <p>Please also review our <Link href="/terms">Terms &amp; Conditions</Link>.</p>
        </section>
      </article>
    </main>
  );
}
