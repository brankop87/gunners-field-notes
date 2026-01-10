export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-white/60">
        © {new Date().getFullYear()} Gunners Field Notes · Fan blog (nije zvaničan).
      </div>
    </footer>
  );
}
