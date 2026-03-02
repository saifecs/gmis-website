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
    title: t.projects.title,
    description: t.projects.subtitle,
  };
}

export default async function ProjectsPage({
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
            {t.projects.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {t.projects.caseStudies.map((project, idx) => (
              <article
                key={idx}
                className="rounded-card border border-neutral-100 bg-white p-8 shadow-card"
              >
                <h2 className="font-heading text-2xl font-bold text-neutral-900">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-sand font-medium">
                  {project.location}
                </p>
                <p className="mt-4 text-concrete">{project.overview}</p>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      {t.projects.scope}
                    </h3>
                    <p className="mt-1 text-sm text-concrete">{project.scope}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      {t.projects.equipmentUsed}
                    </h3>
                    <p className="mt-1 text-sm text-concrete">{project.equipment}</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      {t.projects.keyHighlights}
                    </h3>
                    <ul className="mt-1 text-sm text-concrete list-disc list-inside">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      {t.projects.result}
                    </h3>
                    <p className="mt-1 text-sm text-concrete">{project.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline={t.projects.haveProject}
        subtext={t.projects.haveProjectSub}
        ctaText={t.cta.primary}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
