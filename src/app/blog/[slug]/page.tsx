import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { renderMdx } from "@/lib/content/mdx";


type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { data, content } = post;
  const mdx = renderMdx(content);


  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          {String(data.title ?? slug)}
        </h1>
        {data.date ? (
          <p className="mt-2 text-sm text-white/60">{String(data.date)}</p>
        ) : null}
        {data.excerpt ? (
          <p className="mt-4 text-white/70">{String(data.excerpt)}</p>
        ) : null}
      </header>

      <div className="space-y-4">{mdx}</div>
    </article>
  );
}
