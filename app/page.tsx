import Link from "next/link";
import PageShell from "./page-shell";
import ScrollReveal from "./scroll-reveal";

export default function Home() {
  return (
    <PageShell>
      <ScrollReveal>
        <section className="py-32">
          <h1 className="text-5xl font-light leading-tight">
            Photography Portfolio
          </h1>

          <p className="mt-8 max-w-md text-base opacity-70">
            Visual stories from cities, architecture, and people.
          </p>

          <div className="mt-12 text-sm uppercase tracking-[0.25em] opacity-60">
            Featured cities
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <Link href="/work/travel/barcelona" className="hover:opacity-80">
              Barcelona
            </Link>
            <Link href="/work/travel/valencia" className="hover:opacity-80">
              Valencia
            </Link>
            <Link href="/work/travel/madrid" className="hover:opacity-80">
              Madrid
            </Link>
            <Link href="/work/travel/granada" className="hover:opacity-80">
              Granada
            </Link>
            <Link href="/work/travel/cordoba" className="hover:opacity-80">
              Cordoba
            </Link>
            <Link href="/work/travel/malaga" className="hover:opacity-80">
              Malaga
            </Link>
            <Link href="/work/travel/sevilla" className="hover:opacity-80">
              Sevilla
            </Link>
            <Link href="/work/travel/paris" className="hover:opacity-80">
              Paris
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </PageShell>
  );
}
