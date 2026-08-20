import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { wealthContent } from "@/lib/wealth-content";

export const metadata = {
  title: "The Five Types of Wealth | Human Value Exchange",
  description: "Explore the Five Types of Wealth: time, physical, mental, social, and financial."
};

export default function FiveTypesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">The HVE framework</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">Build wealth in every direction.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            Wealth is more than money. The Five Types of Wealth give you a practical way to measure the resources that create freedom, sovereignty, and human flourishing.
          </p>
        </div>
      </section>
      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wealthContent.map((item, index) => (
              <Link className="group rounded-2xl border border-[#d8ddd5] bg-white p-7 transition hover:-translate-y-1 hover:border-[#b27a32]" href={`/wealth/${item.slug}`} key={item.slug}>
                <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                <h2 className="mt-10 text-2xl font-semibold text-[#10231e]">{item.name}</h2>
                <p className="mt-4 leading-7 text-[#536159]">{item.definition}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">Explore {item.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Start with Time Wealth</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Time is the foundation of every other form of wealth.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#536159]">
            <p>
              Reclaiming time creates the capacity to invest in your body, mind, relationships, and financial future.
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
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e]">See where your next investment belongs.</h2>
          </div>
          <Link className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/workshops">
            Explore workshops
          </Link>
        </div>
      </section>
    </main>
  );
}
