import { Metadata } from "next";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Water-efficient irrigation, native plant selection, lifecycle planning. Aligned with Saudi Vision 2030 and sustainable outdoor environments.",
};

const pillars = [
  {
    title: "Water Efficiency",
    text: "Smart irrigation systems and design that target 25–40% water reduction where applicable. Drainage and grading for responsible water use.",
  },
  {
    title: "Native & Climate-Appropriate Planting",
    text: "95–100% plant survival through climate-appropriate selection. Reduced resource use and long-term landscape resilience.",
  },
  {
    title: "Lifecycle Planning",
    text: "Design and build with maintenance and long-term performance in mind. As-built documentation and O&M support.",
  },
  {
    title: "Responsible Sourcing",
    text: "Quality materials and suppliers aligned with our standards. Sustainable practices across the supply chain where possible.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Sustainability
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Delivering sustainable, water-efficient, high-quality environments
            aligned with Saudi Vision 2030 and long-term asset value.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-card border border-neutral-100 bg-white p-8 shadow-card"
              >
                <h2 className="font-heading text-xl font-bold text-primary">
                  {pillar.title}
                </h2>
                <p className="mt-4 text-concrete">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Vision 2030 Alignment
          </h2>
          <p className="mt-4 text-concrete max-w-3xl">
            Our sustainability approach supports national transformation goals:
            enhancing livability, reducing water consumption, and building
            long-term value in outdoor environments across the Kingdom and GCC.
          </p>
        </div>
      </section>

      <CTABlock
        headline="Discuss sustainable outdoor solutions"
        ctaHref="/contact"
      />
    </>
  );
}
