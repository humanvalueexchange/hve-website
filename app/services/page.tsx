import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { wealthContent } from "@/lib/wealth-content";

export const metadata = {
  title: "Services | Human Value Exchange",
  description: "Assessment-first support for building capacity, freedom, and lasting results across the Five Types of Wealth."
};

const supportOptions = [
  ["Assessment", "See what is happening across the Five Types of Wealth and what needs attention now.", "/work-with-us#assessment", "Start with an assessment"],
  ["Workshops", "Build shared understanding, identify the next move, and turn insight into a practical result.", "/workshops", "Explore workshops"],
  ["Roadmaps", "Create a practical blueprint for Time Wealth, AI adoption, and operational improvement.", "/wealth/time#ai-time-wealth-roadmap", "Explore roadmaps"],
  ["Consulting and implementation", "Design practical systems and turn one high-value opportunity into a measurable improvement.", "/wealth/time#copilot-first-accelerator", "Explore implementation"],
  ["Coaching and education", "Build the understanding, habits, and accountability needed to make meaningful change last.", "/work-with-us#assessment", "Discuss your next step"],
  ["Ongoing guidance", "Review capacity, adoption, and priorities as your organization continues to evolve.", "/wealth/time#time-wealth-operating-system", "Explore ongoing guidance"]
] as const;

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">How HVE helps</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Practical support for a richer life, in every direction.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            HVE helps people and organizations see what is happening across the Five Types of
            Wealth, identify the next meaningful move, and turn insight into measurable results.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us#assessment">
              Start with an assessment
            </Link>
            <Link className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="/five-types">
              Explore the framework
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Everything starts with clarity</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Find the next move that matters.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              We do not ask you to choose a support level before you understand the problem. An
              assessment creates a shared view of what is strong, what is depleted, and what needs
              attention now.
            </p>
            <p>
              From there, we recommend the workshop, roadmap, implementation, or ongoing guidance
              that best fits the result you are ready to build.
            </p>
            <Link className="inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us#assessment">
              Start with an assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Support options</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Build deliberately. Review honestly.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Each option has a different role. The right sequence depends on what the assessment
              shows and the result you need next.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supportOptions.map(([title, description, href, label]) => (
              <Link className="group rounded-2xl bg-white p-7 transition hover:-translate-y-1" href={href} key={title}>
                <h3 className="text-2xl font-semibold text-[#10231e]">{title}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">{label} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The full scorecard</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Start with the form of wealth that needs your attention.</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {wealthContent.map((item, index) => (
              <Link
                className={`group rounded-2xl border border-[#d8ddd5] p-7 transition hover:-translate-y-1 hover:border-[#b27a32] ${
                  index === 0 ? "md:col-span-2 md:w-1/2 md:justify-self-center" : ""
                }`}
                href={`/wealth/${item.slug}`}
                key={item.slug}
              >
                <h3 className="text-2xl font-semibold text-[#10231e]">{item.name}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{item.definition}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">Explore {item.name} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Take the next step</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">See clearly, then build what matters.</h2>
          </div>
          <Link className="shrink-0 rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us#assessment">
            Start with an assessment
          </Link>
        </div>
      </section>
    </main>
  );
}
