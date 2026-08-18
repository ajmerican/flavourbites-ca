"use client";

import { sendGAEvent } from "@next/third-parties/google";

export function trackFranchiseInquirySuccess() {
  sendGAEvent("event", "generate_lead", {
    lead_type: "franchise",
    lead_source: "website_form",
  });
}
