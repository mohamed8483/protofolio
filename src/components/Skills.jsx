import {
  siGo,
  siCplusplus,
  siC,
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siMysql,
  siPostgresql,
  siRedis,
  siDocker,
  siKubernetes,
  siGnubash,
  siGit,
  siGithub,
  siPostman,
  siLinux,
  siUbuntu,
  siFigma,
  siPrecommit,
} from "simple-icons";
import { skills } from "../data/site.js";
import Reveal from "./Reveal.jsx";

// Brand icons (monochrome logos; each has its official brand hex)
const brandIcons = {
  Go: siGo,
  "C++": siCplusplus,
  C: siC,
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  Redis: siRedis,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  Bash: siGnubash,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Linux: siLinux,
  Ubuntu: siUbuntu,
  Figma: siFigma,
  "pre-commit": siPrecommit,
};

// Colors for concepts without a brand logo
const genericColors = {
  SQL: "4479A1",
  Monolith: "64748B",
  "High-Scale": "0EA5E9",
  Caching: "F59E0B",
  Optimization: "EAB308",
  Shell: "22C55E",
};

// --- Color helpers -------------------------------------------------------
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function luminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const lin = (v) => {
    v /= 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

// Very dark logos (e.g. GitHub) would vanish on the dark theme — lighten them a bit there
function visibleOnDark(hex) {
  if (luminance(hex) >= 0.1) return `#${hex}`;
  const { r, g, b } = hexToRgb(hex);
  const mix = (c) => Math.round(c + (255 - c) * 0.45);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

// Pick black or white text for the hover background
function contrastText(hex) {
  return luminance(hex) > 0.34 ? "#0b0b0b" : "#ffffff";
}
// ------------------------------------------------------------------------

function getBrandHex(name) {
  return brandIcons[name]?.hex || genericColors[name] || "8b5cf6";
}

// Generic line icons for concepts without a brand logo
function GenericIcon({ name }) {
  const paths = {
    SQL: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </>
    ),
    Monolith: (
      <>
        <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7z" />
        <path d="M4 16a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1z" />
        <path d="M8 8h.01" />
        <path d="M8 17h.01" />
      </>
    ),
    "High-Scale": (
      <>
        <path d="M12 14l4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </>
    ),
    Caching: (
      <>
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      </>
    ),
    Optimization: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    Shell: (
      <>
        <path d="M4 17l6-6-6-6" />
        <path d="M12 19h8" />
      </>
    ),
  };

  if (!paths[name]) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function SkillIcon({ name }) {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 shrink-0"
        aria-hidden="true"
      >
        <title>{brand.title}</title>
        <path d={brand.path} />
      </svg>
    );
  }
  return <GenericIcon name={name} />;
}

function SkillChip({ name }) {
  const hex = getBrandHex(name);
  return (
    <span
      className="skill-chip inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-sm"
      style={{
        "--brand": `#${hex}`,
        "--brand-fg": contrastText(hex),
        "--brand-visible": visibleOnDark(hex),
      }}
    >
      <span className="skill-icon">
        <SkillIcon name={name} />
      </span>
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-amber-500 light:text-amber-700">Tech stack</p>
          <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">Skills</h2>
          <p className="mt-3 max-w-2xl text-muted">
            The languages, systems, and tools I use.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-fg">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillChip key={item} name={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
