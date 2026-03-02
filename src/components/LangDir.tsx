"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { locales, type Locale } from "@/i18n/config";

export function LangDir() {
  const pathname = usePathname();
  const segment = pathname?.split("/")[1];
  const locale: Locale =
    segment && locales.includes(segment as Locale) ? (segment as Locale) : "en";

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("locale-ar", locale === "ar");
  }, [locale]);

  return null;
}
