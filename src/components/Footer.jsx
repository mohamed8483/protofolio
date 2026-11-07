import { Link } from "react-router-dom";
import { site, siteLinks, socials } from "../data/site.js";
import { SocialIcon } from "./Icons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-fg">
            {site.name.split(" ")[0]}
            <span className="text-amber-500 light:text-amber-700">.</span>
          </p>
          <p className="mt-1 text-sm text-dim">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {siteLinks.nav.map((item) => (
            <Link
              key={item.label}
              to={`/${item.href}`}
              className="text-sm text-dim transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-dim transition-colors hover:text-amber-500 light:hover:text-amber-600"
            >
              <SocialIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
