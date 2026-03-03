import { statIconMap } from "@/components/icons/StatIcons";

interface StatsProps {
  stats: ReadonlyArray<{ value: string; label: string }>;
}

const iconKeys = ["projects", "trees", "experience", "safety"] as const;

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, i) => {
            const Icon = statIconMap[iconKeys[i] ?? "projects"];
            return (
              <div
                key={item.label}
                className="group relative rounded-card bg-white p-6 sm:p-8 text-center shadow-card border border-neutral-100 hover:shadow-lg hover:border-primary/15 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
                  {Icon ? <Icon /> : null}
                </div>
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-wider text-concrete">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
