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
      className={`relative overflow-hidden bg-primary-dark ${compact ? "min-h-[40vh] py-20" : "min-h-[70vh] py-24 lg:py-32"}`}
    >
      {/* Background image or gradient */}
      {image ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      ) : (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
              {subheadline}
            </p>
          )}
          {ctaText && (
            <div className="mt-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
