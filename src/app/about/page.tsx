import { Metadata } from "next";
import Link from "next/link";
import {
  site,
  coreValues,
  cta,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GREENMARK Integrated Services is the Saudi expansion of Easy Landscape Services Ltd. (Canada, 2018). Founder-led governance, North American standards, local execution.",
};

const timeline = [
  { year: "2018", text: "Easy Landscape Services Ltd. founded in Calgary, Alberta, Canada." },
  { year: "2024–2026", text: "270+ projects delivered; 5000+ trees planted; operational maturity." },
  { year: "2026", text: "GREENMARK Integrated Services established in Riyadh, Saudi Arabia." },
  { year: "Ongoing", text: "Strategic expansion across KSA and GCC; Vision 2030 alignment." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            About GREENMARK
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            A Saudi-based integrated landscaping, concrete, and outdoor works
            company—backed by more than seven years of proven North American
            operational experience.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="vision" className="font-heading text-2xl font-bold text-neutral-900">
            Group Overview
          </h2>
          <p className="mt-4 text-concrete max-w-3xl">
            GREENMARK Integrated Services is established in Riyadh in 2026 as the
            strategic Middle East expansion of <strong>Easy Landscape Services
            Ltd.</strong>, originally founded in Canada in 2018. One group, two
            markets: Canadian operational standards with Saudi execution.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="rounded-card border border-neutral-100 p-6 bg-neutral-50">
              <h3 className="font-heading font-semibold text-primary">
                Easy Landscape Services Ltd.
              </h3>
              <p className="mt-2 text-sm text-concrete">
                Founded 2018 · Calgary, Alberta, Canada · Residential, commercial,
                and institutional markets.
              </p>
            </div>
            <div className="rounded-card border border-neutral-100 p-6 bg-neutral-50">
              <h3 className="font-heading font-semibold text-primary">
                GREENMARK Integrated Services
              </h3>
              <p className="mt-2 text-sm text-concrete">
                Established 2026 · Riyadh, Saudi Arabia · KSA and GCC markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Vision & Mission
          </h2>
          <div className="mt-6 space-y-6 max-w-3xl">
            <div>
              <h3 className="font-heading font-semibold text-primary">Vision</h3>
              <p className="mt-1 text-concrete">
                To be a leading integrated landscaping and outdoor solutions
                company in Saudi Arabia and the GCC, delivering sustainable,
                high-quality environments that enhance communities and contribute
                to Saudi Vision 2030.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-primary">Mission</h3>
              <p className="mt-1 text-concrete">
                To design, build, and maintain outdoor environments through
                integrated landscaping, concrete, and maintenance
                solutions—combining North American expertise with strong local
                execution, while prioritizing quality, safety, innovation, and
                long-term responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Founder Message
          </h2>
          <div className="mt-8 max-w-3xl rounded-card border border-neutral-100 bg-white p-8 shadow-card">
            <p className="text-concrete italic">
              &ldquo;Quality before shortcuts. We bring Canadian standards to
              Saudi Arabia, align with Vision 2030, and build strong local
              teams. GREENMARK is your long-term partner for outdoor
              environments.&rdquo;
            </p>
            <p className="mt-4 font-heading font-semibold text-primary">
              Mohamed Youssef
            </p>
            <p className="text-sm text-concrete">Founder & Managing Director</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            History & Roadmap
          </h2>
          <ul className="mt-8 space-y-6 max-w-2xl">
            {timeline.map((item) => (
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
            Core Values
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreValues.map((value) => (
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
            Commercial Registration: {site.cr} · Entity: Company Limited
            Liability – One Person · Status: Active
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark"
          >
            {cta.secondary}
          </Link>
        </div>
      </section>
    </>
  );
}
