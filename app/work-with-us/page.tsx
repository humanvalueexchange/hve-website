import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Work with us | Human Value Exchange",
  description: "Start with an assessment, then build the support needed for meaningful and sustainable results."
};

const pathways = [
  ["Individuals and families", "Use a shared scorecard to clarify what is strong, what is depleted, and what deserves attention next."],
  ["Teams and organizations", "Increase operational capacity, strengthen resilience, and build sustainable performance without reducing people to metrics."],
  ["Coaches and partners", "Use the Five Types framework to support more integrated conversations and measurable progress with clients and communities."]
];

const processSteps = [
  ["01", "Assess", "See what is happening across the Five Types of Wealth and where time, energy, or capacity is being lost."],
  ["02", "Act", "Commit to the next move that can create the greatest useful result for your life, team, or organization."],
  ["03", "Build", "Match that move with the workshop, roadmap, implementation, or guidance that fits your needs."]
];

const supportOptions = [
  ["Assessment", "Start with a clear view of what needs attention now.", "/work-with-us#assessment", "Start with an assessment"],
  ["Workshops", "Build shared understanding and turn insight into a practical result.", "/workshops", "Explore workshops"],
  ["Roadmaps and implementation", "Create systems that turn operational friction into measurable Time Wealth.", "/services", "Explore support options"]
] as const;

export default function WorkWithUsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#dce8df] px-6 py-24 text-[#10231e] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#44705c]">Work with HVE</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Find the next move that creates capacity.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536159]">
            Every engagement starts with clarity. We see what is happening, identify the next move,
            and help you build the support that turns insight into lasting results.
          </p>
          <a className="mt-10 inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="#assessment">
            Start with an assessment
          </a>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" id="assessment">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Start with clarity</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">See what needs attention now.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              An assessment brings the Five Types of Wealth into one clear view. We look at what is
              strong, what is depleted, and where the next useful investment belongs.
            </p>
            <p>
              From there, we recommend the right next step instead of asking you to choose a level
              of support before you know what you need.
            </p>
            <a className="inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="mailto:info@hveglobal.ca?subject=HVE%20Assessment%20Conversation">
              Book an assessment conversation
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">How we work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">See clearly. Act deliberately. Build what lasts.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {processSteps.map(([number, title, description]) => (
              <article className="rounded-2xl border border-[#d8ddd5] bg-white p-7" key={number}>
                <p className="text-sm font-semibold text-[#b27a32]">{number}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#10231e]">{title}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Support options</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">The right support follows the assessment.</h2>
            <p className="mt-6 text-xl leading-9 text-[#536159]">
              Start with the level of clarity you need, then move into the support that can create
              the result you are ready to build.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {supportOptions.map(([title, description, href, label]) => (
              <Link className="group rounded-2xl border border-[#d8ddd5] p-7 transition hover:-translate-y-1 hover:border-[#b27a32]" href={href} key={title}>
                <h3 className="text-2xl font-semibold text-[#10231e]">{title}</h3>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">{label} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {pathways.map(([title, description]) => (
            <article className="rounded-2xl bg-white p-7" key={title}>
              <h2 className="text-2xl font-semibold text-[#10231e]">{title}</h2>
              <p className="mt-4 leading-7 text-[#536159]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Take the next step</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Your next chapter deserves a better measure of wealth.</h2>
          </div>
          <a className="shrink-0 rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="mailto:info@hveglobal.ca?subject=HVE%20Assessment%20Conversation">
            Book an assessment conversation
          </a>
        </div>
      </section>
    </main>
  );
}
