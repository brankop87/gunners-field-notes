import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          Gunners Field Notes
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/blog" className="text-white/80 hover:text-white">
            Blog
          </Link>
          <a
            href="https://www.arsenal.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white/70 hover:text-white"
            title="Arsenal.com"
          >
            Arsenal ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
