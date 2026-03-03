import { AnimateIn } from "@/components/ui/AnimateIn";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titleKey: "safety" as const,
    descKey: "safetyDesc" as const,
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    titleKey: "sustainability" as const,
    descKey: "sustainabilityDesc" as const,
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    titleKey: "excellence" as const,
    descKey: "excellenceDesc" as const,
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    titleKey: "local" as const,
    descKey: "localDesc" as const,
  },
];

type WhyUsT = {
  sectionTitle: string;
  sectionSubtitle: string;
  safety: string;
  safetyDesc: string;
  sustainability: string;
  sustainabilityDesc: string;
  excellence: string;
  excellenceDesc: string;
  local: string;
  localDesc: string;
};

export function WhyUs({ t }: { t: WhyUsT }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-bold text-neutral-900">
            {t.sectionTitle}
          </h2>
          <p className="mt-2 text-concrete">{t.sectionSubtitle}</p>
        </AnimateIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <AnimateIn key={f.titleKey} delay={i * 80}>
              <div className="h-full rounded-card bg-white p-6 shadow-card border border-neutral-100 hover:shadow-lg hover:border-primary/15 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
                  {f.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900">
                  {t[f.titleKey]}
                </h3>
                <p className="mt-2 text-sm text-concrete">{t[f.descKey]}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
