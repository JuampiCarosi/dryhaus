"use client";

import { useEffect } from "react";
import { ensureUtmSource, fillUtmSourceInputs } from "@/utils/utm-source";

export default function UtmSourceTracker() {
  useEffect(() => {
    const run = () => {
      const source = ensureUtmSource();
      fillUtmSourceInputs(source);
    };

    run();
    const t1 = window.setTimeout(run, 500);
    const t2 = window.setTimeout(run, 1500);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return null;
}
