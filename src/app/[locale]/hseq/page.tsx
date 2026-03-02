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
    title: t.hseq.title,
    description: t.hseq.subtitle,
  };
}

export default async function HSEQPage({
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
            {t.hseq.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.hseq.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.hseq.safetyKpis}
          </h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-8">
            {t.hseq.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-card border border-neutral-100 bg-neutral-50 p-8 text-center"
              >
                <div className="font-heading text-4xl font-bold text-primary">
                  {kpi.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-concrete">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.hseq.quality}
          </h2>
          <ul className="mt-6 space-y-3 text-concrete max-w-2xl">
            {t.hseq.qualityList.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock
        headline={t.hseq.ctaHeadline}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
