import { Metadata } from "next";
import { hseqKpis } from "@/lib/content";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "HSEQ",
  description:
    "Zero major safety incidents. 0.00 LTIFR. Daily Toolbox Talks. Quality and as-built documentation on every project.",
};

export default function HSEQPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            HSEQ
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Health, Safety, Environment, and Quality. Safety-first culture and
            disciplined governance on every project.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Safety KPIs
          </h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-8">
            {hseqKpis.map((kpi) => (
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
            Quality
          </h2>
          <ul className="mt-6 space-y-3 text-concrete max-w-2xl">
            <li>• Less than 5% minor defects; zero tolerance for critical defects.</li>
            <li>• As-built documentation for every project.</li>
            <li>• Structured QA/QC procedures from preparation to handover.</li>
          </ul>
        </div>
      </section>

      <CTABlock
        headline="Partner with a safety-first team"
        ctaHref="/contact"
      />
    </>
  );
}
