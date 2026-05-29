type ProjectIconId = "recipe" | "habits" | "documents";

const iconClass = "h-12 w-12 text-sky-400";

export function ProjectIcon({ id }: { id: ProjectIconId }) {
  switch (id) {
    case "recipe":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M8 28c0-8 6-14 16-14s16 6 16 14" />
          <path d="M12 28h24v6a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4v-6z" />
          <path d="M20 14V8M24 12V6M28 14V9" />
          <circle cx="36" cy="10" r="3" className="fill-sky-400/20 stroke-sky-300" />
          <path d="M35 9l1.5 1.5L38 8" className="stroke-sky-300" strokeWidth="1.5" />
        </svg>
      );
    case "habits":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="8" y="10" width="32" height="30" rx="3" />
          <path d="M8 18h32M16 6v6M32 6v6" />
          <path d="M16 26l4 4 8-10" className="stroke-sky-300" strokeWidth="2" />
          <path d="M30 30h6M30 36h4" className="stroke-slate-500" strokeWidth="1.5" />
        </svg>
      );
    case "documents":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M14 6h14l10 10v26a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
          <path d="M28 6v10h10" />
          <path d="M16 24h12M16 30h16M16 36h10" className="stroke-slate-500" />
          <path
            d="M30 32c2 0 4 1.5 4 3.5s-2 3.5-4 3.5-4-1.5-4-3.5 2-3.5 4-3.5z"
            className="fill-sky-400/15 stroke-sky-300"
          />
          <path d="M28 36h1.5" className="stroke-sky-300" />
        </svg>
      );
  }
}
