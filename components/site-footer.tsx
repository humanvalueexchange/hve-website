import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#10231e] px-6 py-10 text-[#f6f3ec]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link className="text-lg font-bold tracking-[0.12em]" href="/">Human Value Exchange</Link>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#d7ded8]">
          <Link className="hover:text-white" href="/wealth/time">Five Types of Wealth</Link>
          <Link className="hover:text-white" href="/workshops">Workshops</Link>
          <a className="hover:text-white" href="https://humanvalueexchange.blog">Blog</a>
          <Link className="hover:text-white" href="/workshops">Work with us</Link>
        </nav>
      </div>
    </footer>
  );
}
