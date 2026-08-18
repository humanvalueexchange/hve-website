import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#d8ddd5] bg-[#f6f3ec]/95 px-6 text-[#10231e] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link aria-label="Human Value Exchange home" className="flex items-center gap-3" href="/">
          <Image alt="" className="rounded-full" height={44} priority src="/hve-logo.png" width={44} />
          <span className="text-lg font-bold tracking-[0.12em]">HVE</span>
        </Link>
        <nav aria-label="Main navigation" className="flex w-full flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold sm:w-auto sm:gap-x-8">
          <Link className="hover:text-[#b27a32]" href="/about">About</Link>
          <Link className="hover:text-[#b27a32]" href="/five-types">The Five Types</Link>
          <Link className="hover:text-[#b27a32]" href="/workshops">Workshops</Link>
          <a className="hover:text-[#b27a32]" href="https://humanvalueexchange.blog">Blog</a>
          <Link className="w-full rounded-full bg-[#10231e] px-4 py-2 text-center text-white hover:bg-[#24483a] sm:w-auto" href="/work-with-us">
            Work with us
          </Link>
        </nav>
      </div>
    </header>
  );
}
