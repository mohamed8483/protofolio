// Load all markdown posts from /content/posts at build time
const modules = import.meta.glob("/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Tiny YAML-ish frontmatter parser (title, description, date, tags)
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, content: raw.trim() };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, "");
    }
    data[key] = value;
  }
  return { data, content: raw.slice(match[0].length).trim() };
}

export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const slug = path.split("/").pop().replace(".md", "");
      const { data, content } = parseFrontmatter(raw);
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        tags: data.tags || [],
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPost(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
