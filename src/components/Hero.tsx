import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  compact?: boolean;
}

export function Hero({
  headline,
  subheadline,
  ctaText = "Request a Consultation",
  ctaHref = "/contact",
  image,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${!image ? "hero-bg-gradient" : "bg-primary-dark"} ${compact ? "min-h-[40vh] py-20" : "min-h-[70vh] py-24 lg:py-32"}`}
    >
      {/* Background: image with overlay, or gradient */}
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      ) : null}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-sm">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              {subheadline}
            </p>
          )}
          {ctaText && (
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark transition-colors"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
