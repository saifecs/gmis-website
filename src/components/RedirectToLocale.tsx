"use client";

import { useEffect } from "react";
import { defaultLocale } from "@/i18n/config";

export function RedirectToLocale() {
  useEffect(() => {
    window.location.replace(`/${defaultLocale}/`);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <p className="text-concrete">Redirecting…</p>
    </div>
  );
}
