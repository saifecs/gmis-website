const iconClass = "w-full h-full";

export function IconLandscaping() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 12L20 24h8v12h8V24h8L32 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 40c-2 4-2 8 0 12 2 4 6 6 10 6h12c4 0 8-2 10-6 2-4 2-8 0-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M24 52v4h16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconConcrete() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="8" y="20" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 28h48M8 36h48M8 44h48" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 20V12M32 20V8M44 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconIrrigation() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 8v12c0 8-8 16-8 24 0 6 4 12 8 12s8-6 8-12c0-8-8-16-8-24V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 44h24M24 52h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMaintenance() {
  return (
    <svg className={iconClass} viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" />
      <path
        d="M32 24v8l4 4M38 38l-4-4M26 26l-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M32 12v4M32 44v4M12 32h4M44 32h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const serviceIconMap = {
  landscaping: IconLandscaping,
  concrete: IconConcrete,
  irrigation: IconIrrigation,
  maintenance: IconMaintenance,
} as const;
