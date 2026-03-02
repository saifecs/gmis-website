import Link from "next/link";

interface CTABlockProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABlock({
  headline = "Ready to start your project?",
  subtext = "Get in touch for a consultation. Our team will respond within 24 hours.",
  ctaText = "Request a Consultation",
  ctaHref = "/contact",
}: CTABlockProps) {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
          {headline}
        </h2>
        {subtext && (
          <p className="mt-4 text-lg text-white/90">{subtext}</p>
        )}
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
