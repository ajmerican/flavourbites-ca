import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ORDER_URL =
  "https://microsite.talech.com/ordering/TUTTI-FRUTTI-DESSERT-CAFE-EDMONTON-AB/KVAzewZD0MRYgB85";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterTop">
        <div className="siteFooterBrand">
  <p className="siteFooterEyebrow">Flavour Bites Canada</p>

  <h2>Indulge. Savour. Love.</h2>

  <p>
    A Canadian dessert-café experience built around discovery,
    hospitality and flavour.
  </p>
</div>

        <a
          className="siteFooterOrder"
          href={ORDER_URL}
          target="_blank"
          rel="noreferrer"
        >
          Order online
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="siteFooterGrid">
        <div>
          <h4>Experience</h4>
          <Link href="/#experience">Dessert café</Link>
          <a href={ORDER_URL} target="_blank" rel="noreferrer">
            Order online
          </a>
          <Link href="/#retail">Retail collection</Link>
          <Link href="/#visit">Visit us</Link>
        </div>

        <div>
          <h4>Flavour Bites</h4>
          <Link href="/#story">Our story</Link>
          <Link href="/franchise">Franchise</Link>
          <a href="https://flavourbites.us">United States</a>
        </div>

        <div>
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>

        <div>
          <h4>Edmonton</h4>
          <p>
            413-2331 66 Street NW
            <br />
            Edmonton, AB T6K 4B5
            <br />
            Canada
          </p>

          <a href="tel:+17807576085">(780) 757-6085</a>
          <a href="mailto:tfmillwood@gmail.com">tfmillwood@gmail.com</a>
        </div>
      </div>

      <div className="siteFooterFine">
        <span>© 2026 flavourBites Inc.</span>

        <div className="siteFooterLegalLinks">
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>

        <span>flavourbites.ca</span>
      </div>
    </footer>
  );
}
