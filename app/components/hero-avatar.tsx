export function HeroAvatar() {
  return (
    <div
      className="hero-avatar-wrap relative mx-auto flex h-52 w-52 shrink-0 items-center justify-center sm:h-56 sm:w-56"
      aria-hidden
    >
      <div className="hero-avatar-ring absolute inset-0 rounded-full" />
      <div className="hero-avatar-pulse absolute inset-2 rounded-full bg-sky-500/10" />
      <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-2 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl shadow-slate-950/50 sm:h-44 sm:w-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.25),transparent_55%)]" />
        <svg
          className="hero-avatar-figure absolute bottom-0 w-[85%] text-slate-600"
          viewBox="0 0 120 120"
          fill="currentColor"
          aria-hidden
        >
          <ellipse cx="60" cy="108" rx="38" ry="8" className="opacity-40" />
          <circle cx="60" cy="42" r="22" className="text-slate-500" />
          <path
            d="M28 118c4-28 20-42 32-42s28 14 32 42"
            className="text-slate-600"
          />
        </svg>
        {/*<span className="relative z-10 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold tracking-widest text-sky-400 ring-1 ring-sky-500/30">
          JB
        </span>*/}
      </div>
    </div>
  );
}
