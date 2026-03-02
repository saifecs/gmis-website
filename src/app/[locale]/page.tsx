import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABlock } from "@/components/CTABlock";
import { getTranslations } from "@/lib/translations";
import type { Locale } from "@/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <>
      <Hero
        headline={t.home.heroHeadline}
        subheadline={t.home.heroSubheadline}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
      />
      <Stats stats={t.stats} />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-neutral-900 text-center">
            {t.home.ourServices}
          </h2>
          <p className="mt-2 text-concrete text-center max-w-2xl mx-auto">
            {t.home.ourServicesDesc}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.servicesOverview.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.title}
                description={s.description}
                href={`/${locale}/services/${s.id}`}
                learnMoreLabel={t.cta.learnMore}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-neutral-900">
              {t.vision2030.headline}
            </h2>
            <p className="mt-4 text-lg text-concrete">{t.vision2030.body}</p>
          </div>
        </div>
      </section>
      <CTABlock
        headline={t.home.readyHeadline}
        subtext={t.home.readySubtext}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
