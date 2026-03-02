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
    title: t.sustainability.title,
    description: t.sustainability.subtitle,
  };
}

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const pillars = [
    { title: t.sustainability.waterEfficiency, text: t.sustainability.waterEfficiencyText },
    { title: t.sustainability.nativePlanting, text: t.sustainability.nativePlantingText },
    { title: t.sustainability.lifecycle, text: t.sustainability.lifecycleText },
    { title: t.sustainability.sourcing, text: t.sustainability.sourcingText },
  ];

  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            {t.sustainability.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.sustainability.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-card border border-neutral-100 bg-white p-8 shadow-card"
              >
                <h2 className="font-heading text-xl font-bold text-primary">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-concrete">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.sustainability.vision2030Block}
          </h2>
          <p className="mt-4 text-concrete max-w-3xl">
            {t.sustainability.vision2030Text}
          </p>
        </div>
      </section>

      <CTABlock
        headline={t.sustainability.ctaHeadline}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
