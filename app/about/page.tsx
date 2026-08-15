import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "About | Human Value Exchange",
  description: "Learn how Human Value Exchange expands the definition of wealth."
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">About Human Value Exchange</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">A better measure of a rich life.</h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#d7ded8]">
            HVE is a movement, framework, and practical system for building freedom, sovereignty, self-mastery, and human flourishing.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">Our mission</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Build freedom across every form of wealth.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              Human Value Exchange helps people build freedom and sovereignty across Time, Physical, Mental, Social, and Financial Wealth.
            </p>
            <p>
              We turn a broad ambition—living well and choosing deliberately—into a framework you can understand, discuss, and practice in real life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Why HVE exists</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">Most people measure wealth too narrowly.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#536159]">
            <p>
              A larger number in an account matters, but it cannot tell you whether you have the time, health, clarity, relationships, or agency to use it well.
            </p>
            <p>
              HVE expands the scoreboard. The Five Types of Wealth help you see what is strong, what is depleted, and where a practical next investment can change the direction of your life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b27a32]">The founder lens</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e] sm:text-5xl">From self-improvement to self-mastery.</h2>
            <p className="mt-6 text-lg leading-8 text-[#536159]">
              HVE emerged from lived experience across technology, AI productivity, wellness, financial education, and personal transformation. The work is grounded in a simple question: how do practical systems help people become more capable, more free, and more fully themselves?
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[#d8ddd5] p-7">
              <h3 className="text-2xl font-semibold text-[#10231e]">A movement</h3>
              <p className="mt-4 leading-7 text-[#536159]">A shared belief that human value cannot be reduced to productivity or income.</p>
            </article>
            <article className="rounded-2xl border border-[#d8ddd5] p-7">
              <h3 className="text-2xl font-semibold text-[#10231e]">A framework</h3>
              <p className="mt-4 leading-7 text-[#536159]">Five forms of wealth that make the whole picture easier to see and improve.</p>
            </article>
            <article className="rounded-2xl border border-[#d8ddd5] p-7">
              <h3 className="text-2xl font-semibold text-[#10231e]">A practical system</h3>
              <p className="mt-4 leading-7 text-[#536159]">Workshops, content, and tools that turn insight into decisions and repeatable action.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#10231e] px-6 py-20 text-[#f6f3ec] sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7a85b]">Partner ecosystem</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Build the future of human value together.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#d7ded8]">
            <p>
              HVE works through partners, workshops, content, coaching, and consulting to help people and organizations make better investments in the parts of life that matter most.
            </p>
            <p>
              Future HVE Life OS tools will make the framework more personal and measurable. For now, the work starts with a conversation, a workshop, or a useful idea shared in public.
            </p>
            <a className="inline-block font-semibold text-[#d7a85b] hover:text-[#e5bd7b]" href="https://humanvalueexchange.blog">
              Read the Founder Notes →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#dce8df] px-6 py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#44705c]">Start where you are</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10231e]">Make your next investment count.</h2>
          </div>
          <Link className="rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="/work-with-us">
            Work with us
          </Link>
        </div>
      </section>
    </main>
  );
}
