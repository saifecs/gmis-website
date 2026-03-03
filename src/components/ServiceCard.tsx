import Link from "next/link";
import { serviceIconMap } from "@/components/icons/ServiceIcons";

type ServiceId = keyof typeof serviceIconMap;

const cardGradients: Record<ServiceId, string> = {
  landscaping: "from-emerald-500/20 via-primary/15 to-primary-dark/20",
  concrete: "from-stone-400/25 via-neutral-300/20 to-primary/15",
  irrigation: "from-sky-400/20 via-primary/15 to-primary-dark/20",
  maintenance: "from-primary/20 via-emerald-400/15 to-primary-dark/15",
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  serviceId?: ServiceId;
  learnMoreLabel?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  image,
  serviceId,
  learnMoreLabel = "Learn more",
}: ServiceCardProps) {
  const Icon = serviceId ? serviceIconMap[serviceId] : null;
  const gradient = serviceId ? cardGradients[serviceId] : "from-primary/10 to-primary-dark/10";

  return (
    <Link
      href={href}
      className="group block bg-white rounded-card shadow-card overflow-hidden border border-neutral-100 hover:shadow-xl hover:border-primary/25 transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative">
        {image ? (
          <div
            className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div
            className={`h-full w-full flex items-center justify-center bg-gradient-to-br ${gradient} p-8`}
          >
            {Icon ? (
              <span className="w-20 h-20 sm:w-24 sm:h-24 text-primary/50 group-hover:text-primary/70 transition-colors">
                <Icon />
              </span>
            ) : (
              <span className="font-heading text-4xl font-bold text-primary/30">
                {title.charAt(0)}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-neutral-900 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-concrete line-clamp-3">{description}</p>
        <span className="mt-3 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
          {learnMoreLabel}
          <svg
            className="ml-1 h-4 w-4 rtl:ml-0 rtl:mr-1 rtl:rotate-180 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
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
