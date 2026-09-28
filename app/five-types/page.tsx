import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { wealthContent } from "@/lib/wealth-content";

export const metadata = {
  title: "The Five Types of Wealth | Human Value Exchange",
  description: "See the whole scorecard across Time, Physical, Financial, Mental, and Social Wealth."
};

export default function FiveTypesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">The HVE scorecard</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">See the whole scorecard.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            Money is one measure of wealth, not the whole measure. The Five Types give you a
            practical way to see the resources that create freedom, capacity, and human flourishing.
          </p>
        </div>
      </section>
      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Start with the full picture</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">What needs your attention now?</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Explore each form of wealth, then use the one that needs attention most to decide
              where to begin.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {wealthContent.map((item, index) => (
              <Link
                className={`group rounded-2xl border p-7 transition hover:-translate-y-1 hover:border-[#b27a32] ${
                  item.slug === "time"
                    ? "border-[#b27a32] bg-[#dce8df] md:col-span-2 md:w-1/2 md:justify-self-center"
                    : "border-[#d8ddd5] bg-white"
                }`}
                href={`/wealth/${item.slug}`}
                key={item.slug}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                  {item.slug === "time" ? (
                    <span className="rounded-full bg-[#10231e] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#f6f3ec]">
                      Start here
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-10 text-2xl font-semibold text-[#10231e]">{item.name}</h2>
                <p className="mt-4 leading-7 text-[#536159]">{item.definition}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">
                  {item.slug === "time" ? "Start with Time Wealth" : `Explore ${item.name}`} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Start here: Time Wealth</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Time is finite and foundational.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#536159]">
            <p>
              Time is the resource every other form of wealth depends on. It is spent on your body,
              mind, relationships, and financial life.
            </p>
            <p>
              Reclaiming time creates the capacity to invest in the people, practices, and choices
              that make a richer life possible.
            </p>
            <Link className="inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href="/wealth/time">
              Explore Time Wealth →
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Make it practical</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e]">Find the next move that matters.</h2>
          </div>
          <Link className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us#assessment">
            Start with an assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
