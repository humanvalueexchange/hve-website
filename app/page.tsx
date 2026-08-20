import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const wealthTypes = [
  ["Time Wealth", "Own more of your attention, energy, and calendar.", "time"],
  ["Physical Wealth", "Build the strength and vitality to live fully.", "physical"],
  ["Mental Wealth", "Develop clarity, resilience, and a growth-oriented mind.", "mental"],
  ["Social Wealth", "Create relationships and communities that make life richer.", "social"],
  ["Financial Wealth", "Use money as a tool for freedom and meaningful choice.", "financial"]
];

export const metadata = {
  title: "Human Value Exchange",
  description: "Build freedom, sovereignty, and human flourishing across the Five Types of Wealth."
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
              Wealth is more than money.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d7ded8] sm:text-xl">
              Human Value Exchange helps individuals, families, and organizations build freedom,
              sovereignty, and human flourishing across five forms of wealth: Time, Physical,
              Mental, Social, and Financial.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link className="rounded-full bg-[#d7a85b] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#e5bd7b]" href="/five-types">
                Explore the framework
              </Link>
              <Link className="rounded-full border border-[#8ea196] px-6 py-3 font-semibold transition hover:border-white" href="/work-with-us">
                Work with us
              </Link>
              <a className="px-2 py-3 font-semibold text-[#d7ded8] transition hover:text-white" href="https://humanvalueexchange.blog">
                Read the blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f3ec] px-6 py-20 text-[#10231e] sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The framework</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">The Five Types of Wealth.</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              A practical way to see the resources that make a rich life possible—not just the
              balance in an account.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wealthTypes.map(([title, description, slug], index) => (
              <Link className="group rounded-2xl border border-[#d8ddd5] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b27a32]" href={`/wealth/${slug}`} key={slug}>
                <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#536159]">{description}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">Explore {title} →</span>
              </Link>
            ))}
          </div>
          <Link className="mt-10 inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href="/five-types">
            See the full framework →
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Why HVE exists</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              Because a full life cannot be measured in one number.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              Modern life teaches us to optimize for financial outcomes while the resources that
              make those outcomes meaningful quietly run down.
            </p>
            <p>
              Human Value Exchange gives individuals, families, and organizations a clearer way
              to see the whole picture and make intentional investments in the wealth that
              supports freedom, relationships, and flourishing.
            </p>
            <Link className="inline-block font-semibold text-[#10231e] hover:text-[#b27a32]" href="/about">
              Learn about HVE →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Ways to engage</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">
              Turn insight into a life you can feel.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Start with a conversation, a workshop, or a deeper look at the framework. The next
              meaningful move depends on where you are now.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link className="rounded-2xl bg-white p-7 transition hover:-translate-y-1" href="/workshops">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Workshops</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">Learn and build together.</h3>
              <p className="mt-4 leading-7 text-[#536159]">Facilitated sessions for individuals, teams, and communities ready to move from reflection to action.</p>
            </Link>
            <Link className="rounded-2xl bg-white p-7 transition hover:-translate-y-1" href="/work-with-us">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Work with us</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">Find your next meaningful move.</h3>
              <p className="mt-4 leading-7 text-[#536159]">Explore discovery calls, coaching, consulting, and partnership conversations with HVE.</p>
            </Link>
            <a className="rounded-2xl bg-white p-7 transition hover:-translate-y-1" href="https://humanvalueexchange.blog">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b27a32]">Blog</p>
              <h3 className="mt-5 text-2xl font-semibold text-[#10231e]">Keep learning in public.</h3>
              <p className="mt-4 leading-7 text-[#536159]">Read practical essays on sovereignty, wellness, wealth, and human flourishing.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Time Wealth</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Reclaim Your Time Wealth.</h2>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-8 text-[#536159]">
              <p>Most business owners don&apos;t need an AI strategy.</p>
              <p>They need more time.</p>
              <p>
                Human Value Exchange helps organizations identify where time is being lost, prioritize the highest-value opportunities for improvement, and implement practical systems that create measurable capacity.
              </p>
              <p>
                Through workshops, roadmaps, Microsoft Copilot enablement, workflow redesign, and business agents, we help organizations transform operational friction into Time Wealth.
              </p>
            </div>
            <Link className="mt-8 inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/wealth/time">
              Learn About Time Wealth
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
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Latest from Human Value Exchange</h2>
            <p className="mt-5 text-lg leading-8 text-[#536159]">
              Essays and field notes on Time Wealth, sovereignty, health, wealth, relationships, and the future of human flourishing.
            </p>
          </div>
          <a className="shrink-0 rounded-full border border-[#10231e] px-6 py-3 font-semibold text-[#10231e] transition hover:bg-[#10231e] hover:text-white" href="https://humanvalueexchange.blog">
            Read the blog
          </a>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Start where you are</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e]">Your next chapter deserves a better measure of wealth.</h2>
          </div>
          <Link className="shrink-0 rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us">
            Work with us
          </Link>
        </div>
      </section>
    </main>
  );
}
