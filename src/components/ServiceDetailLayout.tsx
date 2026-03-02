import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CTABlock } from "@/components/CTABlock";
import type { getTranslations } from "@/lib/translations";
import type { Locale } from "@/i18n/config";

type T = ReturnType<typeof getTranslations>;

interface ServiceDetailLayoutProps {
  title: string;
  description: string;
  scope: readonly string[];
  process: readonly string[];
  deliverables: string;
  locale: Locale;
  t: T;
  children?: React.ReactNode;
}

export function ServiceDetailLayout({
  title,
  description,
  scope,
  process,
  deliverables,
  locale,
  t,
  children,
}: ServiceDetailLayoutProps) {
  return (
    <>
      <Hero
        headline={title}
        subheadline={description}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
        compact
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.services.scopeOfWork}
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-concrete max-w-3xl">
            {scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.services.process}
          </h2>
          <p className="mt-2 text-sm text-concrete">
            {t.services.processNote}
          </p>
          <ol className="mt-6 space-y-4 max-w-3xl">
            {process.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-heading font-bold text-primary shrink-0 w-8">
                  {i + 1}.
                </span>
                <span className="text-concrete">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            {t.services.deliverables}
          </h2>
          <p className="mt-4 text-concrete max-w-3xl">{deliverables}</p>
        </div>
      </section>
      {children}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/projects`}
            className="text-primary font-medium hover:underline inline-flex items-center gap-1 rtl:flex-row-reverse"
          >
            <span className="rtl:rotate-180">←</span> {t.cta.relatedProjects}
          </Link>
        </div>
      </section>
      <CTABlock ctaText={t.cta.primary} ctaHref={`/${locale}/contact`} />
    </>
  );
}
