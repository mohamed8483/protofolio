import { site, socials } from "../data/site.js";
import Reveal from "./Reveal.jsx";
import { SocialIcon, MailIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-amber-500 light:text-amber-700">Let's talk</p>
          <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">Contact</h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-3xl font-bold leading-tight text-fg sm:text-4xl">
              Have something
              <br />
              to work on?
            </h3>
            <p className="mt-5 max-w-md text-muted leading-relaxed">
              Send me a message about a project, a job opportunity, or just to say hi — I'll get
              back to you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-600 light:text-amber-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Open to new opportunities
              </span>
              <span className="text-sm text-dim">{site.responseTime}</span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted transition-colors hover:border-amber-500/50 hover:text-amber-500 light:hover:text-amber-600"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h4 className="text-lg font-semibold text-fg">Send a message</h4>
              <p className="mt-1 text-sm text-dim">
                Fill in the form and I'll be in touch.
              </p>

              <form
                className="mt-6 space-y-4"
                action={`mailto:${site.email}`}
                method="post"
                encType="text/plain"
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-fg placeholder:text-dim outline-none transition-colors focus:border-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-fg placeholder:text-dim outline-none transition-colors focus:border-amber-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-fg placeholder:text-dim outline-none transition-colors focus:border-amber-500"
                    placeholder="What would you like to talk about?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-amber-300"
                >
                  <MailIcon className="h-4 w-4" />
                  Send message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
