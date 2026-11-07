import { site, stats, socials } from "../data/site.js";
import { SocialIcon, ArrowIcon, DownloadIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-amber-400/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            {site.openToWork && (
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300 light:text-amber-700 light:text-amber-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to new opportunities
              </span>
            )}

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">{site.name}</span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-fg/80 sm:text-2xl">
              {site.role}
            </p>

            <p className="mt-5 max-w-2xl text-muted leading-relaxed">{site.tagline}</p>

            {/* Stats */}
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-bold text-fg">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-dim">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-amber-300"
              >
                View my work
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-medium text-fg transition-colors hover:border-amber-500/50"
              >
                Get in touch
              </a>
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-amber-500 light:hover:text-amber-600"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="text-dim transition-colors hover:text-amber-500 light:hover:text-amber-600"
                >
                  <SocialIcon name={s.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="hidden lg:block">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-70 blur-xl" />
              {site.photo ? (
                <img
                  src={site.photo}
                  alt={`${site.name} — ${site.role}`}
                  className="relative h-full w-full rounded-full border border-border object-cover object-[center_30%]"
                />
              ) : (
                <div className="relative flex h-full w-full items-center justify-center rounded-full border border-border bg-card text-8xl font-bold text-amber-500 light:text-amber-700">
                  {site.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
