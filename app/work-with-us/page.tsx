import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Work with us | Human Value Exchange",
  description: "Explore HVE workshops, coaching, consulting, and partnership conversations."
};

const pathways = [
  ["Individuals and families", "Clarify where your wealth is strong, where it is depleted, and what to improve next."],
  ["Teams and organizations", "Use the Five Types of Wealth to create better conversations about people, performance, and sustainable growth."],
  ["Partners and practitioners", "Explore workshops, education, and collaborations that help more people build human value."]
];

const timeWealthStages = [
  ["I'm Exploring", "Start by seeing where time is being lost and where capacity can be reclaimed.", "/wealth/time#time-wealth-discovery-workshop", "Discovery Workshop"],
  ["I Need a Plan", "Build a practical blueprint for Time Wealth transformation.", "/wealth/time#ai-time-wealth-roadmap", "AI & Time Wealth Roadmap"],
  ["I'm Ready to Implement", "Generate the first measurable Time Wealth win with Microsoft 365.", "/wealth/time#copilot-first-accelerator", "Copilot First Accelerator"],
  ["I Want Transformation", "Create sustainable systems for Time Wealth across the organization.", "/wealth/time#time-wealth-transformation", "Time Wealth Transformation Program"],
  ["I Want Ongoing Guidance", "Measure and optimize Time Wealth as your organization evolves.", "/wealth/time#time-wealth-operating-system", "Time Wealth Operating System"]
] as const;

export default function WorkWithUsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#dce8df] px-6 py-24 text-[#10231e] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#44705c]">Work with HVE</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Make your next investment count.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536159]">
            Start with a conversation about where time is being lost, what capacity can be reclaimed, and the next Time Wealth investment your organization is ready to make.
          </p>
          <a className="mt-10 inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="mailto:hello@humanvalueexchange.com?subject=Discovery%20Call">
            Book a discovery call
          </a>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Time Wealth for business owners</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Choose your stage.</h2>
            <p className="mt-6 text-xl leading-9 text-[#536159]">
              Start with the level of clarity and support your organization needs today. The next step can grow with you.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {timeWealthStages.map(([stage, description, href, label]) => (
              <Link className="group rounded-2xl border border-[#d8ddd5] p-7 transition hover:-translate-y-1 hover:border-[#b27a32]" href={href} key={stage}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#44705c]">{stage}</p>
                <p className="mt-5 text-lg font-semibold text-[#10231e]">{label}</p>
                <p className="mt-3 leading-7 text-[#536159]">{description}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">Explore this stage →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {pathways.map(([title, description]) => (
            <article className="rounded-2xl border border-[#d8ddd5] p-7" key={title}>
              <h2 className="text-2xl font-semibold text-[#10231e]">{title}</h2>
              <p className="mt-4 leading-7 text-[#536159]">{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Start where you are</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Your next chapter deserves a better measure of wealth.</h2>
          </div>
          <Link className="shrink-0 rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/workshops">
            Explore workshops
          </Link>
        </div>
      </section>
    </main>
  );
}
