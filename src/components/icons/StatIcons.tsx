const iconClass = "w-10 h-10 sm:w-12 sm:h-12";

export function IconProjects() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M8 20v18h32V20M8 20l6-8h20l6 8M8 20h32M20 38v-12M28 38v-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTrees() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 8c-4 6-8 12-8 18 0 4 2 8 6 10v8h4v-8c4-2 6-6 6-10 0-6-4-12-8-18z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 18c-2 4-4 8-4 12 0 3 1 6 4 8v6h0v-6c3-2 4-5 4-8 0-4-2-8-4-12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconExperience() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 14v10l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconSafety() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6L8 12v10c0 10 8 18 16 20 8-2 16-10 16-20V12L24 6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24l4 4 8-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const statIconMap = {
  projects: IconProjects,
  trees: IconTrees,
  experience: IconExperience,
  safety: IconSafety,
} as const;
