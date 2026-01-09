import PageShell from "../../page-shell";
import Link from "next/link";
import Image from "next/image";

const photos = ["01", "02", "03", "04"];

export default function People() {
  return (
    <PageShell>
      <section>
        <p className="text-xs uppercase tracking-[0.25em] opacity-70">
          <Link href="/work" className="hover:opacity-100">
            ← Back to Work
          </Link>
        </p>

        <h1 className="mt-6 text-3xl font-light">People in Motion</h1>
        <p className="mt-4 max-w-xl text-sm opacity-70">
          Spontaneous moments, gestures, and everyday interactions.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {photos.map((id) => (
            <div key={id} className="group">
              <Link
                href={`/work/people/${id}`}
                className="block relative aspect-[4/5] overflow-hidden rounded-lg"
              >
                <Image
                  src={`/work/people/${id}.jpg`}
                  alt={`People photo ${id}`}
                  fill
                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                    id === "01" ? "object-top" : ""
                  }`}
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
