"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex flex-col items-center justify-center gap-6 bg-background py-12 px-6 md:px-12">
      <h1 className="text-3xl font-semibold text-primary">
        Oops, something went wrong!
      </h1>
      <p className="text-lg text-primary">
        {error.message}
      </p>

      <button
        className="inline-block rounded-lg bg-accent-500 px-6 py-3 text-lg font-semibold text-primary shadow-lg shadow-accent-500/50 hover:shadow-accent-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}

