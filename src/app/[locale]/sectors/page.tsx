import { Metadata } from "next";
import { CTABlock } from "@/components/CTABlock";
import { getTranslations } from "@/lib/translations";
import type { Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: t.sectors.title,
    description: t.sectors.subtitle,
  };
}

export default async function SectorsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const primaryCount = 6;

  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {t.sectors.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.sectors.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.sectors.primary}
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {t.sectors.list.slice(0, primaryCount).map((sector) => (
              <li
                key={sector}
                className="rounded-card border border-neutral-100 bg-white px-6 py-4 font-medium text-neutral-900"
              >
                {sector}
              </li>
            ))}
          </ul>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mt-12">
            {t.sectors.secondary}
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {t.sectors.list.slice(primaryCount).map((sector) => (
              <li
                key={sector}
                className="rounded-card border border-neutral-100 bg-white px-6 py-4 font-medium text-neutral-900"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock
        headline={t.sectors.ctaHeadline}
        subtext={t.sectors.ctaSub}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
