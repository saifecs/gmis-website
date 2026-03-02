"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LocaleSwitcher() {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/")[1];
  const currentLocale: Locale =
    segment && locales.includes(segment as Locale) ? (segment as Locale) : "en";
  const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "") || "/";

  return (
    <div
      role="tablist"
      aria-label="Language"
      className="flex rounded-lg border border-neutral-200 bg-neutral-50 p-0.5 shadow-sm"
    >
      {locales.map((loc) => {
        const isActive = currentLocale === loc;
        return (
          <Link
            key={loc}
            href={`/${loc}${pathWithoutLocale}`}
            role="tab"
            aria-selected={isActive}
            aria-label={`Switch to ${localeNames[loc]}`}
            className={`min-w-[4.5rem] px-4 py-2 text-center text-sm font-medium rounded-md transition-colors ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900"
            }`}
          >
            {localeNames[loc]}
          </Link>
        );
      })}
    </div>
  );
}
