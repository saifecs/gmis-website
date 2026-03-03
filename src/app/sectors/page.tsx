import { Metadata } from "next";
import Link from "next/link";
import { sectors } from "@/lib/content";
import { CTABlock } from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "We serve real estate developers, commercial property owners, municipal entities, hospitality, and Vision 2030 giga-projects across KSA and GCC.",
};

export default function SectorsPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Sectors
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Residential, commercial, municipal, hospitality, and Vision 2030
            mega-projects. We deliver integrated outdoor solutions across the
            Kingdom and GCC.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Primary (KSA & GCC)
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {sectors.slice(0, 6).map((sector) => (
              <li
                key={sector}
                className="rounded-card border border-neutral-100 bg-white px-6 py-4 font-medium text-neutral-900"
              >
                {sector}
              </li>
            ))}
          </ul>
          <h2 className="font-heading text-2xl font-bold text-neutral-900 mt-12">
            Secondary
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {sectors.slice(6).map((sector) => (
              <li
                key={sector}
                className="rounded-card border border-neutral-100 bg-white px-6 py-4 font-medium text-neutral-900"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABlock
        headline="Discuss your sector needs"
        subtext="We tailor scope and delivery to your project type."
        ctaHref="/contact"
      />
    </>
  );
}
