import { Link } from "react-router-dom";
import { getAllPosts, formatDate } from "../lib/posts.js";
import Reveal from "../components/Reveal.jsx";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm text-amber-500 light:text-amber-700">Writing</p>
          <h1 className="mt-2 text-4xl font-bold text-fg sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Notes and tutorials on web development, tools, and things I learn along the way.
          </p>
        </Reveal>

        <div className="mt-14 space-y-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-7 transition-colors hover:border-amber-500/50"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-dim">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>•</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-surface px-2 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-fg group-hover:text-amber-500 light:group-hover:text-amber-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-muted leading-relaxed">{post.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
