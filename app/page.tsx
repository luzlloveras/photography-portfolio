import PageShell from "./page-shell";

export default function Home() {
  return (
    <PageShell>
      <section className="py-32">
        <h1 className="text-5xl font-light leading-tight">
          Photography Portfolio
        </h1>

        <p className="mt-8 max-w-md text-base opacity-70">
          Visual stories from cities, architecture, and people.
        </p>
      </section>
    </PageShell>
  );
}
