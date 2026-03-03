import { Metadata } from "next";
import { CTABlock } from "@/components/CTABlock";
import { caseStudies } from "@/lib/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies: stamped concrete patio, artificial landscaping, irrigation systems, sod installation, retaining walls. Canada and KSA.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Projects
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Delivered work across landscaping, concrete, irrigation, and
            maintenance. Proven execution in Canada; same standards in Saudi
            Arabia.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((project) => (
              <article
                key={project.id}
                id={project.id}
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
                      Scope
                    </h3>
                    <p className="mt-1 text-sm text-concrete">
                      {project.scope}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      Equipment Used
                    </h3>
                    <p className="mt-1 text-sm text-concrete">
                      {project.equipment}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      Key Highlights
                    </h3>
                    <ul className="mt-1 text-sm text-concrete list-disc list-inside">
                      {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                      Result
                    </h3>
                    <p className="mt-1 text-sm text-concrete">
                      {project.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Have a similar project?"
        subtext="Request a consultation and we'll scope it to your requirements."
        ctaHref="/contact"
      />
    </>
  );
}
