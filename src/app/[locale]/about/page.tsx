import { Metadata } from "next";
import Link from "next/link";
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
    title: t.about.title,
    description: t.about.intro,
  };
}

export default async function AboutPage({
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
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.about.intro}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="vision" className="font-heading text-2xl font-bold text-neutral-900">
            {t.about.groupOverview}
          </h2>
          <p className="mt-4 text-concrete max-w-3xl">
            {t.about.groupBody}
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="rounded-card border border-neutral-100 p-6 bg-neutral-50">
              <h3 className="font-heading font-semibold text-primary">
                {t.about.easyLandscape}
              </h3>
              <p className="mt-2 text-sm text-concrete">
                {t.about.easyLandscapeDesc}
              </p>
            </div>
            <div className="rounded-card border border-neutral-100 p-6 bg-neutral-50">
              <h3 className="font-heading font-semibold text-primary">
                {t.about.greenmark}
              </h3>
              <p className="mt-2 text-sm text-concrete">
                {t.about.greenmarkDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.about.visionMission}
          </h2>
          <div className="mt-6 space-y-6 max-w-3xl">
            <div>
              <h3 className="font-heading font-semibold text-primary">{t.about.vision}</h3>
              <p className="mt-1 text-concrete">{t.about.visionText}</p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-primary">{t.about.mission}</h3>
              <p className="mt-1 text-concrete">{t.about.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.about.founderMessage}
          </h2>
          <div className="mt-8 max-w-3xl rounded-card border border-neutral-100 bg-white p-8 shadow-card">
            <p className="text-concrete italic">&ldquo;{t.about.founderQuote}&rdquo;</p>
            <p className="mt-4 font-heading font-semibold text-primary">
              {t.about.founderName}
            </p>
            <p className="text-sm text-concrete">{t.about.founderRole}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.about.history}
          </h2>
          <ul className="mt-8 space-y-6 max-w-2xl">
            {t.about.timeline.map((item) => (
              <li key={item.year} className="flex gap-4">
                <span className="font-heading font-bold text-primary shrink-0 w-24">
                  {item.year}
                </span>
                <span className="text-concrete">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.about.coreValues}
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.about.values.map((value) => (
              <li
                key={value}
                className="rounded-card border border-neutral-100 bg-white px-4 py-3 font-medium text-neutral-900"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-neutral-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-concrete max-w-2xl mx-auto">
            {t.about.legal.replace("{cr}", t.site.cr)}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark"
          >
            {t.cta.secondary}
          </Link>
        </div>
      </section>
    </>
  );
}
