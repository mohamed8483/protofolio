import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site, siteLinks } from "../data/site.js";
import { DownloadIcon, SunIcon, MoonIcon } from "./Icons.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("light")
  );
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  const navItems = isHome
    ? siteLinks.nav
    : [
        { label: "Home", href: "/" },
        ...siteLinks.nav.map((item) => ({
          label: item.label,
          href: `/${item.href}`,
        })),
      ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={isHome ? "#hero" : "/"} className="text-lg font-bold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-amber-500 light:text-amber-700">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-amber-500/50 hover:text-amber-400 light:hover:text-amber-600"
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>

          <a
            href={site.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-amber-300 md:inline-flex"
          >
            <DownloadIcon />
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-bg px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-muted hover:bg-surface"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-muted hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <a
                href={site.resumeUrl}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2 font-medium text-gray-900"
              >
                <DownloadIcon />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
