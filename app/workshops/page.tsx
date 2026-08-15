import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Workshops and Services | Human Value Exchange",
  description: "Practical workshops for building time, productivity, and the Five Types of Wealth."
};

const audiences = [
  "SMB owners",
  "Professionals",
  "Teams",
  "Entrepreneurs",
  "Advisors",
  "Operators"
];

const outcomes = [
  "Better use of Microsoft Copilot",
  "Practical AI workflows",
  "Calendar and meeting productivity",
  "Personal operating system design",
  "Better time leverage",
  "Reduced manual work"
];

const futureTracks = [
  ["Five Types of Wealth Assessment", "See what is working, what is depleted, and where your next investment belongs."],
  ["Physical Wealth and vitality", "Build sustainable practices around strength, nutrition, fitness, sleep, and longevity."],
  ["Financial Wealth and family banking", "Explore protection, cash flow, capital formation, ownership, and financial sovereignty."],
  ["Mental Wealth and self-mastery", "Develop clarity, resilience, learning capacity, and a stronger inner operating system."],
  ["Social Wealth and community", "Strengthen trust, contribution, partnership, family, and belonging."]
];

export default function WorkshopsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">HVE workshops and services</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Turn insight into leverage.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            HVE workshops help people and teams build more time, better systems, and a stronger foundation across the Five Types of Wealth.
          </p>
          <Link className="mt-10 inline-block rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us">
            Work with us
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Featured workshop</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">AI Productivity and Time Wealth Workshop</h2>
            <p className="mt-6 text-xl leading-9 text-[#536159]">
              A practical working session for turning AI tools, better systems, and intentional calendar design into more capacity for high-value work.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.2fr]">
            <div className="rounded-2xl bg-[#dce8df] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#44705c]">What it changes</p>
              <p className="mt-5 text-lg leading-8 text-[#10231e]">
                Participants learn to reduce repetitive work, make meetings and calendars more useful, and design a personal operating system that creates better time leverage.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d8ddd5] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">What participants leave with</p>
              <ul className="mt-5 grid gap-3 text-lg leading-8 text-[#536159] sm:grid-cols-2">
                {outcomes.map((outcome) => <li key={outcome}>+ {outcome}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Who it is for</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Built for people carrying real responsibility.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {audiences.map((audience) => (
              <span className="rounded-full border border-[#b9c8bc] bg-white px-5 py-3 font-semibold text-[#10231e]" key={audience}>{audience}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Format</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Practical, focused, and built around your work.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>Workshops can be delivered for individuals, leadership teams, or small groups in a focused facilitated session.</p>
            <p>We combine a clear framework with live examples, workflow design, and an action plan participants can use immediately.</p>
            <p>Bring the tools and constraints you already work with. The goal is useful change, not another abstract productivity system.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Future workshop tracks</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">The same framework, applied across your life.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {futureTracks.map(([title, description]) => (
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
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Bring HVE to your next meaningful move.</h2>
            <p className="mt-5 text-lg leading-8 text-[#d7ded8]">
              For related thinking, read the HVE blog at humanvalueexchange.blog.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/work-with-us">
              Work with us
            </Link>
            <a className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="https://humanvalueexchange.blog">
              Read the blog
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
