import Link from "next/link";
import Image from "next/image";
import PageShell from "../../../page-shell";

export const dynamic = "force-dynamic";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageShell>
      <section>
        <p className="text-xs uppercase tracking-[0.25em] opacity-70">
          <Link href="/work/cities" className="hover:opacity-100">
            ← Back to Cities
          </Link>
        </p>
        <div className="mt-6 flex justify-center">
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image
              src={`/work/cities/${id}.jpg`}
              alt={`Cities photo ${id}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
