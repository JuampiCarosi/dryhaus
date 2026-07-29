const KEY = "rc_utm_source";

function trim(s: string | null | undefined): string {
  return String(s ?? "").replace(/^\s+|\s+$/g, "");
}

function normalize(v: string | null | undefined): string {
  const s = trim(v);
  if (!s) return "";
  const low = s.toLowerCase();

  if (low.includes("adwords") || low.includes("google")) return "Adwords";
  if (
    low.includes("facebook") ||
    low.includes("meta") ||
    low.includes("instagram")
  ) {
    return "Meta";
  }

  // si viene Email u otro, lo respeta
  return s;
}

function getParam(qs: string, key: string): string {
  if (!qs) return "";
  const parts = qs.split("&");
  for (const part of parts) {
    const kv = part.split("=");
    const k = decodeURIComponent(kv[0] ?? "");
    if (k === key) return decodeURIComponent(kv.slice(1).join("=") || "");
  }
  return "";
}

function getFromUrl(): string {
  try {
    let qs = window.location.search || "";
    if (qs.startsWith("?")) qs = qs.substring(1);
    return normalize(getParam(qs, "utm_source"));
  } catch {
    return "";
  }
}

function getStoredRaw(): string {
  try {
    return window.localStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}

function setStored(value: string): void {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // ignore storage errors
  }
}

function sameHost(ref: string): boolean {
  try {
    if (!ref) return false;
    const a = document.createElement("a");
    a.href = ref;
    return a.hostname === window.location.hostname;
  } catch {
    return false;
  }
}

function isNewEntry(): boolean {
  // “nueva entrada” = sin referrer o referrer externo
  const ref = document.referrer || "";
  if (!ref) return true;
  return !sameHost(ref);
}

export function ensureUtmSource(): string {
  if (typeof window === "undefined") return "Directo";

  const fromUrl = getFromUrl();

  // 1) si hay utm_source, SIEMPRE pisa (last-touch)
  if (fromUrl) {
    setStored(fromUrl);
    return fromUrl;
  }

  // 2) si NO hay utm_source:
  // - si es nueva entrada => pisa a Directo
  // - si es navegación interna => conserva lo que ya había
  if (isNewEntry()) {
    setStored("Directo");
    return "Directo";
  }

  const stored = normalize(getStoredRaw());
  return stored || "Directo";
}

export function fillUtmSourceInputs(source: string): void {
  if (typeof document === "undefined") return;
  const inputs = document.querySelectorAll('input[name="utm_source"]');
  for (const input of inputs) {
    if (input instanceof HTMLInputElement) {
      input.value = source;
    }
  }
}

export function getUtmSource(): string {
  return ensureUtmSource();
}
