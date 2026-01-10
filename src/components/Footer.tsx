export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-white/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gunners Field Notes · Fan blog (nije zvaničan).</p>
          <p className="text-white/40">COYG 🔴⚪</p>
        </div>
      </div>
    </footer>
  );
}
