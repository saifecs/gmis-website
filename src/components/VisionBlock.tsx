export function VisionBlock({
  headline,
  body,
}: {
  headline: string;
  body: string;
}) {
  return (
    <section className="py-16 lg:py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%231F5D3B' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-neutral-900">
              {headline}
            </h2>
            <p className="mt-4 text-lg text-concrete">{body}</p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-8 rounded-full border-2 border-primary/30" />
              <div className="absolute inset-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-primary">
                  2030
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 2L15 8l6 1-4 5 1 6-6-3-6 3 1-6-4-5 6-1 3-6z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
