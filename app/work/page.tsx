import PageShell from "../page-shell";
import Link from "next/link";

export default function Work() {
  return (
    <PageShell>
      <section>
        <h1 className="text-3xl font-light">Work</h1>

        <ul className="mt-16 space-y-12">
          <li>
            <h2 className="text-xl font-light">
              <Link href="/work/travel" className="hover:opacity-80">
                Travel Cities
              </Link>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              Destination-led edits focused on light, place, and daily life.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-light">
              <Link href="/work/cities" className="hover:opacity-80">
                Cities & Architecture
              </Link>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              Urban spaces, geometry, and the way people move through them.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-light">
              <Link href="/work/people" className="hover:opacity-80">
                People in Motion
              </Link>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              Spontaneous moments, gestures, and everyday interactions.
            </p>
          </li>

          <li>
            <h2 className="text-xl font-light">
              <Link href="/work/encounters" className="hover:opacity-80">
                Travel Encounters
              </Link>
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-70">
              Observations from traveling, walking, and getting lost in cities.
            </p>
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
