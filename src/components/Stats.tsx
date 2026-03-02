interface StatsProps {
  stats: ReadonlyArray<{ value: string; label: string }>;
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 lg:py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-heading text-4xl lg:text-5xl font-bold text-primary">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-medium uppercase tracking-wider text-concrete">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
