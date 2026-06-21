import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory px-6 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl text-charcoal">Page not found</h1>
        <p className="mt-3 text-sm text-charcoal/65">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-burnt px-6 py-3 text-xs uppercase tracking-[0.22em] text-ivory"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
