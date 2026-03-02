"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslations } from "@/lib/translations";
import type { Locale } from "@/i18n/config";

export function NotFoundContent() {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/")[1];
  const locale: Locale =
    segment === "ar" ? "ar" : "en";
  const t = getTranslations(locale);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="font-heading text-2xl font-bold text-neutral-900">
        {t.notFound.title}
      </h1>
      <p className="mt-2 text-concrete">{t.notFound.message}</p>
      <Link
        href={`/${locale}`}
        className="mt-6 text-primary font-medium hover:underline"
      >
        {t.notFound.goHome}
      </Link>
    </div>
  );
}
