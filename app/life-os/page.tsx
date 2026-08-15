import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "HVE Life OS | Human Value Exchange",
  description: "Discover the future vision for HVE Life OS."
};

export default function LifeOsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">Future vision</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">A personal operating system for a richer life.</h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#d7ded8]">
            HVE Life OS is a future way to measure, understand, and improve all five forms of wealth in one place.
          </p>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">See the whole picture. Choose the next meaningful move.</h2>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>HVE Life OS will bring the Five Types of Wealth into a practical personal dashboard for reflection, measurement, and action.</p>
            <p>Future capabilities may include assessments, wealth scoring, personal dashboards, and AI-supported guidance. The product is a roadmap item, not an app being launched today.</p>
            <Link className="inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href="/five-types">Explore the framework →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
