import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  learnMoreLabel?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  image,
  learnMoreLabel = "Learn more",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-card shadow-card overflow-hidden border border-neutral-100 hover:shadow-lg hover:border-primary/20 transition-all"
    >
      <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
        {image ? (
          <div
            className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-dark/10">
            <span className="font-heading text-4xl font-bold text-primary/30">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-neutral-900 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm text-concrete line-clamp-3">{description}</p>
        <span className="mt-3 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
          {learnMoreLabel}
          <svg
            className="ml-1 h-4 w-4 rtl:ml-0 rtl:mr-1 rtl:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
