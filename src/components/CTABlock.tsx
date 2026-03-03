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
    <section className="py-16 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='none'/%3E%3Cpath d='M16 4v24M4 16h24' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white drop-shadow-sm">
          {headline}
        </h2>
        {subtext && (
          <p className="mt-4 text-lg text-white/90">{subtext}</p>
        )}
        <div className="mt-8">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-lg hover:bg-neutral-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
