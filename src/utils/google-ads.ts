// Google Ads conversion tracking utility
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackGoogleAdsConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17534087405/DxOsCKn58JsbEO3h86hB",
      value: 1.0,
      currency: "ARS",
    });
  }
};
