import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname === href || (href === "/blog" && pathname?.startsWith("/blog"));

  return (
    <Link
      href={href}
      className={[
        "rounded-md px-2 py-1 text-sm transition",
        active
          ? "text-white bg-white/10"
          : "text-white/70 hover:text-white hover:bg-white/5",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="rounded-md px-2 py-1 text-sm font-semibold tracking-wide text-white hover:bg-white/5 transition"
        >
          Gunners Field Notes
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink href="/blog">Blog</NavLink>

          <a
            href="https://www.arsenal.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-2 py-1 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
            title="Arsenal.com"
          >
            Arsenal ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
