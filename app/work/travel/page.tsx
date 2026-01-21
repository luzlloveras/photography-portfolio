import Image from "next/image";
import Link from "next/link";
import PageShell from "../../page-shell";
import { travelDestinations } from "./data";

export default function Travel() {
  return (
    <PageShell>
      <section>
        <p className="text-xs uppercase tracking-[0.25em] opacity-70">
          <Link href="/work" className="hover:opacity-100">
            ← Back to Work
          </Link>
        </p>

        <h1 className="mt-6 text-3xl font-light">Travel Cities</h1>
        <p className="mt-4 max-w-xl text-sm opacity-70">
          Curated city edits in progress. Placeholder images are used to shape
          layout and pacing.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {travelDestinations.map((destination) => (
            <article key={destination.slug} className="group">
              <Link
                href={`/work/travel/${destination.slug}`}
                className="block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={`/work/cities/${destination.heroId}.jpg`}
                    alt={`${destination.name} placeholder hero`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <h2 className="mt-4 text-xl font-light">
                  {destination.name}
                </h2>
                <p className="mt-2 text-sm opacity-70">
                  {destination.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
