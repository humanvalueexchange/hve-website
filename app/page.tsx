import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const wealthTypes = [
  ["Time Wealth", "Own more of your attention, energy, and calendar.", "time"],
  ["Physical Wealth", "Build the strength and vitality to live fully.", "physical"],
  ["Mental Wealth", "Develop clarity, resilience, and a growth-oriented mind.", "mental"],
  ["Social Wealth", "Create relationships and communities that make life richer.", "social"],
  ["Financial Wealth", "Use money as a tool for freedom and meaningful choice.", "financial"]
];

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
              Wealth is more than money.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d7ded8] sm:text-xl">
              HVE helps you measure and improve the five forms of wealth that create
              freedom, sovereignty, self-mastery, and human flourishing.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/five-types">
                Explore the framework
              </Link>
              <Link className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="/workshops">
                Join a workshop
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 text-[#10231e] sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The HVE framework</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Build a life that is rich in every direction.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              The Five Types of Wealth give you a practical language for seeing what
              is working, what is depleted, and where your next investment belongs.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wealthTypes.map(([title, description, slug]) => (
              <Link className="group rounded-2xl border border-[#d8ddd5] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b27a32]" href={`/wealth/${slug}`} key={slug}>
                <p className="text-sm font-semibold text-[#b27a32]">0{wealthTypes.findIndex((item) => item[2] === slug) + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#536159]">{description}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Start where you are</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e]">Your next chapter deserves a better measure of wealth.</h2>
          </div>
          <Link className="shrink-0 rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us">
            Find your next step
          </Link>
        </div>
      </section>
    </main>
  );
}
