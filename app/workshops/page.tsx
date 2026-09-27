import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { TimeWealthWorkshopCard } from "@/components/time-wealth-workshop-card";
import { timeWealthWorkshops } from "@/lib/time-wealth-content";

export const metadata = {
  title: "Workshops | Human Value Exchange",
  description: "Workshops that help teams identify the next move and turn operational friction into measurable Time Wealth."
};

const frameworkTracks = [
  ["Five Types of Wealth Assessment", "See what is strong, what is depleted, and what needs attention now."],
  ["Physical Wealth and vitality", "Build sustainable practices around strength, nutrition, fitness, sleep, and longevity."],
  ["Financial Wealth and family banking", "Build awareness around protection, cash flow, asset acquisition, and financial sovereignty."],
  ["Mental Wealth and self-mastery", "Develop clarity, learning capacity, and the ability to act with intention."],
  ["Social Wealth and belonging", "Strengthen trust, contribution, partnership, family, and belonging."]
];

export default function WorkshopsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">HVE workshops</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Turn insight into results.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            Workshops begin with a clear view of where time is leaking, what it is costing, and
            what to do next. We help teams turn AI potential into practical capacity, overcome
            operational bottlenecks, and protect high-value human judgment.
          </p>
          <Link className="mt-10 inline-block rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us#assessment">
            Start with an assessment
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Time Wealth workshops</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Start with a practical view of where time goes.</h2>
            <p className="mt-6 text-xl leading-9 text-[#536159]">
              We identify the next move for your organization and turn it into a focused workshop,
              blueprint, or first measurable improvement.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {timeWealthWorkshops.map((workshop) => <TimeWealthWorkshopCard key={workshop.slug} workshop={workshop} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">How workshops work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Practical, focused, and built around your work.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>We begin with a comprehensive view of where time is leaking and what to do about it.</p>
            <p>
              Workshops clarify the next move for your organization and team, turning AI potential,
              capacity economics, and operational friction into a practical plan.
            </p>
            <p>Bring the tools and constraints you already work with. The goal is useful change, not another abstract productivity system.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The full scorecard</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">The same framework, applied across your life.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Time Wealth is our starting point. The same scorecard can guide better decisions
              about your body, mind, relationships, and financial life.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {frameworkTracks.map(([title, description]) => (
              <article className="rounded-2xl border border-[#d8ddd5] p-7" key={title}>
                <h3 className="text-2xl font-semibold text-[#10231e]">{title}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Ready to start?</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Let HVE turn your next move into a meaningful result.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d7ded8]">
              Begin with clarity, then build the support your team needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us#assessment">
              Start with an assessment
            </Link>
            <a className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="https://humanvalueexchange.blog">
              Read the HVE blog
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
