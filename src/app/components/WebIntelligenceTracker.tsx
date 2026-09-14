"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/tracking";

export default function WebIntelligenceTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    trackEvent("page_view", pathname);
  }, [pathname]);

  return null;
}