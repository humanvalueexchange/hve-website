import Link from "next/link";
import Image from "next/image";
import { AccessibilityToggle } from "@/components/accessibility-toggle";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#365448] bg-[#10231e] px-6 py-12 text-[#f6f3ec]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <Link aria-label="Human Value Exchange home" className="flex items-center gap-3" href="/">
            <Image alt="" className="rounded-full bg-white p-1" height={52} src="/hve-logo.png" width={52} />
            <span className="text-lg font-bold tracking-[0.12em]">Human Value Exchange</span>
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-[#aebeb4]">
            A practical framework for building freedom, sovereignty, and human flourishing across the Five Types of Wealth.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold text-[#d7ded8] sm:grid-cols-3">
          <Link className="hover:text-white" href="/five-types">Five Types of Wealth</Link>
          <Link className="hover:text-white" href="/workshops">Workshops</Link>
          <a className="hover:text-white" href="https://humanvalueexchange.blog">Blog</a>
          <Link className="hover:text-white" href="/work-with-us">Work with us</Link>
          <Link className="hover:text-white" href="/life-os">HVE Life OS</Link>
          <a className="hover:text-white" href="mailto:hello@humanvalueexchange.com">Contact HVE</a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-[#365448] pt-5 text-sm text-[#8ea196]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p>Human Value Exchange · Wealth is more than money.</p>
            <p className="mt-2">Designed to improve readability for some visitors with dyslexia.</p>
          </div>
          <AccessibilityToggle />
        </div>
      </div>
    </footer>
  );
}
