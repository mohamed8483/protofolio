import { Link } from "react-router-dom";
import { getAllPosts, formatDate } from "../lib/posts.js";
import Reveal from "./Reveal.jsx";
import { ArrowIcon } from "./Icons.jsx";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-sm text-amber-500 light:text-amber-700">Writing</p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">Latest articles</h2>
              <p className="mt-3 max-w-2xl text-muted">
                Notes and tutorials on web development, tools, and things I learn along the way.
              </p>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-500 light:text-amber-700 transition-colors hover:text-amber-400 light:hover:text-amber-600"
            >
              View all posts <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-amber-500/50"
              >
                <p className="font-mono text-xs text-dim">{formatDate(post.date)}</p>
                <h3 className="mt-3 text-lg font-semibold text-fg group-hover:text-amber-500 light:group-hover:text-amber-600">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{post.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
