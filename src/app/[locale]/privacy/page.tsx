import { Metadata } from "next";
import { getTranslations } from "@/lib/translations";
import { site } from "@/lib/content";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: t.privacy.title,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {t.privacy.title}
          </h1>
          <p className="mt-4 text-white/90">
            {t.privacy.lastUpdated} {new Date().toLocaleDateString(locale === "ar" ? "ar-SA" : "en-GB")}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-concrete">{t.privacy.placeholder}</p>
          <p className="mt-4 text-concrete">
            {t.privacy.contactQuestion}{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
