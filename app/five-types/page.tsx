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
  title: "The Five Types of Wealth | Human Value Exchange",
  description: "Explore the Five Types of Wealth: time, physical, mental, social, and financial."
};

export default function FiveTypesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="bg-[#10231e] px-6 py-24 text-[#f6f3ec] sm:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a85b]">The HVE framework</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">Build wealth in every direction.</h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[#d7ded8]">
            Wealth is more than money. These five forms of wealth give you a practical language for seeing what is working, what is depleted, and where your next investment belongs.
          </p>
        </div>
      </section>
      <section className="bg-[#f6f3ec] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wealthTypes.map(([title, description, slug], index) => (
              <Link className="group rounded-2xl border border-[#d8ddd5] bg-white p-7 transition hover:-translate-y-1 hover:border-[#b27a32]" href={`/wealth/${slug}`} key={slug}>
                <p className="text-sm font-semibold text-[#b27a32]">0{index + 1}</p>
                <h2 className="mt-10 text-2xl font-semibold text-[#10231e]">{title}</h2>
                <p className="mt-4 leading-7 text-[#536159]">{description}</p>
                <span className="mt-6 inline-block font-semibold text-[#10231e] group-hover:text-[#b27a32]">Explore {title} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
