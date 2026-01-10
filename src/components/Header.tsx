import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-white">Gunners</span>{" "}
          <span className="text-white/70">Field Notes</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-white/70">
          <Link className="hover:text-white" href="/blog">
            Blog
          </Link>
          <Link className="hover:text-white" href="/about">
            O meni
          </Link>
        </nav>
      </div>
    </header>
  );
}
