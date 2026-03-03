import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABlock } from "@/components/CTABlock";
import {
  servicesOverview,
  vision2030,
  cta,
  stats,
} from "@/lib/content";
import { VisionBlock } from "@/components/VisionBlock";
import { AnimateIn } from "@/components/ui/AnimateIn";

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Building the Future of Outdoor Environments"
        subheadline="Integrated Landscaping, Concrete & Water Solutions for Saudi Arabia"
        ctaText={cta.primary}
        ctaHref="/contact"
      />
      <Stats stats={stats} />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl font-bold text-neutral-900">
              Our Services
            </h2>
            <p className="mt-2 text-concrete max-w-2xl mx-auto">
              End-to-end outdoor solutions from design and installation to
              long-term maintenance.
            </p>
          </AnimateIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesOverview.map((s, i) => (
              <AnimateIn key={s.id} delay={i * 80}>
                <ServiceCard
                  title={s.title}
                  description={s.description}
                  href={s.slug}
                  serviceId={s.id}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
      <AnimateIn>
        <VisionBlock headline={vision2030.headline} body={vision2030.body} />
      </AnimateIn>
      <CTABlock
        headline="Ready to start your project?"
        subtext="Get in touch for a consultation. Our team will respond within 24 hours."
        ctaText={cta.primary}
        ctaHref="/contact"
      />
    </>
  );
}
