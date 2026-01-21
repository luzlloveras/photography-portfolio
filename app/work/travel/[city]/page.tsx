import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "../../../page-shell";
import { placeholderPhotoIds, travelDestinations } from "../data";

export default function TravelCity({
  params,
}: {
  params: { city: string };
}) {
  const destination = travelDestinations.find(
    (item) => item.slug === params.city
  );

  if (!destination) {
    notFound();
  }

  return (
    <PageShell>
      <section>
        <p className="text-xs uppercase tracking-[0.25em] opacity-70">
          <Link href="/work/travel" className="hover:opacity-100">
            ← Back to Travel Cities
          </Link>
        </p>

        <h1 className="mt-6 text-3xl font-light">{destination.name}</h1>
        <p className="mt-4 max-w-xl text-sm opacity-70">
          {destination.detailDescription}
        </p>
        <p className="mt-3 max-w-xl text-xs uppercase tracking-[0.25em] opacity-50">
          {destination.notes}
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {placeholderPhotoIds.map((id) => (
            <div key={id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={`/work/cities/${id}.jpg`}
                  alt={`${destination.name} placeholder photo ${id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
