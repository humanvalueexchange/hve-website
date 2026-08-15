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

export default function WorkWithUsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#dce8df] px-6 py-24 text-[#10231e] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#44705c]">Work with HVE</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">Make your next investment count.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#536159]">
            Start with a conversation about your goals, your current reality, and the form of wealth that deserves attention next.
          </p>
          <a className="mt-10 inline-block rounded-full bg-[#10231e] px-6 py-3 font-semibold text-white transition hover:bg-[#24483a]" href="mailto:hello@humanvalueexchange.com?subject=Discovery%20Call">
            Book a discovery call
          </a>
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
