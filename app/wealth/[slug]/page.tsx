import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { TimeWealthOfferCard } from "@/components/time-wealth-offer-card";
import { timeWealthOfferings } from "@/lib/time-wealth-content";
import { wealthContent } from "@/lib/wealth-content";

export function generateStaticParams() {
  return wealthContent.map(({ slug }) => ({ slug }));
}

export default function WealthPage({ params }: { params: { slug: string } }) {
  const item = wealthContent.find((wealth) => wealth.slug === params.slug);
  if (!item) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">One of five</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">{item.name}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">{item.definition}</p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">Why it matters</h2>
            <p className="text-xl leading-9 text-[#536159]">{item.whyItMatters}</p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#dce8df] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#44705c]">Signs of abundance</p>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-[#10231e]">
                {item.abundance.map((sign) => <li key={sign}>+ {sign}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#d8ddd5] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Signs of depletion</p>
              <ul className="mt-6 space-y-4 text-lg leading-8 text-[#536159]">
                {item.depletion.map((sign) => <li key={sign}>- {sign}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-20 grid gap-12 border-t border-[#d8ddd5] pt-12 md:grid-cols-[1fr_1.2fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-[#10231e] sm:text-4xl">How HVE helps</h2>
            <div>
              <p className="text-lg leading-8 text-[#536159]">{item.helps}</p>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/workshops">
                  Explore workshops
                </Link>
                <Link className="rounded-full border border-[#10231e] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#10231e] hover:text-white" href="/work-with-us">
                  Work with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {item.slug === "time" ? (
        <>
          <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">The first commercial pillar</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Time is the foundation of every other form of wealth.</h2>
                <p className="mt-6 text-xl leading-9 text-[#536159]">
                  By reclaiming time through better systems, AI, and human-centered design, individuals and organizations create the capacity needed to invest in Physical Wealth, Mental Wealth, Social Wealth, and Financial Wealth.
                </p>
              </div>
            </div>
          </section>

          <section className="px-6 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">How HVE creates Time Wealth</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Turn operational friction into measurable capacity.</h2>
                <p className="mt-6 text-lg leading-8 text-[#536159]">
                  We do not sell AI or Copilot as ends in themselves. We use them as mechanisms to create more freedom, focus, capacity, and better business performance.
                </p>
              </div>
              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {timeWealthOfferings.map((offer) => <TimeWealthOfferCard key={offer.slug} offer={offer} />)}
              </div>
            </div>
          </section>

          <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-28">
            <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Future offering</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Coming Soon: HVE Time Wealth Operating System</h2>
              </div>
              <div className="space-y-5 text-lg leading-8 text-[#d7ded8]">
                <p>Customer Zero is currently being developed and tested inside Human Value Exchange.</p>
                <p>Future capabilities include Time Wealth Dashboards, Workforce Capacity Analytics, AI Opportunity Tracking, Agent Performance Monitoring, and Five Types of Wealth Integration.</p>
                <a className="inline-block font-semibold text-[#d7a85b] hover:text-[#e5bd7b]" href="mailto:info@hveglobal.ca?subject=HVE%20Time%20Wealth%20Operating%20System">
                  Register your interest →
                </a>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </main>
  );
}
