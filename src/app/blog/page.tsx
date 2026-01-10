import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-white/70">
          Pre-match i post-match beleške, bez zvaničnih šablona.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <div className="text-sm text-white/60">{p.date}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            {p.excerpt ? (
              <p className="mt-2 text-white/70">{p.excerpt}</p>
            ) : null}
          </Link>
        ))}
        {posts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/70">
            Nema postova još.
          </div>
        ) : null}
      </div>
    </div>
  );
}
