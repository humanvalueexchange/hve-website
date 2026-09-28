import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { wealthContent } from "@/lib/wealth-content";

export const metadata = {
  title: "Human Value Exchange",
  description: "A practical scorecard for building freedom, capacity, and human flourishing across the Five Types of Wealth."
};

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">
            Human Value Exchange
          </p>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              What if you&apos;ve been measuring wealth with the wrong scorecard?
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d7ded8] sm:text-xl">
              Most people pursue financial success while their time, health, relationships, and
              sense of purpose quietly run down. HVE helps individuals, families, teams, and
              organizations see the whole picture and make lasting progress across Time, Physical,
              Financial, Mental, and Social Wealth.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/five-types">
                Explore the framework
              </Link>
              <Link className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="/wealth/time">
                Start with Time Wealth
              </Link>
              <a className="px-2 py-3 font-semibold text-[#d7ded8] transition hover:text-white" href="https://humanvalueexchange.blog">
                Read the scorecard
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 text-[#10231e] sm:py-28" id="framework">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The framework</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">See the whole scorecard.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Financial wealth matters, but it is not the whole measure. The Five Types help you
              see which resources are supporting your freedom and which need attention now.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {wealthContent.map((item, index) => (
              <Link
                className={`group rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-[#b27a32] ${
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
                <h3 className="mt-8 text-2xl font-semibold">{item.name}</h3>
                <p className="mt-3 leading-7 text-[#536159]">{item.definition}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">
                  {item.slug === "time" ? "Start with Time Wealth" : `Explore ${item.name}`} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Why HVE exists</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              A full life needs a fuller scorecard.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              Financial success can grow while the resources that make it meaningful quietly
              decline: time, health, relationships, purpose, and freedom.
            </p>
            <p>
              HVE gives people a practical way to see the whole picture, identify what needs
              attention now, and make one meaningful move at a time.
            </p>
            <Link className="inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href="/about">
              Learn why HVE exists →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">How HVE helps</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              Start with clarity. Build what matters.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              We begin by seeing what is happening, then identify the next move and match it with
              the support that can turn insight into lasting results.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link className="rounded-2xl bg-white p-7 transition hover:-translate-y-1" href="/work-with-us#assessment">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Start here</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">See what needs attention now.</h3>
              <p className="mt-4 leading-7 text-[#536159]">
                Begin with an assessment that brings the Five Types of Wealth into one clear view.
              </p>
            </Link>
            <Link className="rounded-2xl bg-white p-7 transition hover:-translate-y-1" href="/workshops">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Workshops</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">Turn insight into results.</h3>
              <p className="mt-4 leading-7 text-[#536159]">
                Help your team identify the next move, build shared understanding, and create useful capacity.
              </p>
            </Link>
            <Link className="rounded-2xl bg-white p-7 transition hover:-translate-y-1" href="/services">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Services</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">Build the right next step.</h3>
              <p className="mt-4 leading-7 text-[#536159]">
                Explore roadmaps, implementation, education, and ongoing guidance after the assessment.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Start here: Time Wealth</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              Time is the foundation of every other form of wealth.
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-8 text-[#536159]">
              <p>Time is finite. It is the resource every other part of life depends on.</p>
              <p>
                Time Wealth means having enough control over your attention, energy, and calendar
                to do meaningful work, be with people you love, and choose your priorities.
              </p>
              <p>
                HVE helps organizations identify where time is leaking and turn operational
                friction into measurable capacity.
              </p>
            </div>
            <Link className="mt-8 inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/wealth/time">
              Explore Time Wealth
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Future vision</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A personal operating system for a richer life.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#d7ded8]">
            <p>
              HVE Life OS is a future way to measure, understand, and improve all five forms of
              wealth in one place.
            </p>
            <Link className="inline-block font-semibold text-[#d7a85b] hover:text-[#e5bd7b]" href="/life-os">
              Explore the Life OS vision →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Latest thinking</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">The scorecard is the starting point.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Read practical essays on Time Wealth, sovereignty, health, relationships, money, and the choices that make a richer life possible.
            </p>
          </div>
          <a className="shrink-0 rounded-full border border-[#10231e] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#10231e] hover:text-white" href="https://humanvalueexchange.blog">
            Read the HVE blog
          </a>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Take the next step</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e]">Find the move that matters now.</h2>
          </div>
          <Link className="shrink-0 rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us#assessment">
            Start with an assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
