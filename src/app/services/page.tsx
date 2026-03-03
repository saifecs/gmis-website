import { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesOverview } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Integrated landscaping, concrete & hardscape, irrigation, and maintenance services. Design, build, and maintain outdoor environments across KSA and GCC.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            End-to-end outdoor solutions: landscaping, concrete & hardscape,
            irrigation, and long-term maintenance—backed by proven processes and
            quality standards.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesOverview.map((s) => (
              <ServiceCard
                key={s.id}
                title={s.title}
                description={s.description}
                href={s.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
