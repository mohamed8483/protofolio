import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, formatDate } from "../lib/posts.js";
import Reveal from "../components/Reveal.jsx";
import { site } from "../data/site.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center pt-32">
        <h1 className="text-3xl font-bold text-fg">Post not found</h1>
        <Link to="/blog" className="mt-4 text-amber-500 light:text-amber-700 hover:text-amber-400 light:hover:text-amber-600">
          ← Back to blog
        </Link>
      </section>
    );
  }

  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <Link
            to="/blog"
            className="text-sm text-dim transition-colors hover:text-amber-500 light:hover:text-amber-600"
          >
            ← All posts
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-dim">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{site.name}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-fg sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted">{post.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <hr className="my-10 border-border" />

        <Reveal>
          <div className="prose prose-amber:max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-headings:text-fg prose-h2:text-2xl prose-h2:font-bold prose-h3:text-xl prose-h3:font-semibold prose-p:my-4 prose-p:leading-relaxed prose-a:text-amber-500 light:prose-a:text-amber-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-fg prose-code:rounded prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:text-fg prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-surface prose-blockquote:border-amber-500 prose-blockquote:italic prose-li:text-muted">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
