"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/web-intelligence";

export default function WebIntelligence() {
  useEffect(() => {
    trackEvent("page_view", {
      device: window.innerWidth < 768 ? "mobile" : "desktop",
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      referrer: document.referrer,
    });
  }, []);

  return null;
}