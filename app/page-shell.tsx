import Link from "next/link";
import type { ReactNode } from "react";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.35em] opacity-80">
            LUZ LLOVERAS
          </div>

          <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] opacity-70">
            <Link href="/" className="hover:opacity-100">
              Home
            </Link>
            <Link href="/about" className="hover:opacity-100">
              About
            </Link>
            <Link href="/work" className="hover:opacity-100">
              Work
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs opacity-50">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
