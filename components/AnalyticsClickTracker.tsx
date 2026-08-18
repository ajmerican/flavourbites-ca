"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

const ORDER_HOSTS = new Set(["microsite.talech.com"]);

function getAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  return target.closest("a");
}

export default function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const anchor = getAnchor(event.target);
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      if (rawHref.startsWith("tel:")) {
        sendGAEvent("event", "phone_click", {
          link_url: rawHref,
          link_text: anchor.textContent?.trim() || undefined,
          location: "website",
        });
        return;
      }

      if (rawHref.startsWith("mailto:")) {
        sendGAEvent("event", "email_click", {
          link_url: rawHref,
          link_text: anchor.textContent?.trim() || undefined,
          location: "website",
        });
        return;
      }

      try {
        const url = new URL(anchor.href);

        if (ORDER_HOSTS.has(url.hostname)) {
          sendGAEvent("event", "order_online_click", {
            link_url: url.href,
            link_text: anchor.textContent?.trim() || undefined,
            order_provider: "talech",
          });
        }
      } catch {
        // Ignore malformed/non-URL href values.
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
