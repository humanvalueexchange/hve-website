import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[#d8ddd5] bg-[#f6f3ec] px-6 text-[#10231e]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link className="text-lg font-bold tracking-[0.12em]" href="/">HVE</Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold sm:gap-x-8">
          <Link className="hover:text-[#b27a32]" href="/about">About</Link>
          <Link className="hover:text-[#b27a32]" href="/wealth/time">The Five Types</Link>
          <Link className="hover:text-[#b27a32]" href="/workshops">Workshops</Link>
          <a className="hover:text-[#b27a32]" href="https://humanvalueexchange.blog">Blog</a>
          <Link className="hidden rounded-full bg-[#10231e] px-4 py-2 text-white transition hover:bg-[#24483a] sm:inline-block" href="/workshops">
            Work with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
