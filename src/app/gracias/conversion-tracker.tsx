"use client";

import { useEffect } from "react";
import { trackGoogleAdsConversion } from "@/utils/google-ads";

export default function ConversionTracker() {
  useEffect(() => {
    trackGoogleAdsConversion();
  }, []);

  return null;
}
