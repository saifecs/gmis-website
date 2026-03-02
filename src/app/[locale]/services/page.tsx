import { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
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
    title: t.services.title,
    description: t.services.subtitle,
  };
}

export default async function ServicesPage({
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
            {t.services.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </>
  );
}
