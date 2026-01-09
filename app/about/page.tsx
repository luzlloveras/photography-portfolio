import PageShell from "../page-shell";
export default function About() {
  return (
    <PageShell>
      <section>
        <h1 className="text-3xl font-light">About</h1>
        <p className="mt-4 max-w-xl text-sm opacity-70">
          Photography as a way of observing cities and people.
        </p>
      </section>
    </PageShell>
  );
}